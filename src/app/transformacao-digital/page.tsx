import { Metadata } from "next";
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Stack,
  Table,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { FeatureCard } from "@/components/cards/feature-card";
import {
  Zap,
  Target,
  Shield,
  Rocket,
  TrendingUp,
  Database,
  Settings,
  Brain,
  Search,
  Layers,
  Code,
  TestTube,
  ChevronRight,
  Mail,
  Calendar,
  AlertTriangle,
  FileText,
  Users,
  Lightbulb,
  CheckCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_EMAIL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: `Transformação Digital | ${SITE_NAME}`,
  description:
    "Conduza sua empresa em uma jornada completa de modernização. Da estratégia à execução, integramos tecnologia, processos e pessoas para gerar agilidade, inteligência e crescimento sustentável.",
  keywords: [
    "transformação digital",
    "modernização de processos",
    "consultoria digital",
    "arquitetura de sistemas",
    "digitalização empresarial",
    "inovação tecnológica",
    "automação de processos",
    "sistemas integrados",
    "estratégia digital",
    "maturidade digital",
  ],
  openGraph: {
    title: `Transformação Digital | ${SITE_NAME}`,
    description:
      "Da estratégia à execução, o futuro do seu negócio começa agora. Jornada completa de modernização com tecnologia, processos e pessoas.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/transformacao-digital`,
    siteName: `${SITE_NAME} - Transformação Digital`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Transformação Digital | ${SITE_NAME}`,
    description:
      "Da estratégia à execução, o futuro do seu negócio começa agora. Jornada completa de modernização com tecnologia, processos e pessoas.",
  },
};

const challenges = [
  {
    title: "Sistemas Legados",
    description:
      "Tecnologias antigas que não se comunicam e criam silos de informação.",
    icon: <Database size={24} />,
  },
  {
    title: "Processos Manuais",
    description:
      "Workflows baseados em papel e planilhas que são lentos, caros e propensos a erros.",
    icon: <FileText size={24} />,
  },
  {
    title: "Decisões sem Dados",
    description:
      "Uma cultura onde a intuição supera a análise, gerando incerteza e perda de oportunidades.",
    icon: <AlertTriangle size={24} />,
  },
  {
    title: "Dificuldade para Inovar",
    description:
      "Falta de conhecimento técnico ou de um parceiro capaz de traduzir ideias em soluções funcionais.",
    icon: <Lightbulb size={24} />,
  },
];

const pillars = [
  {
    number: "01",
    title: "Consultoria Estratégica & Diagnóstico",
    description:
      "Antes de construir, planejamos. Analisamos seus processos, sistemas e desafios para identificar as oportunidades de maior impacto.",
    features: [
      "Análise de Maturidade Digital",
      "Mapeamento de Processos (As-Is & To-Be)",
      "Roadmap Tecnológico",
    ],
    icon: <Search size={24} />,
  },
  {
    number: "02",
    title: "Desenho de Soluções e Arquitetura de Sistemas",
    description:
      "Traduzimos a estratégia em um plano técnico. Desenhamos a arquitetura da solução ideal, seja ela a integração de sistemas existentes, a adoção de uma nova plataforma ou o desenvolvimento de um software sob medida.",
    features: [
      "Arquitetura de Soluções",
      "Integração de Sistemas",
      "Plataformas Customizadas",
    ],
    icon: <Layers size={24} />,
  },
  {
    number: "03",
    title: "Provas de Conceito (PoC) & MVP",
    description:
      "Reduzimos os riscos e aceleramos o aprendizado. Antes de grandes investimentos, construímos versões simplificadas da solução (PoCs ou MVPs) para validar hipóteses, testar a viabilidade técnica e comprovar o ROI em um ambiente controlado.",
    features: [
      "Validação de Hipóteses",
      "Testes de Viabilidade",
      "Comprovação de ROI",
    ],
    icon: <TestTube size={24} />,
  },
  {
    number: "04",
    title: "Implementação e Desenvolvimento",
    description:
      "É aqui que a transformação se torna realidade. Com nossas equipes de Fábrica de Software e Dados & IA, construímos, integramos e implementamos as ferramentas que sua operação precisa para saltar para o próximo nível.",
    features: [
      "Desenvolvimento Sob Medida",
      "Implementação Completa",
      "Suporte Especializado",
    ],
    icon: <Code size={24} />,
  },
];

const differentials = [
  {
    title: "Visão 360°",
    description:
      "Unimos a visão estratégica de uma consultoria com a capacidade técnica de uma fábrica de software e a inteligência de uma casa de IA.",
    benefit: "Solução completa do diagnóstico à implementação",
  },
  {
    title: "Pragmatismo e Foco no ROI",
    description:
      "Priorizamos ações que geram valor rápido. Nossa abordagem com PoCs e MVPs garante que seu investimento tenha retorno comprovado.",
    benefit: "Resultados mensuráveis em curto prazo",
  },
  {
    title: "Independência Tecnológica",
    description:
      "Não somos revendedores de nenhuma marca. Nossa única lealdade é com a melhor solução para o seu desafio específico.",
    benefit: "Imparcialidade e flexibilidade total",
  },
  {
    title: "Parceria de Longo Prazo",
    description:
      "Nosso objetivo não é entregar um projeto, mas construir uma parceria que apoie a evolução contínua do seu negócio.",
    benefit: "Evolução constante e suporte contínuo",
  },
];

export default function DigitalTransformationPage() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        minH="90vh"
        display="flex"
        alignItems="center"
        bg="bg"
      >
        {/* Background Elements */}
        <Box
          position="absolute"
          top="15%"
          right="8%"
          w="180px"
          h="180px"
          borderRadius="full"
          bg="{colors.blue.500/5}"
          backdropFilter="blur(10px)"
          animation="float 12s ease-in-out infinite"
          zIndex={0}
        />
        <Box
          position="absolute"
          bottom="20%"
          left="5%"
          w="120px"
          h="120px"
          borderRadius="xl"
          bg="{colors.blue.500/5}"
          backdropFilter="blur(10px)"
          animation="float 8s ease-in-out infinite reverse"
          zIndex={0}
        />

        <Container maxW="7xl" py={{ base: 16, md: 24 }} position="relative" zIndex={1}>
          <VStack gap={{ base: 8, md: 12 }} maxW="6xl" mx="auto" textAlign="center">
            {/* Badge */}
            <Box
              px={4}
              py={2}
              rounded="full"
              bg="{colors.blue.500/10}"
              border="1px solid {colors.blue.500/20}"
            >
              <Text
                fontSize="sm"
                fontWeight="300"
                color="blue.solid"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Transformação Digital
              </Text>
            </Box>

            {/* Title */}
            <VStack gap={4}>
              <Heading
                as="h1"
                size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="300"
                lineHeight="none"
                letterSpacing="tight"
                color="fg"
              >
                Da{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                  bgClip="text"
                >
                  Estratégia
                </Text>{" "}
                à Execução
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="5xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Conduza sua empresa em uma jornada completa de modernização,
                integrando tecnologia, processos e pessoas para gerar agilidade,
                inteligência e crescimento sustentável.
              </Text>
            </VStack>

            {/* Stats */}
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 4, md: 8 }} w="full" maxW="3xl">
              {[
                { value: "360°", label: "Visão Completa" },
                { value: "PoC", label: "Validação Rápida" },
                { value: "ROI", label: "Garantido" },
                { value: "24/7", label: "Suporte" },
              ].map((stat) => (
                <Box key={stat.label} textAlign="center">
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="300"
                    color="blue.solid"
                    lineHeight="none"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="fg.muted"
                    fontWeight="300"
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* CTA */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              gap={4}
              w={{ base: "full", sm: "auto" }}
              mt={6}
            >
              <Link href="#diagnostico" passHref>
                <Button
                  size="xl"
                  px={8}
                  py={6}
                  variant="solid"
                  colorPalette="blue"
                >
                  Diagnóstico de Maturidade Digital
                  <ChevronRight size={20} style={{ marginLeft: "12px" }} />
                </Button>
              </Link>
            </Stack>

            <Text fontSize="lg" color="fg.muted" fontWeight="500">
              Consultoria gratuita • Roadmap personalizado
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Challenges Section */}
      <Section
        title="O Ritmo da Mudança Acelerou. Sua Empresa Está Preparada?"
        subtitle="No cenário atual, a inércia é o maior risco. Clientes esperam experiências digitais fluidas, concorrentes inovam em velocidade recorde e a eficiência operacional se tornou uma questão de sobrevivência."
        centered
        variant="gradient"
      >
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="fg.muted"
          textAlign="center"
          mb={{ base: 8, md: 12 }}
          maxW="4xl"
          mx="auto"
        >
          Muitos líderes se sentem paralisados por desafios como:
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {challenges.map((challenge, index) => (
            <FeatureCard
              key={challenge.title}
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.description}
              highlighted={index === 0}
            />
          ))}
        </SimpleGrid>

        <Box
          mt={{ base: 8, md: 12 }}
          p={{ base: 6, md: 8 }}
          rounded="2xl"
          bg="{colors.blue.500/10}"
          border="1px solid {colors.blue.500/20}"
          textAlign="center"
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="300"
            color="blue.solid"
          >
            A questão não é mais <Text as="span" fontStyle="italic">se</Text> transformar,
            mas <Text as="span" fontWeight="300">como</Text> fazer isso de forma inteligente
            e com o parceiro certo.
          </Text>
        </Box>
      </Section>

      {/* Approach Section */}
      <Section
        title="Nossa Abordagem: Uma Jornada de Transformação Guiada"
        subtitle="A verdadeira transformação digital vai além de adotar uma nova ferramenta. É uma mudança de mentalidade, impulsionada pela tecnologia certa."
        centered
      >
        <VStack gap={{ base: 8, md: 12 }}>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            textAlign="center"
            maxW="5xl"
            mx="auto"
            lineHeight="tall"
          >
            Na Shift+G, não vendemos soluções de prateleira; co-criamos o caminho
            para o futuro do seu negócio. Mais do que um fornecedor, somos o seu{" "}
            <Text as="span" fontWeight="300" color="blue.solid">
              arquiteto e executor da jornada digital
            </Text>.
          </Text>

          <Box
            p={{ base: 6, md: 8 }}
            rounded="2xl"
            bg="{colors.whiteAlpha.50}"
            border="1px solid {colors.whiteAlpha.200}"
            textAlign="center"
            maxW="4xl"
            mx="auto"
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="300"
              color="fg"
            >
              Nossa abordagem é completa: do diagnóstico que revela os maiores
              gargalos à implementação da tecnologia que irá eliminá-los.
            </Text>
          </Box>
        </VStack>
      </Section>

      {/* Pillars Section */}
      <Section
        title="Nossos Pilares para uma Transformação de Sucesso"
        subtitle="Oferecemos um portfólio de serviços end-to-end, adaptado ao nível de maturidade e aos objetivos da sua empresa."
        centered
        variant="glass"
      >
        <VStack gap={{ base: 12, md: 16 }}>
          {pillars.map((pillar, index) => (
            <Box
              key={pillar.number}
              w="full"
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              bg={index % 2 === 0 ? "{colors.blue.500/10}" : "{colors.whiteAlpha.50}"}
              border="1px solid"
              borderColor={index % 2 === 0 ? "{colors.blue.500/20}" : "{colors.whiteAlpha.200}"}
            >
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }} alignItems="center">
                <VStack align="flex-start" gap={6}>
                  <HStack gap={4}>
                    <Box
                      px={4}
                      py={2}
                      rounded="full"
                      bg="{colors.blue.500}"
                      color="white"
                      fontSize="lg"
                      fontWeight="300"
                    >
                      {pillar.number}
                    </Box>
                    <Box
                      p={3}
                      rounded="xl"
                      bg={index % 2 === 0 ? "{colors.blue.500}" : "{colors.blue.500/10}"}
                      color={index % 2 === 0 ? "white" : "blue.solid"}
                    >
                      {pillar.icon}
                    </Box>
                  </HStack>
                  <VStack align="flex-start" gap={4}>
                    <Heading
                      as="h3"
                      size={{ base: "lg", md: "xl" }}
                      fontWeight="300"
                      color="fg"
                    >
                      {pillar.title}
                    </Heading>
                    <Text
                      color="fg.muted"
                      fontSize="lg"
                      lineHeight="tall"
                    >
                      {pillar.description}
                    </Text>
                  </VStack>
                </VStack>

                <VStack align="flex-start" gap={4}>
                  <Text fontWeight="300" color="fg" fontSize="lg">
                    Principais Entregas:
                  </Text>
                  <VStack align="flex-start" gap={3}>
                    {pillar.features.map((feature) => (
                      <HStack key={feature} gap={3}>
                        <CheckCircle size={20} color="{colors.blue.500}" />
                        <Text color="fg.muted" fontSize="md">
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </SimpleGrid>
            </Box>
          ))}
        </VStack>
      </Section>

      {/* Differentials Section */}
      <Section
        title="Shift+G: O Parceiro que Constrói, Não Apenas Aconselha"
        subtitle="Muitos podem criar um plano. Poucos podem executá-lo com excelência. Nosso grande diferencial é a capacidade de acompanhar sua empresa do início ao fim."
        centered
        variant="geometric"
      >
        <Box
          w="full"
          overflowX="auto"
          rounded="2xl"
          border="1px solid {colors.whiteAlpha.200}"
          bg="{colors.whiteAlpha.50}"
        >
          <Table.Root size="lg">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader
                  p={6}
                  fontSize="lg"
                  fontWeight="300"
                  color="blue.solid"
                  bg="{colors.blue.500/10}"
                >
                  Diferencial
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  p={6}
                  fontSize="lg"
                  fontWeight="300"
                  color="blue.solid"
                  bg="{colors.blue.500/10}"
                >
                  O que isso significa para você
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {differentials.map((diff, index) => (
                <Table.Row
                  key={diff.title}
                  _hover={{ bg: "{colors.blue.500/5}" }}
                  transition="all 0.2s ease"
                >
                  <Table.Cell p={6} verticalAlign="top">
                    <VStack align="flex-start" gap={2}>
                      <Text fontWeight="300" color="fg" fontSize="lg">
                        {diff.title}
                      </Text>
                      <Text color="fg.muted" fontSize="md" lineHeight="tall">
                        {diff.description}
                      </Text>
                    </VStack>
                  </Table.Cell>
                  <Table.Cell p={6} verticalAlign="top">
                    <HStack gap={3}>
                      <Target size={20} color="{colors.blue.500}" />
                      <Text color="fg" fontSize="md" fontWeight="300">
                        {diff.benefit}
                      </Text>
                    </HStack>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Section>

      {/* Final CTA Section */}
      <Box
        as="section"
        id="diagnostico"
        py={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        {/* Dynamic Background */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="radial-gradient(ellipse 100% 60% at 50% 0%, {colors.blue.500/50}, transparent)"
          _dark={{
            bgGradient:
              "radial-gradient(ellipse 100% 60% at 50% 0%, {colors.blue.500/20}, transparent)",
          }}
          zIndex={-1}
        />

        <Container maxW="5xl">
          <VStack gap={{ base: 8, md: 12 }} textAlign="center">
            <VStack gap={6}>
              <Heading
                as="h2"
                size={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="300"
                lineHeight="none"
                letterSpacing="tight"
              >
                Qual é o Próximo{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                  bgClip="text"
                >
                  'Shift'
                </Text>{" "}
                da sua Empresa?
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Não deixe sua empresa reagir ao futuro. Comece a construí-lo hoje.
                O primeiro passo é entender seu ponto de partida e o potencial
                que a tecnologia pode destravar.
              </Text>
            </VStack>

            <VStack gap={8} w="full" maxW="lg">
              <Link
                href={`https://wa.me/${SITE_PHONE.replace(/[^\d]/g, "")}`}
                target="_blank"
                passHref
              >
                <Button
                  size="xl"
                  px={{ base: 4, sm: 6 }}
                  py={8}
                  rounded="2xl"
                  fontWeight="300"
                  fontSize="xl"
                  variant="solid"
                  colorPalette="blue"
                  w={{ base: "full", sm: "auto" }}
                >
                  <Calendar size={20} style={{ marginRight: "12px" }} />
                  Agendar Diagnóstico de Maturidade Digital
                  <ChevronRight size={20} style={{ marginLeft: "12px" }} />
                </Button>
              </Link>

              <HStack gap={6} wrap="wrap" justify="center">
                <Box
                  px={6}
                  py={3}
                  rounded="xl"
                  bg="{colors.whiteAlpha.200}"
                  backdropFilter="blur(20px)"
                  border="1px solid {colors.whiteAlpha.300}"
                >
                  <HStack gap={3} justify="center">
                    <Clock size={18} color="blue.500" />
                    <Text fontSize="md" color="fg.muted" fontWeight="500">
                      Diagnóstico gratuito de 60 minutos
                    </Text>
                  </HStack>
                </Box>

                <Box
                  px={6}
                  py={3}
                  rounded="xl"
                  bg="{colors.whiteAlpha.200}"
                  backdropFilter="blur(20px)"
                  border="1px solid {colors.whiteAlpha.300}"
                >
                  <HStack gap={3} justify="center">
                    <Mail size={18} color="blue.500" />
                    <Text fontSize="md" color="fg.muted" fontWeight="500">
                      <Link href={`mailto:${SITE_EMAIL}`}>
                        <Text
                          as="span"
                          fontWeight="300"
                          color="blue.solid"
                          _hover={{ textDecoration: "underline" }}
                        >
                          {SITE_EMAIL}
                        </Text>
                      </Link>
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Page>
  );
}
