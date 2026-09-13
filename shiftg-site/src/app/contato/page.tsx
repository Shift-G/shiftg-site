import { PageSeo } from "@/components/seo/page-seo";
import { GeneralContactForm } from "@/components/forms/GeneralContactForm";
import { Accent, Eyebrow, Frame, Title } from "@/components/layout/editorial";
import { SitePage } from "@/components/layout/site-page";
import { EditorialImage } from "@/components/sections/editorial-media";
import Link from "next/link";
import {
  SITE_EMAIL,
  SITE_PHONE,
  SITE_ADDRESS,
  SITE_CITY,
  SITE_STATE,
  SITE_ZIP,
} from "@/constants";
import { projects } from "@/constants/projects";
import { pageMetadata } from "@/lib/page-metadata";
import { Box, Grid, Stack, Text } from "@chakra-ui/react";
export const metadata = pageMetadata(
  "Contato em União da Vitória | IA e software",
  "Fale com a Shift+G em União da Vitória sobre IA, software e treinamento. Atendimento em Porto União, São Mateus do Sul, Curitiba e cidades próximas.",
  "/contato",
);
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interesse?: string; projeto?: string }>;
}) {
  const query = await searchParams;
  const project = projects.find((p) => p.slug === query.projeto);
  const context =
    project?.name ||
    (query.interesse === "ia-in-company" ? "IA in company" : undefined);
  return (
    <SitePage>
      <PageSeo name="Contato" path="/contato" />
      <Box py={{ base: 12, md: 20 }}>
        <Frame>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 12, lg: 16 }}
          >
            <Stack gap={8} align="start">
              <Box>
                <Eyebrow>Conversa estratégica</Eyebrow>
                <Title as="h1">
                  O próximo passo
                  <br />
                  começa com
                  <br />
                  <Accent>uma boa conversa.</Accent>
                </Title>
              </Box>
              <Text fontSize="xl" lineHeight={1.7} color="blackAlpha.700">
                Fale sobre o momento da sua empresa, o que limita a operação e
                onde você quer chegar. Vamos entender como a SHIFT+G pode
                contribuir.
              </Text>
              <Stack gap={5} mt={4} w="full">
                <Text fontFamily="mono" fontSize="sm" color="blue.solid">
                  UNIÃO DA VITÓRIA / ATENDIMENTO REGIONAL E NACIONAL
                </Text>
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                <a href={`https://wa.me/${SITE_PHONE.replace(/\D/g, "")}`}>
                  {SITE_PHONE}
                </a>
                <Box as="address" fontStyle="normal" lineHeight={1.8}>
                  <Text>{SITE_ADDRESS}</Text>
                  <Text>
                    {SITE_CITY} – {SITE_STATE} · CEP {SITE_ZIP}
                  </Text>
                </Box>
                <Text lineHeight={1.8} color="blackAlpha.700">
                  Atendemos Porto União, São Mateus do Sul, Curitiba e cidades
                  próximas. Visitas e atividades presenciais são combinadas com
                  a equipe conforme o projeto.
                </Text>
                <Box asChild color="blue.solid" textDecoration="underline">
                  <Link href="/atendimento">
                    Veja nossa área de atendimento e como começar
                  </Link>
                </Box>
                <EditorialImage
                  visual="equipe"
                  caption="Proximidade para entender. Capacidade para construir."
                />
              </Stack>
            </Stack>
            <Box
              bg="off"
              p={{ base: 6, md: 9 }}
              borderTop="3px solid"
              borderColor="blue.solid"
            >
              <GeneralContactForm context={context} />
            </Box>
          </Grid>
        </Frame>
      </Box>
    </SitePage>
  );
}
