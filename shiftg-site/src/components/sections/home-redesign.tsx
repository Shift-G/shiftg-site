import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import {
  Accent,
  Action,
  Eyebrow,
  Frame,
  Title,
} from "@/components/layout/editorial";

export function HomeHero() {
  return (
    <Box as="section" bg="white" color="black">
      <Frame wide>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.65fr 1fr" }}
          gap={{ base: 10, lg: 16 }}
          pt={{ base: 12, md: 20 }}
          pb={{ base: 14, md: 20 }}
        >
          <Box>
            <Eyebrow>Estratégia, inteligência e execução</Eyebrow>
            <Title as="h1">
              A próxima fase
              <br />
              da sua empresa
              <br />
              começa na <Accent>operação.</Accent>
            </Title>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight={1.65}
              color="blackAlpha.700"
              maxW="620px"
              mt={8}
            >
              Transformamos gargalos em capacidade de crescer. IA aplicada,
              processos integrados e governança de dados, lado a lado com quem
              decide e quem faz.
            </Text>
            <Flex mt={9} gap={6} align="center" wrap="wrap">
              <Action>Agendar uma conversa estratégica</Action>
              <Action secondary href="/ecossistema">
                Nossas soluções
              </Action>
            </Flex>
          </Box>
          <Stack
            justify="space-between"
            borderLeft={{ lg: "1px solid" }}
            borderColor="blackAlpha.200"
            pl={{ lg: 10 }}
            pt={{ lg: 2 }}
            gap={8}
          >
            <Text fontFamily="mono" fontSize="sm" color="blackAlpha.700">
              SHIFT+G / AI & DATA
            </Text>
            <Box bg="blue.solid" color="white" p={{ base: 7, md: 9 }}>
              <Text fontFamily="mono" fontSize="sm" mb={10}>
                DA DECISÃO À IMPLEMENTAÇÃO
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "2rem", md: "2.5rem" }}
                fontWeight={400}
                lineHeight={1.15}
                letterSpacing="-0.035em"
              >
                A estratégia encontra
                <br />
                quem sabe executar.
              </Heading>
              <Stack mt={10} gap={0}>
                {[
                  "Transformação digital",
                  "Produtos próprios e em colaboração",
                  "IA dentro da sua empresa",
                ].map((text, i) => (
                  <Flex
                    key={text}
                    py={4}
                    borderTop="1px solid"
                    borderColor="whiteAlpha.400"
                    gap={5}
                  >
                    <Text
                      fontFamily="mono"
                      fontSize="sm"
                      color="whiteAlpha.800"
                    >
                      0{i + 1}
                    </Text>
                    <Text fontSize="md">{text}</Text>
                  </Flex>
                ))}
              </Stack>
            </Box>
            <Text fontSize="sm" color="blackAlpha.700">
              Tecnologia desenvolvida perto da operação.
              <br />
              Atuação em todo o Brasil.
            </Text>
          </Stack>
        </Grid>
      </Frame>
    </Box>
  );
}
const clients = [
  ["TKV Advogados Associados", "logo-tkv.png", "https://tkvadvogados.com.br"],
  ["MEDCuritiba", "logo-medcuritiba.png", "https://medcuritiba.com.br"],
  ["Abbaspel", "logo-abbaspel.png", "https://abbaspel.com.br"],
  ["Dissenha", "logo-dissenha.png", "https://dissenha.com.br"],
  ["Sindespol", "logo-sindespol-transparente.png", "https://sindespol.com.br"],
];
export function ClientStrip() {
  return (
    <Box
      as="section"
      aria-label="Nossos clientes"
      borderTop="1px solid"
      borderColor="blackAlpha.200"
      bg="off"
      py={9}
    >
      <Frame>
        <Text fontFamily="mono" fontSize="sm" mb={8} color="blackAlpha.700">
          EMPRESAS QUE CONSTROEM COM A SHIFT+G
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={6}
          alignItems="center"
        >
          {clients.map(([name, file, url]) => (
            <Box
              asChild
              key={name}
              display="flex"
              justifyContent="center"
              alignItems="center"
              h={20}
              px={4}
              className="group"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/images/partners/${file}`}
                  alt={name}
                  maxW="full"
                  maxH="64px"
                  objectFit="contain"
                  loading="lazy"
                  filter="grayscale(1)"
                  opacity={0.65}
                  transition="filter 240ms ease, opacity 240ms ease"
                  _groupHover={{ filter: "grayscale(0)", opacity: 1 }}
                  _groupFocusWithin={{ filter: "grayscale(0)", opacity: 1 }}
                />
              </a>
            </Box>
          ))}
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight={600}
            letterSpacing="-0.04em"
          >
            Pigatto Caus
          </Text>
        </Grid>
      </Frame>
    </Box>
  );
}
