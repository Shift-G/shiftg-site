import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Title,
} from "@/components/layout/editorial";
import { SitePage } from "@/components/layout/site-page";
import { PageSeo } from "@/components/seo/page-seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ClosingCTA } from "@/components/sections/business";
import { SITE_ADDRESS, SITE_CITY, SITE_STATE, SITE_ZIP } from "@/constants";
import { REGIONAL_FAQS, SERVICE_AREAS } from "@/constants/service-areas";
import { pageMetadata } from "@/lib/page-metadata";
import { generateFAQSchema } from "@/lib/seo-utils";

export const metadata = pageMetadata(
  "IA e tecnologia no Vale do Iguaçu e Curitiba",
  "Atendimento em União da Vitória, Porto União, São Mateus do Sul, Curitiba e região. Consultoria em IA, software, automação e treinamento para empresas.",
  "/atendimento",
);

const regions = [
  {
    title: "União da Vitória e Porto União",
    label: "Nossa base / PR e SC",
    text: "A partir da nossa sede em União da Vitória, atendemos empresas dos dois lados do Vale do Iguaçu. O trabalho conecta quem lidera o negócio às equipes que conhecem os processos: entendemos os gargalos, organizamos as prioridades e construímos as soluções em conjunto.",
    detail:
      "Para iniciar, traga um processo que hoje depende de planilhas, retrabalho ou sistemas desconectados. Esse contexto ajuda a definir se o próximo passo é integrar sistemas, automatizar tarefas ou capacitar a equipe.",
  },
  {
    title: "São Mateus do Sul",
    label: "Atendimento no Paraná",
    text: "Empresas de São Mateus do Sul podem contar com a Shift+G para estruturar projetos de transformação digital, desenvolvimento de software e uso de inteligência artificial. A primeira conversa reúne o desafio da operação, os sistemas existentes e as pessoas envolvidas.",
    detail:
      "As atividades que exigem presença na empresa são planejadas na proposta. O acompanhamento considera as entregas do projeto e a disponibilidade da equipe para testar e adotar as mudanças.",
  },
  {
    title: "Curitiba",
    label: "Capital e região metropolitana",
    text: "Atendemos empresas de Curitiba com consultoria em IA, governança de dados, produtos digitais e treinamento in company. A atuação parte das prioridades da liderança e conecta o projeto de tecnologia à rotina de quem vai utilizá-lo.",
    detail:
      "Para programas com várias áreas ou unidades, alinhamos os participantes, os processos prioritários e as etapas de implementação. Agenda, deslocamento e formato de acompanhamento são definidos conforme o escopo.",
  },
];

const services = [
  [
    "Consultoria em IA e transformação digital",
    "Defina onde a tecnologia pode melhorar a operação. Mapeamos processos, conectamos sistemas e organizamos o uso dos dados para apoiar a gestão.",
    "/transformacao-digital",
  ],
  [
    "Desenvolvimento de software sob medida",
    "Estruture sistemas internos, portais, integrações e automações em torno das regras do seu negócio, com uma base preparada para evoluir.",
    "/fabrica-de-software",
  ],
  [
    "Treinamento de IA para empresas",
    "Capacite a equipe com aplicações de inteligência artificial nas tarefas da própria empresa. O programa considera o nível do time e os cuidados com os dados.",
    "/treinamento-ia-para-sua-empresa",
  ],
  [
    "Diagnóstico de oportunidades",
    "Entenda os gargalos e avalie possibilidades de IA e automação antes de definir o investimento. O diagnóstico ajuda a priorizar o próximo projeto.",
    "/diagnostico-inteligente",
  ],
];

