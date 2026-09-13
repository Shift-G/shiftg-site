import { RegionalPresence } from "@/components/sections/regional-presence";
import { PageSeo } from "@/components/seo/page-seo";
import {
  Accent,
  EditorialSection,
  Eyebrow,
  Title,
} from "@/components/layout/editorial";
import { SitePage } from "@/components/layout/site-page";
import {
  ClosingCTA,
  transformationSteps,
} from "@/components/sections/business";
import { IllustratedHero } from "@/components/sections/editorial-media";
import { ClientStories } from "@/components/sections/portfolio";
import { pageMetadata } from "@/lib/page-metadata";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
export const metadata = pageMetadata(
  "Consultoria em IA e transformação digital",
  "IA, automação de processos e governança de dados para empresas em União da Vitória, Porto União, São Mateus do Sul e Curitiba. Da estratégia à execução.",
  "/transformacao-digital",
);
export default function TransformationPage() {
  return (
    <SitePage>
      <PageSeo
        name="Transformação digital"
        path="/transformacao-digital"
        service={{
          name: "Consultoria em inteligência artificial e transformação digital",
          description: metadata.description!,
        }}
      />
      <IllustratedHero
        eyebrow={"Transformação digital"}
        title={"Uma operação à altura"}
        accent={"da sua ambição."}
        description={
          "Quando o negócio cresce, os processos precisam acompanhar. Trabalhamos com a liderança para definir prioridades e com a equipe para transformar a rotina, conectando IA, integração e governança de dados."
        }
        visual={"engenharia"}
        caption={"Próximos da liderança. Presentes na execução."}
        tags={[
          "Processos integrados",
          "IA com contexto",
          "Governança de dados",
        ]}
      />
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
      <RegionalPresence />
      <ClosingCTA />
    </SitePage>
  );
}
