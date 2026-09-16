import { PageSeo } from "@/components/seo/page-seo";
import { SitePage } from "@/components/layout/site-page";
import { IllustratedHero } from "@/components/sections/editorial-media";
import { Portfolio } from "@/components/sections/portfolio";
import { projects } from "@/constants/projects";
import { pageMetadata } from "@/lib/page-metadata";
export const metadata = pageMetadata(
  "Ecossistema de produtos e projetos",
  "Conheça NearOne, SomosAliados, Thiago, Aderis, Cobres, Pontes, SOMABEM, Médicos ON e AlegraConecta: produtos próprios e colaborações da SHIFT+G.",
  "/ecossistema",
);
export default function EcosystemPage() {
  return (
    <SitePage>
      <PageSeo name="Ecossistema" path="/ecossistema" />
      <IllustratedHero
        eyebrow={"Produtos e colaborações"}
        title={"Setores diferentes."}
        accent={"Inteligência aplicada."}
        description={
          "Construímos produtos próprios e colaboramos com quem conhece profundamente o seu setor. Cada projeto conecta tecnologia a um problema definido."
        }
        visual={"dados"}
        caption={`${projects.length} projetos. Um ecossistema em evolução.`}
        tags={["Produtos próprios", "Colaborações", "IA aplicada"]}
        href={"#ecossistema"}
        cta={`Explorar os ${projects.length} projetos`}
      />
      <Portfolio full />
    </SitePage>
  );
}
