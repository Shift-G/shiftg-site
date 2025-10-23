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
  Stack,
  Badge,
  Flex,
  Circle,
  Icon,
  Timeline,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { FeatureCard } from "@/components/cards/feature-card";
import {
  Zap,
  Users,
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
  ChevronRight,
  Star,
  Award,
  Clock,
  CheckCircle,
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
      <Section py={{ base: 16, md: 24 }} variant="geometric">
        <Container maxW="7xl">
          <VStack
            gap={{ base: 8, md: 12 }}
            textAlign="center"
            maxW="5xl"
            mx="auto"
          >
            <VStack gap={6}>
              <Badge
                variant="subtle"
                colorPalette="blue"
                size="lg"
                px={4}
                py={2}
                rounded="full"
                fontSize="sm"
                fontWeight="300"
              >
                <Lightbulb size={16} style={{ marginRight: "8px" }} />
                Sobre a Shift+G
              </Badge>

              <Heading
                as="h1"
                size={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="300"
                lineHeight="shorter"
                letterSpacing="tight"
                bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                bgClip="text"
              >
                Inteligência que Gera{" "}
                <Text as="span" color="blue.solid">
                  Autonomia
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Não apenas entregamos software. Construímos a ponte entre seus
                dados e as decisões estratégicas que definem o futuro do seu
                negócio.
              </Text>
            </VStack>

            <HStack gap={4} flexWrap="wrap" justify="center">
              <Link href="#nossa-historia">
                <Button size="lg" colorPalette="blue" variant="solid">
                  Nossa História
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="#contato">
                <Button size="lg" variant="outline" colorPalette="gray">
                  Fale Conosco
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
        subtitle="Em um mundo corporativo que exige velocidade e precisão, líderes ainda se veem presos a processos manuais e sistemas desconectados. É aqui que entramos."
        centered
      >
        <VStack gap={{ base: 8, md: 12 }} maxW="4xl" mx="auto">
          <VStack gap={6} textAlign="center">
            <Text fontSize="lg" color="fg.muted" lineHeight="tall">
              <Text as="strong" color="fg">
                Nosso nome é nossa filosofia:
              </Text>{" "}
              <Text as="span" color="blue.solid" fontWeight="300">
                Shift
              </Text>{" "}
              representa a mudança - assim como a tecla Shift no teclado
              transforma o comportamento de outras teclas, nós transformamos
              negócios. O{" "}
              <Text as="span" color="blue.solid" fontWeight="300">
                G
              </Text>{" "}
              vem de{" "}
              <Text as="em" fontWeight="300">
                Gnosis
              </Text>{" "}
              - conhecimento profundo que gera sabedoria acionável.
            </Text>

            <Text fontSize="lg" color="fg.muted" lineHeight="tall">
              Nascemos para ser a fábrica de software que resolve desafios
              complexos com soluções sob medida, devolvendo o controle da
              operação para quem mais precisa dele:{" "}
              <Text as="strong" color="fg">
                você
              </Text>
              .
            </Text>
          </VStack>

          {/* Timeline */}
          <Box w="full" maxW="4xl" mx="auto">
            <Timeline.Root size="xl" variant="outline" colorPalette="blue">
              {timelineEvents.map((event, index) => (
                <Timeline.Item key={event.year}>
                  {/* Alternating layout */}
                  {index % 2 === 0 ? (
                    // Left side content
                    <>
                      <Timeline.Content flex="1" />
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator>{event.icon}</Timeline.Indicator>
                      </Timeline.Connector>
                      <Timeline.Content flex="1">
                        <VStack gap={3} align="flex-start">
                          <Badge variant="subtle" colorPalette="blue" size="sm">
                            {event.year}
                          </Badge>
                          <Timeline.Title fontWeight="300" fontSize="lg">
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
                      <Timeline.Content flex="1" alignItems="flex-end">
                        <VStack gap={3} align="flex-end">
                          <Badge variant="subtle" colorPalette="blue" size="sm">
                            {event.year}
                          </Badge>
                          <Timeline.Title
                            fontWeight="300"
                            fontSize="lg"
                            textAlign="right"
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
                        <Timeline.Separator />
                        <Timeline.Indicator>{event.icon}</Timeline.Indicator>
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
        subtitle="Os princípios que guiam cada decisão, cada linha de código e cada relacionamento que construímos."
        centered
        variant="gradient"
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
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              bg="bg.subtle"
              border="1px"
              borderColor="border"
              _hover={{
                borderColor: "blue.200",
                transform: "translateY(-4px)",
              }}
              transition="all 0.3s ease"
            >
              <VStack gap={4} align="flex-start">
                <Circle
                  size="64px"
                  bg={`${value.color}.500/10`}
                  color={`${value.color}.solid`}
                >
                  {value.icon}
                </Circle>
                <VStack gap={2} align="flex-start">
                  <Heading as="h3" size="lg" fontWeight="300" color="fg">
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
        subtitle="Uma equipe multidisciplinar com profundo conhecimento em tecnologias de ponta para entregar soluções que realmente funcionam."
        centered
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={{ base: 6, md: 8 }}
        >
          {expertiseAreas.map((area) => (
            <FeatureCard
              key={area.title}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </SimpleGrid>
      </Section>

      {/* Final CTA Section */}
      <Section
        title="Pronto para fazer o Shift?"
        subtitle="Se você busca transformar seus desafios operacionais em vantagem competitiva, reduzir custos e tomar decisões baseadas em dados, somos o parceiro ideal."
        centered
        variant="geometric"
      >
        <VStack gap={8} maxW="3xl" mx="auto">
          <VStack gap={4}>
            <Text
              fontSize="lg"
              color="fg.muted"
              textAlign="center"
              lineHeight="tall"
            >
              Nossa abordagem vai além da tecnologia: entendemos seu negócio,
              seus desafios e suas ambições. Cada solução é desenhada para gerar
              impacto real e mensurável.
            </Text>
          </VStack>

          <HStack gap={4} flexWrap="wrap" justify="center">
            <Link href="#contato">
              <Button size="lg" colorPalette="blue" variant="solid">
                Fale com nossos especialistas
                <ChevronRight size={18} />
              </Button>
            </Link>
            <Link href="/insights">
              <Button size="lg" variant="outline" colorPalette="gray">
                Explore nossos insights
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Section>

      <Footer />
    </Page>
  );
}
