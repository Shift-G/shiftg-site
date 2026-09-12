import { TrainingImage } from "@/components/sections/institutional";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Title,
} from "@/components/layout/editorial";

export const transformationSteps = [
  {
    title: "Entender o negócio",
    text: "Trabalhamos com a liderança e a equipe para identificar gargalos, mapear processos e definir onde a tecnologia pode gerar valor.",
  },
  {
    title: "Definir prioridades",
    text: "Organizamos uma agenda de implementação com escopo, responsáveis e critérios de acompanhamento alinhados à operação.",
  },
  {
    title: "Implementar ao lado do time",
    text: "Integramos processos, aplicamos IA e desenvolvemos as soluções necessárias com a participação de quem vai utilizá-las.",
  },
  {
    title: "Sustentar a mudança",
    text: "Capacitamos a equipe, acompanhamos a adoção e estruturamos a governança para dar continuidade ao trabalho.",
  },
];
export function TransformationSection() {
  return (
    <EditorialSection id="solucoes">
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 10, lg: 20 }}
      >
        <Box>
          <Eyebrow>Transformação digital</Eyebrow>
          <Title>
            Visão de negócio.
            <br />
            Profundidade técnica.
            <br />
            <Accent>Execução próxima.</Accent>
          </Title>
          <Text mt={7} fontSize="lg" lineHeight={1.8} color="blackAlpha.700">
            A próxima etapa de crescimento exige uma operação preparada.
            Entramos na empresa para entender o que limita o time e construir o
            que permite avançar.
          </Text>
          <Box mt={8}>
            <Action secondary href="/transformacao-digital">
              Como transformamos operações
            </Action>
          </Box>
        </Box>
        <Stack gap={0}>
          {[
            [
              "01",
              "Processos que acompanham o negócio",
              "Conectamos sistemas e redesenhamos fluxos para reduzir o trabalho manual e a fragmentação da informação.",
            ],
            [
              "02",
              "IA aplicada às prioridades da empresa",
              "Direcionamos a inteligência artificial aos desafios da operação, com contexto e participação da equipe.",
            ],
            [
              "03",
              "Dados tratados como responsabilidade",
              "Estruturamos o uso das informações, os acessos e as responsabilidades para apoiar decisões e a adoção de IA.",
            ],
          ].map(([num, title, text]) => (
            <Box
              key={num}
              py={7}
              borderTop="1px solid"
              borderColor="blackAlpha.300"
            >
              <Text fontFamily="mono" fontSize="sm" color="blue.solid" mb={4}>
                {num}
              </Text>
              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight={500}
                letterSpacing="-0.03em"
              >
                {title}
              </Heading>
              <Text mt={4} color="blackAlpha.700" lineHeight={1.8}>
                {text}
              </Text>
            </Box>
          ))}
        </Stack>
      </Grid>
    </EditorialSection>
  );
}
export function TrainingSection() {
  return (
    <EditorialSection dark>
      <Grid
        templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
        gap={{ base: 12, lg: 20 }}
      >
        <Box>
          <Eyebrow light>IA in company / Todo o Brasil</Eyebrow>
          <Title>
            Seu time aprende.
            <br />
            Sua operação{" "}
            <Text
              as="span"
              fontFamily="serif"
              fontStyle="italic"
              fontWeight={400}
            >
              avança.
            </Text>
          </Title>
          <Text mt={8} fontSize="lg" lineHeight={1.8} color="whiteAlpha.800">
            Entramos na empresa e trabalhamos ao lado da equipe por um período.
            O treinamento acontece sobre os gargalos, os processos e as demandas
            reais do seu negócio.
          </Text>
          <Box mt={9}>
            <Action light href="/treinamento-ia-para-sua-empresa">
              Conhecer o programa in company
            </Action>
          </Box>
        </Box>
        <Stack gap={5} justify="center">
          <TrainingImage />
          <Text fontSize="md" color="whiteAlpha.800" lineHeight={1.7}>
            O desafio é da sua empresa. O trabalho é conjunto. O conhecimento
            fica com o time.
          </Text>
        </Stack>
      </Grid>
    </EditorialSection>
  );
}
export function ClosingCTA({ training = false }: { training?: boolean }) {
  return (
    <EditorialSection>
      <Grid
        templateColumns={{ base: "1fr", lg: "1.5fr 1fr" }}
        gap={10}
        alignItems="end"
      >
        <Box>
          <Eyebrow>Vamos ao que importa</Eyebrow>
          <Title>
            {training ? (
              <>
                Qual desafio o seu
                <br />
                time precisa <Accent>resolver?</Accent>
              </>
            ) : (
              <>
                O que limita hoje
                <br />o próximo passo da <Accent>sua empresa?</Accent>
              </>
            )}
          </Title>
        </Box>
        <Stack align="start" gap={7}>
          <Text fontSize="lg" lineHeight={1.8} color="blackAlpha.700">
            Uma conversa sobre prioridades, operação e onde a tecnologia pode
            fazer diferença no seu negócio.
          </Text>
          <Action
            href={training ? "/contato?interesse=ia-in-company" : "/contato"}
          >
            Agendar uma conversa estratégica
          </Action>
          <Text fontFamily="mono" fontSize="sm" color="blackAlpha.700">
            ATENDIMENTO EM TODO O BRASIL
          </Text>
        </Stack>
      </Grid>
    </EditorialSection>
  );
}
