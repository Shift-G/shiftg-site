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
  Shield,
  Code,
  Settings,
  CreditCard,
  BarChart3,
  Timer,
  Lock,
  MessageCircle,
  Layers,
  ChevronRight,
  TrendingUp,
  Target
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: `Construa seu SaaS | ${SITE_NAME}`,
  description:
    "Transforme sua ideia em um SaaS rentável. Desenvolvemos plataformas completas, escaláveis e prontas para o mercado. Da MVP ao produto final.",
  keywords: [
    "desenvolvimento saas",
    "criar plataforma saas",
    "mvp saas",
    "software como serviço",
    "arquitetura saas",
    "fábrica de software",
  ],
  alternates: {
    canonical: `${SITE_URL}/fabrica-de-software/construa-seu-saas`,
  },
  openGraph: {
    title: `Construa seu SaaS | ${SITE_NAME}`,
    description: "Da ideia ao SaaS rentável. Desenvolvemos sua plataforma completa e escalável.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/fabrica-de-software/construa-seu-saas`,
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
    title: "Arquitetura Scale-Ready",
    description: "Multi-tenant, isolamento de dados e design robusto desde a linha um de código.",
    icon: <Layers size={20} />,
    tag: "INFRAESTRUTURA",
  },
  {
    title: "Segurança Implacável",
    description: "Proteção de dados de múltiplos clientes, compliance integrado e criptografia.",
    icon: <Lock size={20} />,
    tag: "RISCO",
  },
  {
    title: "Monetização Contínua",
    description: "Motor de billing e assinaturas integrado. Cobrança e gating sem dores de cabeça.",
    icon: <CreditCard size={20} />,
    tag: "REVENUE",
  },
  {
    title: "Velocity",
    description: "Código extensível que cresce com a empresa, sem necessidade de eternos refactors.",
    icon: <TrendingUp size={20} />,
    tag: "CRESCIMENTO",
  },
];

const features = [
  {
    title: "Arquitetura Multi-Tenant",
    description: "Divisão lógica e segura de dados entre as contas (Data Isolation).",
    icon: <Database size={22} />,
  },
  {
    title: "Autenticação e SSO",
    description: "Fluxos de auth modernos, 2FA, RBAC e Single Sign-On.",
    icon: <Shield size={22} />,
  },
  {
    title: "Motor de Billing",
    description: "Integração Stripe/Iugu, com múltiplos planos, trials e invoices.",
    icon: <CreditCard size={22} />,
  },
  {
    title: "API First",
    description: "Endpoints documentados (Swagger), versionados e prontos.",
    icon: <Code size={22} />,
  },
  {
    title: "Painel de Admin (Backoffice)",
    description: "Visão mestre da sua operação: superadmin, métricas e onboarding.",
    icon: <Settings size={22} />,
  },
  {
    title: "Analytics Nativo",
    description: "Métricas de MRR, Churn e engajamento expostas na própria ferramenta.",
    icon: <BarChart3 size={22} />,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    description: "Antes de escrevermos uma linha de código, o negócio e o escopo do produto são esculpidos.",
    deliverables: ["Arquitetura de Banco", "Wireframes", "Casos de Uso", "Roadmap MVP"],
  },
  {
    step: "02",
    title: "UX/UI System",
    description: "Criamos as telas focados na melhor experiência e conversão de trial para pago.",
    deliverables: ["Design System", "Pixel Perfect UI", "Protótipos Navegáveis", "Testes de Fluxo"],
  },
  {
    step: "03",
    title: "Continuous Build",
    description: "Sprints de construção de API, infraestrutura, Auth & Billing integrados iterativamente.",
    deliverables: ["Front SPA", "Backend Services", "Automações CI/CD", "Ambiente Staging"],
  },
  {
    step: "04",
    title: "Launch & Escala",
    description: "Do go-live ao crescimento. Estamos lá para garantir estabilidade nos dias importantes.",
    deliverables: ["Deploy em Nuvem", "Monitorização", "Hotfixes", "Retenção Técnica"],
  },
];

