import { Box, Flex, Text } from "@chakra-ui/react";
import { SitePage } from "@/components/layout/site-page";
import { Accent, Eyebrow, Frame, Title } from "@/components/layout/editorial";
import { Portfolio } from "@/components/sections/portfolio";
import { pageMetadata } from "@/lib/page-metadata";
export const metadata = pageMetadata(
  "Ecossistema de produtos e projetos",
  "Conheça NearOne, SomosAliados, Thiago, Aderis, Cobres, Pontes e SOMABEM: produtos próprios e colaborações da SHIFT+G.",
  "/ecossistema",
);
export default function EcosystemPage() {
  return (
    <SitePage>
      <Box py={{ base: 14, md: 20 }}>
        <Frame wide>
          <Eyebrow>Produtos e colaborações</Eyebrow>
          <Title as="h1">
            Setores diferentes.
            <br />
            Inteligência <Accent>aplicada.</Accent>
          </Title>
          <Flex
            mt={9}
            justify="space-between"
            gap={8}
            direction={{ base: "column", md: "row" }}
          >
            <Text
              fontSize="xl"
              color="blackAlpha.700"
              maxW="700px"
              lineHeight={1.7}
            >
              Construímos produtos próprios e colaboramos com quem conhece
              profundamente o seu setor. Cada projeto conecta tecnologia a um
              problema definido.
            </Text>
            <Text fontFamily="mono" fontSize="sm" color="blue.solid">
              07 PROJETOS
              <br />
              UM ECOSSISTEMA EM EVOLUÇÃO
            </Text>
          </Flex>
        </Frame>
      </Box>
      <Portfolio full />
    </SitePage>
  );
}
