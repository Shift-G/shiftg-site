import { Metadata } from "next";
import {
  Box,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Plumb } from "@/components/ui/plumb";
import { CTAFinalSection } from "@/components/sections/cta-final-section";
import {
  Rocket,
  Globe,
  TrendingUp,
  Brain,
  Star,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `Sobre | ${SITE_NAME} — Inteligência que Gera Autonomia`,
  description:
    "Conheça a Shift+G: elevamos a maturidade tecnológica da sua organização com consultoria, IA, treinamento e desenvolvimento. Da pedra bruta à pedra polida.",
  keywords: [
    "sobre shift+g",
    "inteligência artificial",
    "consultoria tecnológica",
    "transformação digital",
    "maturidade tecnológica",
    "IA aplicada",
  ],
  alternates: {
    canonical: `${SITE_URL}/sobre`,
  },
  openGraph: {
    title: `Sobre | ${SITE_NAME} — Inteligência que Gera Autonomia`,
    description:
      "Conheça a Shift+G: elevamos a maturidade tecnológica da sua organização.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/sobre`,
    siteName: SITE_NAME,
  },
};

/* ── Section Tag ── */
function SectionTag({ children }: { children: string }) {
  return (
    <HStack
      fontFamily="mono"
      fontSize="2xs"
      fontWeight={600}
      letterSpacing="0.16em"
      textTransform="uppercase"
      color="blue.solid"
      gap="10px"
      mb={4}
    >
      <Box w="18px" h="1.5px" bg="blue.solid" />
      <Text>{children}</Text>
    </HStack>
  );
}

/* ── Timeline data ── */
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2020",
    title: "Fundação",
    description:
      "A empresa nasceu para atender clientes no Brasil com desenvolvimento de aplicações personalizadas.",
    icon: <Rocket size={16} />,
  },
  {
    year: "2021",
    title: "Expansão Internacional",
    description:
      "Primeiros serviços prestados para fora do Brasil — EUA, Austrália e Portugal.",
    icon: <Globe size={16} />,
  },
  {
    year: "2023",
    title: "Nova Base",
    description:
      "Mudamos para União da Vitória e mantemos os serviços remotos para o mundo.",
    icon: <TrendingUp size={16} />,
  },
  {
    year: "2024",
    title: "Era da IA",
    description:
      "Adotamos IA fortemente em todos os processos, transformando nossa operação.",
    icon: <Brain size={16} />,
  },
  {
    year: "2025",
    title: "Crescimento Exponencial",
    description:
      "Muitos clientes conquistados e abrangemos Web3, expandindo nosso portfólio.",
    icon: <Star size={16} />,
  },
  {
    year: "2026",
    title: "Expansão Física",
    description:
      "Escritório físico em União da Vitória e expansão do time em 10x.",
    icon: <Award size={16} />,
  },
];

/* ── Core values ── */
interface ValueData {
  virtue: string;
  title: string;
  description: string;
}

const coreValues: ValueData[] = [
  {
    virtue: "Sabedoria",
    title: "Inteligência Acionável",
    description:
      "Transformamos dados complexos em insights claros que impulsionam decisões estratégicas reais. Não entregamos relatórios — entregamos direção.",
  },
  {
    virtue: "Precisão",
    title: "Foco no Resultado",
    description:
      "Cada linha de código, cada modelo de IA, cada dashboard é projetado para gerar impacto mensurável. Sem excesso. Sem desperdício.",
  },
  {
    virtue: "Força",
    title: "Confiabilidade",
    description:
      "Desenvolvemos soluções robustas, seguras e escaláveis que crescem junto com seu negócio. Construímos para durar.",
  },
  {
    virtue: "Beleza",
    title: "Parceria Verdadeira",
    description:
      "Não somos apenas fornecedores. Somos aliados estratégicos no seu caminho para o futuro. Entramos fundo na operação.",
  },
];

/* ── Expertise areas ── */
interface ExpertiseData {
  number: string;
  title: string;
  description: string;
}

