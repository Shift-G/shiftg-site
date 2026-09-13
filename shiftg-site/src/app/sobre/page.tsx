import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Title,
} from "@/components/layout/editorial";
import { SitePage } from "@/components/layout/site-page";
import { ClosingCTA } from "@/components/sections/business";
import {
  IllustratedHero,
  VisualStory,
} from "@/components/sections/editorial-media";
import { ClientStrip } from "@/components/sections/home-redesign";
import { pageMetadata } from "@/lib/page-metadata";
import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
export const metadata = pageMetadata(
  "Sobre a SHIFT+G",
  "Estratégia, inteligência artificial e governança de dados. Conheça a SHIFT+G, nossos produtos e a atuação ao lado de empresas e suas equipes.",
  "/sobre",
);
export default function AboutPage() {
  return (
    <SitePage>
      <IllustratedHero
        eyebrow={"A SHIFT+G"}
        title={"Tecnologia exige visão."}
        accent={"Transformação exige presença."}
        description={
          "Somos uma empresa de tecnologia focada na transformação digital das organizações com adoção de inteligência artificial e governança de dados. Atuamos ao lado de líderes e equipes, com produtos próprios e soluções em colaboração."
        }
        visual={"equipe"}
        caption={"Estratégia, inteligência e execução. Na mesma conversa."}
        tags={["Visão de negócio", "Profundidade técnica", "Proximidade"]}
        href={"/ecossistema"}
        cta={"Conheça o que construímos"}
      />
      <ClientStrip />
      <VisualStory
        visual="engenharia"
        eyebrow="Nossa capacidade de construir"
        title={
          <>
            Visão estratégica.
            <br />
            <Accent>Profundidade técnica.</Accent>
          </>
        }
        description="Da transformação de processos à criação de novos produtos digitais, conectamos o conhecimento do negócio ao trabalho de engenharia. É assim que a estratégia ganha forma dentro da operação."
      />
      <EditorialSection>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={14}>
          <Box>
            <Eyebrow>Nossa forma de atuar</Eyebrow>
            <Title>
              Conhecer a operação.
              <br />
              <Accent>Assumir a execução.</Accent>
            </Title>
            <Box mt={8}>
              <Action secondary href="/ecossistema">
                Conheça o que construímos
              </Action>
            </Box>
          </Box>
          <Stack gap={8}>
            {[
              [
                "Clareza para decidir",
                "Conectamos as possibilidades da tecnologia às prioridades do negócio, com contexto para a liderança definir os próximos passos.",
              ],
              [
                "Profundidade para construir",
                "Transformamos o conhecimento da operação em integrações, aplicações de IA e novos produtos digitais.",
              ],
              [
                "Proximidade para transformar",
                "Trabalhamos junto das equipes. A adoção da tecnologia faz parte do projeto, assim como os processos e as pessoas.",
              ],
            ].map(([title, text]) => (
              <Box
                key={title}
                pt={6}
                borderTop="1px solid"
                borderColor="blackAlpha.300"
              >
                <Heading as="h3" fontSize="2xl" fontWeight={500}>
                  {title}
                </Heading>
                <Text
                  mt={4}
                  fontSize="lg"
                  lineHeight={1.8}
                  color="blackAlpha.700"
                >
                  {text}
                </Text>
              </Box>
            ))}
          </Stack>
        </Grid>
      </EditorialSection>
      <EditorialSection muted>
        <Eyebrow>Liderança</Eyebrow>
        <Title>
          Estratégia e tecnologia.
          <br />
          <Accent>Na mesma conversa.</Accent>
        </Title>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} mt={12}>
          {[
            [
              "William Novak",
              "Fundador · Arquitetura e IA",
              "Atuação na arquitetura de soluções e na aplicação de inteligência artificial aos desafios das empresas.",
            ],
            [
              "Fabio José Roiek",
              "Cofundador · Estratégia e gestão",
              "Atuação na estratégia, nas relações de negócio e na conexão entre a tecnologia e as prioridades da organização.",
            ],
          ].map(([name, role, bio]) => (
            <Box
              key={name}
              borderTop="1px solid"
              borderColor="blackAlpha.300"
              pt={7}
            >
              <Heading as="h3" fontSize="3xl" fontWeight={500}>
                {name}
              </Heading>
              <Text fontFamily="mono" fontSize="sm" color="blue.solid" mt={3}>
                {role}
              </Text>
              <Text
                mt={6}
                lineHeight={1.8}
                color="blackAlpha.700"
                fontSize="lg"
              >
                {bio}
              </Text>
            </Box>
          ))}
        </Grid>
      </EditorialSection>
      <ClosingCTA />
    </SitePage>
  );
}