const pricing = [
  {
    name: "O MVP Starter",
    price: "R$ 45k",
    duration: "8-12 Semanas",
    description: "Mínimo Produto com valor máximo. Valide com código em produção.",
    features: [
      "Aplicação One-Page App",
      "Login / Cadastro / Esqueceu Senha",
      "Até 4 funcionalidades core",
      "Pagamento e Planos Base",
      "Infraestrutura Serverless/Cloud",
      "2 meses de sustentação vital",
    ],
    highlighted: false,
  },
  {
    name: "SaaS Scale",
    price: "R$ 85k",
    duration: "16-20 Semanas",
    description: "Software preparado para agressividade no mercado e alto tráfego.",
    features: [
      "Tudo do MVP Starter",
      "Sistemas Financeiros e API's 3rd party",
      "Dashboards complexos",
      "Painel Super Admin",
      "Documentação de API aberta",
      "6 meses de SLA Gold",
    ],
    highlighted: true,
  },
];

export default function SaasPage() {
  const whatsappUrl = `https://wa.me/${SITE_PHONE.replace(/\D/g, "")}?text=Olá! Quero dar o start no meu SaaS.`;

  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch">

        {/* ── Hero ── */}
        <Box
          as="section"
          minH={{ base: "65vh", md: "85vh" }}
          bg="off"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          position="relative"
          overflow="hidden"
          px={{ base: 6, md: "60px", lg: "112px" }}
        >
          {/* Subtle tech background */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="radial-gradient(#00000008 1px, transparent 1px)"
            backgroundSize="24px 24px"
            pointerEvents="none"
          />

          {/* Code syntax background element absolute */}
          <Box
            position="absolute"
            right="-5%"
            top="20%"
            opacity={0.03}
            pointerEvents="none"
            transform="rotate(-5deg)"
            color="black"
            fontFamily="mono"
            fontSize="48px"
            fontWeight={900}
            lineHeight={1}
            whiteSpace="pre"
            userSelect="none"
            display={{ base: "none", md: "block" }}
          >
            {`npm init @shift-g/saas
> installing core
> architecture: multi-tenant
> scale: infinite

✓ Success!`}
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
                Fábrica · Construa Seu SaaS
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "48px", md: "clamp(60px, 8vw, 130px)" }}
              lineHeight={0.92}
              letterSpacing="-2.5px"
              color="fg"
              maxW="1300px"
              mb={0}
            >
              <Text as="span" fontWeight={800}>
                Software para
              </Text>
              <br />
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="blue.solid"
              >
                gerar receita.
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
                  Transforme a sua ideia em uma plataforma recorrente de
                  alta escalabilidade. Da modelagem da arquitetura multi-tenant
                  ao deploy serverless, construímos seu produto do zero enquanto
                  você foca na tração.
                </Text>

                <HStack gap={{ base: 6, md: 10 }} flex={1} justify={{ base: "flex-start", lg: "flex-end" }} w="full">
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">MVP EM</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">8-12 Semanas</Text>
                  </VStack>
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">PADRÃO</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">Multi-tenant</Text>
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
                      Falar com Architect
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
                    Falar com Architect
                    <ArrowRight size={14} />
                  </Link>
                </Box>
              </Flex>
            </Box>
          </VStack>
        </Box>

        <Plumb />

        {/* ── Engenharia complexa (antiga Challenges) ── */}
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
              <SectionTag>Requirements</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "32px", md: "clamp(32px, 3vw, 44px)" }}
                fontWeight={800}
                lineHeight={1.1}
                letterSpacing="-1px"
                color="fg"
                mb={6}
              >
                Desenvolver SaaS<br />vai muito{" "}
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="gray.emphasized">
                  além de
                </Text> um site.
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
                É engenharia complexa que precisa suportar
                crescimento e multi-usuários sem colapsar a
                segurança os dados. Fazemos certo, desde a linha 1.
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="2px" bg="blackAlpha.100" p="1px">
              {challenges.map((chal) => (
                <VStack
                  key={chal.title}
                  bg="white"
                  p={{ base: 6, md: 8 }}
                  align="flex-start"
                  gap={4}
                  transition="all 0.2s"
                  _hover={{ bg: "off" }}
                >
                  <HStack justify="space-between" w="full">
                    <Box color="blue.solid">{chal.icon}</Box>
                    <HStack gap={2}>
                      <Box w="6px" h="1px" bg="gold.500" />
                      <Text fontFamily="mono" fontSize="2xs" fontWeight={600} color="fg.subtle">
                        {chal.tag}
                      </Text>
                    </HStack>
                  </HStack>
                  <Box>
                    <Text fontSize="lg" fontWeight={700} color="fg" mb={2}>
                      {chal.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                      {chal.description}
                    </Text>
                  </Box>
                </VStack>
              ))}
            </Grid>
          </Grid>
        </Box>

        {/* ── Feature Engineering ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          bg="stone"
          px={{ base: 6, md: "60px", lg: "112px" }}
        >
          <VStack align="center" textAlign="center" mb={{ base: 12, md: 20 }} maxW="700px" mx="auto">
            <SectionTag>Componentes Core</SectionTag>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "48px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1.5px"
            >
              A espinha{" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                dorsal
              </Text>{" "}
              do sistema.
            </Text>
            <Text fontSize="md" color="fg.muted" mt={4} lineHeight={1.7}>
              Todo software multi-tenant SaaS de sucesso precisa de motores
              fundamentais. Nós abstraímos isso e entregamos os blocos empresariais essenciais prontos para você faturar.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="2px" bg="blackAlpha.100" p="1px">
            {features.map((feat) => (
              <VStack
                key={feat.title}
                bg="white"
                p={{ base: 8, md: 10 }}
                align="start"
                gap={5}
                _hover={{ bg: "#fafaf8" }}
                transition="bg 0.2s"
              >
                <Box p={3} border="1px solid" borderColor="blackAlpha.200" color="blue.solid">
                  {feat.icon}
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight={700} color="fg" mb={2} letterSpacing="-0.3px">
                    {feat.title}
                  </Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                    {feat.description}
                  </Text>
                </Box>
              </VStack>
            ))}
          </Grid>
        </Box>

        {/* ── Metodologia (O Processo) ── */}
        <Box
          as="section"
          py={{ base: 16, md: "120px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="off"
        >
          <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 12, lg: "80px" }}>

            <Box flex={{ lg: "400px" }} position="relative">
              <Box position="sticky" top="120px">
                <SectionTag>O Path</SectionTag>
                <Text
                  as="h2"
                  fontSize={{ base: "36px", md: "54px" }}
                  fontWeight={800}
                  lineHeight={1.1}
                  letterSpacing="-1.5px"
                  color="fg"
                  mb={6}
                >
                  Construir<br />
                  não é{" "}
                  <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                    achar.
                  </Text>
                </Text>
                <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
                  Aplicamos o método de "Continuous Delivery" onde entregas são frequentes e reais, reduzindo o risco e focado no seu roadmap de go-to-market.
                </Text>
              </Box>
            </Box>

            <VStack flex={1} gap={0} bg="blackAlpha.100" p="1px" align="stretch">
              {process.map((step) => (
                <Grid
                  key={step.step}
                  templateColumns={{ base: "1fr", md: "80px 1fr 1fr" }}
                  bg="white"
                  p={{ base: 6, md: 10 }}
                  gap={{ base: 6, md: 8 }}
                  alignItems="start"
                  transition="bg 0.2s"
                  _hover={{ bg: "#fafaf8" }}
                  borderBottom="1px solid"
                  borderColor="blackAlpha.100"
                >
                  <Text fontFamily="mono" fontSize="xl" fontWeight={700} color="gold.600">
                    {step.step}
                  </Text>

                  <Box>
                    <Text fontSize="2xl" fontWeight={800} color="fg" mb={3} letterSpacing="-0.5px">
                      {step.title}
                    </Text>
                    <Text fontSize="md" color="fg.muted" lineHeight={1.6}>
                      {step.description}
                    </Text>
                  </Box>

                  <Box pl={{ md: 6 }} borderLeft={{ md: "1px solid" }} borderColor="blackAlpha.100">
                    <Text fontFamily="mono" fontSize="10px" color="fg.subtle" mb={4}>
                      ENTREGAS
                    </Text>
                    <VStack align="start" gap={3}>
                      {step.deliverables.map((dlv) => (
                        <HStack key={dlv} gap={3}>
                          <Box w="6px" h="1px" bg="blue.solid" />
                          <Text fontSize="sm" fontWeight={500} color="fg" letterSpacing="-0.2px">
                            {dlv}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                </Grid>
              ))}
            </VStack>
          </Flex>
        </Box>

        {/* ── Pricing Board ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          bg="blue.solid"
          color="white"
          px={{ base: 6, md: "60px", lg: "112px" }}
        >
          <VStack align="center" mb={{ base: 12, md: 16 }} maxW="700px" mx="auto" textAlign="center">
            <HStack
              fontFamily="mono"
              fontSize="2xs"
              fontWeight={600}
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="whiteAlpha.700"
              gap="10px"
              mb={4}
            >
              <Box w="18px" h="1.5px" bg="gold.500" />
              <Text>Blueprint Financeiro</Text>
            </HStack>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "48px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1px"
            >
              Invista{" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400}>certo.</Text>
            </Text>
          </VStack>

          <Flex direction={{ base: "column", md: "row" }} gap={{ base: 6, md: "4px" }} maxW="1000px" mx="auto">
            {pricing.map((plan) => (
              <Box
                key={plan.name}
                flex={1}
                bg={plan.highlighted ? "white" : "whiteAlpha.100"}
                color={plan.highlighted ? "fg" : "white"}
                p={{ base: 8, md: 10 }}
              >
                {plan.highlighted && (
                  <Text fontFamily="mono" fontSize="2xs" fontWeight={600} color="gold.600" mb={4}>
                    ESTRUTURA MAIS BUSCADA
                  </Text>
                )}
                <Text fontSize="2xl" fontWeight={800} mb={2} letterSpacing="-0.5px">{plan.name}</Text>
                <Text fontSize="sm" color={plan.highlighted ? "fg.muted" : "whiteAlpha.800"} h="40px">{plan.description}</Text>

                <Box my={6} borderBottom="1px solid" borderColor={plan.highlighted ? "blackAlpha.200" : "whiteAlpha.200"} pb={6}>
                  <Text fontSize="4xl" fontWeight={800} letterSpacing="-2px">{plan.price}</Text>
                  <HStack gap={2} mt={1} fontFamily="mono" fontSize="xs" color={plan.highlighted ? "blue.solid" : "whiteAlpha.700"}>
                    <Timer size={14} />
                    <Text>{plan.duration}</Text>
                  </HStack>
                </Box>

                <VStack align="start" gap={3} mb={8}>
                  {plan.features.map(f => (
                    <HStack key={f} gap={3}>
                      <Box p="3px" bg={plan.highlighted ? "blue.50" : "whiteAlpha.200"}>
                        <Target size={12} color={plan.highlighted ? "var(--chakra-colors-blue-solid)" : "white"} />
                      </Box>
                      <Text fontSize="sm" fontWeight={500}>{f}</Text>
                    </HStack>
                  ))}
                </VStack>

                <Box
                  asChild
                  w="full"
                  display="inline-flex"
                  justifyContent="center"
                  alignItems="center"
                  bg={plan.highlighted ? "blue.solid" : "white"}
                  color={plan.highlighted ? "white" : "fg"}
                  py="16px"
                  fontWeight={600}
                  fontSize="sm"
                  transition="all 0.2s"
                  _hover={{ opacity: 0.9 }}
                >
                  <Link href={whatsappUrl}>
                    Montar este Projeto
                  </Link>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>

        <CTAFinalSection />
      </VStack>

      <Footer />
    </Page>
  );
}
