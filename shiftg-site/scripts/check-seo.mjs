// Validate the actual production HTML, not only the metadata source objects.
// Run: node scripts/check-seo.mjs http://localhost:3107
import assert from "node:assert/strict";
import http from "node:http";
import https from "node:https";

const base = process.argv[2] || "http://localhost:3107";
const origin = "https://shiftg.com.br";
const decode = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'");
const attribute = (tag, name) =>
  decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] || "");
const tags = (html, tag) =>
  html.match(new RegExp(`<${tag}\\b[^>]*>`, "g")) || [];
const meta = (html, name) =>
  attribute(
    tags(html, "meta").find(
      (tag) =>
        attribute(tag, "name") === name || attribute(tag, "property") === name,
    ) || "",
    "content",
  );
const normalize = (url) => url.replace(/\/$/, "");
const schemas = (html) =>
  [
    ...html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ].flatMap((match) => {
    const data = JSON.parse(match[1]);
    return Array.isArray(data) ? data : data["@graph"] || [data];
  });

const sitemapResponse = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  decode(match[1]),
);
assert.ok(urls.length >= 28, "sitemap must cover the public site");
assert.equal(new Set(urls).size, urls.length, "duplicate sitemap URLs");
const seenTitles = new Set();
const seenDescriptions = new Set();
const imageUrls = new Set();
const internalLinks = new Set();
const servicePaths = [
  "/transformacao-digital",
  "/fabrica-de-software",
  "/fabrica-de-software/construa-seu-saas",
  "/diagnostico-inteligente",
  "/treinamento-ia-para-sua-empresa",
];
const targetCities = [
  "União da Vitória",
  "Porto União",
  "São Mateus do Sul",
  "Curitiba",
];
const recentPosts = new Map([
  ["/insights/ia-processos-juridicos-tkv-uniao-da-vitoria", "2026-08-31"],
  ["/insights/ia-medicina-seguranca-do-trabalho-modernizacao", "2026-09-13"],
]);
for (const path of recentPosts.keys())
  assert.ok(urls.includes(origin + path), `missing recent article: ${path}`);

