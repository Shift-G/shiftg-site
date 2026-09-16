import { PageSeo } from "@/components/seo/page-seo";
import { Frame } from "@/components/layout/editorial";
import { pageMetadata } from "@/lib/page-metadata";
import { Box, VStack } from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ClosingCTA } from "@/components/sections/business";
import { PromptsGuideSection } from "@/components/sections/prompts-guide-section";
import { PromptMeterClient } from "@/components/prompt-meter/prompt-meter-client";

export const metadata = pageMetadata(
  "Medidor de Prompt",
  "Escreva o que você pediria para uma IA e descubra na hora a qualidade do seu prompt: nota, análise por critério e uma versão reescrita pela Shift+G.",
  "/medidor-de-prompt",
);

export default function MedidorDePromptPage() {
  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch">
        <PageSeo name="Medidor de prompt" path="/medidor-de-prompt" />
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
