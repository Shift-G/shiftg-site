import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { ArrowDown, ArrowUpRight, BookOpen, HeartPulse, MapPin, Monitor, Sparkles } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { Accent, Action, Eyebrow, Frame, Title } from "@/components/layout/editorial";
import { projects } from "@/constants/projects";

export function CareersHero() {
  return (
    <Box as="section" bg="white">
      <Grid templateColumns={{ base: "1fr", lg: "1.1fr 1fr" }}>
        <Flex
          direction="column"
          align="start"
          justify="center"
          px={{ base: 6, md: 10, xl: 16 }}
          py={{ base: 12, md: 16, xl: 20 }}
        >
          <Eyebrow>Carreiras / Construa com a SHIFT+G</Eyebrow>
          <Heading
            as="h1"
            fontSize={{ base: "3.25rem", md: "5.5rem", xl: "6.5rem" }}
            fontWeight={500}
            letterSpacing="-0.055em"
            lineHeight={1.04}
          >
            Seu talento.
            <br />
            <Accent>Em movimento.</Accent>
          </Heading>
          <Text
            mt={7}
            maxW="530px"
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight={1.7}
            color="blackAlpha.700"
          >
            Software, dados e IA para desafios que fazem parte da vida das
            empresas. Traga sua curiosidade e sua vontade de construir com a
            gente.
          </Text>
          <Flex align="center" gap={{ base: 4, md: 7 }} wrap="wrap" mt={9}>
            <Action href="#open-roles">Ver oportunidades</Action>
            <Box
              asChild
              display="inline-flex"
              alignItems="center"
              gap={3}
              py={4}
              fontSize="sm"
              _hover={{ color: "blue.solid" }}
              _focusVisible={{ outline: "2px solid", outlineColor: "blue.solid", outlineOffset: "4px" }}
            >
              <Link href="#nosso-jeito">
                Nosso jeito de trabalhar <ArrowDown size={16} aria-hidden="true" />
              </Link>
            </Box>
          </Flex>
          <Flex
            mt={{ base: 10, md: 14 }}
            pt={5}
            gap={3}
            align="start"
            borderTop="1px solid"
            borderColor="blackAlpha.200"
            w="full"
            maxW="530px"
            color="blackAlpha.700"
            fontFamily="mono"
            fontSize="xs"
          >
            <Box color="blue.solid" flexShrink={0}>
              <MapPin size={16} aria-hidden="true" />
            </Box>
            <Text>UNIÃO DA VITÓRIA, PR · PRESENCIAL · CLT</Text>
          </Flex>
        </Flex>
        <Box
          as="figure"
          position="relative"
          minW={0}
          minH={{ base: "390px", md: "500px", lg: "620px" }}
          bg="off"
        >
          <NextImage
            src="/images/editorial/shiftg-engenharia-digital.webp"
            alt="Cena ilustrativa de duas pessoas construindo uma solução digital em conjunto"
            fill
            priority
            sizes="(min-width: 1280px) 48vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "52% center" }}
          />
          <Text
            position="absolute"
            top={6}
            left={6}
            bg="white"
            color="black"
            px={3}
            py={2}
            fontFamily="mono"
            fontSize="xs"
          >
            PENSAR. EXPERIMENTAR. CONSTRUIR.
          </Text>
          <Box
            as="figcaption"
            position="absolute"
            bottom={0}
            right={0}
            left={{ base: 6, md: 10 }}
            bg="blue.solid"
            color="white"
            p={{ base: 6, md: 8 }}
          >
            <Flex justify="space-between" align="start" gap={6}>
              <Box>
                <Text fontFamily="mono" fontSize="xs" mb={3}>
                  DA IDEIA À APLICAÇÃO
                </Text>
                <Text fontSize={{ base: "2xl", md: "3xl" }} lineHeight={1.2} letterSpacing="-0.03em">
                  O trabalho ganha forma
                  <br />
                  quando é feito junto.
                </Text>
              </Box>
              <ArrowUpRight size={32} strokeWidth={1.25} aria-hidden="true" />
            </Flex>
            <Text fontFamily="mono" fontSize="2xs" color="whiteAlpha.800" mt={5}>
              IMAGEM ILUSTRATIVA
            </Text>
          </Box>
        </Box>
      </Grid>
      <Box bg="black" color="white" py={5}>
        <Frame wide>
          <Flex justify="space-between" align="center" gap={5} wrap="wrap">
            <Flex align="center" gap={4}>
              <Text fontFamily="mono" fontSize="2xl" lineHeight={1}>
                {String(projects.length).padStart(2, "0")}
              </Text>
              <Text fontSize="sm" color="whiteAlpha.800">
                projetos. Diferentes setores. Muitas formas de contribuir.
              </Text>
            </Flex>
            <Box
              asChild
              display="inline-flex"
              alignItems="center"
              gap={3}
              fontSize="sm"
              py={2}
              _hover={{ color: "blue.200" }}
            >
              <Link href="/ecossistema">
                Veja o que construímos <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </Box>
          </Flex>
        </Frame>
      </Box>
    </Box>
  );
}

