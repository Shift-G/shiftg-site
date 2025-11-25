import { Metadata } from "next";
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Heading,
  Text,
  Button,

  Badge,
  Flex,
  Timeline,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import {

  Brain,
  Target,
  Shield,
  Rocket,
  TrendingUp,
  Heart,
  Lightbulb,
  Globe,
  Code,
  Database,
  Star,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nós | Shift+G - Inteligência que Gera Autonomia",
  description:
    "Conheça a Shift+G: transformamos dados em decisões estratégicas através de IA e software sob medida. Somos mais que uma fábrica de software, somos seu parceiro na transformação digital.",
  keywords: [
    "sobre shift+g",
    "inteligência artificial",
    "fábrica de software",
    "transformação digital",
    "dados",
    "automação",
  ],
};

// Timeline data
const timelineEvents = [
  {
    year: "2020",
    title: "Fundação",
    description:
      "A empresa nasceu para atender clientes no Brasil com desenvolvimento de aplicações personalizadas.",
    icon: <Rocket size={20} />,
  },
  {
    year: "2021",
    title: "Expansão Internacional",
    description:
      "Primeiros serviços prestados para fora do Brasil - EUA, Austrália e Portugal.",
    icon: <Globe size={20} />,
  },
  {
    year: "2023",
    title: "Nova Base",
    description:
      "Mudamos para União da Vitória e mantemos os serviços remotos para o mundo.",
    icon: <TrendingUp size={20} />,
  },
  {
    year: "2024",
    title: "Era da IA",
    description:
      "Adotamos IA fortemente em todos os processos, transformando nossa operação.",
    icon: <Brain size={20} />,
  },
  {
    year: "2025",
    title: "Crescimento Exponencial",
    description:
      "Muitos clientes conquistados e abrangemos Web3, expandindo nosso portfólio.",
    icon: <Star size={20} />,
  },
  {
    year: "2026",
    title: "Expansão Física",
    description:
      "Escritório físico em União da Vitória e expansão do time em 10x.",
    icon: <Award size={20} />,
  },
];

// Core values
const coreValues = [
  {
    icon: <Brain size={24} />,
    title: "Inteligência Acionável",
    description:
      "Transformamos dados complexos em insights claros que impulsionam decisões estratégicas reais.",
    color: "blue",
  },
  {
    icon: <Target size={24} />,
    title: "Foco no Resultado",
    description:
      "Cada linha de código, cada modelo de IA, cada dashboard é projetado para gerar impacto mensurável.",
    color: "green",
  },
  {
    icon: <Shield size={24} />,
    title: "Confiabilidade",
    description:
      "Desenvolvemos soluções robustas, seguras e escaláveis que crescem junto com seu negócio.",
    color: "orange",
  },
  {
    icon: <Heart size={24} />,
    title: "Parceria Verdadeira",
    description:
      "Não somos apenas fornecedores. Somos aliados estratégicos no seu caminho para o futuro.",
    color: "red",
  },
];

// Team expertise areas
const expertiseAreas = [
  {
    icon: <Database size={20} />,
    title: "Engenharia de Dados",
    description:
      "Estruturação, governança e pipeline de dados para IA de alta performance.",
  },
  {
    icon: <Brain size={20} />,
    title: "Machine Learning",
    description:
      "Modelos preditivos e algoritmos inteligentes para automação de processos críticos.",
  },
  {
    icon: <Code size={20} />,
    title: "Desenvolvimento Full-Stack",
    description:
      "Aplicações web modernas, APIs robustas e integrações seamless.",
  },
  {
    icon: <Globe size={20} />,
    title: "Arquitetura Cloud",
    description:
      "Soluções escaláveis em AWS, Azure e Google Cloud com foco em performance.",
  },
];

