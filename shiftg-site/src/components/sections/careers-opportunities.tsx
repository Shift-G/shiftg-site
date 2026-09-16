import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Accent, Eyebrow, Frame, Title } from "@/components/layout/editorial";
import { CAREERS_EMAIL } from "@/constants";

const jobs = [
  {
    title: "Desenvolvedor FullStack (Python & React)",
    department: "Cloud & Engine",
    description:
      "Construa de ponta a ponta. Backend em Python e frontend em React, entregando produtos sólidos em produção.",
    technologies: ["Python", "React"],
  },
  {
    title: "AI Prompt Engineer Júnior",
    department: "AI Lab",
    description:
      "Desenhe e refine prompts para LLMs. Itere, avalie e otimize fluxos de IA com método e curiosidade.",
    technologies: ["LLMs", "Prompts"],
  },
];

function applicationHref(subject: string, body: string) {
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function CareersOpportunities() {
  return (
    <>
      <Box
        as="section"
        id="open-roles"
        bg="white"
        py={{ base: 16, md: 24 }}
        borderTop="1px solid"
        borderColor="blackAlpha.200"
        scrollMarginTop="100px"
      >
        <Frame>
          <Grid
            templateColumns={{ base: "1fr", lg: "1.5fr 1fr" }}
            alignItems="end"
            gap={{ base: 6, lg: 16 }}
            mb={{ base: 10, md: 14 }}
          >
            <Box>
              <Eyebrow>Oportunidades</Eyebrow>
              <Title>
                Seu próximo desafio<br />
                <Accent>pode estar aqui.</Accent>
              </Title>
            </Box>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight={1.7}
              maxW="430px"
            >
              Pessoas curiosas, problemas reais e espaço para construir.
              Conheça as posições abertas no nosso time.
            </Text>
          </Grid>

          <Stack
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            bg="off"
            border="1px solid"
            borderColor="blackAlpha.200"
            px={{ base: 5, md: 8 }}
            py={5}
            gap={4}
          >
            <HStack gap={4}>
              <Text
                fontFamily="mono"
                fontSize="2xl"
                color="blue.solid"
                lineHeight={1}
              >
                {String(jobs.length).padStart(2, "0")}
              </Text>
              <Text fontSize="sm" fontWeight={500}>
                Vagas abertas
              </Text>
            </HStack>
            <HStack gap={2} color="fg.muted" align="flex-start">
              <Box pt="2px" flexShrink={0}>
                <MapPin size={16} aria-hidden="true" />
              </Box>
              <Text fontSize="sm">
                Presencial · União da Vitória, PR · CLT
              </Text>
            </HStack>
          </Stack>

          <Stack gap={0}>
            {jobs.map((job, index) => (
              <Grid
                as="article"
                aria-labelledby={`career-role-${index}`}
                key={job.title}
                templateColumns={{
                  base: "1fr",
                  md: "36px 1fr",
                  lg: "36px minmax(0, 1.15fr) minmax(0, 1fr) auto",
                }}
                alignItems={{ base: "start", lg: "center" }}
                gap={{ base: 5, md: 7, lg: 8 }}
                px={{ base: 5, md: 8 }}
                py={{ base: 7, md: 9 }}
                border="1px solid"
                borderTop="0"
                borderColor="blackAlpha.200"
                transition="background 180ms ease"
                _hover={{ bg: "off" }}
              >
                <Text
                  fontFamily="mono"
                  fontSize="sm"
                  color="fg.subtle"
                  alignSelf="start"
                  pt={{ lg: 1 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <Stack gap={3}>
                  <Text
                    fontFamily="mono"
                    fontSize="xs"
                    textTransform="uppercase"
                    letterSpacing="0.06em"
                    color="blue.solid"
                  >
                    {job.department}
                  </Text>
                  <Heading
                    as="h3"
                    id={`career-role-${index}`}
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight={500}
                    lineHeight={1.25}
                    letterSpacing="-0.025em"
                    maxW="340px"
                  >
                    {job.title}
                  </Heading>
                </Stack>
                <Stack
                  gap={4}
                  gridColumn={{ md: "2", lg: "auto" }}
                >
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.75}>
                    {job.description}
                  </Text>
                  <HStack gap={2} flexWrap="wrap">
                    {job.technologies.map((technology) => (
                      <Text
                        key={technology}
                        border="1px solid"
                        borderColor="blackAlpha.200"
                        fontFamily="mono"
                        fontSize="xs"
                        px={2}
                        py={1}
                        color="fg.muted"
                      >
                        {technology}
                      </Text>
                    ))}
                  </HStack>
                </Stack>
                <Button
                  asChild
                  variant="outline"
                  rounded="none"
                  borderColor="blue.solid"
                  color="blue.solid"
                  minH={12}
                  px={5}
                  gap={5}
                  gridColumn={{ md: "2", lg: "auto" }}
                  justifySelf={{ base: "stretch", md: "start" }}
                  fontWeight={500}
                  _hover={{ bg: "blue.solid", color: "white" }}
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "blue.solid",
                    outlineOffset: "4px",
                  }}
                >
                  <a
                    href={applicationHref(
                      `Candidatura: ${job.title}`,
                      `Olá, equipe SHIFT+G!\n\nTenho interesse na vaga de ${job.title}.\n\nMeu nome:\nLinkedIn ou portfólio:\n\nUm pouco sobre minha experiência:\n`,
                    )}
                    aria-label={`Candidatar-se à vaga de ${job.title}`}
                  >
                    Candidatar-se
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </Button>
              </Grid>
            ))}
          </Stack>

          <Text
            mt={6}
            maxW="780px"
            fontSize="sm"
            color="fg.muted"
            lineHeight={1.75}
          >
            Para se candidatar, envie seu currículo, LinkedIn ou portfólio para{" "}
            <Link
              href={`mailto:${CAREERS_EMAIL}`}
              color="blue.solid"
              textDecoration="underline"
              textUnderlineOffset="3px"
            >
              {CAREERS_EMAIL}
            </Link>{" "}
            e indique a vaga de interesse. Os botões abrem seu aplicativo de
            e-mail.
          </Text>
        </Frame>
      </Box>

      <Box
        as="section"
        id="talentos"
        bg="blue.solid"
        color="white"
        py={{ base: 14, md: 20 }}
        scrollMarginTop="100px"
      >
        <Frame>
          <Grid
            templateColumns={{ base: "1fr", lg: "1.25fr 1fr" }}
            alignItems="center"
            gap={{ base: 8, lg: 20 }}
          >
            <Box>
              <Eyebrow light>Candidatura espontânea</Eyebrow>
              <Title>
                Outro caminho.<br />
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400}>
                  A mesma vontade de construir.
                </Text>
              </Title>
            </Box>
            <Stack align="start" gap={7}>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.75}>
                Sua área não está entre as vagas abertas? Conte o que você faz,
                o que quer aprender e como gostaria de contribuir com a
                SHIFT+G. Queremos conhecer seu trabalho.
              </Text>
              <Button
                asChild
                bg="white"
                color="blue.solid"
                rounded="none"
                minH={14}
                h="auto"
                maxW="full"
                px={6}
                py={4}
                gap={5}
                fontSize="md"
                fontWeight={500}
                whiteSpace="normal"
                textAlign="left"
                _hover={{ bg: "whiteAlpha.900" }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "white",
                  outlineOffset: "4px",
                }}
              >
                <a
                  href={applicationHref(
                    "Candidatura espontânea — SHIFT+G",
                    "Olá, equipe SHIFT+G!\n\nGostaria de me apresentar para futuras oportunidades.\n\nMeu nome:\nMinha área de atuação:\nLinkedIn ou portfólio:\n\nUm pouco sobre mim e o que gostaria de construir:\n",
                  )}
                >
                  Apresente-se para a SHIFT+G
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </Button>
            </Stack>
          </Grid>
        </Frame>
      </Box>
    </>
  );
}
