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
import { ContactForm } from "@/components/forms/ContactForm";
import {
  ArrowRight,
  Brain,
  Zap,
  Lock,
  Award,
  Users,
  FileText,
  Terminal,
  Cpu,
  CircuitBoard,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `Treinamento de IA In Company | ${SITE_NAME}`,
  description:
    "Capacitação prática e estratégica para equipes que precisam usar IA com segurança, clareza e produtividade. Programa sob medida da Shift+G.",
  keywords: [
    "treinamento IA empresas",
    "capacitação inteligência artificial",
    "treinamento in company IA",
    "workshop IA corporativo",
    "treinamento ChatGPT empresas",
    "IA aplicada negócios",
    "maturidade digital",
  ],
  alternates: {
    canonical: `${SITE_URL}/treinamento-ia-para-sua-empresa`,
  },
  openGraph: {
    title: `Treinamento de IA In Company | ${SITE_NAME}`,
    description:
      "Capacitação prática e estratégica para equipes que precisam usar IA com segurança, clareza e produtividade.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/treinamento-ia-para-sua-empresa`,
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

/* ── Module data ── */
interface ModuleData {
  number: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  topics: string[];
}

const modules: ModuleData[] = [
  {
    number: "01",
    icon: <Brain size={18} />,
    title: "Fundamentos de IA aplicada ao negócio",
    subtitle: "Clareza sem tecnicismos. Objetividade sem superficialidade.",
    topics: [
      "O que é IA, em termos práticos",
      "Como modelos funcionam e onde fazem sentido",
      "Riscos, limitações e governança",
      "Identificar oportunidades reais no dia a dia",
      "Mudanças em eficiência, decisão e operação",
    ],
  },
  {
    number: "02",
    icon: <Zap size={18} />,
    title: "Uso prático das ferramentas de IA",
    subtitle: "Módulo altamente aplicado, focado em produtividade.",
    topics: [
      "Construção de prompts eficazes",
      "Análise e revisão de textos",
      "Automações simples e suporte a decisões",
      "Geração de relatórios e documentos",
      "Fluxos inteligentes integrados ao trabalho real",
    ],
  },
  {
    number: "03",
    icon: <Lock size={18} />,
    title: "Governança, segurança e boas práticas",
    subtitle: "IA precisa ser usada com responsabilidade.",
    topics: [
      "Riscos de vazamento de dados",
      "Boas práticas de segurança",
      "Limites e cuidados com ferramentas externas",
      "Criar regras internas e uso consciente",
      "Políticas de privacidade e diretrizes corporativas",
    ],
  },
  {
    number: "04",
    icon: <Award size={18} />,
    title: "Workshops executivos para C-Level",
    subtitle: "Formato voltado a decisão, eficiência e estratégia.",
    topics: [
      "Impacto real da IA em operações",
      "Aceleração de processos críticos",
      "Estimativas de ROI",
      "Riscos de não adoção",
      "Liderar equipes em ambiente de IA",
    ],
  },
  {
    number: "05",
    icon: <Users size={18} />,
    title: "Programas para equipes operacionais",
    subtitle: "Aplicação prática para atividades específicas.",
    topics: [
      "Atendimento e SAC",
      "Operações industriais",
      "Financeiro / contábil",
      "RH e gestão de pessoas",
      "Vendas, jurídico, marketing",
    ],
  },
  {
    number: "06",
    icon: <FileText size={18} />,
    title: "Criação de Playbooks Internos",
    subtitle: "Garantia de continuidade e escala.",
    topics: [
      "Melhores práticas documentadas",
      "Regras de uso padronizadas",
      "Orientações de segurança",
      "Fluxos de trabalho recomendados",
      "Exemplos práticos aplicados à empresa",
    ],
  },
];

/* ── Format data ── */
interface FormatData {
  number: string;
  title: string;
  duration: string;
  description: string;
}

const formats: FormatData[] = [
  {
    number: "A",
    title: "Treinamento completo",
    duration: "1–2 dias intensivos",
    description:
      "Imersão total. Todos os módulos em sequência, com exercícios práticos e playbook final.",
  },
  {
    number: "B",
    title: "Workshop intensivo",
    duration: "4 horas",
    description:
      "Formato concentrado para equipes que precisam de resultado rápido e foco cirúrgico.",
  },
  {
    number: "C",
    title: "Módulos sob demanda",
    duration: "Personalizado",
    description:
      "Escolha os módulos que fazem sentido para o seu cenário. Flexibilidade total.",
  },
  {
    number: "D",
    title: "Imersão para diretoria",
    duration: "Sessão executiva",
    description:
      "Visão estratégica para C-Level. Foco em ROI, riscos e liderança em ambiente de IA.",
  },
  {
    number: "E",
    title: "Programa contínuo",
    duration: "Sessões mensais",
    description:
      "Acompanhamento recorrente. Evolução gradual e consistente da maturidade digital.",
  },
  {
    number: "F",
    title: "Aulas práticas",
    duration: "Hands-on",
    description:
      "Foco 100% em produtividade diária. Menos teoria, mais resultado aplicado.",
  },
];

/* ── Differentials ── */
const differentials: string[] = [
  "Linguagem clara e executiva",
  "Treinamento aplicado à realidade do cliente",
  "Conteúdo atualizado e alinhado às melhores práticas",
  "Equilíbrio entre visão estratégica e produtividade real",
  "Seriedade institucional e rigor técnico",
  "Capacidade de ensinar temas complexos com simplicidade",
  "Expertise prática em IA aplicada a negócios",
  "Formação que gera impacto imediato no dia a dia",
];

/* ── Module Card ── */
function ModuleCard({ module }: { module: ModuleData }) {
  return (
    <VStack
      align="flex-start"
      bg="white"
      px={{ base: 6, md: 8 }}
      py={{ base: 8, md: 10 }}
      position="relative"
      overflow="hidden"
      transition="background 0.2s"
      _hover={{
        bg: "#fafaf8",
        "& .mod-accent": { transform: "scaleX(1)" },
        "& .mod-icon": { borderColor: "blue.solid" },
      }}
    >
      {/* Top accent bar */}
      <Box
        className="mod-accent"
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="2px"
        bg="blue.solid"
        transform="scaleX(0)"
        transformOrigin="left"
        transition="transform 0.4s cubic-bezier(0.4,0,0.2,1)"
      />

      {/* Number + icon row */}
      <HStack justify="space-between" w="full" mb={6}>
        <Text
          fontFamily="mono"
          fontSize="2xs"
          fontWeight={600}
          letterSpacing="0.16em"
          color="fg.subtle"
        >
          {module.number}
        </Text>
        <Box
          className="mod-icon"
          w="36px"
          h="36px"
          border="1.5px solid"
          borderColor="blackAlpha.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition="border-color 0.25s"
          color="blue.solid"
        >
          {module.icon}
        </Box>
      </HStack>

      {/* Title */}
      <Text
        fontSize={{ base: "md", md: "lg" }}
        fontWeight={700}
        color="fg"
        letterSpacing="-0.3px"
        mb={1}
      >
        {module.title}
      </Text>

      {/* Subtitle */}
      <Text
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={500}
        color="blue.solid"
        letterSpacing="0.04em"
        mb={5}
      >
        {module.subtitle}
      </Text>

      {/* Topics */}
      <VStack gap="6px" align="flex-start" flex={1}>
        {module.topics.map((topic) => (
          <HStack key={topic} gap={2} align="flex-start">
            <Box
              w="4px"
              h="4px"
              bg="blue.solid"
              mt="7px"
              flexShrink={0}
            />
            <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
              {topic}
            </Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}

/* ── Format Item ── */
function FormatItem({ format }: { format: FormatData }) {
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
        fontWeight={700}
        color="blue.solid"
        letterSpacing="0.06em"
        pt="3px"
      >
        {format.number}
      </Text>
      <Box>
        <HStack gap={3} mb="3px">
          <Text
            fontSize="md"
            fontWeight={700}
            color="fg"
            letterSpacing="-0.2px"
          >
            {format.title}
          </Text>
          <Text
            fontFamily="mono"
            fontSize="2xs"
            fontWeight={500}
            color="fg.subtle"
            letterSpacing="0.04em"
          >
            {format.duration}
          </Text>
        </HStack>
        <Text fontSize="sm" color="fg.muted" lineHeight={1.68}>
          {format.description}
        </Text>
      </Box>
    </Grid>
  );
}

export default function TreinamentoIAPage() {
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
          {/* Background circuit pattern */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="repeating-conic-gradient(rgba(0,0,0,0.015) 0% 25%, transparent 0% 50%)"
            backgroundSize="32px 32px"
            pointerEvents="none"
            maskImage="linear-gradient(to bottom, transparent 20%, black 75%)"
          />

          {/* Background neural network SVG */}
          <Box
            as="svg"
            position="absolute"
            right="-5%"
            top="50%"
            transform="translateY(-50%)"
            w={{ base: "80vw", lg: "50vw" }}
            maxW="900px"
            opacity={0.04}
            pointerEvents="none"
            color="blue.solid"
            // @ts-ignore
            viewBox="0 0 500 500"
            fill="none"
          >
            {/* Neural network nodes */}
            <circle cx="250" cy="250" r="8" fill="currentColor" />
            <circle cx="120" cy="150" r="5" fill="currentColor" />
            <circle cx="380" cy="150" r="5" fill="currentColor" />
            <circle cx="120" cy="350" r="5" fill="currentColor" />
            <circle cx="380" cy="350" r="5" fill="currentColor" />
            <circle cx="60" cy="250" r="4" fill="currentColor" />
            <circle cx="440" cy="250" r="4" fill="currentColor" />
            <circle cx="180" cy="80" r="3" fill="currentColor" />
            <circle cx="320" cy="80" r="3" fill="currentColor" />
            <circle cx="180" cy="420" r="3" fill="currentColor" />
            <circle cx="320" cy="420" r="3" fill="currentColor" />
            {/* Connections */}
            <line x1="250" y1="250" x2="120" y2="150" stroke="currentColor" strokeWidth="0.8" />
            <line x1="250" y1="250" x2="380" y2="150" stroke="currentColor" strokeWidth="0.8" />
            <line x1="250" y1="250" x2="120" y2="350" stroke="currentColor" strokeWidth="0.8" />
            <line x1="250" y1="250" x2="380" y2="350" stroke="currentColor" strokeWidth="0.8" />
            <line x1="250" y1="250" x2="60" y2="250" stroke="currentColor" strokeWidth="0.8" />
            <line x1="250" y1="250" x2="440" y2="250" stroke="currentColor" strokeWidth="0.8" />
            <line x1="120" y1="150" x2="180" y2="80" stroke="currentColor" strokeWidth="0.5" />
            <line x1="380" y1="150" x2="320" y2="80" stroke="currentColor" strokeWidth="0.5" />
            <line x1="120" y1="350" x2="180" y2="420" stroke="currentColor" strokeWidth="0.5" />
            <line x1="380" y1="350" x2="320" y2="420" stroke="currentColor" strokeWidth="0.5" />
            <line x1="120" y1="150" x2="60" y2="250" stroke="currentColor" strokeWidth="0.5" />
            <line x1="380" y1="150" x2="440" y2="250" stroke="currentColor" strokeWidth="0.5" />
            <line x1="120" y1="350" x2="60" y2="250" stroke="currentColor" strokeWidth="0.5" />
            <line x1="380" y1="350" x2="440" y2="250" stroke="currentColor" strokeWidth="0.5" />
            {/* Outer ring */}
            <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="0.3" fill="none" strokeDasharray="4 6" />
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
              <HStack gap="4px">
                <Box w="6px" h="6px" bg="blue.solid" />
                <Box w="6px" h="6px" bg="blue.solid" opacity={0.5} />
                <Box w="6px" h="6px" bg="blue.solid" opacity={0.25} />
              </HStack>
              <Text
                fontFamily="mono"
                fontSize="2xs"
                fontWeight={600}
                letterSpacing="0.13em"
                textTransform="uppercase"
                color="blue.solid"
              >
                Treinamento In Company
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
              <Text as="span" fontWeight={800}>
                IA para
              </Text>
              <br />
              <Text as="span" fontWeight={800}>
                sua{" "}
              </Text>
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="blue.solid"
              >
                equipe.
              </Text>
              <br />
              <Text
                as="span"
                fontFamily="mono"
                fontWeight={700}
                color="blue.solid"
                letterSpacing="-0.04em"
                position="relative"
                display="inline-block"
                fontSize={{ base: "32px", md: "clamp(40px, 5.5vw, 80px)" }}
              >
                Na prática.
                <Box
                  as="span"
                  position="absolute"
                  bottom="4px"
                  left={0}
                  right={0}
                  h="3px"
                  bg="gold.500"
                  opacity={0.45}
                />
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
                  Capacitação prática e estratégica para equipes que precisam
                  usar IA com{" "}
                  <Text as="strong" color="fg" fontWeight={500}>
                    segurança, clareza e produtividade.
                  </Text>{" "}
                  Transformamos conhecimento em prática, prática em eficiência.
                </Text>

                {/* Terminal-like element */}
                <Box
                  fontFamily="mono"
                  fontSize="xs"
                  color="fg.subtle"
                  border="1px solid"
                  borderColor="blackAlpha.100"
                  px={4}
                  py={3}
                  flex={1}
                  maxW={{ base: "full", lg: "320px" }}
                >
                  <Text color="blue.solid" fontWeight={600}>
                    $ shift+g train
                  </Text>
                  <Text color="fg.muted" mt={1}>
                    → Fundamentos · Prática · Governança
                  </Text>
                  <Text color="fg.muted">
                    → C-Level · Operações · Playbooks
                  </Text>
                  <Text color="gold.500" mt={1} fontWeight={600}>
                    ✓ Equipe pronta para IA.
                  </Text>
                </Box>

                {/* CTA */}
                <Box
                  as={Link}
                  // @ts-ignore
                  href="#contato"
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
                  Agendar treinamento
                  <ArrowRight size={14} />
                </Box>
              </Flex>
            </Box>
          </VStack>
        </Box>

        {/* Divider */}
        <Plumb />

        {/* ── Por que agora ── */}
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
              <SectionTag>Diagnóstico</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
                fontWeight={800}
                lineHeight={1.04}
                letterSpacing="-1.5px"
                color="fg"
              >
                A IA já está
                <br />
                na operação.
                <br />
                <Text
                  as="span"
                  fontFamily="serif"
                  fontWeight={400}
                  fontStyle="italic"
                  color="gray.emphasized"
                >
                  O que falta é
                  <br />
                  maturidade.
                </Text>
              </Text>

              {/* Alert callout */}
              <Box
                mt={7}
                px={5}
                py="18px"
                border="1px solid"
                borderColor="blue.solid/15"
                borderLeft="3px solid"
                borderLeftColor="blue.solid"
              >
                <Text
                  fontSize="sm"
                  color="fg.muted"
                  lineHeight={1.72}
                >
                  <Text
                    as="strong"
                    color="blue.solid"
                    fontWeight={600}
                  >
                    Sem preparo, empresas não capturam
                  </Text>
                  <br />
                  o ROI que a IA pode gerar. Nosso programa elimina ruído e
                  cria confiança.
                </Text>
              </Box>
            </Box>

            {/* Right — challenges list */}
            <Box>
              <Text
                fontSize="md"
                color="fg.muted"
                lineHeight={1.88}
                mb={6}
              >
                A maioria das equipes não sabe o que a IA realmente é, como
                funciona, quais riscos envolve, como usar com segurança — e
                muito menos como aplicar no dia a dia de forma produtiva.
              </Text>

              {/* Tech-style data points */}
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap="2px"
              >
                {[
                  { label: "Produtividade", value: "Subutilizada", status: "warn" },
                  { label: "Governança", value: "Inexistente", status: "warn" },
                  { label: "Maturidade Digital", value: "Baixa", status: "warn" },
                  { label: "Adoção de IA", value: "Desorganizada", status: "warn" },
                ].map((item) => (
                  <Box
                    key={item.label}
                    px={6}
                    py={5}
                    bg="off"
                    transition="background 0.2s"
                    _hover={{ bg: "stone" }}
                  >
                    <Text
                      fontFamily="mono"
                      fontSize="2xs"
                      fontWeight={600}
                      letterSpacing="0.14em"
                      textTransform="uppercase"
                      color="fg.subtle"
                      mb={1}
                    >
                      {item.label}
                    </Text>
                    <HStack gap={2}>
                      <Box
                        w="6px"
                        h="6px"
                        bg="gold.500"
                      />
                      <Text
                        fontFamily="mono"
                        fontSize="sm"
                        fontWeight={700}
                        color="fg"
                      >
                        {item.value}
                      </Text>
                    </HStack>
                  </Box>
                ))}
              </Grid>

              {/* After training */}
              <Box mt={6} px={5} py={4} bg="blue.solid/5" borderLeft="3px solid" borderLeftColor="blue.solid">
                <Text fontSize="sm" color="fg" lineHeight={1.72}>
                  <Text as="strong" fontWeight={600}>Após o treinamento:</Text>{" "}
                  equipe alinhada, produtiva e operando IA com clareza, segurança e propósito.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Box>

        {/* ── Programa — Módulos ── */}
        <Box
          as="section"
          py={{ base: 16, md: "90px" }}
          px={{ base: 6, md: "60px" }}
          bg="off"
          id="programa"
        >
          {/* Header */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 7, lg: "80px" }}
            align={{ base: "flex-start", lg: "flex-end" }}
            mb={{ base: 10, md: 14 }}
          >
            <Box flex={1}>
              <SectionTag>Programa</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
                fontWeight={800}
                lineHeight={1.04}
                letterSpacing="-1.5px"
                color="fg"
              >
                Seis módulos.
                <br />
                <Text
                  as="span"
                  fontFamily="serif"
                  fontWeight={400}
                  fontStyle="italic"
                  color="gray.emphasized"
                >
                  Zero teoria
                  <br />
                  desnecessária.
                </Text>
              </Text>
            </Box>
            <Text flex={1} fontSize="md" color="fg.muted" lineHeight={1.9}>
              Cada módulo é projetado para gerar resultado imediato. Não
              ensinamos IA como disciplina acadêmica — ensinamos como
              ferramenta de trabalho que transforma operação.
            </Text>
          </Flex>

          {/* Module cards grid */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap="2px"
          >
            {modules.map((module) => (
              <ModuleCard key={module.number} module={module} />
            ))}
          </Grid>

          {/* Bottom statement */}
          <Box
            mt="2px"
            bg="white"
            px={{ base: 6, md: 8 }}
            py={6}
            textAlign="center"
          >
            <Text
              fontFamily="mono"
              fontSize="sm"
              fontWeight={600}
              color="fg"
              letterSpacing="0.04em"
            >
              É treinamento para{" "}
              <Text as="span" color="blue.solid">
                fazer
              </Text>
              , não apenas para entender.
            </Text>
          </Box>
        </Box>

        {/* ── Formatos ── */}
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
              <SectionTag>Formatos</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
                fontWeight={800}
                lineHeight={1.04}
                letterSpacing="-1.5px"
                color="fg"
              >
                A entrega é
                <br />
                <Text
                  as="span"
                  fontFamily="serif"
                  fontWeight={400}
                  fontStyle="italic"
                  color="gray.emphasized"
                >
                  flexível.
                </Text>
                <br />
                O resultado, não.
              </Text>

              <Text
                fontSize="md"
                color="fg.muted"
                lineHeight={1.88}
                maxW="380px"
                mt={4}
              >
                Seis formatos de entrega para encaixar na realidade de
                qualquer empresa, porte ou urgência.
              </Text>
            </Box>

            {/* Format list */}
            <Box borderTop="1px solid" borderColor="blackAlpha.100">
              {formats.map((format) => (
                <FormatItem key={format.number} format={format} />
              ))}
            </Box>
          </Grid>
        </Box>

        {/* ── Por que a Shift+G ── */}
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

          {/* Circuit SVG */}
          <Box
            as="svg"
            position="absolute"
            right="-30px"
            top="50%"
            transform="translateY(-50%)"
            w={{ base: "250px", md: "420px" }}
            opacity={0.06}
            pointerEvents="none"
            color="white"
            // @ts-ignore
            viewBox="0 0 420 420"
            fill="none"
          >
            <rect x="60" y="60" width="300" height="300" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="120" y="120" width="180" height="180" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <circle cx="210" cy="210" r="60" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="210" cy="210" r="20" fill="currentColor" />
            <line x1="210" y1="60" x2="210" y2="150" stroke="currentColor" strokeWidth="0.8" />
            <line x1="210" y1="270" x2="210" y2="360" stroke="currentColor" strokeWidth="0.8" />
            <line x1="60" y1="210" x2="150" y2="210" stroke="currentColor" strokeWidth="0.8" />
            <line x1="270" y1="210" x2="360" y2="210" stroke="currentColor" strokeWidth="0.8" />
            {/* Corner nodes */}
            <circle cx="60" cy="60" r="4" fill="currentColor" />
            <circle cx="360" cy="60" r="4" fill="currentColor" />
            <circle cx="60" cy="360" r="4" fill="currentColor" />
            <circle cx="360" cy="360" r="4" fill="currentColor" />
          </Box>

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
                Por que a Shift+G
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
                Entendimento
                <br />
                que vira{" "}
                <Text
                  as="span"
                  fontFamily="serif"
                  fontWeight={400}
                  fontStyle="italic"
                  color="whiteAlpha.700"
                >
                  eficiência.
                </Text>
              </Text>
              <Text
                fontSize="md"
                color="whiteAlpha.600"
                lineHeight={1.88}
                mt={4}
              >
                Somos a equipe que transforma complexidade técnica em
                linguagem executiva — e linguagem executiva em resultado
                mensurável.
              </Text>
            </Box>

            {/* Right differentials */}
            <VStack gap="2px" align="stretch">
              {differentials.map((item, i) => (
                <HStack
                  key={item}
                  px={6}
                  py={4}
                  bg="whiteAlpha.100"
                  transition="background 0.2s"
                  _hover={{ bg: "whiteAlpha.200" }}
                  gap={3}
                >
                  <Text
                    fontFamily="mono"
                    fontSize="2xs"
                    fontWeight={600}
                    color="whiteAlpha.300"
                    w="20px"
                    flexShrink={0}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </Text>
                  <Text fontSize="sm" color="white" fontWeight={500}>
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Grid>
        </Box>

        {/* ── Formulário de Contato ── */}
        <Box
          as="section"
          py={{ base: 16, md: "90px" }}
          px={{ base: 6, md: "60px" }}
          bg="stone"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
          id="contato"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 10, lg: "80px" }}
            alignItems="start"
          >
            {/* Left text */}
            <Box>
              <SectionTag>Contato</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
                fontWeight={800}
                lineHeight={1.04}
                letterSpacing="-1.5px"
                color="fg"
              >
                Eleve o nível
                <br />
                da sua equipe
                <br />
                <Text
                  as="span"
                  fontFamily="serif"
                  fontWeight={400}
                  fontStyle="italic"
                  color="gray.emphasized"
                >
                  com IA.
                </Text>
              </Text>

              <Text
                fontSize="md"
                color="fg.muted"
                lineHeight={1.88}
                maxW="380px"
                mt={4}
                mb={8}
              >
                A maturidade da sua empresa em IA começa pelas pessoas.
                Preencha o formulário e receba uma proposta personalizada
                para o seu cenário.
              </Text>

              {/* Quick facts */}
              <VStack gap="2px" align="stretch">
                <HStack px={5} py={4} bg="white" gap={4}>
                  <Box
                    w="36px"
                    h="36px"
                    border="1.5px solid"
                    borderColor="blackAlpha.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="blue.solid"
                    flexShrink={0}
                  >
                    <Terminal size={16} />
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight={700} color="fg">
                      Atendimento rápido
                    </Text>
                    <Text fontSize="xs" color="fg.muted">
                      Retorno em até 24h úteis
                    </Text>
                  </Box>
                </HStack>
                <HStack px={5} py={4} bg="white" gap={4}>
                  <Box
                    w="36px"
                    h="36px"
                    border="1.5px solid"
                    borderColor="blackAlpha.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="blue.solid"
                    flexShrink={0}
                  >
                    <Cpu size={16} />
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight={700} color="fg">
                      Proposta sob medida
                    </Text>
                    <Text fontSize="xs" color="fg.muted">
                      Análise do seu setor e porte
                    </Text>
                  </Box>
                </HStack>
              </VStack>
            </Box>

            {/* Right form */}
            <Box>
              <ContactForm />
            </Box>
          </Grid>
        </Box>

        {/* CTA Final */}
        <CTAFinalSection />
      </VStack>

      <Footer />
    </Page>
  );
}