export default function SobrePage() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Section py={{ base: 20, md: 32 }}>
        <Container maxW="7xl">
          <VStack
            gap={{ base: 8, md: 12 }}
            textAlign="center"
            maxW="5xl"
            mx="auto"
          >
            <VStack gap={6}>
              <Badge
                variant="outline"
                colorPalette="blue"
                size="lg"
                px={4}
                py={2}
                rounded="full"
                fontSize="sm"
                fontWeight="400"
                borderColor="blue.500"
                color="blue.500"
                bg="transparent"
              >
                <Lightbulb size={14} style={{ marginRight: "8px" }} />
                Sobre a Shift+G
              </Badge>

              <Heading
                as="h1"
                size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="300"
                lineHeight="shorter"
                letterSpacing="tight"
                color="fg"
              >
                Inteligência que Gera{" "}
                <Text as="span" color="blue.500" fontWeight="400">
                  Autonomia
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="fg.muted"
                maxW="3xl"
                lineHeight="tall"
                fontWeight="300"
              >
                Não apenas entregamos software. Construímos a ponte entre seus
                dados e as decisões estratégicas que definem o futuro do seu
                negócio.
              </Text>
            </VStack>

            <HStack gap={4} flexWrap="wrap" justify="center">
              <Link href="#nossa-historia">
                <Button
                  size="xl"
                  colorPalette="blue"
                  variant="outline"
                  borderColor="blue.500"
                  color="blue.500"
                  _hover={{ bg: "blue.500", color: "white" }}
                  rounded="full"
                  px={8}
                >
                  Nossa História
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Section>

      {/* Our Story Section */}
      <Section
        id="nossa-historia"
        title="A transformação que sua empresa precisa"
        subtitle="Em um mundo corporativo que exige velocidade e precisão, líderes ainda se veem presos a processos manuais e sistemas desconectados."
        centered
        py={{ base: 16, md: 24 }}
        bg="bg.subtle"
      >
        <VStack gap={{ base: 12, md: 20 }} maxW="5xl" mx="auto">
          <VStack gap={8} textAlign="center" maxW="3xl" mx="auto">
            <Text fontSize="xl" color="fg.muted" lineHeight="tall" fontWeight="300">
              <Text as="strong" color="fg" fontWeight="500">
                Nosso nome é nossa filosofia:
              </Text>{" "}
              <Text as="span" color="blue.500">
                Shift
              </Text>{" "}
              representa a mudança. O{" "}
              <Text as="span" color="blue.500">
                G
              </Text>{" "}
              vem de{" "}
              <Text as="em" fontStyle="normal" color="fg">
                Gnosis
              </Text>{" "}
              - conhecimento profundo que gera sabedoria acionável.
            </Text>
          </VStack>

          {/* Timeline */}
          <Box w="full">
            <Timeline.Root size="xl" variant="outline" colorPalette="blue">
              {timelineEvents.map((event, index) => (
                <Timeline.Item key={event.year}>
                  {/* Alternating layout */}
                  {index % 2 === 0 ? (
                    // Left side content
                    <>
                      <Timeline.Content flex="1" />
                      <Timeline.Connector>
                        <Timeline.Separator borderColor="border" />
                        <Timeline.Indicator
                          bg="bg"
                          borderColor="blue.500"
                          color="blue.500"
                        >
                          {event.icon}
                        </Timeline.Indicator>
                      </Timeline.Connector>
                      <Timeline.Content flex="1" py={4}>
                        <VStack gap={2} align="flex-start">
                          <Badge
                            variant="outline"
                            colorPalette="blue"
                            size="md"
                            borderColor="blue.500"
                          >
                            {event.year}
                          </Badge>
                          <Timeline.Title fontWeight="500" fontSize="xl" color="fg">
                            {event.title}
                          </Timeline.Title>
                          <Timeline.Description
                            color="fg.muted"
                            fontSize="md"
                            lineHeight="tall"
                          >
                            {event.description}
                          </Timeline.Description>
                        </VStack>
                      </Timeline.Content>
                    </>
                  ) : (
                    // Right side content
                    <>
                      <Timeline.Content flex="1" alignItems="flex-end" py={4}>
                        <VStack gap={2} align="flex-end">
                          <Badge
                            variant="outline"
                            colorPalette="blue"
                            size="md"
                            borderColor="blue.500"
                          >
                            {event.year}
                          </Badge>
                          <Timeline.Title
                            fontWeight="500"
                            fontSize="xl"
                            textAlign="right"
                            color="fg"
                          >
                            {event.title}
                          </Timeline.Title>
                          <Timeline.Description
                            color="fg.muted"
                            fontSize="md"
                            lineHeight="tall"
                            textAlign="right"
                          >
                            {event.description}
                          </Timeline.Description>
                        </VStack>
                      </Timeline.Content>
                      <Timeline.Connector>
                        <Timeline.Separator borderColor="border" />
                        <Timeline.Indicator
                          bg="bg"
                          borderColor="blue.500"
                          color="blue.500"
                        >
                          {event.icon}
                        </Timeline.Indicator>
                      </Timeline.Connector>
                      <Timeline.Content flex="1" />
                    </>
                  )}
                </Timeline.Item>
              ))}
            </Timeline.Root>
          </Box>
        </VStack>
      </Section>

      {/* Core Values Section */}
      <Section
        title="Nossos Valores Fundamentais"
        subtitle="Princípios que guiam cada decisão."
        centered
        py={{ base: 16, md: 24 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 6, md: 8 }}
          maxW="5xl"
          mx="auto"
        >
          {coreValues.map((value) => (
            <Box
              key={value.title}
              p={{ base: 8, md: 10 }}
              rounded="xl"
              bg="transparent"
              border="1px solid"
              borderColor="border"
              transition="all 0.3s ease"
              _hover={{
                borderColor: "blue.500",
                bg: "blue.500/5"
              }}
            >
              <VStack gap={6} align="flex-start">
                <Flex
                  align="center"
                  justify="center"
                  w="12"
                  h="12"
                  rounded="lg"
                  bg="bg.subtle"
                  color="fg"
                  border="1px solid"
                  borderColor="border"
                >
                  {value.icon}
                </Flex>
                <VStack gap={3} align="flex-start">
                  <Heading as="h3" size="lg" fontWeight="400" color="fg">
                    {value.title}
                  </Heading>
                  <Text color="fg.muted" fontSize="md" lineHeight="tall">
                    {value.description}
                  </Text>
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      {/* Expertise Section */}
      <Section
        title="Nossa Expertise Técnica"
        subtitle="Tecnologia de ponta para soluções reais."
        centered
        bg="bg.subtle"
        py={{ base: 16, md: 24 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={{ base: 6, md: 8 }}
          maxW="7xl"
          mx="auto"
        >
          {expertiseAreas.map((area) => (
            <Box
              key={area.title}
              p={8}
              rounded="xl"
              bg="bg"
              border="1px solid"
              borderColor="border"
              height="full"
              transition="all 0.2s"
              _hover={{ borderColor: "blue.500" }}
            >
              <VStack gap={4} align="flex-start" height="full">
                <Box color="blue.500">
                  {area.icon}
                </Box>
                <Heading as="h3" size="md" fontWeight="500">
                  {area.title}
                </Heading>
                <Text color="fg.muted" fontSize="sm" lineHeight="relaxed">
                  {area.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      {/* Careers Bridge Section */}
      <Section py={{ base: 20, md: 32 }}>
        <Container maxW="7xl">
          <Box
            rounded="2xl"
            border="1px solid"
            borderColor="border"
            p={{ base: 8, md: 16 }}
            textAlign="center"
            bgGradient="linear(to-b, bg.subtle, transparent)"
          >
            <VStack gap={8}>
              <VStack gap={4}>
                <Heading as="h2" size="3xl" fontWeight="300">
                  Construa o Futuro Conosco
                </Heading>
                <Text fontSize="xl" color="fg.muted" maxW="2xl" mx="auto">
                  Estamos sempre em busca de mentes brilhantes que compartilham nossa paixão por inovação e excelência.
                </Text>
              </VStack>

              <Link href="/carreiras">
                <Button
                  size="xl"
                  colorPalette="blue"
                  variant="solid"
                  rounded="full"
                  px={10}
                >
                  Ver Oportunidades
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </VStack>
          </Box>
        </Container>
      </Section>

      <Footer />
    </Page>
  );
}