const expertiseAreas: ExpertiseData[] = [
  {
    number: "01",
    title: "Engenharia de Dados",
    description:
      "Estruturação, governança e pipeline de dados para IA de alta performance.",
  },
  {
    number: "02",
    title: "Machine Learning",
    description:
      "Modelos preditivos e algoritmos inteligentes para automação de processos críticos.",
  },
  {
    number: "03",
    title: "Desenvolvimento Full-Stack",
    description:
      "Aplicações web modernas, APIs robustas e integrações seamless.",
  },
  {
    number: "04",
    title: "Arquitetura Cloud",
    description:
      "Soluções escaláveis em AWS, Azure e Google Cloud com foco em performance.",
  },
];

/* ── Timeline Step component ── */
function TimelineStep({ event }: { event: TimelineEvent }) {
  return (
    <Grid
      templateColumns="44px 1fr"
      gap="22px"
      py="22px"
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
      alignItems="start"
    >
      <Text
        fontFamily="mono"
        fontSize="xs"
        fontWeight={500}
        color="gray.emphasized"
        letterSpacing="0.06em"
        pt="3px"
      >
        {event.year}
      </Text>
      <Box>
        <Text
          fontSize="md"
          fontWeight={700}
          color="fg"
          letterSpacing="-0.2px"
          mb="3px"
        >
          {event.title}
        </Text>
        <Text fontSize="sm" color="fg.muted" lineHeight={1.68}>
          {event.description}
        </Text>
      </Box>
    </Grid>
  );
}

/* ── Value Card ── */
function ValueCard({ value }: { value: ValueData }) {
  return (
    <VStack
      align="flex-start"
      bg="white"
      px={{ base: 6, md: 8 }}
      py={{ base: 8, md: 10 }}
      position="relative"
      overflow="hidden"
      transition="background 0.2s"
      _hover={{ bg: "#fafaf8" }}
    >
      {/* Top gold accent */}
      <Box
        position="absolute"
        top={0}
        left={8}
        right={8}
        h="3px"
        bgGradient="to-r"
        gradientFrom="transparent"
        gradientVia="gold.500"
        gradientTo="transparent"
        opacity={0.35}
      />

      {/* Virtue */}
      <HStack
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={600}
        letterSpacing="0.18em"
        textTransform="uppercase"
        color="gold.500"
        gap={2}
        mb={4}
      >
        <Text opacity={0.5}>—</Text>
        <Text>{value.virtue}</Text>
      </HStack>

      {/* Title */}
      <Text
        fontSize={{ base: "md", md: "lg" }}
        fontWeight={700}
        color="fg"
        letterSpacing="-0.3px"
        mb={2}
      >
        {value.title}
      </Text>

      {/* Description */}
      <Text fontSize="sm" color="fg.muted" lineHeight={1.78}>
        {value.description}
      </Text>
    </VStack>
  );
}

/* ── Expertise Item ── */
function ExpertiseItem({ area }: { area: ExpertiseData }) {
  return (
    <Grid
      templateColumns="44px 1fr"
      gap="22px"
      py="22px"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      alignItems="start"
    >
      <Text
        fontFamily="mono"
        fontSize="xs"
        fontWeight={500}
        color="whiteAlpha.400"
        letterSpacing="0.06em"
        pt="3px"
      >
        {area.number}
      </Text>
      <Box>
        <Text
          fontSize="md"
          fontWeight={700}
          color="white"
          letterSpacing="-0.2px"
          mb="3px"
        >
          {area.title}
        </Text>
        <Text fontSize="sm" color="whiteAlpha.600" lineHeight={1.68}>
          {area.description}
        </Text>
      </Box>
    </Grid>
  );
}

