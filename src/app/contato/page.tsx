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
import { GeneralContactForm } from "@/components/forms/GeneralContactForm";
import {
  SITE_NAME,
  SITE_URL,
  SITE_PHONE,
  SITE_EMAIL,
  SITE_ADDRESS,
  SITE_CITY,
  SITE_STATE,
  SITE_COUNTRY,
  SITE_ZIP
} from "@/constants";

export const metadata: Metadata = {
  title: `Contato | ${SITE_NAME}`,
  description:
    "Inicie um protocolo. Arquitetos de inteligência artificial e software para elevar sua operação ao nível C-Level.",
  alternates: {
    canonical: `${SITE_URL}/contato`,
  },
  openGraph: {
    title: `Contato | ${SITE_NAME}`,
    description: "Conecte-se com especialistas para redefinir o limite tecnológico do seu negócio.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/contato`,
    siteName: SITE_NAME,
  },
};

export default function ContactPage() {
  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch">

        {/* ── Hero / Form Section ── */}
        <Box
          as="section"
          minH="100vh"
          bg="stone"
          position="relative"
          px={{ base: 6, md: "60px", lg: "112px" }}
          pt={{ base: "140px", md: "180px" }}
          pb={{ base: 16, md: "80px" }}
        >
          {/* Subtle math/grid pattern */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="linear-gradient(#00000004 1px, transparent 1px), linear-gradient(90deg, #00000004 1px, transparent 1px)"
            backgroundSize="40px 40px"
            pointerEvents="none"
          />

          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 500px" }}
            gap={{ base: 12, lg: "80px" }}
            position="relative"
            zIndex={2}
          >
            <VStack align="flex-start" gap={10} maxW="700px">
              <Box>
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
                    Protocolo de Atendimento
                  </Text>
                </HStack>

                <Text
                  as="h1"
                  fontSize={{ base: "48px", md: "clamp(60px, 8vw, 100px)" }}
                  lineHeight={0.92}
                  letterSpacing="-2.5px"
                  color="fg"
                  mb={6}
                >
                  <Text as="span" fontWeight={800}>
                    Conecte-se aos{" "}
                  </Text>
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

                <Text fontSize="lg" color="fg.muted" lineHeight={1.8} maxW="500px">
                  Estamos prontos para converter a visão bruta do seu negócio
                  em arquiteturas viáveis. Preencha o formulário ou requisite um
                  contato direto pelos canais oficiais da operação.
                </Text>
              </Box>

              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="1px" bg="blackAlpha.100" p="1px" w="full">
                <VStack align="flex-start" bg="white" p={{ base: 6, md: 8 }} gap={1}>
                  <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle">LINHA DIRETA</Text>
                  <Text fontSize="xl" fontWeight={800} color="blue.solid" letterSpacing="-0.5px">
                    {SITE_PHONE}
                  </Text>
                </VStack>
                <VStack align="flex-start" bg="white" p={{ base: 6, md: 8 }} gap={1}>
                  <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle">E-MAIL OFICIAL</Text>
                  <Text fontSize="xl" fontWeight={800} color="fg" letterSpacing="-0.5px">
                    {SITE_EMAIL}
                  </Text>
                </VStack>
                <VStack align="flex-start" bg="white" p={{ base: 6, md: 8 }} gap={1} gridColumn={{ md: "span 2" }}>
                  <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle">INFRAESTRUTURA BR</Text>
                  <Text fontSize="xl" fontWeight={800} color="fg" letterSpacing="-0.5px" lineHeight={1.4}>
                    {SITE_ADDRESS}.<br />{SITE_CITY} — {SITE_STATE}, {SITE_COUNTRY}. {SITE_ZIP}
                  </Text>
                </VStack>
              </Grid>
            </VStack>

            {/* Formulário Wrapper */}
            <Box bg="white" border="1px solid" borderColor="blackAlpha.100" position="relative" w="full">
              <Box position="absolute" top={0} left={0} w="full" h="3px" bg="blue.solid" />
              <GeneralContactForm />
            </Box>
          </Grid>
        </Box>
      </VStack>

      <Footer />
    </Page>
  );
}
