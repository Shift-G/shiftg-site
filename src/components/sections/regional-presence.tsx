import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Title,
} from "@/components/layout/editorial";

export function RegionalPresence() {
  return (
    <EditorialSection muted id="atendimento-regional">
      <Grid
        templateColumns={{ base: "1fr", lg: "1.1fr 1fr" }}
        gap={{ base: 8, md: 12 }}
      >
        <Box>
          <Eyebrow>União da Vitória / Paraná e Santa Catarina</Eyebrow>
          <Title>
            IA e tecnologia para
            <br />
            <Accent>as empresas da região.</Accent>
          </Title>
        </Box>
        <Stack gap={6} align="start">
          <Text fontSize="lg" lineHeight={1.8} color="blackAlpha.700">
            Nossa sede é em União da Vitória. Atendemos empresas de Porto União,
            São Mateus do Sul, Curitiba e cidades próximas, conectando
            consultoria em inteligência artificial, automação de processos,
            software sob medida e treinamento de equipes.
          </Text>
          <Text lineHeight={1.8} color="blackAlpha.700">
            A conversa começa pelo seu negócio. O formato de trabalho, as
            visitas e o acompanhamento são definidos conforme o projeto e a
            localização da empresa. Também atendemos em todo o Brasil.
          </Text>
          <Action secondary href="/atendimento">
            Conheça nosso atendimento na região
          </Action>
        </Stack>
      </Grid>
    </EditorialSection>
  );
}
