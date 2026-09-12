import { Frame } from "@/components/layout/editorial";
import { Metadata } from "next";
import { Box, VStack } from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ClosingCTA } from "@/components/sections/business";
import { PromptsGuideSection } from "@/components/sections/prompts-guide-section";
import { PromptMeterClient } from "@/components/prompt-meter/prompt-meter-client";
import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `Medidor de Prompt | ${SITE_NAME}`,
  description:
    "Escreva o que você pediria para uma IA e descubra na hora a qualidade do seu prompt: nota, análise por critério e uma versão reescrita pela Shift+G.",
  alternates: {
    canonical: `${SITE_URL}/medidor-de-prompt`,
  },
  openGraph: {
    title: `Medidor de Prompt | ${SITE_NAME}`,
    description:
      "Pontue seu prompt e veja como deixá-lo muito melhor — na hora.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/medidor-de-prompt`,
    siteName: SITE_NAME,
  },
};

export default function MedidorDePromptPage() {
  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch">
        <Box
          as="section"
          bg="stone"
          pt={{ base: "20px", md: "60px" }}
          pb={{ base: 16, md: "100px" }}
          position="relative"
          overflow="hidden"
        >
          <Frame>
            {/* grid pattern de fundo (mesma linguagem das outras páginas) */}

            <Box position="relative" zIndex={1}>
              <PromptMeterClient />
            </Box>
          </Frame>
        </Box>

        <PromptsGuideSection />

        <ClosingCTA />
      </VStack>

      <Footer />
    </Page>
  );
}
