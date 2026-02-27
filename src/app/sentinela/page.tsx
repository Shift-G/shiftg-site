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
  Zap,
  Lock,
  Eye,
  Activity,
  Award,
  Users,
  Brain,
  Shield,
  Cloud,
  Check
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: `Sentinela BPaaS | ${SITE_NAME}`,
  description:
    "Vigilância Operacional Inteligente. Assuma o controle com um serviço de Departamento Pessoal monitorado por IA e auditado em tempo real.",
  alternates: {
    canonical: `${SITE_URL}/sentinela`,
  },
  openGraph: {
    title: `Sentinela | ${SITE_NAME}`,
    description: "Vigilância Operacional Inteligente para operações escaláveis e sem passivos.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/sentinela`,
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

const challenges = [
  {
    icon: <AlertTriangle size={20} />,
    title: "Erro de Cálculo & Atrasos",
    description: "A matemática manual no DP é imperdoável, gerando autuações pesadas e perda de retenção mensal em grandes faturamentos.",
    tag: "RISCO FINANCEIRO",
  },
  {
    icon: <Users size={20} />,
    title: "Passivos Trabalhistas",
    description: "Processos silenciosos que consomem o lucro da empresa e destroem a tração de novos editais e contratações.",
    tag: "RISCO DE IMAGEM",
  },
  {
    icon: <Lock size={20} />,
    title: "Blacklist Estratégico",
    description: "A falta de conformidade legal cessa licitações públicas, amarra certidões e trava linhas milionárias de crédito.",
    tag: "RISCO OPERACIONAL",
  },
];

const phases = [
  {
    number: "01",
    day: "SEMANA 1-2",
    title: "Mapeamento Primário",
    description:
      "Auditoria jurídica e fiscal massiva. Identificamos as anomalias contratuais em andamento e neutralizamos antes da primeira fatura rodar.",
  },
  {
    number: "02",
    day: "SEMANA 3-4",
    title: "Engine Cloud Setup",
    description:
      "Implantação do Portal de Governança B2B, roteamento das admissões / demissões e automação na coleta dos passivos em bases conectadas.",
  },
  {
    number: "03",
    day: "SEMANA 5+",
    title: "BPaaS & Monitoramento Contínuo",
    description:
      "A operação roda 100% sob nossa torre de controle. Liberação de Dashboards de saúde fiscal, alertas C-Level e blindagem processual ativada.",
  },
];

const techStack = [
  {
    icon: <Eye size={24} />,
    title: "Governance Portal",
    description: "Espelho em tempo real dos fluxos de RH. Você demanda, nós executamos, mas a governança e o clique final de aprovação é sempre seu.",
  },
  {
    icon: <Cloud size={24} />,
    title: "Infrastructure",
    description: "Backup militar, logs de auditoria sobre quem aprovou o quê, e total aderência às portarias pesadas de LGPD e segurança perimetral.",
  },
  {
    icon: <Brain size={24} />,
    title: "AI & Predictability",
    description: "Não aguardamos o e-social notificar o erro. Nosso motor algorítmico cruza Ponto, Atestado e Sindicato acusando fricção antes do envio.",
  },
];

const plans = [
  {
    name: "Growth",
    employees: "50 — 300 vidas",
    description: "Controle absoluto para operações médias e ágeis.",
    features: ["Portal de Governança 100% Ativo", "Suporte Dedicado 8x5", "Onboarding Técnico", "Relatórios C-Level Trimestrais"],
  },
  {
    name: "Scale",
    employees: "300 — 1.000 vidas",
    description: "Performance pesada para alto volume de giro.",
    features: ["Suporte Expandido 24/7", "Automação via IA Liberada", "Assessoria Consultiva Semanal", "Gerente de Sucesso Local"],
    highlight: true,
  },
  {
    name: "Enterprise",
    employees: "+1.000 vidas",
    description: "Engenharia fiscal sob medida para estruturas colossais.",
    features: ["SLA Contratual Estrito", "API Integrada ao seu ERP Local", "Auditoria Contábil Assistida", "Relatórios Diários de Eficiência"],
  },
];

export default function SentinelaPage() {
  const whatsappUrl = `https://wa.me/${SITE_PHONE.replace(/\D/g, "")}?text=Olá! Quero saber mais sobre o BPaaS Sentinela.`;

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

          <Box position="absolute" top={{ base: "15%", md: "20%" }} right={{ base: "-10%", md: "5%" }} opacity={0.03} pointerEvents="none">
            <svg width="600" height="600" viewBox="0 0 100 100">
              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
              <line x1="10" y1="30" x2="90" y2="70" stroke="currentColor" strokeWidth="0.5" />
              <line x1="10" y1="70" x2="90" y2="30" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </Box>

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
                Vigilância Inteligente
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
                Sentinela
              </Text>
              <br />
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="blue.solid"
              >
                bpaas mode.
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
                  Terceirização é para empresas medianas. Nossas operações exigem mais.
                  O Sentinela é uma arquitetura de serviço blindada: entregamos a automação, a equipe,
                  e o monitoramento técnico rigoroso do seu Departamento Pessoal e Backoffice.
                </Text>

                <HStack gap={{ base: 6, md: 10 }} flex={1} justify={{ base: "flex-start", lg: "flex-end" }} w="full">
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">SLA ATIVO</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">99.9% Up</Text>
                  </VStack>
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">COBERTURA</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">End-to-End</Text>
                  </VStack>

                  <Link href={whatsappUrl} target="_blank">
                    <Box
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
                      Ativar Operação
                      <ArrowRight size={14} />
                    </Box>
                  </Link>
                </HStack>

                <Link href={whatsappUrl} target="_blank">
                  <Box
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
                    Ativar Operação
                    <ArrowRight size={14} />
                  </Box>
                </Link>
              </Flex>
            </Box>
          </VStack>
        </Box>

        <Plumb />

        {/* ── Contexto de Mercado (Desafio) ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="white"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "450px 1fr" }}
            gap={{ base: 12, lg: "80px" }}
            alignItems="start"
          >
            <Box>
              <SectionTag color="red.600">O Risco Real</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "32px", md: "44px" }}
                fontWeight={800}
                lineHeight={1.1}
                letterSpacing="-1px"
                color="fg"
                mb={6}
              >
                Um imposto pago para {" "}
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="red.600">
                  a desatenção.
                </Text>
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
                A operação de contratos em massa está a um erro de cálculo
                de custar à empresa perdas milionárias anuais e ações
                regulatórias definitivas.
              </Text>

              <Box mt={10} bg="blackAlpha.100" p="1px" w="fit-content">
                <VStack align="flex-start" bg="off" p={8} gap={4}>
                  <HStack gap={3}>
                    <AlertTriangle color="#DC2626" />
                    <Text fontSize="sm" fontWeight={700} color="red.600">INDICADOR ABSOLUTO</Text>
                  </HStack>
                  <Text fontSize="5xl" fontWeight={800} color="fg" letterSpacing="-1px">R$ 1M+</Text>
                  <Text fontSize="sm" color="fg.muted" maxW="200px">Perdas anuais estimadas em erros fiscais/trabalhistas de médias operações.</Text>
                </VStack>
              </Box>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="1px" bg="blackAlpha.100" p="1px">
              {challenges.map((c, i) => (
                <VStack key={i} bg="white" p={{ base: 8, md: 10 }} align="flex-start" gap={6}>
                  <HStack justify="space-between" w="full">
                    <Box color="red.600">{c.icon}</Box>
                    <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle">{c.tag}</Text>
                  </HStack>
                  <Box>
                    <Text fontSize="xl" fontWeight={800} color="fg" mb={3} letterSpacing="-0.5px">
                      {c.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                      {c.description}
                    </Text>
                  </Box>
                </VStack>
              ))}
              <VStack bg="stone" p={{ base: 8, md: 10 }} align="flex-start" justify="center" minH="220px">
                <Text fontSize="lg" fontWeight={700} color="blue.solid" fontStyle="italic" lineHeight={1.5}>
                  "Você trabalha com leveza. Nós velamos pela sua segurança."
                </Text>
              </VStack>
            </Grid>
          </Grid>
        </Box>

        {/* ── Como Funciona (Phases) ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="blue.solid"
          color="white"
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
        >
          <VStack align="center" textAlign="center" mb={{ base: 12, md: 20 }} maxW="700px" mx="auto">
            <SectionTag color="gold.500">Framework</SectionTag>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "48px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1px"
            >
              Implantação de {" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="gold.500">
                Ponta-a-Ponta.
              </Text>
            </Text>
          </VStack>

          <Box maxW="900px" mx="auto">
            {phases.map((step) => (
              <Box
                key={step.number}
                borderTop="1px solid"
                borderColor="whiteAlpha.200"
                py={{ base: 8, md: 10 }}
                _last={{ borderBottom: "1px solid", borderColor: "whiteAlpha.200" }}
              >
                <Grid templateColumns={{ base: "1fr", md: "200px 1fr" }} gap={{ base: 6, md: 8 }} alignItems="start">
                  <VStack align="flex-start" gap={2}>
                    <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="gold.500" letterSpacing="0.1em">
                      FASE {step.number}
                    </Text>
                    <Text fontSize="lg" fontWeight={800} color="whiteAlpha.800">
                      {step.day}
                    </Text>
                  </VStack>
                  <VStack align="flex-start" gap={3}>
                    <Text fontSize="2xl" fontWeight={800} color="white" letterSpacing="-0.5px">
                      {step.title}
                    </Text>
                    <Text fontSize="md" color="whiteAlpha.800" lineHeight={1.7}>
                      {step.description}
                    </Text>
                  </VStack>
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Estrutura Tecnologica ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="off"
        >
          <VStack align="center" textAlign="center" mb={{ base: 12, md: 20 }} maxW="700px" mx="auto">
            <SectionTag>Arquitetura</SectionTag>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "48px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1px"
            >
              Tecnologia de {" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                Guerra.
              </Text>
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="1px" bg="blackAlpha.100" p="1px">
            {techStack.map((tech, i) => (
              <VStack key={i} bg="white" p={{ base: 8, xl: 10 }} align="flex-start" gap={6} _hover={{ bg: "stone" }} transition="all 0.2s">
                <Box color="blue.solid" mb={2}>{tech.icon}</Box>
                <Box>
                  <Text fontSize="xl" fontWeight={800} color="fg" mb={3} letterSpacing="-0.5px">
                    {tech.title}
                  </Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                    {tech.description}
                  </Text>
                </Box>
              </VStack>
            ))}
          </Grid>
        </Box>

        {/* ── Pricing Matrix ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="stone"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
        >
          <VStack align="center" textAlign="center" mb={{ base: 12, md: 16 }} maxW="700px" mx="auto">
            <SectionTag>Pricing</SectionTag>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "44px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1px"
            >
              Níveis de Serviço {" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                (SLA).
              </Text>
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={{ base: 8, lg: "20px" }}>
            {plans.map((plan, i) => (
              <Flex
                key={i}
                direction="column"
                bg={plan.highlight ? "blue.solid" : "white"}
                color={plan.highlight ? "white" : "fg"}
                border="1px solid"
                borderColor={plan.highlight ? "blue.solid" : "blackAlpha.100"}
                p={{ base: 8, md: 10 }}
                position="relative"
              >
                {plan.highlight && (
                  <Box position="absolute" top={0} right={0} bg="gold.500" px={4} py={1}>
                    <Text fontFamily="mono" fontSize="2xs" fontWeight={800} color="blue.solid">CORE</Text>
                  </Box>
                )}

                <VStack align="start" gap={2} mb={6}>
                  <Text fontSize="3xl" fontWeight={800} letterSpacing="-1px">
                    {plan.name}
                  </Text>
                  <Text fontFamily="mono" fontSize="xs" fontWeight={700} color={plan.highlight ? "gold.500" : "blue.solid"} letterSpacing="0.05em">
                    {plan.employees}
                  </Text>
                </VStack>

                <Text fontSize="md" color={plan.highlight ? "whiteAlpha.800" : "fg.muted"} mb={8} lineHeight={1.6}>
                  {plan.description}
                </Text>

                <VStack align="flex-start" gap={4} w="full" mb={10}>
                  {plan.features.map((item, idx) => (
                    <HStack key={idx} align="start" gap={3}>
                      <Box mt="2px" color={plan.highlight ? "gold.500" : "blue.solid"}>
                        <Check size={16} strokeWidth={3} />
                      </Box>
                      <Text fontSize="sm" fontWeight={500} color={plan.highlight ? "white" : "fg.muted"}>
                        {item}
                      </Text>
                    </HStack>
                  ))}
                </VStack>

                <Box mt="auto" w="full">
                  <Link href={whatsappUrl} target="_blank" style={{ width: "100%", display: "block" }}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      w="full"
                      py={4}
                      bg={plan.highlight ? "white" : "off"}
                      color={plan.highlight ? "blue.solid" : "fg"}
                      border="1px solid"
                      borderColor={plan.highlight ? "white" : "blackAlpha.200"}
                      fontWeight={600}
                      fontSize="sm"
                      transition="all 0.2s"
                      _hover={{ bg: plan.highlight ? "off" : "blackAlpha.50" }}
                    >
                      Analisar Custo Fixo
                    </Box>
                  </Link>
                </Box>
              </Flex>
            ))}
          </Grid>

          {/* SLA Footer */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="1px" bg="blackAlpha.100" p="1px" mt="20px">
            {[
              { icon: <Activity size={20} />, title: "Disponibilidade", value: "99.9%" },
              { icon: <Clock size={20} />, title: "Tempo Resposta", value: "< 2H" },
              { icon: <Users size={20} />, title: "Suporte Total", value: "8x5 & 24/7" },
              { icon: <ShieldCheck size={20} />, title: "Conformidade", value: "Auditável" },
            ].map((s, idx) => (
              <VStack key={idx} bg="white" py={6} px={4} gap={3}>
                <Box color="blue.solid">{s.icon}</Box>
                <Text fontSize="sm" fontWeight={700} color="fg">{s.title}</Text>
                <Text fontFamily="mono" fontSize="xs" color="fg.subtle">{s.value}</Text>
              </VStack>
            ))}
          </Grid>
        </Box>

        <CTAFinalSection />
      </VStack>

      <Footer />
    </Page>
  );
}
