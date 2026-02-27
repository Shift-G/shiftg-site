import { Metadata } from "next";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { SITE_NAME, SITE_EMAIL, SITE_URL } from "@/constants";
import { AlertTriangle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: `Termos de Serviço | ${SITE_NAME}`,
  description:
    "Regras de engajamento tecnológico e limites de responsabilidade corporativa para operação de nossas frotas de I.A e Software.",
  alternates: {
    canonical: `${SITE_URL}/termos-de-uso`,
  },
};

const tosSections = [
  {
    id: "TOS-01",
    title: "Natureza do Acordo",
    content: "O uso deste domínio constitui um aceite irrefutável aos nossos Termos de Operação. Este site serve estritamente como portal de inteligência técnica e requisição de frotas de software da Shift+G. Não é um portal de varejo."
  },
  {
    id: "TOS-02",
    title: "Propriedade Intelectual Pura",
    content: "Toda heurística, trechos de código amostrais, diagramas arquiteturais brutos e textos presentes neste domínio são propriedade da Shift+G. A reprodução não sistêmica destes ativos incorre em falhas legais severas perante nossa governança jurídica."
  },
  {
    id: "TOS-03",
    title: "Limitação de SLAs via Site",
    content: "O portal público não emite acordos de Nível de Serviço (SLA). Os níveis de uptime militar, blindagem de dados e escalabilidade citados nas páginas aplicam-se exclusivamete aos clusters operacionais provisionados sob contrato (Dossiê Comercial)."
  },
  {
    id: "TOS-04",
    title: "Auditorias de Sistema",
    content: `Os relatórios preliminares solicitados via formulários do site podem conter margin-errors e servem como arquitetura base, não substituindo o contrato definitivo de diligência (Due Diligence). O contato se faz via ${SITE_EMAIL}.`
  },
  {
    id: "TOS-05",
    title: "Reserva de Direitos",
    content: "A Shift+G reversa-se o direito unilateral de recusar provisionamento de engenharia para corporações cujas finalidades atritem com a ética da Inteligência Artificial ou operem infraestruturas consideradas legalmente inautênticas no país matriz (Brasil)."
  }
];

export default function TermosDeUso() {
  return (
    <Page>
      <Navbar />
      <VStack gap={0} w="full" as="main" align="stretch" bg="off">

        {/* ── Header ── */}
        <Box
          bg="stone"
          px={{ base: 6, md: "60px", lg: "112px" }}
          pt={{ base: "140px", md: "180px" }}
          pb={{ base: 16, md: "80px" }}
          borderBottom="1px solid"
          borderColor="blackAlpha.200"
          position="relative"
        >
          {/* Subtle math/grid pattern */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="linear-gradient(#00000004 1px, transparent 1px), linear-gradient(90deg, #00000004 1px, transparent 1px)"
            backgroundSize="40px 40px"
            pointerEvents="none"
          />

          <VStack align="flex-start" gap={6} maxW="900px" mx="auto" position="relative" zIndex={2}>
            <HStack gap={3}>
              <Box w="6px" h="6px" bg="blue.solid" />
              <Text fontFamily="mono" fontSize="2xs" fontWeight={800} letterSpacing="0.1em" textTransform="uppercase" color="blue.solid">
                Contrato Operacional Base
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "40px", md: "56px", lg: "70px" }}
              fontWeight={800}
              lineHeight={1}
              letterSpacing="-2px"
              color="fg"
            >
              Termos de{" "}
              <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="blue.solid">
                Infraestrutura.
              </Text>
            </Text>

            <Text fontSize="lg" color="fg.muted" lineHeight={1.8}>
              A governança sobre o acesso às ferramentas públicas e ao framework visual da Shift+G Company. Leia com rigor técnico.
            </Text>
          </VStack>
        </Box>

        {/* ── Content ── */}
        <Box px={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }}>
          <VStack maxW="800px" mx="auto" align="stretch" gap={10}>

            {/* Box Callout */}
            <Box p={8} bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200" position="relative">
              <Box position="absolute" top={0} left={0} w="4px" h="full" bg="fg" />
              <HStack gap={4} mb={4}>
                <BookOpen size={20} color="var(--chakra-colors-fg)" />
                <Text fontFamily="mono" fontSize="xs" fontWeight={700} color="fg">ATUALIZAÇÃO DE DOUTRINA</Text>
              </HStack>
              <Text fontSize="sm" fontWeight={500} color="fg.muted" lineHeight={1.6}>
                V.2.0.1 Executada no servidor central. O engajamento com este endereço web denota compreensão assimétrica e acatamento às cláusulas subjacentes.
              </Text>
            </Box>

            {/* Box Callout Warning */}
            <Box p={8} bg="white" border="1px solid" borderColor="blackAlpha.200" position="relative">
              <Box position="absolute" top={0} left={0} w="4px" h="full" bg="yellow.500" />
              <HStack gap={4} mb={4}>
                <AlertTriangle size={20} color="var(--chakra-colors-yellow-600)" />
                <Text fontFamily="mono" fontSize="xs" fontWeight={700} color="yellow.600">WARNING: ISENÇÃO INFORMATIVA</Text>
              </HStack>
              <Text fontSize="md" fontWeight={500} color="fg" lineHeight={1.6}>
                Os números de retorno financeiro (ROI), métricas de faturamento e taxas de falha sistêmica listadas nos insights são matemáticas validadas in-loco em B2Bs reais, porém não configuram oferta formal rentável e variam conforme a podridão ou qualidade técnica do banco de dados da corporação que nos contrata.
              </Text>
            </Box>

            {/* Grid of TOS Clauses */}
            <Box pt={4}>
              <VStack align="stretch" gap="1px" bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200">
                {tosSections.map((sec) => (
                  <Box key={sec.id} bg="white" p={{ base: 6, md: 8 }}>
                    <HStack justify="space-between" mb={4} align="flex-start">
                      <Text fontSize="xl" fontWeight={800} color="fg">{sec.title}</Text>
                      <Text fontFamily="mono" fontSize="2xs" color="fg.subtle">{sec.id}</Text>
                    </HStack>
                    <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
                      {sec.content}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>

          </VStack>
        </Box>

      </VStack>
      <Footer />
    </Page>
  );
}