export default function ServiceAreaPage() {
  return (
    <SitePage>
      <PageSeo name="Atendimento regional" path="/atendimento" />
      <JsonLd data={generateFAQSchema(REGIONAL_FAQS)} />
      <EditorialSection>
        <Eyebrow>Sede em União da Vitória / Atendimento regional</Eyebrow>
        <Title as="h1">
          Inteligência artificial
          <br />e tecnologia para
          <br />
          <Accent>empresas da região.</Accent>
        </Title>
        <Text
          maxW="850px"
          mt={8}
          fontSize={{ base: "lg", md: "xl" }}
          lineHeight={1.8}
          color="blackAlpha.700"
        >
          A Shift+G atende empresas em União da Vitória, Porto União, São Mateus
          do Sul, Curitiba e municípios próximos. Trabalhamos com consultoria em
          IA, transformação digital, software sob medida e capacitação de
          equipes para transformar desafios da operação em projetos concretos.
        </Text>
        <Box mt={8}>
          <Action>Conversar sobre minha empresa</Action>
        </Box>
      </EditorialSection>

      <EditorialSection muted>
        <Eyebrow>Onde atendemos</Eyebrow>
        <Title>
          Proximidade para entender.
          <br />
          <Accent>Capacidade para executar.</Accent>
        </Title>
        <Stack mt={12} gap={10}>
          {regions.map((region) => (
            <Grid
              key={region.title}
              templateColumns={{ base: "1fr", md: "1fr 1.4fr" }}
              gap={{ base: 5, md: 10 }}
              borderTop="1px solid"
              borderColor="blackAlpha.300"
              pt={8}
            >
              <Box>
                <Text fontFamily="mono" fontSize="sm" color="blue.solid" mb={4}>
                  {region.label}
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight={500}
                >
                  {region.title}
                </Heading>
              </Box>
              <Stack gap={4} color="blackAlpha.700" lineHeight={1.8}>
                <Text fontSize="lg">{region.text}</Text>
                <Text>{region.detail}</Text>
              </Stack>
            </Grid>
          ))}
        </Stack>
        <Box mt={10} borderTop="1px solid" borderColor="blackAlpha.300" pt={8}>
          <Heading as="h3" fontSize="2xl" fontWeight={500}>
            Outras cidades próximas de União da Vitória
          </Heading>
          <Text mt={4} lineHeight={1.8} color="blackAlpha.700">
            Nossa área de atendimento inclui{" "}
            {SERVICE_AREAS.slice(4)
              .map((city) => `${city.name} (${city.state})`)
              .join(", ")}
            . A sede permanece em União da Vitória; o atendimento à sua empresa
            é combinado conforme a demanda. Também desenvolvemos projetos em
            outras regiões do Brasil.
          </Text>
        </Box>
      </EditorialSection>

      <EditorialSection>
        <Eyebrow>O que podemos construir juntos</Eyebrow>
        <Title>
          O serviço certo começa
          <br />
          pelo <Accent>desafio do negócio.</Accent>
        </Title>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} mt={12}>
          {services.map(([title, description, href]) => (
            <Stack
              key={href}
              gap={5}
              borderTop="1px solid"
              borderColor="blackAlpha.300"
              pt={7}
              align="start"
            >
              <Heading as="h3" fontSize="2xl" fontWeight={500}>
                {title}
              </Heading>
              <Text lineHeight={1.8} color="blackAlpha.700">
                {description}
              </Text>
              <Action href={href} secondary>
                {title}
              </Action>
            </Stack>
          ))}
        </Grid>
      </EditorialSection>

      <EditorialSection muted>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12}>
          <Box>
            <Eyebrow>Perguntas sobre o atendimento</Eyebrow>
            <Title>
              Antes da primeira
              <br />
              <Accent>conversa.</Accent>
            </Title>
            <Box as="address" fontStyle="normal" mt={8} lineHeight={1.8}>
              <Text fontWeight={500}>Sede da Shift+G</Text>
              <Text>{SITE_ADDRESS}</Text>
              <Text>
                {SITE_CITY} – {SITE_STATE} · CEP {SITE_ZIP}
              </Text>
            </Box>
            <Text mt={4} color="blackAlpha.700">
              Fale com a equipe para combinar uma visita.
            </Text>
          </Box>
          <Stack gap={0}>
            {REGIONAL_FAQS.map(({ question, answer }) => (
              <Box
                as="details"
                key={question}
                py={5}
                borderTop="1px solid"
                borderColor="blackAlpha.300"
              >
                <Box
                  as="summary"
                  cursor="pointer"
                  fontSize="lg"
                  fontWeight={500}
                  py={2}
                >
                  {question}
                </Box>
                <Text mt={4} lineHeight={1.8} color="blackAlpha.700">
                  {answer}
                </Text>
              </Box>
            ))}
          </Stack>
        </Grid>
      </EditorialSection>
      <ClosingCTA />
    </SitePage>
  );
}
