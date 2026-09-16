import { SitePage } from "@/components/layout/site-page";
import { PageSeo } from "@/components/seo/page-seo";
import {
  CareersCulture,
  CareersHero,
  CareersWorkspace,
} from "@/components/sections/careers-story";
import { CareersOpportunities } from "@/components/sections/careers-opportunities";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "Carreiras em tecnologia e IA",
  "Construa com a SHIFT+G. Conheça as vagas de FullStack e IA, nossa forma de trabalhar e os benefícios. Oportunidades presenciais CLT em União da Vitória, PR.",
  "/carreiras",
);

export default function CareersPage() {
  return (
    <SitePage>
      <PageSeo name="Carreiras" path="/carreiras" />
      <CareersHero />
      <CareersCulture />
      <CareersWorkspace />
      <CareersOpportunities />
    </SitePage>
  );
}
