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
import { ArrowRight, Database, FileText, AlertTriangle, Lightbulb, Search, Code, Layers, TestTube, Target, Settings, Cpu } from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_PHONE } from "@/constants";

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
  ],
  alternates: {
    canonical: `${SITE_URL}/transformacao-digital`,
  },
  openGraph: {
    title: `Transformação Digital | ${SITE_NAME}`,
    description:
      "Da estratégia à execução, o futuro do seu negócio começa agora. Jornada completa de modernização com tecnologia, processos e pessoas.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/transformacao-digital`,
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

/* ── Data ── */
const challenges = [
  {
    title: "Sistemas Legados",
    description: "Tecnologias antigas que não se comunicam e criam silos de informação.",
    icon: <Database size={20} />,
    status: "Risco Alto",
  },
  {
    title: "Processos Manuais",
    description: "Workflows baseados em papel e planilhas, lentos e propensos a erros.",
    icon: <FileText size={20} />,
    status: "Ineficiente",
  },
  {
    title: "Decisões sem Dados",
    description: "Cultura onde a intuição supera a análise, gerando perda de oportunidades.",
    icon: <AlertTriangle size={20} />,
    status: "Risco Crítico",
  },
  {
    title: "Dificuldade para Inovar",
    description: "Falta de conhecimento técnico ou parceiro para traduzir ideias em software.",
    icon: <Lightbulb size={20} />,
    status: "Estagnação",
  },
];

const pillars = [
  {
    number: "01",
    title: "Consultoria Estratégica & Diagnóstico",
    description: "Antes de construir, planejamos. Analisamos seus processos, sistemas e desafios para identificar as oportunidades de maior impacto.",
    features: ["Análise de Maturidade Digital", "Mapeamento As-Is & To-Be", "Roadmap Tecnológico"],
    icon: <Search size={22} />,
  },
  {
    number: "02",
    title: "Arquitetura e Desenho de Soluções",
    description: "Traduzimos a estratégia em um plano técnico. Desenhamos a arquitetura ideal, seja integração, nova plataforma ou software sob medida.",
    features: ["Arquitetura de Soluções", "Integração de Sistemas", "Escolha de Stack"],
    icon: <Layers size={22} />,
  },
  {
    number: "03",
    title: "Provas de Conceito (PoC) & MVP",
    description: "Reduzimos os riscos. Antes de grandes investimentos, construímos versões simplificadas para testar a viabilidade e comprovar o ROI.",
    features: ["Validação de Hipóteses", "Testes de Viabilidade", "Comprovação de ROI"],
    icon: <TestTube size={22} />,
  },
  {
    number: "04",
    title: "Implementação e Escala",
    description: "É aqui que a transformação vira realidade. Construímos, integramos e implementamos as ferramentas que sua operação precisa.",
    features: ["Desenvolvimento Ágil", "Deploy Completo", "Suporte e Evolução"],
    icon: <Code size={22} />,
  },
];

const differentials = [
  {
    title: "Visão 360°",
    description: "Unimos a visão estratégica de uma consultoria com a capacidade técnica de execução.",
    benefit: "Diagnóstico à implementação estruturada.",
  },
  {
    title: "Foco no ROI",
    description: "Priorizamos ações que geram valor rápido. Nossa abordagem garante retorno comprovado.",
    benefit: "Resultados em curto prazo.",
  },
  {
    title: "Agosticismo Tecnológico",
    description: "Não somos revendedores de licenças. Nossa lealdade é com a melhor solução técnica.",
    benefit: "Independência total.",
  },
  {
    title: "Parceria Estendida",
    description: "Não apenas entregamos o código. Apoiamos a adoção e a evolução contínua.",
    benefit: "Suporte e melhoria constante.",
  },
];

export default function DigitalTransformationPage() {
  const whatsappUrl = `https://wa.me/${SITE_PHONE.replace(/\D/g, "")}?text=Olá! Gostaria de falar sobre transformação digital para minha empresa.`;

  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch">

        {/* ── Hero ── */}
        <Box
          as="section"
          minH={{ base: "65vh", md: "75vh" }}
          bg="off"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          position="relative"
          overflow="hidden"
          px={{ base: 6, md: "60px", lg: "112px" }}
        >
          {/* Geomeric grid background */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="linear-gradient(#00000006 1px, transparent 1px), linear-gradient(90deg, #00000006 1px, transparent 1px)"
            backgroundSize="40px 40px"
            pointerEvents="none"
            maskImage="linear-gradient(to bottom, transparent 10%, black 80%)"
          />

          {/* Abstract SVG shape in background */}
          <Box
            as="svg"
            position="absolute"
            right="-10%"
            top="40%"
            transform="translateY(-50%)"
            w={{ base: "90vw", lg: "60vw" }}
            maxW="1000px"
            opacity={0.03}
            pointerEvents="none"
            color="fg"
            // @ts-ignore
            viewBox="0 0 400 400"
            fill="none"
          >
            <path d="M200 50 L350 125 L350 275 L200 350 L50 275 L50 125 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M200 100 L300 150 L300 250 L200 300 L100 250 L100 150 Z" stroke="currentColor" strokeWidth="0.5" />
            <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="125" x2="350" y2="275" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="275" x2="350" y2="125" stroke="currentColor" strokeWidth="0.5" />
          </Box>

          <VStack
            position="relative"
            zIndex={2}
            align="flex-start"
            pt={{ base: "140px", md: "120px" }}
          >
            <HStack gap={3} mb={{ base: 6, md: "24px" }}>
              <Box w="6px" h="6px" bg="gold.500" />
              <Text
                fontFamily="mono"
                fontSize="2xs"
                fontWeight={600}
                letterSpacing="0.14em"
                textTransform="uppercase"
                color="gold.600"
              >
                Transformação Digital
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "48px", md: "clamp(60px, 8vw, 120px)" }}
              lineHeight={0.92}
              letterSpacing="-2.5px"
              color="fg"
              maxW="1100px"
              mb={0}
            >
              <Text as="span" fontWeight={800}>
                Da estratégia
              </Text>
              <br />
              <Text as="span" fontWeight={800}>
                à{" "}
              </Text>
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="blue.solid"
              >
                execução.
              </Text>
            </Text>

            {/* Bottom Info Bar */}
            <Box
              borderTop="1px solid"
              borderColor="blackAlpha.100"
              mt={{ base: 10, md: "52px" }}
              pt={{ base: 6, md: "32px" }}
              pb={{ base: 8, md: "48px" }}
              w="full"
            >
              <Flex
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 8, lg: "60px" }}
                align={{ base: "flex-start", lg: "center" }}
              >
                <Text
                  fontSize="md"
                  color="fg.muted"
                  lineHeight={1.8}
                  flex={1.2}
                  maxW="800px"
                >
                  Conduza sua empresa em uma jornada completa de modernização.
                  Integramos <Text as="strong" color="fg" fontWeight={600}>tecnologia, processos e pessoas</Text> para
                  gerar agilidade e crescimento sustentável na nova economia.
                </Text>

                <HStack gap={8} flex={1} justify={{ base: "flex-start", lg: "flex-end" }} w="full">
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">ESCOPO</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">Engenharia Exata</Text>
                  </VStack>
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">FOCO</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">ROI Comprovado</Text>
                  </VStack>

                  <Box
                    asChild
                    display={{ base: "none", md: "inline-flex" }}
                    alignItems="center"
                    gap="10px"
                    bg="fg"
                    color="white"
                    px="28px"
                    py="14px"
                    fontWeight={600}
                    fontSize="sm"
                    transition="all 0.2s"
                    _hover={{ bg: "blackAlpha.800" }}
                  >
                    <Link href={whatsappUrl} target="_blank">
                      Diagnóstico
                      <ArrowRight size={14} />
                    </Link>
                  </Box>
                </HStack>

                <Box
                  asChild
                  display={{ base: "inline-flex", md: "none" }}
                  alignItems="center"
                  justifyContent="center"
                  gap="10px"
                  bg="fg"
                  color="white"
                  w="full"
                  py="16px"
                  fontWeight={600}
                  fontSize="sm"
                >
                  <Link href={whatsappUrl} target="_blank">
                    Agendar Diagnóstico
                    <ArrowRight size={14} />
                  </Link>
                </Box>
              </Flex>
            </Box>
          </VStack>
        </Box>

        <Plumb />

        {/* ── Desafios ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="white"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "400px 1fr" }}
            gap={{ base: 12, lg: "80px" }}
            alignItems="start"
          >
            <Box>
              <SectionTag>O Contexto</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "32px", md: "clamp(32px, 3.5vw, 54px)" }}
                fontWeight={800}
                lineHeight={1.08}
                letterSpacing="-1.2px"
                color="fg"
                mb={6}
              >
                Inércia é<br />o maior{" "}
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="gray.emphasized">
                  risco.
                </Text>
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
                Clientes esperam experiências fluidas e a eficiência operacional se tornou
                questão de sobrevivência. Muitos líderes se sentem paralisados
                por desafios operacionais enraizados.
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="2px" bg="blackAlpha.100" p="1px">
              {challenges.map((challenge) => (
                <VStack
                  key={challenge.title}
                  bg="white"
                  p={{ base: 6, md: 8 }}
                  align="flex-start"
                  gap={4}
                  transition="background 0.2s"
                  _hover={{ bg: "off" }}
                >
                  <HStack justify="space-between" w="full">
                    <Box color="blue.solid">{challenge.icon}</Box>
                    <HStack gap={2}>
                      <Box w="6px" h="6px" bg="red.500" />
                      <Text fontFamily="mono" fontSize="xs" fontWeight={600} color="red.600">
                        {challenge.status}
                      </Text>
                    </HStack>
                  </HStack>
                  <Box>
                    <Text fontSize="lg" fontWeight={700} color="fg" mb={2}>
                      {challenge.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                      {challenge.description}
                    </Text>
                  </Box>
                </VStack>
              ))}
            </Grid>
          </Grid>
        </Box>

        {/* ── Jornada ── */}
        <Box
          as="section"
          py={{ base: 16, md: "120px" }}
          bg="blue.solid"
          color="white"
          px={{ base: 6, md: "60px", lg: "112px" }}
          position="relative"
          overflow="hidden"
        >
          {/* Subtle Grid overlay */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)"
            backgroundSize="30px 30px"
          />

          <VStack position="relative" zIndex={1} maxW="container.lg" mx="auto" align="center" textAlign="center" gap={6}>
            <Text fontFamily="mono" fontSize="xs" textTransform="uppercase" letterSpacing="0.2em" color="whiteAlpha.600">
              A Abordagem
            </Text>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "48px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1px"
              maxW="800px"
            >
              Uma jornada de modernização{" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400}>guiada.</Text>
            </Text>
            <Box w="1px" h="40px" bg="whiteAlpha.300" my={2} />
            <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" maxW="700px" lineHeight={1.8}>
              A verdadeira transformação vai além de adotar uma ferramenta. Na Shift+G,
              co-criamos o caminho para o futuro. Do diagnóstico que revela gargalos
              à implementação da tecnologia que irá eliminá-los. Somos arquitetos e executores.
            </Text>
          </VStack>
        </Box>

        {/* ── Pilares (Metodologia) ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="stone"
        >
          <Box mb={{ base: 10, md: 16 }} maxW="800px">
            <SectionTag>Metodologia</SectionTag>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "48px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1.5px"
              color="fg"
              mb={4}
            >
              Nossos{" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                pilares
              </Text>{" "}
              para mudança escalar.
            </Text>
            <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
              Portfólio end-to-end adaptado ao nível de maturidade da sua operação.
              Garantimos resultados desde a ideação até o código em produção.
            </Text>
          </Box>

          <VStack gap="2px" align="stretch" bg="blackAlpha.100" p="1px">
            {pillars.map((pillar) => (
              <Grid
                key={pillar.number}
                templateColumns={{ base: "1fr", lg: "80px 1fr 1.5fr" }}
                gap={{ base: 6, lg: 12 }}
                bg="white"
                p={{ base: 6, md: 10 }}
                alignItems="start"
                transition="all 0.2s"
                _hover={{ bg: "#fafaf8" }}
              >
                {/* Number */}
                <Text fontFamily="mono" fontSize="lg" fontWeight={700} color="gold.600">
                  {pillar.number}
                </Text>

                {/* Title & Desc */}
                <Box>
                  <HStack gap={3} mb={4} color="blue.solid">
                    {pillar.icon}
                    <Text fontSize="xl" fontWeight={800} color="fg">
                      {pillar.title}
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.7}>
                    {pillar.description}
                  </Text>
                </Box>

                {/* Entregas */}
                <Box pl={{ lg: 8 }} borderLeft={{ lg: "1px solid" }} borderColor="blackAlpha.100">
                  <Text fontFamily="mono" fontSize="2xs" color="fg.subtle" mb={4}>
                    ENTREGAS CHAVE
                  </Text>
                  <VStack align="start" gap={3}>
                    {pillar.features.map((feature) => (
                      <HStack key={feature} gap={3}>
                        <Box w="10px" h="1px" bg="blue.solid" />
                        <Text fontSize="sm" fontWeight={500} color="fg" letterSpacing="-0.2px">
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </Grid>
            ))}
          </VStack>
        </Box>

        {/* ── Diferenciais ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="white"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "400px 1fr" }}
            gap={{ base: 12, lg: "80px" }}
            alignItems="start"
          >
            <Box>
              <SectionTag>Shift+G</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "32px", md: "46px" }}
                fontWeight={800}
                lineHeight={1.1}
                letterSpacing="-1.2px"
                color="fg"
                mb={6}
              >
                Muito além<br />
                do{" "}
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="gray.emphasized">
                  conselho.
                </Text>
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
                Muitos desenham diagramas. Nós fazemos o ponteiro mover. Como construtores,
                nosso compromisso é ir até a última milha da implementação.
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
              {differentials.map((diff, i) => (
                <VStack key={diff.title} align="flex-start" gap={3}>
                  <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">
                    {String(i + 1).padStart(2, "0")}
                  </Text>
                  <Text fontSize="lg" fontWeight={700} color="fg" letterSpacing="-0.2px">
                    {diff.title}
                  </Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                    {diff.description}
                  </Text>
                  <Text fontSize="xs" fontWeight={600} color="blue.solid" display="flex" alignItems="center" gap={2} mt={1}>
                    <Target size={12} /> {diff.benefit}
                  </Text>
                </VStack>
              ))}
            </Grid>
          </Grid>
        </Box>

        {/* CTA Final */}
        <CTAFinalSection />

      </VStack>

      <Footer />
    </Page>
  );
}