for (const url of urls) {
  assert.equal(new URL(url).origin, origin, "noncanonical sitemap origin");
  const path = new URL(url).pathname;
  const response = await fetch(new URL(path, base), { redirect: "manual" });
  assert.equal(response.status, 200, `${path}: status`);
  const html = await response.text();
  assert.ok(
    tags(html, "link").some(
      (tag) =>
        attribute(tag, "rel") === "describedby" &&
        attribute(tag, "href") === "/llms.txt",
    ),
    `${path}: llms.txt discovery link`,
  );
  assert.match(html, /<html[^>]*lang="pt-BR"/, `${path}: language`);
  const canonicalTags = tags(html, "link").filter(
    (tag) => attribute(tag, "rel") === "canonical",
  );
  assert.equal(canonicalTags.length, 1, `${path}: canonical count`);
  assert.equal(
    normalize(attribute(canonicalTags[0], "href")),
    normalize(url),
    `${path}: canonical`,
  );
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${path}: h1 count`,
  );
  assert.ok(!meta(html, "robots").includes("noindex"), `${path}: noindex`);
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] || "");
  const description = meta(html, "description");
  assert.ok(title && description, `${path}: missing title/description`);
  assert.ok(!seenTitles.has(title), `${path}: duplicate title`);
  assert.ok(
    !seenDescriptions.has(description),
    `${path}: duplicate description`,
  );
  assert.equal(
    (title.match(/SHIFT\+G/g) || []).length,
    1,
    `${path}: brand duplication`,
  );
  seenTitles.add(title);
  seenDescriptions.add(description);
  assert.equal(
    meta(html, "og:title"),
    title,
    `${path}: inconsistent social title`,
  );
  assert.equal(
    meta(html, "og:description"),
    description,
    `${path}: social description`,
  );
  assert.equal(
    normalize(meta(html, "og:url")),
    normalize(url),
    `${path}: social URL`,
  );
  assert.equal(
    meta(html, "twitter:card"),
    "summary_large_image",
    `${path}: social card`,
  );
  for (const property of ["og:image", "twitter:image"]) {
    const image = meta(html, property);
    assert.equal(new URL(image).origin, origin, `${path}: image origin`);
    imageUrls.add(image);
  }
  const structured = schemas(html);
  const organizations = structured.filter(
    (item) => item["@type"] === "ProfessionalService",
  );
  assert.equal(organizations.length, 1, `${path}: local business count`);
  const business = organizations[0];
  assert.equal(business.address.addressLocality, "União da Vitória");
  assert.equal(business.address.addressCountry, "BR");
  assert.ok(
    business.address.streetAddress &&
      business.address.postalCode &&
      business.telephone,
  );
  for (const city of targetCities)
    assert.ok(
      business.areaServed.some((area) => area.name === city),
      `${path}: missing ${city}`,
    );
  assert.ok(
    !JSON.stringify(structured).includes("SearchAction"),
    `${path}: nonexistent search action`,
  );
  if (path !== "/")
    assert.equal(
      structured.filter((item) => item["@type"] === "BreadcrumbList").length,
      1,
      `${path}: breadcrumbs`,
    );
  if (servicePaths.includes(path)) {
    const service = structured.find((item) => item["@type"] === "Service");
    assert.ok(service, `${path}: service schema`);
    assert.equal(service.provider["@id"], business["@id"]);
    assert.equal(service.url, url);
  }
  if (path.startsWith("/insights/")) {
    assert.equal(meta(html, "og:type"), "article");
    const article = structured.find((item) => item["@type"] === "BlogPosting");
    assert.ok(
      article?.headline && article?.author && article?.image,
      `${path}: article schema`,
    );
    assert.equal(article.mainEntityOfPage["@id"], url);
    imageUrls.add(article.image);
    if (recentPosts.has(path)) {
      assert.equal(
        article.datePublished,
        recentPosts.get(path),
        `${path}: publication date`,
      );
      assert.equal(
        meta(html, "article:published_time"),
        article.datePublished,
        `${path}: Open Graph date`,
      );
      assert.equal(
        meta(html, "article:modified_time"),
        article.dateModified,
        `${path}: modification date`,
      );
      assert.ok(
        tags(html, "time").some(
          (tag) =>
            attribute(tag, "dateTime") === article.datePublished ||
            attribute(tag, "datetime") === article.datePublished,
        ),
        `${path}: visible publication date`,
      );
      for (const tag of tags(html, "a")) {
        const href = attribute(tag, "href");
        if (href.startsWith("#"))
          assert.ok(
            html.includes(`id="${href.slice(1)}"`),
            `${path}: broken table of contents`,
          );
      }
    }
  }
  if (path === "/atendimento") {
    const faq = structured.find((item) => item["@type"] === "FAQPage");
    assert.equal(faq?.mainEntity.length, 5);
    for (const question of faq.mainEntity) {
      assert.ok(html.includes(question.name), "FAQ question must be visible");
      assert.ok(
        html.includes(question.acceptedAnswer.text),
        "FAQ answer must be visible",
      );
    }
  }
  if (path === "/insights") {
    const months = tags(html, "time").map(
      (tag) => attribute(tag, "dateTime") || attribute(tag, "datetime"),
    );
    assert.deepEqual(
      months,
      ["2026-09", "2026-08", "2025-07", "2025-04", "2025-02", "2025-01"],
      "insights must show all six articles, newest first",
    );
  }
  for (const tag of tags(html, "a")) {
    const href = attribute(tag, "href");
    if (href.startsWith("/") && !href.startsWith("//"))
      internalLinks.add(new URL(href, origin).pathname);
  }
  console.log(`OK SEO ${path}`);
}

for (const url of imageUrls) {
  const response = await fetch(new URL(new URL(url).pathname, base));
  assert.equal(response.status, 200, `${url}: image unavailable`);
  assert.match(
    response.headers.get("content-type") || "",
    /^image\//,
    `${url}: not an image`,
  );
}
const knownPaths = new Set(urls.map((url) => new URL(url).pathname));
const llmsResponse = await fetch(`${base}/llms.txt`);
assert.equal(llmsResponse.status, 200, "llms.txt status");
assert.match(
  llmsResponse.headers.get("content-type") || "",
  /^text\/plain/,
  "llms.txt must be plain text",
);
const llms = await llmsResponse.text();
assert.match(llms, /^# SHIFT\+G\n\n> /, "llms.txt title and summary");
assert.equal(
  (llms.match(/^# /gm) || []).length,
  1,
  "llms.txt must have one main title",
);
const llmsLinks = [...llms.matchAll(/\[[^\]]+\]\((https:\/\/[^)]+)\)/g)].map(
  (match) => new URL(match[1]),
);
assert.ok(llmsLinks.length > 0, "llms.txt must link to site content");
for (const link of llmsLinks) {
  assert.equal(link.origin, origin, "llms.txt canonical domain");
  assert.ok(
    knownPaths.has(link.pathname) ||
      ["/sitemap.xml", "/robots.txt"].includes(link.pathname),
    `unknown llms.txt destination: ${link.pathname}`,
  );
}
for (const path of recentPosts.keys())
  assert.ok(
    llmsLinks.some((link) => link.pathname === path),
    `article missing from llms.txt: ${path}`,
  );
for (const path of internalLinks)
  assert.ok(knownPaths.has(path), `internal page absent from sitemap: ${path}`);
const robots = await (await fetch(`${base}/robots.txt`)).text();
assert.ok(
  !/Disallow:\s*\/_next/i.test(robots),
  "Next assets must remain crawlable",
);
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const contact = await (
  await fetch(`${base}/contato?interesse=ia-in-company&utm_source=seo`)
).text();
assert.equal(
  attribute(
    tags(contact, "link").find((tag) => attribute(tag, "rel") === "canonical"),
    "href",
  ),
  `${origin}/contato`,
  "tracking query canonical",
);
// Node fetch may discard a custom Host header; use the HTTP client for this check.
const www = await new Promise((resolve, reject) => {
  const url = new URL("/atendimento?utm_source=seo", base);
  const client = url.protocol === "https:" ? https : http;
  client
    .get(url, { headers: { host: "www.shiftg.com.br" } }, (response) => {
      response.resume();
      resolve(response);
    })
    .on("error", reject);
});
assert.equal(www.statusCode, 308, "www must redirect permanently");
assert.equal(www.headers.location, `${origin}/atendimento?utm_source=seo`);
const services = await fetch(`${base}/servicos`, { redirect: "manual" });
assert.equal(services.status, 308);
assert.equal(services.headers.get("location"), "/#prioridades");
assert.match(await (await fetch(base)).text(), /id="prioridades"/);
console.log(
  `Passed: ${urls.length} pages, ${internalLinks.size} internal destinations, ${imageUrls.size} images, structured data, robots, query canonicals and redirects.`,
);