const principles = [
  {
    title: "Entender antes de construir.",
    text: "O ponto de partida é o desafio de quem vai usar. Aproximamos o trabalho técnico do contexto da operação.",
  },
  {
    title: "Aprender fazendo.",
    text: "Experimentar, avaliar e refinar fazem parte da construção. A curiosidade vem acompanhada de método.",
  },
  {
    title: "Construir lado a lado.",
    text: "Trabalhamos presencialmente, na nossa base em União da Vitória. Ideias, decisões e execução na mesma conversa.",
  },
];

export function CareersCulture() {
  return (
    <Box as="section" id="nosso-jeito" bg="off" py={{ base: 14, md: 20 }} scrollMarginTop="100px">
      <Frame>
        <Grid templateColumns={{ base: "1fr", lg: "1.5fr 1fr" }} alignItems="end" gap={8} mb={10}>
          <Box>
            <Eyebrow>Nosso jeito de trabalhar</Eyebrow>
            <Title>
              O trabalho é técnico.
              <br />
              A construção é <Accent>humana.</Accent>
            </Title>
          </Box>
          <Text fontSize="lg" lineHeight={1.7} color="blackAlpha.700" maxW="380px">
            Valorizamos quem faz boas perguntas, compartilha o que aprende e
            se envolve com o que está construindo.
          </Text>
        </Grid>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, minmax(0, 1fr))" }} gap="1px" bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200">
          {principles.map((principle, index) => (
            <Stack key={principle.title} gap={5} bg="off" p={{ base: 6, md: 8 }}>
              <Text fontFamily="mono" fontSize="xs" color="blue.solid">0{index + 1} / NO DIA A DIA</Text>
              <Heading as="h3" fontSize="2xl" fontWeight={500} letterSpacing="-0.03em" lineHeight={1.2}>
                {principle.title}
              </Heading>
              <Text color="blackAlpha.700" fontSize="sm" lineHeight={1.8}>{principle.text}</Text>
            </Stack>
          ))}
        </Grid>
      </Frame>
    </Box>
  );
}

const benefits = [
  { icon: Monitor, title: "Equipamento à altura.", text: "Setup Mac ou PC de alta performance fornecido para o trabalho." },
  { icon: HeartPulse, title: "Cuidado com você.", text: "Plano de saúde de nível executivo." },
  { icon: BookOpen, title: "Espaço para aprender.", text: "Orçamento mensal para laboratórios e certificações." },
  { icon: Sparkles, title: "IA na sua rotina.", text: "Assinaturas de ferramentas como Copilot, Cursor e OpenAI." },
];

export function CareersWorkspace() {
  return (
    <Box as="section" bg="black" color="white" py={{ base: 14, md: 20 }}>
      <Frame>
        <Grid templateColumns={{ base: "1fr", lg: "0.85fr 1.4fr" }} gap={{ base: 10, lg: 16 }} alignItems="center">
          <Box>
            <Eyebrow light>Para você construir bem</Eyebrow>
            <Title>
              Boas ideias merecem
              <br />
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.200">boa estrutura.</Text>
            </Title>
            <Text mt={6} fontSize="lg" lineHeight={1.7} color="whiteAlpha.800">
              Equipamento, ferramentas e aprendizado fazem parte das condições
              para desenvolver um bom trabalho.
            </Text>
          </Box>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }} gap="1px" bg="whiteAlpha.300" border="1px solid" borderColor="whiteAlpha.300">
            {benefits.map(({ icon: Icon, title, text }) => (
              <Stack key={title} gap={4} bg="black" p={{ base: 6, md: 7 }}>
                <Box color="blue.200" mb={2}><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></Box>
                <Heading as="h3" fontSize="xl" fontWeight={500} lineHeight={1.25}>{title}</Heading>
                <Text color="whiteAlpha.800" fontSize="sm" lineHeight={1.7}>{text}</Text>
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Frame>
    </Box>
  );
}
