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
  Database,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Wrench,
  Building2,
  BarChart3,
  Lock,
  Layers,
  Rocket,
  Code,
  Globe,
  Cog
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: `Fábrica de Software | ${SITE_NAME}`,
  description:
    "Desenvolvemos software sob medida que resolve desafios únicos do seu negócio. Sistemas personalizados, integração inteligente e automação de processos.",
  keywords: [
    "fábrica de software",
    "desenvolvimento personalizado",
    "software sob medida",
    "automação de processos",
    "sistemas corporativos",
    "dashboards executivos",
  ],
  alternates: {
    canonical: `${SITE_URL}/fabrica-de-software`,
  },
  openGraph: {
    title: `Fábrica de Software | ${SITE_NAME}`,
    description: "Software sob medida que resolve os desafios únicos do seu negócio.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/fabrica-de-software`,
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
const problems = [
  {
    title: "Processos Manuais",
    description: "Tarefas repetitivas que consomem tempo precioso e geram gargalos na sua equipe.",
    icon: <Cog size={20} />,
    tag: "LENTIDÃO",
  },
  {
    title: "Silos de Dados",
    description: "Dados importantes espalhados por sistemas que não conversam, impedindo a visão unificada.",
    icon: <Database size={20} />,
    tag: "CEGUEIRA OCULTA",
  },
  {
    title: "Falta de Autonomia",
    description: "Dependência de fornecedores engessados para gerar um simples relatório ou customização.",
    icon: <Lock size={20} />,
    tag: "DEPENDÊNCIA",
  },
  {
    title: "Sistemas Rígidos",
    description: "Sua operação tendo que se adaptar a ferramentas genéricas, e não o oposto.",
    icon: <Wrench size={20} />,
    tag: "FRICÇÃO",
  },
];

const teamSolutions = [
  {
    title: "Sistemas Corporativos",
    description: "Plataformas internas para RH, gestão de metas e aprovações, mapeadas para sua cultura.",
    icon: <Building2 size={24} />,
  },
  {
    title: "Automação de Workflows",
    description: "Scripts e motores lógicos para conciliação de dados, tarefas de back-office e processos críticos.",
    icon: <Zap size={24} />,
  },
  {
    title: "Portais Seguros",
    description: "Ambientes isolados (B2B/B2C) com autenticação, para colaboradores, fornecedores e autoatendimento.",
    icon: <Users size={24} />,
  },
];

const managementSolutions = [
  {
    title: "Dashboards Executivos",
    description: "Consolidação de métricas em tempo real (ERP + CRM + Legacy) para direção precisa.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Governança e Compliance",
    description: "Sistemas fechados para garantir travas, rastreabilidade de acessos (logs gerais) e auditoria.",
    icon: <Shield size={24} />,
  },
  {
    title: "Orquestração de APIs",
    description: "Middlewares seguros que conectam o ERP arcaico ao novo SaaS moderno sem perder dados.",
    icon: <Layers size={24} />,
  },
];

const approach = [
  {
    step: "01",
    title: "Mapeamento Estratégico",
    description: "Mergulhamos na sua operação para achar a raiz do gargalo. Definimos escopo e KPIs antes de codar.",
  },
  {
    step: "02",
    title: "UX/UI & Specs",
    description: "Prototipagem em alta fidelidade. O software deve requerer treinamento zero de tão óbvio de ser usado.",
  },
  {
    step: "03",
    title: "Dev & Integrações",
    description: "Ciclos ágeis de entrega contínua. Você testa funcionalidades reais semana a semana.",
  },
  {
    step: "04",
    title: "Rollout e Sustentação",
    description: "O código não morre no deploy. Mantemos, escalamos e evoluímos as ferramentas com a sua empresa.",
  },
];

export default function SoftwareFactoryPage() {
  const whatsappUrl = `https://wa.me/${SITE_PHONE.replace(/\D/g, "")}?text=Olá! Quero falar sobre desenvolvimento sob medida.`;

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

          {/* Geometric Tech Element */}
          <Box
            position="absolute"
            top="15%"
            right="-5%"
            opacity={0.02}
            color="black"
            pointerEvents="none"
          >
            <svg width="600" height="600" viewBox="0 0 100 100">
              <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="50,15 85,30 85,70 50,85 15,70 15,30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
              <line x1="5" y1="25" x2="95" y2="75" stroke="currentColor" strokeWidth="0.5" />
              <line x1="5" y1="75" x2="95" y2="25" stroke="currentColor" strokeWidth="0.5" />
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
                Engenharia de Software
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
                Software que
              </Text>
              <br />
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="blue.solid"
              >
                muda o jogo.
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
                  maxW="700px"
                >
                  Desenvolvemos a camada tecnológica que falta para o seu
                  negócio rodar sozinho. Substitua as gambiarras em planilhas
                  e os sistemas lentos por softwares robustos e integrados,
                  criados sob medida para as regras do seu jogo.
                </Text>

                <HStack gap={{ base: 6, md: 10 }} flex={1} justify={{ base: "flex-start", lg: "flex-end" }} w="full">
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">ESCOPO</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">Soluções Nativas</Text>
                  </VStack>
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">PROCESSOS</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">Automatizados</Text>
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
                      Agendar Consultoria
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
                    Agendar Consultoria
                    <ArrowRight size={14} />
                  </Link>
                </Box>
              </Flex>
            </Box>
          </VStack>
        </Box>

        <Plumb />

        {/* ── Problemas que resolvemos ── */}
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
              <SectionTag>O Diagnóstico</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "32px", md: "44px" }}
                fontWeight={800}
                lineHeight={1.1}
                letterSpacing="-1px"
                color="fg"
                mb={6}
              >
                SaaS engessado <br /> não resolve o{" "}
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                  seu problema.
                </Text>
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
                A realidade dura: softwares de "prateleira" te obrigam
                a modificar os processos da empresa para se adequar a eles.
                Nós fazemos a tecnologia nascer moldada ao seu fluxo.
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="2px" bg="blackAlpha.100" p="1px">
              {problems.map((prob) => (
                <VStack
                  key={prob.title}
                  bg="white"
                  p={{ base: 6, md: 8 }}
                  align="flex-start"
                  gap={4}
                  transition="all 0.2s"
                  _hover={{ bg: "stone" }}
                >
                  <HStack justify="space-between" w="full">
                    <Box color="red.500">{prob.icon}</Box>
                    <HStack gap={2}>
                      <Box w="6px" h="1px" bg="red.500" />
                      <Text fontFamily="mono" fontSize="2xs" fontWeight={600} color="fg.subtle">
                        {prob.tag}
                      </Text>
                    </HStack>
                  </HStack>
                  <Box>
                    <Text fontSize="lg" fontWeight={700} color="fg" mb={2}>
                      {prob.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                      {prob.description}
                    </Text>
                  </Box>
                </VStack>
              ))}
            </Grid>
          </Grid>
        </Box>

        {/* ── Verticais da Fábrica (SaaS / Web) ── */}
        <Box
          as="section"
          bg="blue.solid"
          color="white"
        >
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            {/* Lado A: SAAS */}
            <Box
              p={{ base: 10, md: "80px", xl: "112px" }}
              borderRight={{ lg: "1px solid" }}
              borderBottom={{ base: "1px solid", lg: "none" }}
              borderColor="whiteAlpha.200"
              position="relative"
            >
              <VStack align="flex-start" gap={6} maxW="500px">
                <HStack gap={3}>
                  <Box p={3} bg="gold.500" color="blue.solid">
                    <Rocket size={24} />
                  </Box>
                  <Box>
                    <Text fontFamily="mono" fontSize="xs" fontWeight={600} color="gold.500" letterSpacing="0.1em" mb={1}>
                      VERTICAL 01
                    </Text>
                    <Text fontSize="3xl" fontWeight={800} letterSpacing="-1px">
                      SaaS & MVP's
                    </Text>
                  </Box>
                </HStack>
                <Text fontSize="md" color="whiteAlpha.800" lineHeight={1.8}>
                  Transformamos suas ideias corporativas ou intenção mercadológica em um
                  Data-Produto real. De pagamentos recorrentes a ambientes isolados na nuvem,
                  construímos a base para escalar.
                </Text>

                <Box mt={4}>
                  <Link href="/fabrica-de-software/construa-seu-saas" passHref>
                    <HStack
                      fontFamily="mono"
                      fontSize="sm"
                      fontWeight={600}
                      color="white"
                      gap={2}
                      _hover={{ color: "gold.500" }}
                      transition="all 0.2s"
                    >
                      <Text as="span">EXPLORAR SAAS</Text>
                      <ArrowRight size={16} />
                    </HStack>
                  </Link>
                </Box>
              </VStack>
            </Box>

            {/* Lado B: WEB */}
            <Box
              p={{ base: 10, md: "80px", xl: "112px" }}
              bg="rgba(0,0,0,0.15)"
            >
              <VStack align="flex-start" gap={6} maxW="500px">
                <HStack gap={3}>
                  <Box p={3} bg="white" color="blue.solid">
                    <Globe size={24} />
                  </Box>
                  <Box>
                    <Text fontFamily="mono" fontSize="xs" fontWeight={600} color="whiteAlpha.700" letterSpacing="0.1em" mb={1}>
                      VERTICAL 02
                    </Text>
                    <Text fontSize="3xl" fontWeight={800} letterSpacing="-1px">
                      Web platforms
                    </Text>
                  </Box>
                </HStack>
                <Text fontSize="md" color="whiteAlpha.800" lineHeight={1.8}>
                  A presença digital da sua empresa não deve ser apenas mais
                  um template genérico. Criamos portais corporativos complexos,
                  e-commerce deep-integrated e vitrines B2B que impõem autoridade.
                </Text>

                <Box mt={4}>
                  <Link href="/fabrica-de-software/seu-negocio-na-web" passHref>
                    <HStack
                      fontFamily="mono"
                      fontSize="sm"
                      fontWeight={600}
                      color="white"
                      gap={2}
                      _hover={{ color: "gold.500" }}
                      transition="all 0.2s"
                    >
                      <Text as="span">EXPLORAR WEB</Text>
                      <ArrowRight size={16} />
                    </HStack>
                  </Link>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Box>

        {/* ── Capabilities (Grid System) ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="white"
        >
          <VStack align="center" textAlign="center" mb={{ base: 12, md: 20 }} maxW="700px" mx="auto">
            <SectionTag>Core Tools</SectionTag>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "48px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1px"
            >
              Sistemas que{" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                removem a incerteza.
              </Text>
            </Text>
          </VStack>

          <Box border="1px solid" borderColor="blackAlpha.100" bg="off" mb={12}>
            <Box borderBottom="1px solid" borderColor="blackAlpha.100" p={{ base: 6, md: 8 }} bg="white">
              <HStack gap={3} align="center">
                <Box w="8px" h="8px" bg="blue.solid" />
                <Text fontSize="sm" fontWeight={700} letterSpacing="0.5px">OPERAÇÃO INTERNA</Text>
              </HStack>
            </Box>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="1px" bg="blackAlpha.100">
              {teamSolutions.map((sol) => (
                <Box key={sol.title} bg="off" p={{ base: 6, md: 8 }} _hover={{ bg: "white" }} transition="bg 0.2s">
                  <Box color="blue.solid" mb={4}>{sol.icon}</Box>
                  <Text fontSize="lg" fontWeight={700} color="fg" mb={2} letterSpacing="-0.3px">{sol.title}</Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>{sol.description}</Text>
                </Box>
              ))}
            </Grid>
          </Box>

          <Box border="1px solid" borderColor="blackAlpha.100" bg="off">
            <Box borderBottom="1px solid" borderColor="blackAlpha.100" p={{ base: 6, md: 8 }} bg="white">
              <HStack gap={3} align="center">
                <Box w="8px" h="8px" bg="blue.solid" />
                <Text fontSize="sm" fontWeight={700} letterSpacing="0.5px">ALTA GESTÃO</Text>
              </HStack>
            </Box>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="1px" bg="blackAlpha.100">
              {managementSolutions.map((sol) => (
                <Box key={sol.title} bg="off" p={{ base: 6, md: 8 }} _hover={{ bg: "white" }} transition="bg 0.2s">
                  <Box color="blue.solid" mb={4}>{sol.icon}</Box>
                  <Text fontSize="lg" fontWeight={700} color="fg" mb={2} letterSpacing="-0.3px">{sol.title}</Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>{sol.description}</Text>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* ── Diferenciais: O Jeito Shift+G ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="stone"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
        >
          <Grid templateColumns={{ base: "1fr", lg: "500px 1fr" }} gap={{ base: 12, lg: "60px" }} alignItems="start">
            <VStack align="flex-start" position={{ lg: "sticky" }} top="120px">
              <SectionTag>DNA</SectionTag>
              <Text as="h2" fontSize={{ base: "36px", md: "48px" }} fontWeight={800} lineHeight={1.1} letterSpacing="-1px">
                Nós entregamos <br />o ponteiro
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid"> final.</Text>
              </Text>
              <Text fontSize="md" color="fg.muted" mt={6} lineHeight={1.8}>
                Não somos apenas construtores de código genérico. Nossa base técnica
                surgiu desenhando softwares ultra-complexos de AI e Analytis. Cada linha
                é escrita focada em ROI, estabilidade e inteligência de dados nativa.
              </Text>

              <HStack gap={8} mt={10}>
                <VStack align="start" gap={1}>
                  <Text fontSize="3xl" fontWeight={800} color="blue.solid">Cloud</Text>
                  <Text fontFamily="mono" fontSize="2xs" color="fg.muted">BORN SYSTEM</Text>
                </VStack>
                <VStack align="start" gap={1}>
                  <Text fontSize="3xl" fontWeight={800} color="blue.solid">Data</Text>
                  <Text fontFamily="mono" fontSize="2xs" color="fg.muted">DRIVEN ARCH</Text>
                </VStack>
              </HStack>
            </VStack>

            <VStack gap={0} bg="blackAlpha.100" p="1px" align="stretch">
              {approach.map((step) => (
                <Box
                  key={step.step}
                  bg="white"
                  p={{ base: 8, md: 10 }}
                  transition="background 0.2s"
                  _hover={{ bg: "off" }}
                >
                  <HStack gap={4} mb={4}>
                    <Text fontFamily="mono" fontSize="sm" fontWeight={700} color="gold.600">
                      {step.step}.
                    </Text>
                    <Text fontSize="xl" fontWeight={800} letterSpacing="-0.5px">
                      {step.title}
                    </Text>
                  </HStack>
                  <Text fontSize="md" color="fg.muted" lineHeight={1.6} pl="36px">
                    {step.description}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Grid>
        </Box>

        <CTAFinalSection />
      </VStack>

      <Footer />
    </Page>
  );
}
