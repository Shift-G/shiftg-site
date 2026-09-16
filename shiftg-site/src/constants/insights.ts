import { recentInsights } from "./recent-insights";

const legacyInsights = [
  {
    title:
      "RH Estratégico: Como Deixar as Planilhas para Trás e Liderar a Gestão de Talentos com Dados",
    description:
      "Descubra como transformar o RH operacional em estratégico através de automação inteligente, people analytics e foco na experiência do colaborador. Entenda os 3 pilares da transformação digital no RH.",
    slug: "rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados",
    image: "/images/editorial/shiftg-institucional.png",
    tags: ["Recursos Humanos", "People Analytics", "Employee Experience"],
    readTime: "8 min",
    publishedAt: "Julho 2025",
    publicationMonth: "2025-07",
  },
  {
    title:
      "RPA: Liberte sua Equipe das Tarefas Repetitivas e Foque no que Realmente Importa",
    description:
      "Descubra como o RPA (Robotic Process Automation) pode transformar sua operação, eliminando tarefas repetitivas e liberando sua equipe para atividades estratégicas. Entenda os benefícios, casos de uso e como combinar RPA com IA.",
    slug: "rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa",
    image: "/images/editorial/shiftg-engenharia-digital.png",
    tags: ["RPA", "Automação", "Eficiência Operacional"],
    readTime: "6 min",
    publishedAt: "Abril 2025",
    publicationMonth: "2025-04",
  },
  {
    title:
      "O ROI da Inteligência Artificial: Como Calcular o Impacto da IA no Balanço da sua Empresa",
    description:
      "Descubra como calcular o retorno sobre investimento da Inteligência Artificial em sua empresa. Entenda os 4 vetores de retorno e a fórmula prática para medir o impacto financeiro da IA no seu negócio.",
    slug: "o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa",
    image: "/images/editorial/shiftg-arquitetura-dados.png",
    tags: ["Inteligência Artificial", "ROI", "Estratégia de Negócios"],
    readTime: "7 min",
    publishedAt: "Fevereiro 2025",
    publicationMonth: "2025-02",
  },
  {
    title:
      "Transformação Digital: Mais do que Tecnologia, uma Estratégia de Sobrevivência",
    description:
      "Descubra como a transformação digital vai além da tecnologia e se torna uma estratégia essencial de sobrevivência para empresas modernas. Entenda os 4 pilares fundamentais e o roteiro prático em 3 passos.",
    slug: "transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia",
    image: "/images/editorial/shiftg-in-company.png",
    tags: ["Transformação Digital", "Estratégia", "Inovação"],
    readTime: "8 min",
    publishedAt: "Janeiro 2025",
    publicationMonth: "2025-01",
  },
];

export const blogPosts = [...recentInsights, ...legacyInsights].sort((a, b) =>
  b.publicationMonth.localeCompare(a.publicationMonth),
);
