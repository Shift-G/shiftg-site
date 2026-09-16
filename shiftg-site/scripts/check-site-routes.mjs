// Regression check for the indexed URLs supplied before the redesign.
// Run after starting the site: node scripts/check-site-routes.mjs http://localhost:3107
import assert from "node:assert/strict";
const base = process.argv[2] || "http://localhost:3107";
const canonicalOrigin = "https://shiftg.com.br";
const indexedPaths = [
  "/",
  "/fabrica-de-software",
  "/diagnostico-inteligente",
  "/treinamento-ia-para-sua-empresa",
  "/transformacao-digital",
  "/fabrica-de-software/construa-seu-saas",
  "/sobre",
  "/carreiras",
  "/medidor-de-prompt",
  "/insights",
  "/insights/rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados",
  "/insights/rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa",
  "/insights/o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa",
  "/insights/transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia",
  "/politica-de-privacidade",
  "/termos-de-uso",
];
const newPaths = [
  "/insights/ia-processos-juridicos-tkv-uniao-da-vitoria",
  "/insights/ia-medicina-seguranca-do-trabalho-modernizacao",
  "/atendimento",
  "/ecossistema",
  "/contato",
  ...[
    "medicos-on",
    "nearone",
    "somosaliados",
    "thiago",
    "aderis",
    "cobres",
    "pontes",
    "somabem",
    "alegra-conecta",
  ].map((slug) => `/projetos/${slug}`),
];
const paths = [...indexedPaths, ...newPaths];
const stripSlash = (value) => value.replace(/\/$/, "");
for (const path of paths) {
  const response = await fetch(new URL(path, base), { redirect: "manual" });
  assert.equal(response.status, 200, `${path}: expected 200 without redirect`);
  const html = await response.text();
  const tags = html.match(/<link\b[^>]*>/g) || [];
  const canonical = tags
    .find((tag) => /rel="canonical"/.test(tag))
    ?.match(/href="([^"]+)"/)?.[1];
  assert.equal(
    stripSlash(canonical || ""),
    stripSlash(canonicalOrigin + path),
    `${path}: canonical mismatch`,
  );
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${path}: expected one h1`,
  );
  assert.ok(
    !/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html),
    `${path}: unexpected noindex`,
  );
  console.log(`OK ${path}`);
}
const sitemapResponse = await fetch(new URL("/sitemap.xml", base));
assert.equal(sitemapResponse.status, 200, "sitemap status");
const sitemap = await sitemapResponse.text();
const urls = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (m) =>
  stripSlash(m[1]),
);
assert.equal(new Set(urls).size, urls.length, "duplicate sitemap URLs");
for (const path of paths)
  assert.ok(
    urls.includes(stripSlash(canonicalOrigin + path)),
    `missing in sitemap: ${path}`,
  );
const robotsResponse = await fetch(new URL("/robots.txt", base));
assert.equal(robotsResponse.status, 200, "robots status");
assert.ok(
  (await robotsResponse.text()).includes(
    `Sitemap: ${canonicalOrigin}/sitemap.xml`,
  ),
  "robots sitemap reference",
);
const missing = await fetch(new URL("/projetos/projeto-inexistente", base));
assert.equal(missing.status, 404, "unknown projects must return 404");
console.log(
  `Passed: ${indexedPaths.length} indexed URLs + ${newPaths.length} new URLs, canonicals, sitemap, robots and 404.`,
);
