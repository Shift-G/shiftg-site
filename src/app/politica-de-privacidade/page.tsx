import { Metadata } from "next";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Box, VStack, HStack, Text, Grid } from "@chakra-ui/react";
import { SITE_NAME, SITE_EMAIL, SITE_URL } from "@/constants";
import { ShieldAlert, Database, Lock, Fingerprint } from "lucide-react";

export const metadata: Metadata = {
  title: `Data Compliance & Privacy | ${SITE_NAME}`,
  description:
    "Protocolo rígido de proteção de dados (LGPD) e diretrizes de sigilo aplicadas às infraestruturas da Shift+G.",
  alternates: {
    canonical: `${SITE_URL}/politica-de-privacidade`,
  },
};

const policySections = [
  {
    id: "SEC-01",
    title: "Retenção Absoluta (Zero-Tracker Policy)",
    content: "Nossas interfaces públicas não rastejam seu comportamento. A Shift+G não emprega cookies de marketing ou scripts analíticos invasivos de terceiros neste domínio. O rastreamento de IP é restrito a matrizes de segurança de borda contra ataques DDoS, deletados após 24 horas. Nenhum dado de sessão é vendido."
  },
  {
    id: "SEC-02",
    title: "Dados de Onboarding",
    content: "Quando uma corporação solicita auditoria ou software, os dados fornecidos (CNPJ, DREs sumários, organogramas locais) são imediatamente movidos para nossos cofres na camada Serverless AWS/GCP, criptografados at-rest. Apenas engenheiros sêniores atrelados ao seu cluster possuem chaves de decriptação temporária."
  },
  {
    id: "SEC-03",
    title: "Base Legal de Tratamento",
    content: "Operamos estritamente sob a Lei 13.709/18 (LGPD). Seus dados táticos só existem em nossos servidores sob a égide de 'Execução Contratual' ou 'Legítimo Interesse' quando você deliberadamente requisita inteligência artificial em cima deles."
  },
  {
    id: "SEC-04",
    title: "Isolamento de Máquinas (LLM Privacy)",
    content: "Nenhum dado estratégico da sua empresa ou de seus clientes finais submetidos aos nossos sistemas de I.A. será utilizado para treinar modelos base públicos (OpenAI, Anthropic). A Shift+G garante Zero-Data-Retention Agreements com todos os vendors."
  },
  {
    id: "SEC-05",
    title: "Extermínio sob Demanda",
    content: `Caso a parceria operacional expire, a Shift+G providencia a deleção magnética completa de todos os esquemas de dados proprietários, repassando o backup criptografado final. Você detém controle de expurgo absoluto. Acione ${SITE_EMAIL} com o subject "[PURGE_REQUEST]".`
  }
];

export default function PoliticaPrivacidadePage() {
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
                Protocolo de Segurança :: Nível 1
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
              Arquitetura de{" "}
              <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="blue.solid">
                Blindagem e Sigilo.
              </Text>
            </Text>

            <Text fontSize="lg" color="fg.muted" lineHeight={1.8}>
              Você não é o produto. O manifesto de privacidade da Shift+G opera como uma fortaleza corporativa: dados entram encriptados, insights saem precisos, e sua infraestrutura permanece imaculada.
            </Text>
          </VStack>
        </Box>

        {/* ── Content ── */}
        <Box px={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }}>
          <VStack maxW="800px" mx="auto" align="stretch" gap={10}>

            {/* Box Callout */}
            <Box p={8} bg="white" border="1px solid" borderColor="blackAlpha.200" position="relative">
              <Box position="absolute" top={0} left={0} w="4px" h="full" bg="red.500" />
              <HStack gap={4} mb={4}>
                <ShieldAlert size={20} color="var(--chakra-colors-red-500)" />
                <Text fontFamily="mono" fontSize="xs" fontWeight={700} color="red.500">DIRETRIZ MILITAR</Text>
              </HStack>
              <Text fontSize="md" fontWeight={500} color="fg" lineHeight={1.6}>
                O vazamento de um dado corporativo não é apenas um deslize, é o colapso do P&L. Nossa Stack não negocia a integridade da sua informação. Este documento rege os termos inquebráveis de como lidamos com a sua matriz de dados.
              </Text>
            </Box>

            {/* Grid of Policies */}
            <Box pt={8}>
              <VStack align="stretch" gap="1px" bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200">
                {policySections.map((sec) => (
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

            {/* Security Badges */}
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="1px" bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200" mt={8}>
              <VStack bg="stone" p={6} align="flex-start" gap={4}>
                <Database size={20} color="var(--chakra-colors-blue-solid)" />
                <Text fontFamily="mono" fontSize="xs" fontWeight={700}>AES-256 AT REST</Text>
              </VStack>
              <VStack bg="stone" p={6} align="flex-start" gap={4}>
                <Lock size={20} color="var(--chakra-colors-blue-solid)" />
                <Text fontFamily="mono" fontSize="xs" fontWeight={700}>ZERO-KNOWLEDGE</Text>
              </VStack>
              <VStack bg="stone" p={6} align="flex-start" gap={4}>
                <Fingerprint size={20} color="var(--chakra-colors-blue-solid)" />
                <Text fontFamily="mono" fontSize="xs" fontWeight={700}>SOC2 COMPLIANT</Text>
              </VStack>
            </Grid>

          </VStack>
        </Box>

      </VStack>
      <Footer />
    </Page>
  );
}
