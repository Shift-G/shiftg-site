import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { TrainingImage } from "@/components/sections/institutional";
import { SitePage } from "@/components/layout/site-page";
import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Frame,
  Title,
} from "@/components/layout/editorial";
import { ClosingCTA } from "@/components/sections/business";
import { pageMetadata } from "@/lib/page-metadata";
export const metadata = pageMetadata(
  "Treinamento de IA in company em todo o Brasil",
  "A SHIFT+G trabalha dentro da sua empresa, ao lado do time, para aplicar IA aos gargalos reais da operação. Programa definido conforme o desafio da equipe.",
  "/treinamento-ia-para-sua-empresa",
);
export default function TrainingPage() {
  return (
    <SitePage>
      <Box py={{ base: 14, md: 20 }}>
        <Frame wide>
          <Grid templateColumns={{ base: "1fr", lg: "1.5fr 1fr" }} gap={12}>
            <Box>
              <Eyebrow>IA in company / Todo o Brasil</Eyebrow>
              <Title as="h1">
                Aprender IA.
                <br />
                <Accent>Resolver o que importa.</Accent>
              </Title>
              <Text
                mt={8}
                fontSize="xl"
                lineHeight={1.7}
                color="blackAlpha.700"
              >
                Sua equipe aprende enquanto aplica inteligência artificial aos
                desafios da própria empresa. Entramos na operação e trabalhamos
                ao lado do time por um período definido com você.
              </Text>
              <Box mt={9}>
                <Action href="/contato?interesse=ia-in-company">
                  Planejar o programa da minha empresa
                </Action>
              </Box>
            </Box>
            <Stack
              bg="off"
              p={{ base: 7, md: 10 }}
              justify="space-between"
              gap={10}
            >
              <Text fontFamily="mono" fontSize="sm" color="blue.solid">
                O SEU NEGÓCIO DEFINE O PROGRAMA
              </Text>
              {[
                ["Foco", "Os gargalos reais do time"],
                ["Formato", "Trabalho prático dentro da empresa"],
                ["Duração", "Definida conforme o escopo"],
                ["Abrangência", "Atendimento em todo o Brasil"],
              ].map(([label, value]) => (
                <Box
                  key={label}
                  borderTop="1px solid"
                  borderColor="blackAlpha.300"
                  pt={4}
                >
                  <Text fontSize="sm" color="blackAlpha.700" mb={2}>
                    {label}
                  </Text>
                  <Text fontSize="xl">{value}</Text>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Frame>
      </Box>
      <Box pb={{ base: 14, md: 20 }}>
        <Frame>
          <TrainingImage />
        </Frame>
      </Box>
      <EditorialSection dark>
        <Eyebrow light>Capacitação com aplicação</Eyebrow>
        <Title>
          A rotina da empresa
          <br />é o ponto de partida.
        </Title>
        <Text
          maxW="800px"
          mt={8}
          fontSize="xl"
          lineHeight={1.8}
          color="whiteAlpha.800"
        >
          Antes de escolher ferramentas, entendemos onde o time perde tempo,
          quais informações precisa e o que dificulta as entregas. O programa é
          construído sobre esse contexto.
        </Text>
      </EditorialSection>
      <EditorialSection>
        <Eyebrow>A jornada do time</Eyebrow>
        <Title>
          Entender. Aplicar.
          <br />
          <Accent>Ganhar autonomia.</Accent>
        </Title>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} mt={12}>
          {[
            [
              "Alinhamento com a liderança",
              "Definimos os desafios prioritários, a equipe envolvida e o que será trabalhado durante o programa.",
            ],
            [
              "Imersão na operação",
              "Conhecemos as tarefas, as ferramentas e o contexto do time para identificar aplicações úteis de IA.",
            ],
            [
              "Construção ao lado da equipe",
              "Trabalhamos em casos da própria empresa, orientando a aplicação de IA e a avaliação das respostas e entregas.",
            ],
            [
              "Orientação para continuar",
              "Organizamos as práticas desenvolvidas e os cuidados com dados para que o time possa dar sequência ao uso de IA.",
            ],
          ].map(([title, text], i) => (
            <Box
              key={title}
              borderTop="1px solid"
              borderColor="blackAlpha.300"
              pt={6}
            >
              <Text fontFamily="mono" fontSize="sm" color="blue.solid" mb={5}>
                0{i + 1}
              </Text>
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
        </Grid>
      </EditorialSection>
      <EditorialSection muted>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12}>
          <Box>
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <Title>
              O programa começa
              <br />
              pelo <Accent>seu contexto.</Accent>
            </Title>
          </Box>
          <Stack gap={0}>
            {[
              [
                "Minha equipe precisa saber usar IA?",
                "O ponto de partida é o nível de familiaridade do time. O conteúdo e as atividades são definidos para as pessoas que vão participar.",
              ],
              [
                "Quanto tempo dura?",
                "A duração depende dos gargalos, das áreas envolvidas e do escopo. Isso é definido na conversa de planejamento com a empresa.",
              ],
              [
                "Vocês atendem fora do Paraná?",
                "Sim. O programa atende empresas em todo o Brasil. Agenda, deslocamento e formato de acompanhamento são alinhados na proposta.",
              ],
              [
                "Como vocês tratam os dados da empresa?",
                "Alinhamos quais informações podem ser utilizadas, quem pode acessá-las e quais ferramentas fazem sentido para o contexto. A governança de dados faz parte do trabalho.",
              ],
            ].map(([q, a]) => (
              <Box
                as="details"
                key={q}
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
                  {q}
                </Box>
                <Text
                  mt={4}
                  fontSize="md"
                  lineHeight={1.8}
                  color="blackAlpha.700"
                >
                  {a}
                </Text>
              </Box>
            ))}
          </Stack>
        </Grid>
      </EditorialSection>
      <ClosingCTA training />
    </SitePage>
  );
}
