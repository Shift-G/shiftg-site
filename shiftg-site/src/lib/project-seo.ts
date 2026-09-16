import { SITE_NAME, SITE_URL } from "@/constants";
import { projects, type Project } from "@/constants/projects";
import { generateItemListSchema } from "./seo-utils";

export const ecosystemDescription = `Conheça ${new Intl.ListFormat("pt-BR").format(
  projects.map((project) => project.name),
)}: produtos próprios e colaborações da ${SITE_NAME}.`;

export function generateProjectListSchema(path: "/" | "/ecossistema") {
  return {
    ...generateItemListSchema({
      name: `Ecossistema ${SITE_NAME}`,
      description:
        "Produtos próprios e colaborações que levam nossa tecnologia a diferentes setores.",
      items: projects.map((project) => ({
        name: project.name,
        url: `/projetos/${project.slug}`,
        // Match the copy actually rendered in each version of the portfolio.
        description: path === "/" ? project.headline : project.summary,
      })),
    }),
    "@id": `${SITE_URL}${path}#projects`,
  };
}

export function generateEcosystemPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/ecossistema#webpage`,
    url: `${SITE_URL}/ecossistema`,
    name: "Ecossistema de produtos e projetos",
    description: ecosystemDescription,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": `${SITE_URL}/ecossistema#projects` },
  };
}

export function generateProjectPageSchema(project: Project) {
  const url = `${SITE_URL}/projetos/${project.slug}`;
  const image = `${SITE_URL}/images/products/${project.logo}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${project.name} — ${project.category}`,
    description: project.summary,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: { "@type": "ImageObject", url: image },
    // Some initiatives are pilots or in validation. Describe the work without
    // inventing commercial offers, ratings or general product availability.
    mainEntity: {
      "@type": "CreativeWork",
      "@id": `${url}#project`,
      name: project.name,
      description: project.summary,
      url: project.url,
      image,
      genre: project.category,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      creditText: project.partner
        ? `${project.ownership} · ${project.partner}`
        : project.ownership,
      ...(project.stage ? { creativeWorkStatus: project.stage } : {}),
      ...(project.instagram ? { sameAs: [project.instagram] } : {}),
    },
  };
}
