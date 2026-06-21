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
  ArrowRight,
  ShieldCheck,
  Target,
  Clock,
  FileText,
  Lightbulb,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: `Diagnóstico Inteligente | ${SITE_NAME}`,
  description:
    "Clareza estratégica para entender onde a IA gera impacto real — antes de qualquer investimento alto. Mitigação de riscos e planejamento arquitetural.",
  alternates: {
    canonical: `${SITE_URL}/diagnostico-inteligente`,
  },
  openGraph: {
    title: `Diagnóstico Inteligente | ${SITE_NAME}`,
    description: "Analisamos sua operação e entregamos um plano claro de ações viáveis de IA.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/diagnostico-inteligente`,
    siteName: SITE_NAME,
  },
};

/* ── Section Tag ── */
function SectionTag({ children, color = "blue.solid" }: { children: string; color?: string }) {
  return (
    <HStack
      fontFamily="mono"
      fontSize="2xs"
      fontWeight={600}
      letterSpacing="0.16em"
      textTransform="uppercase"
      color={color}
      gap="10px"
      mb={4}
    >
      <Box w="18px" h="1.5px" bg={color} />
      <Text>{children}</Text>
    </HStack>
  );
}

/* ── Data ── */
const steps = [
  {
    phase: "FASE 01",
    day: "DIA 01—03",
    title: "Mapeamento & Imersão Básica",
    description: "Reunião inicial e entendimento do cenário. Coletamos informações de processos, gargalos evidentes e nível de maturidade analítica.",
    icon: <Clock size={20} />,
  },
  {
    phase: "FASE 02",
    day: "DIA 04—10",
    title: "Deep Dive Operacional",
    description: "Entrevistas isoladas com stackholders, análises de fluxos reais, engenharia reversa de processos locais e avaliação primária de bases de dados.",
    icon: <FileText size={20} />,
  },
  {
    phase: "FASE 03",
    day: "DIA 10—15",
    title: "Design de Soluções",
    description: "Brainstorming interno de arquitetura. Onde a IA entra? Modelos Locais ou APIs? Custo vs Benefício técnico de cada possível inserção tecnológica.",
    icon: <Lightbulb size={20} />,
  },
  {
    phase: "FASE 04",
    day: "DIA 15—20",
    title: "Projeção de Impacto (TCO & ROI)",
    description: "Construção de estimativas matemáticas de infraestrutura, tempo de desenvolvimento e redução de custos projetada para a operação.",
    icon: <BarChart3 size={20} />,
  },
  {
    phase: "FASE 05",
    day: "DIA 20—25",
    title: "Dossiê Estratégico e Apresentação",
    description: "Entrega e defesa do relatório final para a diretoria: um plano acionável priorizado por facilidade técnica e impacto no negócio.",
    icon: <CheckCircle2 size={20} />,
  },
];

const deliverables = [
  "Documento executivo de diagnóstico",
  "Mapa C-Level de oportunidades de IA",
  "Cálculo TCO (Custo de Propriedade)",
  "Matriz de Risco vs. Retorno",
  "Blueprint Macro de Arquitetura",
  "Roadmap Executivo Priorizado",
];

