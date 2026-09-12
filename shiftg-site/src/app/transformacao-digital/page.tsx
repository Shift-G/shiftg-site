import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { SitePage } from "@/components/layout/site-page";
import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Frame,
  Title,
} from "@/components/layout/editorial";
import {
  transformationSteps,
  ClosingCTA,
} from "@/components/sections/business";
import { ClientStories } from "@/components/sections/portfolio";
import { pageMetadata } from "@/lib/page-metadata";
export const metadata = pageMetadata(
  "Transformação digital para empresas",
  "IA aplicada, integração de processos e governança de dados. A SHIFT+G atua ao lado da liderança e da equipe, da estratégia à implementação.",
  "/transformacao-digital",
);
export default function TransformationPage() {
  return (
    <SitePage>
      <Box py={{ base: 14, md: 20 }}>
        <Frame wide>
          <Eyebrow>Transformação digital</Eyebrow>
          <Title as="h1">
            Uma operação à altura
            <br />
            da sua <Accent>ambição.</Accent>
          </Title>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={10}
            mt={10}
          >
            <Text fontSize="xl" lineHeight={1.7} color="blackAlpha.700">
              Quando o negócio cresce, os processos precisam acompanhar.
              Trabalhamos com a liderança para definir prioridades e com a
              equipe para transformar a rotina.
            </Text>
            <Box>
              <Text
                fontSize="lg"
                lineHeight={1.8}
                color="blackAlpha.700"
                mb={7}
              >
                IA, integração e governança de dados como parte da mesma agenda:
                preparar a empresa para operar melhor e construir novas
                oportunidades.
              </Text>
              <Action>Agendar uma conversa estratégica</Action>
            </Box>
          </Grid>
        </Frame>
      </Box>
      <EditorialSection dark>
        <Eyebrow light>Onde atuamos</Eyebrow>
        <Title>
          Do gargalo operacional
          <br />à nova frente de negócio.
        </Title>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={10}
          mt={12}
        >
          {[
            [
              "Operação",
              "Processos integrados",
              "Mapeamento de fluxos, integração de sistemas e automação de atividades que consomem a capacidade da equipe.",
            ],
            [
              "Inteligência",
              "IA com contexto",
              "Aplicações de inteligência artificial orientadas às necessidades da empresa e ao conhecimento de quem trabalha nela.",
            ],
            [
              "Governança",
              "Dados com responsabilidade",
              "Organização da informação, definição de acessos e práticas para sustentar o uso dos dados na operação.",
            ],
          ].map(([label, title, text]) => (
            <Box
              key={label}
              pt={6}
              borderTop="1px solid"
              borderColor="whiteAlpha.400"
            >
              <Text
                fontFamily="mono"
                fontSize="sm"
                color="whiteAlpha.800"
                mb={5}
              >
                {label}
              </Text>
              <Heading as="h3" fontSize="2xl" fontWeight={500}>
                {title}
              </Heading>
              <Text mt={5} lineHeight={1.8} color="whiteAlpha.800">
                {text}
              </Text>
            </Box>
          ))}
        </Grid>
      </EditorialSection>
      <EditorialSection>
        <Eyebrow>Como trabalhamos</Eyebrow>
        <Title>
          Próximos da liderança.
          <br />
          <Accent>Presentes na execução.</Accent>
        </Title>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} mt={12}>
          {transformationSteps.map((step, i) => (
            <Box
              key={step.title}
              borderTop="1px solid"
              borderColor="blackAlpha.300"
              pt={6}
            >
              <Text fontFamily="mono" fontSize="sm" color="blue.solid" mb={5}>
                0{i + 1}
              </Text>
              <Heading as="h3" fontSize="2xl" fontWeight={500}>
                {step.title}
              </Heading>
              <Text
                mt={5}
                fontSize="lg"
                color="blackAlpha.700"
                lineHeight={1.8}
              >
                {step.text}
              </Text>
            </Box>
          ))}
        </Grid>
      </EditorialSection>
      <ClientStories />
      <ClosingCTA />
    </SitePage>
  );
}
