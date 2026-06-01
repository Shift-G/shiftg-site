import { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Lista de artigos de insights
  const insightsSlugs = [
    'rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados',
    'rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa',
    'o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa',
    'transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia',
  ];

  return [
    // Home - Prioridade máxima
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Páginas principais de serviços - Alta prioridade
    {
      url: `${SITE_URL}/fabrica-de-software`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/diagnostico-inteligente`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/treinamento-ia-para-sua-empresa`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/transformacao-digital`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Sub-páginas de Fábrica de Software
    {
      url: `${SITE_URL}/fabrica-de-software/construa-seu-saas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Páginas institucionais
    {
      url: `${SITE_URL}/sobre`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/carreiras`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Blog - Página principal de insights
    {
      url: `${SITE_URL}/insights`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Artigos individuais de insights
    ...insightsSlugs.map((slug) => ({
      url: `${SITE_URL}/insights/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Páginas legais - Baixa prioridade
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/termos-de-uso`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
