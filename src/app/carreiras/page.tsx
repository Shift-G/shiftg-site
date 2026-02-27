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
  Phone,
  HeadphonesIcon,
  Briefcase,
  Terminal,
  Activity,
  Cpu,
  Monitor,
  Zap
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, CAREERS_EMAIL } from "@/constants";

export const metadata: Metadata = {
  title: `Carreiras | ${SITE_NAME}`,
  description:
    "Torne-se um arquiteto na SHIFT+G. Vagas remotas em Inteligência Artificial, Dados e Vendas de Elite para nível C-Level.",
  alternates: {
    canonical: `${SITE_URL}/carreiras`,
  },
  openGraph: {
    title: `Carreiras | ${SITE_NAME}`,
    description:
      "Vagas remotas para profissionais que querem construir o futuro da IA e Dados em grandes arquiteturas.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/carreiras`,
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

const jobs = [
  {
    title: "Engenheiro de Dados Sênior",
    department: "Cloud & Engine",
    type: "REMOTO",
    salary: "R$ 12k — R$ 18k",
    description: "Lidere pipelines críticos. Esperamos vivência absoluta em Python, infraestruturas escaláveis e Data Lakes.",
    icon: <Database size={24} />,
    featured: true,
  },
  {
    title: "Engenheiro de Dados (Especialista)",
    department: "Cloud & Engine",
    type: "REMOTO",
    salary: "R$ 18k — R$ 25k",
    description: "Tech lead de infraestrutura. Definição da arquitetura de base para machine learning e real-time processing.",
    icon: <Cpu size={24} />,
    featured: true,
  },
  {
    title: "SDR - Vendas B2B Elite",
    department: "Revenue",
    type: "HÍBRIDO PR",
    salary: "R$ 4k — R$ 8k + ACEL",
    description: "Abra trincheiras e qualifique tickets C-Level. Conhecimento B2B de alto volume é mandatório.",
    icon: <Phone size={24} />,
    featured: false,
  },
  {
    title: "Project Manager",
    department: "Ops",
    type: "REMOTO",
    salary: "R$ 8k — R$ 12k",
    description: "Entrega não se negocia. Orquestre nossos engenheiros dentro dos prazos SLA dos clientes enterprise.",
    icon: <Briefcase size={24} />,
    featured: false,
  },
  {
    title: "Customer Support C-Level",
    department: "Support",
    type: "REMOTO",
    salary: "R$ 4.5k — R$ 6.5k",
    description: "A linha de frente não cai. Monitoramento ativo, queries rápidas e capacidade de alinhar com diretoria cliente.",
    icon: <HeadphonesIcon size={24} />,
    featured: false,
  },
];

const workspaceBenefits = [
  { icon: <Monitor size={20} />, label: "Setup Mac/PC de alta performance fornecido" },
  { icon: <Activity size={20} />, label: "Health / Plano nível executivo" },
  { icon: <Zap size={20} />, label: "Orçamento M mensal para Labs e Certificações" },
  { icon: <Terminal size={20} />, label: "Assinaturas liberadas (Copilot, Cursor, OpenAI)" },
];

export default function CareersPage() {
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
                05 Vagas em Aberto
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
                Aliste-se aos
              </Text>
              <br />
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="blue.solid"
              >
                construtores.
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
                  Somos exigentes, austeros com futilidades tecnológicas e obcecados por resultados em produção.
                  Se você foge da complexidade e quer bater ponto, essa empresa não é pra você. Aqui, entregamos as
                  bases que revolucionam indústrias — e operamos de qualquer lugar do Brasil.
                </Text>

                <HStack gap={{ base: 6, md: 10 }} flex={1} justify={{ base: "flex-start", lg: "flex-end" }} w="full">
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">MODELO</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">Remoto</Text>
                  </VStack>
                  <VStack align="flex-start" gap={1}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">REGIME</Text>
                    <Text fontSize="sm" fontWeight={600} color="fg">B2B / PJ</Text>
                  </VStack>

                  <Box
                    as="a"
                    href="#open-roles"
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
                    Ver Operações
                    <ArrowRight size={14} />
                  </Box>
                </HStack>
              </Flex>
            </Box>
          </VStack>
        </Box>

        <Plumb />

        {/* ── Culture / Setup ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="blue.solid"
          color="white"
          position="relative"
          overflow="hidden"
        >
          {/* Subtle geo bg */}
          <Box position="absolute" right={-20} top={-20} opacity={0.05} pointerEvents="none">
            <svg width="600" height="600" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" />
              <path d="M 5,50 L 95,50" stroke="white" strokeWidth="0.5" />
              <path d="M 50,5 L 50,95" stroke="white" strokeWidth="0.5" />
            </svg>
          </Box>

          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: "80px" }} position="relative" zIndex={2}>
            <Box>
              <SectionTag color="gold.500">WORKSPACE DA BASE</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "32px", md: "48px" }}
                fontWeight={800}
                lineHeight={1.1}
                letterSpacing="-1px"
                mb={6}
              >
                Arsenal para {" "}
                <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="gold.500">
                  engenheiros.
                </Text>
              </Text>
              <Text fontSize="lg" color="whiteAlpha.800" lineHeight={1.8}>
                Não economizamos na infantaria. O trabalho remoto da SHIFT+G significa que a matriz
                envia o hardware pesado, paga as assinaturas das melhores IAs que existem para que seu teclado
                escreva código e soluções de forma hiper-produtiva. Propósito importa, mas a infraestrutura te carrega.
              </Text>
            </Box>

            <VStack align="stretch" gap="1px" bg="whiteAlpha.200" p="1px">
              {workspaceBenefits.map((item, i) => (
                <HStack key={i} bg="blue.900" p={6} gap={4}>
                  <Box color="gold.500">{item.icon}</Box>
                  <Text fontSize="md" fontWeight={600}>{item.label}</Text>
                </HStack>
              ))}
            </VStack>
          </Grid>
        </Box>

        {/* ── Vagas Grid Table ── */}
        <Box
          id="open-roles"
          as="section"
          py={{ base: 16, md: "110px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="white"
        >
          <VStack align="center" textAlign="center" mb={{ base: 12, md: 16 }} maxW="700px" mx="auto">
            <SectionTag>BOARD DE ALOCAÇÃO</SectionTag>
            <Text
              as="h2"
              fontSize={{ base: "32px", md: "44px" }}
              fontWeight={800}
              lineHeight={1.1}
              letterSpacing="-1px"
            >
              Vagas de {" "}
              <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
                Operação.
              </Text>
            </Text>
          </VStack>

          <VStack w="full" bg="blackAlpha.100" p="1px" gap="1px">
            {jobs.map((job, i) => (
              <Grid
                key={i}
                templateColumns={{ base: "1fr", lg: "300px 1fr 200px" }}
                gap={{ base: 6, lg: 10 }}
                bg="off"
                p={{ base: 8, md: 10 }}
                w="full"
                alignItems="center"
                _hover={{ bg: "white" }}
                transition="all 0.2s"
              >
                {/* Left Col - Identity */}
                <VStack align="flex-start" gap={3}>
                  {job.featured && (
                    <Box bg="blue.solid" color="white" px={3} py={1}>
                      <Text fontFamily="mono" fontSize="2xs" fontWeight={800}>PRIORIDADE ALTA</Text>
                    </Box>
                  )}
                  {!job.featured && (
                    <Box bg="stone" color="fg.subtle" border="1px solid" borderColor="blackAlpha.200" px={3} py={1}>
                      <Text fontFamily="mono" fontSize="2xs" fontWeight={800}>{job.department.toUpperCase()}</Text>
                    </Box>
                  )}
                  <Text fontSize="2xl" fontWeight={800} letterSpacing="-0.5px" color="fg" mt={2}>
                    {job.title}
                  </Text>
                </VStack>

                {/* Middle Col - Spec & Briefing */}
                <VStack align="flex-start" gap={2}>
                  <HStack gap={4} mb={2}>
                    <HStack color="fg.subtle" gap={2}>
                      <Terminal size={14} />
                      <Text fontFamily="mono" fontSize="10px" fontWeight={700}>{job.department.toUpperCase()}</Text>
                    </HStack>
                    <HStack color="blue.solid" gap={2}>
                      <Activity size={14} />
                      <Text fontFamily="mono" fontSize="10px" fontWeight={700}>{job.type}</Text>
                    </HStack>
                  </HStack>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                    {job.description}
                  </Text>
                </VStack>

                {/* Right Col - Action */}
                <VStack align={{ base: "flex-start", lg: "flex-end" }} gap={4} w="full">
                  <VStack align={{ base: "flex-start", lg: "flex-end" }} gap={0}>
                    <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">COMPENSAÇÃO B2B</Text>
                    <Text fontSize="lg" fontWeight={800} color="fg">{job.salary}</Text>
                  </VStack>
                  <Box
                    as="a"
                    href={`mailto:${CAREERS_EMAIL}?subject=Candidatura: ${job.title}&body=Olá! Segue em anexo meu histórico para a posição de ${job.title}.`}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="10px"
                    bg="transparent"
                    color="blue.solid"
                    border="1px solid"
                    borderColor="blue.solid"
                    px="24px"
                    py="10px"
                    fontWeight={700}
                    fontSize="xs"
                    textTransform="uppercase"
                    transition="all 0.2s"
                    _hover={{ bg: "blue.solid", color: "white" }}
                    w={{ base: "full", lg: "auto" }}
                  >
                    Apresentar Arquivo
                  </Box>
                </VStack>
              </Grid>
            ))}
          </VStack>
        </Box>

        {/* ── Naked CTA ── */}
        <Box
          as="section"
          py={{ base: 16, md: "80px" }}
          px={{ base: 6, md: "60px", lg: "112px" }}
          bg="stone"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
          textAlign="center"
        >
          <Text fontSize="2xl" fontWeight={800} color="fg" mb={4}>Nenhuma vaga ativa bateu com você?</Text>
          <Text fontSize="md" color="fg.muted" maxW="600px" mx="auto" mb={8}>
            Gênios sempre encontram porta aberta. Submeta uma aplicação bruta e justifique por que
            precisamos de você dentro da Matrix.
          </Text>
          <Box
            as="a"
            href={`mailto:${CAREERS_EMAIL}?subject=Candidatura Espontânea&body=Nenhuma vaga se aplica, mas vocês precisam olhar esse currículo anexado.`}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            bg="fg"
            color="white"
            px="32px"
            py="16px"
            fontWeight={600}
            fontSize="sm"
            transition="all 0.2s"
            _hover={{ bg: "black" }}
          >
            Envio Espontâneo
            <ArrowRight size={14} />
          </Box>
        </Box>
      </VStack>

      <Footer />
    </Page>
  );
}
