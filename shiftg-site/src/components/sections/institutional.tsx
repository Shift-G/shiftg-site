import { Box, Grid, Image, Stack, Text } from "@chakra-ui/react";
import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Title,
} from "@/components/layout/editorial";

export function InstitutionalSection() {
  return (
    <EditorialSection>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 10, lg: 16 }}
        alignItems="center"
      >
        <Box>
          <Eyebrow>SHIFT+G / Nossa atuação</Eyebrow>
          <Title>
            Uma parceira para
            <br />
            as decisões que
            <br />
            <Accent>movem o negócio.</Accent>
          </Title>
          <Text fontSize="lg" lineHeight={1.8} color="blackAlpha.700" mt={7}>
            Unimos visão estratégica, capacidade de desenvolvimento e
            proximidade com a operação. É assim que conectamos a ambição de quem
            lidera ao trabalho de quem faz a empresa acontecer.
          </Text>
          <Text fontSize="md" lineHeight={1.8} color="blackAlpha.700" mt={5}>
            Da transformação de processos à criação de produtos próprios e em
            colaboração, a nossa atuação tem um eixo: inteligência artificial e
            dados a serviço das empresas.
          </Text>
          <Box mt={8}>
            <Action secondary href="/sobre">
              Conheça a SHIFT+G
            </Action>
          </Box>
        </Box>
        <Stack gap={0}>
          <Image
            src="/images/editorial/shiftg-institucional.png"
            alt="Cena ilustrativa de líderes e especialistas trabalhando juntos em uma decisão de negócio"
            w="full"
            aspectRatio="4/5"
            objectFit="cover"
            objectPosition="65% center"
            loading="lazy"
          />
          <Box borderLeft="3px solid" borderColor="blue.solid" pl={5} mt={5}>
            <Text fontFamily="mono" fontSize="sm" color="blackAlpha.700">
              ESTRATÉGIA QUE ORIENTA.
              <br />
              TECNOLOGIA QUE CONCRETIZA.
            </Text>
          </Box>
        </Stack>
      </Grid>
    </EditorialSection>
  );
}
export function TrainingImage() {
  return (
    <Image
      src="/images/editorial/shiftg-in-company.png"
      alt="Cena ilustrativa de uma equipe trabalhando com processos e ferramentas digitais"
      w="full"
      aspectRatio="3/2"
      objectFit="cover"
      loading="lazy"
    />
  );
}
