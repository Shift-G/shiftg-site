import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HomeHero, ClientStrip } from "@/components/sections/home-redesign";
import { Portfolio, ClientStories } from "@/components/sections/portfolio";
import { TrainingSection, ClosingCTA } from "@/components/sections/business";
import { BusinessPriorities } from "@/components/sections/business-priorities";
import { InstitutionalSection } from "@/components/sections/institutional";
import { pageMetadata } from "@/lib/page-metadata";
export const metadata = pageMetadata(
  "Transformação digital, IA e governança de dados",
  "A SHIFT+G trabalha ao lado de líderes e equipes para transformar operações com IA, governança de dados, produtos digitais e treinamento in company em todo o Brasil.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Box as="main" id="conteudo">
        <HomeHero />
        <ClientStrip />
        <BusinessPriorities />
        <Portfolio />
        <ClientStories />
        <TrainingSection />
        <InstitutionalSection />
        <ClosingCTA />
      </Box>
      <Footer />
    </>
  );
}
