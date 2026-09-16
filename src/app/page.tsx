import { RegionalPresence } from "@/components/sections/regional-presence";
import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HomeHero, ClientStrip } from "@/components/sections/home-redesign";
import { ClientStories } from "@/components/sections/portfolio";
import { HomePortfolio } from "@/components/sections/home-portfolio";
import { TrainingSection, ClosingCTA } from "@/components/sections/business";
import { BusinessPriorities } from "@/components/sections/business-priorities";
import { InstitutionalSection } from "@/components/sections/institutional";
import { pageMetadata } from "@/lib/page-metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { generateProjectListSchema } from "@/lib/project-seo";
export const metadata = pageMetadata(
  "IA e software em União da Vitória",
  "Consultoria em IA, software sob medida e treinamento para empresas em União da Vitória, Porto União, São Mateus do Sul, Curitiba e região.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Box as="main" id="conteudo">
        <JsonLd data={generateProjectListSchema("/")} />
        <HomeHero />
        <ClientStrip />
        <BusinessPriorities />
        <HomePortfolio />
        <ClientStories />
        <TrainingSection />
        <InstitutionalSection />
        <RegionalPresence />
        <ClosingCTA />
      </Box>
      <Footer />
    </>
  );
}
