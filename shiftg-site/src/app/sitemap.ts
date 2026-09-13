import { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";
import { projects } from "@/constants/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until a reliable editorial modification date is available.

  // Lista de artigos de insights
  const insightsSlugs = [
    "rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados",
    "rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa",
    "o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa",
    "transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia",
  ];

  return [
    ...[
      "/ecossistema",
      "/contato",
      "/atendimento",
      ...projects.map((p) => `/projetos/${p.slug}`),
    ].map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Home - Prioridade máxima
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Páginas principais de serviços - Alta prioridade
    {
      url: `${SITE_URL}/fabrica-de-software`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/diagnostico-inteligente`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/treinamento-ia-para-sua-empresa`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/transformacao-digital`,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Sub-páginas de Fábrica de Software
    {
      url: `${SITE_URL}/fabrica-de-software/construa-seu-saas`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Páginas institucionais
    {
      url: `${SITE_URL}/sobre`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/carreiras`,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Ferramenta interativa
    {
      url: `${SITE_URL}/medidor-de-prompt`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Blog - Página principal de insights
    {
      url: `${SITE_URL}/insights`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Artigos individuais de insights
    ...insightsSlugs.map((slug) => ({
      url: `${SITE_URL}/insights/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Páginas legais - Baixa prioridade
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/termos-de-uso`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