export default function SobrePage() {
  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch">
        {/* ── Hero ── */}
        <Box
          as="section"
          minH={{ base: "60vh", md: "70vh" }}
          bg="white"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          position="relative"
          overflow="hidden"
          px={{ base: 6, md: "60px", lg: "112px" }}
        >
          {/* Background symbol */}
          <Box
            as="svg"
            position="absolute"
            right="-10%"
            top="50%"
            transform="translateY(-50%)"
            w={{ base: "80vw", lg: "56vw" }}
            maxW="1200px"
            opacity={0.03}
            pointerEvents="none"
            color="blue.solid"
            // @ts-ignore
            viewBox="0 0 420 380"
            fill="none"
          >
            <polygon
              points="210,18 404,354 16,354"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
            />
            <polygon
              points="210,65 365,330 55,330"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
            <ellipse
              cx="210"
              cy="222"
              rx="56"
              ry="34"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M154,222 Q210,178 266,222"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M154,222 Q210,266 266,222"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="210"
              cy="222"
              r="22"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="210" cy="222" r="11" fill="currentColor" />
          </Box>

          {/* Hero content */}
          <VStack
            position="relative"
            zIndex={2}
            align="flex-start"
            pt={{ base: "120px", md: "100px" }}
          >
            {/* Stage indicator */}
            <HStack gap={3} mb={{ base: 6, md: "30px" }}>
              <Box w="6px" h="6px" bg="gold.500" />
              <Text
                fontFamily="mono"
                fontSize="2xs"
                fontWeight={600}
                letterSpacing="0.13em"
                textTransform="uppercase"
                color="blue.solid"
              >
                Quem somos
              </Text>
            </HStack>

            {/* Main heading */}
            <Text
              as="h1"
              fontSize={{ base: "42px", md: "clamp(54px, 7.8vw, 116px)" }}
              lineHeight={0.94}
              letterSpacing="-2px"
              color="fg"
              maxW="980px"
              mb={0}
            >
              <Text
                as="span"
                fontFamily="mono"
                fontWeight={700}
                color="blue.solid"
                letterSpacing="-0.04em"
                position="relative"
                display="inline-block"
              >
                Inteligência
                <Box
                  as="span"
                  position="absolute"
                  bottom="6px"
                  left={0}
                  right={0}
                  h="4px"
                  bg="gold.500"
                  opacity={0.45}
                />
              </Text>{" "}
              <Text as="span" fontWeight={800}>
                que
              </Text>
              <br />
              <Text as="span" fontWeight={800}>
                gera{" "}
              </Text>
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="blue.solid"
              >
                autonomia.
              </Text>
            </Text>

            {/* Bottom bar */}
            <Box
              borderTop="1px solid"
              borderColor="blackAlpha.100"
              mt={{ base: 8, md: "44px" }}
              pt={{ base: 6, md: "28px" }}
              pb={{ base: 10, md: "52px" }}
              w="full"
            >
              <Flex
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 7, lg: "48px" }}
                align={{ base: "flex-start", lg: "center" }}
              >
                {/* Description */}
                <Text
                  fontSize="md"
                  color="fg.muted"
                  lineHeight={1.85}
                  flex={1}
                >
                  Não apenas entregamos software. Construímos a ponte entre
                  seus{" "}
                  <Text as="strong" color="fg" fontWeight={500}>
                    dados e as decisões estratégicas
                  </Text>{" "}
                  que definem o futuro do seu negócio.
                </Text>

                {/* CTA */}
                <Box
                  asChild
                  display="inline-flex"
                  alignItems="center"
                  gap="9px"
                  bg="blue.solid"
                  color="white"
                  px={{ base: 6, md: "30px" }}
                  py={{ base: 4, md: "15px" }}
                  fontWeight={600}
                  fontSize="sm"
                  textDecoration="none"
                  whiteSpace="nowrap"
                  transition="all 0.22s"
                  _hover={{ opacity: 0.88, transform: "translateY(-2px)" }}
                >
                  <Link href="/contato">
                    Fale conosco
                    <ArrowRight size={14} />
                  </Link>
                </Box>
              </Flex>
            </Box>
          </VStack>
        </Box>

        {/* Divider */}
        <Plumb />

        {/* ── Nossa Filosofia ── */}
        <Box
          as="section"
          py={{ base: 16, md: "90px" }}
          px={{ base: 6, md: "60px" }}
          bg="white"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "400px 1fr" }}
            gap={{ base: 10, lg: "80px" }}
            alignItems="start"
          >
            {/* Left sidebar */}
            <Box>
              <SectionTag>Filosofia</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
                fontWeight={800}
                lineHeight={1.04}
                letterSpacing="-1.5px"
                color="fg"
              >
                Nosso nome
                <br />
                é nossa{" "}
                <Text
                  as="span"
                  fontFamily="serif"
                  fontWeight={400}
                  fontStyle="italic"
                  color="gray.emphasized"
                >
                  filosofia.
                </Text>
              </Text>

              {/* Callout note */}
              <Box
                mt={7}
                px={5}
                py="18px"
                border="1px solid"
                borderColor="gold.500/22"
                borderLeft="3px solid"
                borderLeftColor="gold.500"
              >
                <Text
                  fontSize="sm"
                  color="fg.muted"
                  lineHeight={1.72}
                  fontStyle="italic"
                >
                  <Text
                    as="strong"
                    color="gold.500"
                    fontStyle="normal"
                    fontWeight={600}
                  >
                    Shift → mudança.
                  </Text>
                  <br />
                  O G vem de Gnosis — conhecimento profundo que gera sabedoria
                  acionável. Todo cliente que nos procura sai diferente.
                </Text>
              </Box>
            </Box>

            {/* Right content */}
            <VStack gap={6} align="stretch" pt={{ base: 0, lg: 10 }}>
              <Text fontSize="md" color="fg.muted" lineHeight={1.88}>
                <Text as="strong" color="fg" fontWeight={500}>
                  Shift
                </Text>{" "}
                é o movimento que separa o que era do que pode ser. A ruptura
                necessária, o salto de maturidade.
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.88}>
                O{" "}
                <Text as="strong" color="fg" fontWeight={500}>
                  G
                </Text>{" "}
                no centro do triângulo é{" "}
                <Text as="em" fontStyle="normal" color="fg" fontWeight={500}>
                  Gnosis
                </Text>{" "}
                — conhecimento aplicado com propósito, que transforma
                complexidade em clareza e dados em decisão.
              </Text>
            </VStack>
          </Grid>
        </Box>

        {/* ── Valores ── */}
        <Box
          as="section"
          py={{ base: 16, md: "90px" }}
          px={{ base: 6, md: "60px" }}
          bg="off"
        >
          {/* Header */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 7, lg: "80px" }}
            align={{ base: "flex-start", lg: "flex-end" }}
            mb={{ base: 10, md: 14 }}
          >
            <Box flex={1}>
              <SectionTag>Valores</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
                fontWeight={800}
                lineHeight={1.04}
                letterSpacing="-1.5px"
                color="fg"
              >
                Quatro pilares.
                <br />
                <Text
                  as="span"
                  fontFamily="serif"
                  fontWeight={400}
                  fontStyle="italic"
                  color="gray.emphasized"
                >
                  Um compromisso.
                </Text>
              </Text>
            </Box>
            <Text flex={1} fontSize="md" color="fg.muted" lineHeight={1.9}>
              Princípios que guiam cada decisão, cada linha de código e cada
              conversa. Não são valores de parede — são práticas diárias.
            </Text>
          </Flex>

          {/* Values grid */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap="2px"
          >
            {coreValues.map((v) => (
              <ValueCard key={v.title} value={v} />
            ))}
          </Grid>
        </Box>

        {/* ── Trajetória ── */}
        <Box
          as="section"
          py={{ base: 16, md: "90px" }}
          px={{ base: 6, md: "60px" }}
          bg="white"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
          id="nossa-historia"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "400px 1fr" }}
            gap={{ base: 10, lg: "80px" }}
            alignItems="start"
          >
            {/* Left sidebar */}
            <Box>
              <SectionTag>Trajetória</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
                fontWeight={800}
                lineHeight={1.04}
                letterSpacing="-1.5px"
                color="fg"
              >
                De 2020
                <br />
                até{" "}
                <Text
                  as="span"
                  fontFamily="serif"
                  fontWeight={400}
                  fontStyle="italic"
                  color="gray.emphasized"
                >
                  o próximo
                  <br />
                  capítulo.
                </Text>
              </Text>

              <Text
                fontSize="md"
                color="fg.muted"
                lineHeight={1.88}
                maxW="380px"
                mt={4}
              >
                Cada ano trouxe um salto de maturidade — e a determinação de
                ir mais longe.
              </Text>
            </Box>

            {/* Timeline steps */}
            <Box borderTop="1px solid" borderColor="blackAlpha.100">
              {timelineEvents.map((event) => (
                <TimelineStep key={event.year} event={event} />
              ))}
            </Box>
          </Grid>
        </Box>

        {/* ── Expertise Técnica ── */}
        <Box
          as="section"
          py={{ base: 16, md: "90px" }}
          px={{ base: 6, md: "60px" }}
          bg="blue.solid"
          color="white"
          position="relative"
          overflow="hidden"
        >
          {/* Grid pattern overlay */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="repeating-conic-gradient(rgba(255,255,255,0.02) 0% 25%, transparent 0% 50%)"
            backgroundSize="40px 40px"
            pointerEvents="none"
          />

          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 10, lg: "80px" }}
            alignItems="start"
            position="relative"
            zIndex={1}
          >
            {/* Left text */}
            <Box>
              <Text
                fontFamily="mono"
                fontSize="2xs"
                fontWeight={600}
                letterSpacing="0.18em"
                textTransform="uppercase"
                color="whiteAlpha.400"
                mb={4}
              >
                Expertise Técnica
              </Text>
              <Text
                as="h2"
                fontSize={{ base: "30px", md: "clamp(30px, 3.5vw, 48px)" }}
                fontWeight={800}
                lineHeight={1.06}
                letterSpacing="-1.2px"
                color="white"
                mb={4}
              >
                Tecnologia de
                <br />
                ponta para
                <br />
                <Text
                  as="span"
                  fontFamily="serif"
                  fontWeight={400}
                  fontStyle="italic"
                  color="whiteAlpha.700"
                >
                  soluções reais.
                </Text>
              </Text>
              <Text
                fontSize="md"
                color="whiteAlpha.600"
                lineHeight={1.88}
                mt={4}
              >
                Nosso time combina profundidade técnica com visão de negócio.
                Cada camada da solução é projetada para performance, escala e
                clareza.
              </Text>
            </Box>

            {/* Right steps */}
            <Box borderTop="1px solid" borderColor="whiteAlpha.200">
              {expertiseAreas.map((area) => (
                <ExpertiseItem key={area.number} area={area} />
              ))}
            </Box>
          </Grid>
        </Box>

        {/* ── Carreiras Bridge ── */}
        <Box
          as="section"
          py={{ base: 16, md: "90px" }}
          px={{ base: 6, md: "60px" }}
          bg="stone"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
          position="relative"
          overflow="hidden"
        >
          {/* Decorative columns (desktop only) */}
          <Box
            display={{ base: "none", lg: "block" }}
            position="absolute"
            left="60px"
            top={0}
            bottom={0}
            w="3px"
            bgGradient="to-b"
            gradientFrom="transparent"
            gradientVia="gold.500/20"
            gradientTo="transparent"
          />
          <Box
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right="60px"
            top={0}
            bottom={0}
            w="3px"
            bgGradient="to-b"
            gradientFrom="transparent"
            gradientVia="gold.500/20"
            gradientTo="transparent"
          />

          <VStack
            gap={{ base: 5, md: 6 }}
            textAlign="center"
            position="relative"
            zIndex={1}
          >
            {/* Tag */}
            <HStack
              fontFamily="mono"
              fontSize="2xs"
              fontWeight={600}
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="gold.500"
              opacity={0.75}
              gap={3}
              justify="center"
            >
              <Box w="22px" h="1px" bg="gold.500" />
              <Text>Construa o futuro conosco</Text>
              <Box w="22px" h="1px" bg="gold.500" />
            </HStack>

            {/* Heading */}
            <Text
              as="h2"
              fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
              fontWeight={800}
              lineHeight={1.04}
              letterSpacing="-1.5px"
              color="fg"
            >
              Mentes brilhantes.
              <br />
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="gray.emphasized"
              >
                Um propósito.
              </Text>
            </Text>

            <Text
              fontSize="md"
              color="fg.muted"
              lineHeight={1.82}
              maxW="540px"
            >
              Estamos sempre em busca de quem compartilha nossa paixão por
              inovação, rigor e excelência.
            </Text>

            {/* CTA */}
            <Box
              asChild
              display="inline-flex"
              alignItems="center"
              gap="9px"
              bg="blue.solid"
              color="white"
              px={{ base: 8, md: 10 }}
              py={{ base: 4, md: "16px" }}
              fontWeight={600}
              fontSize="md"
              textDecoration="none"
              transition="all 0.22s"
              _hover={{ opacity: 0.88, transform: "translateY(-2px)" }}
              mt={4}
            >
              <Link href="/carreiras">
                Ver oportunidades
                <ArrowRight size={14} />
              </Link>
            </Box>
          </VStack>
        </Box>

        {/* CTA Final */}
        <CTAFinalSection />
      </VStack>

      <Footer />
    </Page>
  );
}
