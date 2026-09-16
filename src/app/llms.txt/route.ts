import { SITE_URL } from "@/constants";
import { blogPosts } from "@/constants/insights";
import { projects } from "@/constants/projects";

export const dynamic = "force-static";

export function GET() {
  const projectEntries = projects
    .map(
      (project) =>
        `- [${project.name}](${SITE_URL}/projetos/${project.slug}): ${project.summary}${project.stage ? ` Estágio: ${project.stage}.` : ""}`,
    )
    .join("\n");
  const insightEntries = blogPosts
    .map(
      (post) =>
        `- [${post.title}](${SITE_URL}/insights/${post.slug}): ${post.description}`,
    )
    .join("\n");

  const content = `# SHIFT+G

> A Shift+G é uma empresa de tecnologia com sede em União da Vitória, Paraná, Brasil. Atua com consultoria em inteligência artificial, transformação digital, governança de dados, desenvolvimento de software sob medida e treinamento de IA para empresas.

O atendimento regional inclui União da Vitória (PR), Porto União (SC), São Mateus do Sul (PR), Curitiba (PR), Porto Vitória, Paula Freitas, Paulo Frontin, Cruz Machado, Bituruna, Irineópolis e Canoinhas. A empresa também atende outras regiões do Brasil. As cidades atendidas não representam filiais. Agenda, deslocamento e atividades presenciais são definidos conforme o projeto.

Endereço: Rua Ipiranga, 31, Sala 208, Centro, União da Vitória – PR, CEP 84600-040. Contato comercial: negocios@shiftg.com.br; telefone e WhatsApp: +55 (42) 99981-8852. Site oficial: ${SITE_URL}. Idioma principal: português brasileiro.

O Cobres é um sistema de cobrança com IA em piloto na TKV Advogados Associados. A parceria com a MEDCuritiba envolve transformação digital, NearOne e a colaboração no SOMABEM. As páginas dos projetos descrevem seus estágios; a presença no ecossistema não significa que todos os produtos estejam em disponibilidade geral. Ilustrações editoriais não são fotografias de instalações ou equipes dos clientes.

## Empresa e atendimento

- [Página inicial](${SITE_URL}/): Visão geral da empresa, serviços e projetos.
- [Sobre a Shift+G](${SITE_URL}/sobre): Posicionamento, forma de atuação e liderança.
- [Atendimento regional](${SITE_URL}/atendimento): União da Vitória, Porto União, São Mateus do Sul, Curitiba e municípios próximos; serviços, endereço e perguntas frequentes.
- [Contato](${SITE_URL}/contato): Conversa comercial e planejamento do próximo projeto.

## Serviços

- [Consultoria em IA e transformação digital](${SITE_URL}/transformacao-digital): Integração de processos, inteligência artificial aplicada e governança de dados.
- [Software sob medida](${SITE_URL}/fabrica-de-software): Sistemas, portais, integrações e automação orientados à operação da empresa.
- [Desenvolvimento de SaaS](${SITE_URL}/fabrica-de-software/construa-seu-saas): Estratégia e engenharia para transformar conhecimento de negócio em produto digital.
- [Diagnóstico inteligente](${SITE_URL}/diagnostico-inteligente): Avaliação de oportunidades e prioridades de IA, dados e automação.
- [Treinamento de IA in company](${SITE_URL}/treinamento-ia-para-sua-empresa): Capacitação da equipe sobre desafios da própria operação.

## Ecossistema e projetos

- [Ecossistema](${SITE_URL}/ecossistema): Portfólio de produtos e iniciativas da Shift+G.
${projectEntries}

## Insights

- [Todos os Insights](${SITE_URL}/insights): Artigos sobre IA, processos, saúde ocupacional e gestão, em ordem do mais recente ao mais antigo.
${insightEntries}

## Optional

- [Medidor de prompt](${SITE_URL}/medidor-de-prompt): Ferramenta de avaliação de prompts.
- [Carreiras](${SITE_URL}/carreiras): Informações sobre oportunidades e contato profissional.
- [Política de privacidade](${SITE_URL}/politica-de-privacidade): Informações publicadas sobre privacidade e tratamento de dados.
- [Termos de uso](${SITE_URL}/termos-de-uso): Condições de uso do site.
- [Sitemap XML](${SITE_URL}/sitemap.xml): Índice de URLs públicas para buscadores.
- [Robots.txt](${SITE_URL}/robots.txt): Regras de rastreamento do site.
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
