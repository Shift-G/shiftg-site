import { GeneralContactForm } from "@/components/forms/GeneralContactForm";
import { Accent, Eyebrow, Frame, Title } from "@/components/layout/editorial";
import { SitePage } from "@/components/layout/site-page";
import { EditorialImage } from "@/components/sections/editorial-media";
import { SITE_EMAIL, SITE_PHONE } from "@/constants";
import { projects } from "@/constants/projects";
import { pageMetadata } from "@/lib/page-metadata";
import { Box, Grid, Stack, Text } from "@chakra-ui/react";
export const metadata = pageMetadata(
  "Agende uma conversa estratégica",
  "Converse com a SHIFT+G sobre transformação digital, IA in company e nossos produtos. Atendimento para empresas em todo o Brasil.",
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
                  ATENDIMENTO EM TODO O BRASIL
                </Text>
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                <a href={`https://wa.me/${SITE_PHONE.replace(/\D/g, "")}`}>
                  {SITE_PHONE}
                </a>
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