export default function DiagnosticoPage() {
  const whatsappUrl = `https://wa.me/${SITE_PHONE.replace(/\D/g, "")}?text=Olá! Gostaria de entender mais sobre o Diagnóstico Inteligente.`;

  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch">

        {/* ── Hero ── */}
        <Box
          as="section"
          minH={{ base: "65vh", md: "85vh" }}
          bg="stone"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          position="relative"
          overflow="hidden"
          px={{ base: 6, md: "60px", lg: "112px" }}
        >
          {/* Subtle math/grid pattern */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="linear-gradient(#00000004 1px, transparent 1px), linear-gradient(90deg, #00000004 1px, transparent 1px)"
            backgroundSize="40px 40px"
            pointerEvents="none"
          />

          <VStack
            position="relative"
            zIndex={2}
            align="flex-start"
            pt={{ base: "140px", md: "140px" }}
          >
            <HStack gap={3} mb={{ base: 6, md: "24px" }}>
              <Box w="6px" h="6px" bg="blue.solid" />
              <Text
                fontFamily="mono"
                fontSize="2xs"
                fontWeight={600}
                letterSpacing="0.14em"
                textTransform="uppercase"
                color="blue.solid"
              >
                Inteligência Artificial
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "48px", md: "clamp(60px, 8vw, 130px)" }}
              lineHeight={0.92}
              letterSpacing="-2.5px"
              color="fg"
              maxW="1400px"
              mb={0}
            >
              <Text as="span" fontWeight={800}>
                Diagnóstico
              </Text>
              <br />
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="blue.solid"
              >
                inteligente.
              </Text>
            </Text>

            {/* Bottom Info Bar */}
            <Box
              borderTop="1px solid"
              borderColor="blackAlpha.100"
              mt={{ base: 10, md: "60px" }}
              pt={{ base: 6, md: "32px" }}
              pb={{ base: 8, md: "48px" }}
              w="full"
            >
              <Flex
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 8, lg: "80px" }}
                align={{ base: "flex-start", lg: "center" }}
              >
                <Text
                  fontSize="md"
                  color="fg.muted"
                  lineHeight={1.8}
                  flex={1.2}
                  maxW="750px"
                >
                  Clareza estratégica para entender exatamente onde a Inteligência Artificial
                  gera lucro livre e redução de despesas na sua operação. Pare de apostar no escuro.
                  Transforme *hype* em números auditáveis antes do primeiro script desenvolvido.
                </Text>

                <HStack gap={{ base: 6, md: 10 }} flex={1} justify={{ base: "flex-start", lg: "flex-end" }} w="full">
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">LIFECYCLE</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">25 Dias</Text>
                  </VStack>
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">OUTPUT</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">Plano Executivo</Text>
                  </VStack>

                  <Box
                    asChild
                    display={{ base: "none", md: "inline-flex" }}
                    alignItems="center"
                    gap="10px"
                    bg="blue.solid"
                    color="white"
                    px="28px"
                    py="14px"
                    fontWeight={600}
                    fontSize="sm"
                    transition="all 0.2s"
                    _hover={{ bg: "blue.fg" }}
                  >
                    <Link href={whatsappUrl} target="_blank">
                      Iniciar Protocolo
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
                  bg="blue.solid"
                  color="white"
                  w="full"
                  py="16px"
                  fontWeight={600}
                  fontSize="sm"
                >
                  <Link href={whatsappUrl} target="_blank">
                    Iniciar Protocolo
                    <ArrowRight size={14} />
                  </Link>
                </Box>
              </Flex>
            </Box>
          </VStack>
        </Box>

        <Plumb />

        {/* ── Premissa ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="off"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "450px 1fr" }}
            gap={{ base: 12, lg: "80px" }}
            alignItems="start"
          >
            <Box>
              <SectionTag>Fundamento</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "32px", md: "44px" }}
                fontWeight={800}
                lineHeight={1.1}
                letterSpacing="-1px"
                color="fg"
                mb={6}
              >
                Não vendemos ferramenta. <br /> Vendemos{" "}
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                  direção exata.
                </Text>
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
                A etapa do diagnóstico tem barreira de entrada ajustada, sendo construída exatamente
                para separar as intenções vagas de dados reais. Excluímos o viés e focamos no que move o ponteiro.
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="2px" bg="blackAlpha.100" p="1px">
              <VStack bg="white" p={{ base: 8, md: 10 }} align="flex-start" gap={6}>
                <Box color="blue.solid"><ShieldCheck size={28} /></Box>
                <Box>
                  <Text fontSize="xl" fontWeight={800} color="fg" mb={3} letterSpacing="-0.5px">
                    Ancoragem Segura
                  </Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                    A forma mais coesa de iniciar sua jornada AI. Blindamos seu orçamento contra o "hype" mercadológico, evitando que centenas de milhares de reais sejam gastos resolvendo um problema que não existe.
                  </Text>
                </Box>
              </VStack>
              <VStack bg="white" p={{ base: 8, md: 10 }} align="flex-start" gap={6}>
                <Box color="blue.solid"><Target size={28} /></Box>
                <Box>
                  <Text fontSize="xl" fontWeight={800} color="fg" mb={3} letterSpacing="-0.5px">
                    Foco no Bottom Line
                  </Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                    Diferente de consultorias genéricas, nós somos construtores. Todo o plano foca em arquiteturas possíveis, viáveis matematicamente e com ROI justificável pela redução do tempo humano.
                  </Text>
                </Box>
              </VStack>
            </Grid>
          </Grid>
        </Box>

        {/* ── Timeline Protocolo 25 Dias ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="stone"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
        >
          <VStack align="center" textAlign="center" mb={{ base: 12, md: 20 }} maxW="700px" mx="auto">
            <SectionTag>O Protocolo</SectionTag>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "48px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1px"
            >
              Arquitetura de{" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                25 Dias.
              </Text>
            </Text>
          </VStack>

          <Box maxW="900px" mx="auto">
            {steps.map((step, idx) => (
              <Box
                key={step.phase}
                borderTop="1px solid"
                borderColor="blackAlpha.100"
                py={{ base: 8, md: 10 }}
                _last={{ borderBottom: "1px solid", borderColor: "blackAlpha.100" }}
              >
                <Grid templateColumns={{ base: "1fr", md: "180px 1fr" }} gap={{ base: 6, md: 8 }} alignItems="start">
                  <VStack align="flex-start" gap={2}>
                    <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="blue.solid" letterSpacing="0.1em">
                      {step.phase}
                    </Text>
                    <Text fontSize="lg" fontWeight={800} color="fg.muted">
                      {step.day}
                    </Text>
                  </VStack>
                  <VStack align="flex-start" gap={3}>
                    <Text fontSize="2xl" fontWeight={800} color="fg" letterSpacing="-0.5px">
                      {step.title}
                    </Text>
                    <Text fontSize="md" color="fg.muted" lineHeight={1.7}>
                      {step.description}
                    </Text>
                  </VStack>
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Value Section Dark ── */}
        <Box
          as="section"
          bg="blue.solid"
          color="white"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          position="relative"
          overflow="hidden"
        >
          {/* Subtle geometry background */}
          <Box position="absolute" right={-20} top={-20} opacity={0.05} pointerEvents="none">
            <svg width="600" height="600" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M 5,50 L 95,50" stroke="white" strokeWidth="0.5" />
              <path d="M 50,5 L 50,95" stroke="white" strokeWidth="0.5" />
            </svg>
          </Box>

          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: "100px" }} position="relative" zIndex={1}>
            <VStack align="flex-start" gap={6}>
              <Text fontFamily="mono" fontSize="xs" fontWeight={600} color="gold.500" letterSpacing="0.1em">
                P-LEVEL ANALYSIS
              </Text>
              <Text as="h2" fontSize={{ base: "36px", md: "48px" }} fontWeight={800} lineHeight={1.1} letterSpacing="-1px">
                Por que a <br />análise é {" "}
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="gold.500">
                  remunerada?
                </Text>
              </Text>
              <Text fontSize="lg" color="whiteAlpha.800" lineHeight={1.8} mt={4}>
                O Diagnóstico Inteligente não é uma "reunião de vendas" formatada.
                Movemos engenheiros de dados, especialistas em negócios e arquitetos de infraestrutura
                para dentro da sua empresa por semanas.
              </Text>
              <Text fontSize="lg" color="whiteAlpha.800" lineHeight={1.8}>
                Trata-se do primeiro isolante cognitivo entre você a e perda financeira.
                Entregamos valor real quer você desenvolva o sistema final conosco ou não.
              </Text>
            </VStack>

            <VStack align="stretch" gap="1px" bg="whiteAlpha.200" p="1px">
              <Box bg="blue.900" p={{ base: 8, md: 10 }}>
                <HStack gap={4} mb={4}>
                  <AlertTriangle size={24} color="#FBBF24" /> {/* gold.400 equivalent approx */}
                  <Text fontSize="xl" fontWeight={800} letterSpacing="-0.5px">Blindagem Financeira</Text>
                </HStack>
                <Text color="whiteAlpha.800" lineHeight={1.6}>Proteção absoluta contra alocação ineficiente de budget. O "Não Faça" é uma de nossas entregas mais valiosas se a conta técnica não fechar com ROI positivo.</Text>
              </Box>
              <Box bg="blue.900" p={{ base: 8, md: 10 }}>
                <HStack gap={4} mb={4}>
                  <Target size={24} color="#60A5FA" />
                  <Text fontSize="xl" fontWeight={800} letterSpacing="-0.5px">Planta Baixa</Text>
                </HStack>
                <Text color="whiteAlpha.800" lineHeight={1.6}>Receba a blueprint que permite a orçamentação, a defesa da diretoria de tecnologia e a projeção fiscal antes do primeiro engenheiro ser alocado.</Text>
              </Box>
            </VStack>
          </Grid>
        </Box>

        {/* ── Deliverables Grid ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="white"
        >
          <VStack align="center" textAlign="center" mb={{ base: 12, md: 16 }} maxW="700px" mx="auto">
            <SectionTag>OUTPUT</SectionTag>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "44px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1px"
            >
              Matérias de {" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                entrega.
              </Text>
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="1px" bg="blackAlpha.100" p="1px">
            {deliverables.map((item, idx) => (
              <HStack key={idx} bg="off" p={{ base: 6, md: 8 }} align="start" gap={4}>
                <Box mt="3px" color="blue.solid"><CheckCircle2 size={20} /></Box>
                <Text fontSize="md" fontWeight={700} color="fg" lineHeight={1.4}>{item}</Text>
              </HStack>
            ))}
          </Grid>
        </Box>

        <CTAFinalSection />
      </VStack>

      <Footer />
    </Page>
  );
}
