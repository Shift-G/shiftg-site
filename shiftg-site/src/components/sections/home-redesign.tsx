import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/projects";
import { Accent, Action, Eyebrow, Frame } from "@/components/layout/editorial";

export function HomeHero() {
  return (
    <Box as="section" bg="white" color="black">
      <Grid templateColumns={{ base: "1fr", lg: "1.08fr 1fr" }}>
        <Flex
          direction="column"
          justify="center"
          align="start"
          px={{ base: 6, md: 10, xl: 16 }}
          py={{ base: 12, md: 16, xl: 20 }}
        >
          <Eyebrow>Transformação digital / IA / Dados</Eyebrow>
          <Heading
            as="h1"
            fontSize={{
              base: "3.5rem",
              md: "5.5rem",
              xl: "6.5rem",
              "2xl": "7.5rem",
            }}
            fontWeight={500}
            letterSpacing="-0.055em"
            lineHeight={1.02}
          >
            Sua empresa.
            <br />
            Em outro
            <br />
            <Accent>nível.</Accent>
          </Heading>
          <Text
            maxW="530px"
            mt={8}
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight={1.65}
            color="blackAlpha.700"
          >
            Conectamos a visão de quem lidera à tecnologia que faz acontecer.
            Transformação digital, inteligência artificial e governança de dados
            dentro da sua operação.
          </Text>
          <Flex mt={9} gap={6} align="center" wrap="wrap">
            <Action>Agendar uma conversa estratégica</Action>
            <Box
              asChild
              display="inline-flex"
              alignItems="center"
              gap={3}
              py={3}
              fontSize="sm"
              _hover={{ color: "blue.solid" }}
            >
              <Link href="#prioridades">
                Explore nossa atuação <ArrowDown size={16} aria-hidden="true" />
              </Link>
            </Box>
          </Flex>
          <Flex
            gap={3}
            align="center"
            mt={12}
            fontFamily="mono"
            fontSize="xs"
            color="blackAlpha.700"
          >
            <Box w={6} h="1px" bg="blue.solid" /> DO SUL DO BRASIL. PARA TODO O
            PAÍS.
          </Flex>
        </Flex>
        <Flex direction="column" minW={0} bg="black" color="white">
          <Box
            position="relative"
            flex={1}
            minH={{ base: "360px", md: "480px", lg: "500px" }}
            overflow="hidden"
          >
            <NextImage
              src="/images/editorial/shiftg-institucional.png"
              alt="Cena ilustrativa de líderes e especialistas trabalhando juntos em uma decisão de negócio"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              style={{ objectFit: "cover", objectPosition: "62% center" }}
            />
            <Flex
              position="absolute"
              top={6}
              left={6}
              right={6}
              justify="space-between"
              align="start"
              gap={4}
            >
              <Text
                bg="white"
                color="black"
                p={3}
                fontFamily="mono"
                fontSize="xs"
              >
                SHIFT+G / VISÃO + EXECUÇÃO
              </Text>
            </Flex>
            <Box
              position="absolute"
              bottom={0}
              left={0}
              bg="white"
              color="black"
              p={{ base: 6, md: 8 }}
              maxW="78%"
            >
              <Text fontFamily="mono" fontSize="xs" color="blue.solid" mb={3}>
                PRESENTES ONDE A MUDANÇA ACONTECE
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                lineHeight={1.25}
                letterSpacing="-0.03em"
              >
                Ao lado de quem decide.
                <br />
                Junto de quem faz.
              </Text>
            </Box>
            <Box
              asChild
              position="absolute"
              bottom={0}
              right={0}
              bg="blue.solid"
              color="white"
              w={{ base: 20, md: 24 }}
              h={{ base: 20, md: 24 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: "black" }}
              transition="background 200ms ease"
            >
              <Link href="/sobre" aria-label="Conheça a SHIFT+G">
                <ArrowUpRight size={40} strokeWidth={1.25} />
              </Link>
            </Box>
          </Box>
          <Grid templateColumns="1fr 1fr" gap={0}>
            {[
              [
                "01 / TRANSFORMAR",
                "Uma operação preparada para crescer.",
                "/transformacao-digital",
              ],
              [
                "02 / CAPACITAR",
                "IA que o seu time sabe usar.",
                "/treinamento-ia-para-sua-empresa",
              ],
            ].map(([label, text, href]) => (
              <Box
                asChild
                key={href}
                p={{ base: 6, md: 8 }}
                borderRight="1px solid"
                borderColor="whiteAlpha.300"
                _hover={{ bg: "blue.solid" }}
                transition="background 200ms ease"
              >
                <Link href={href}>
                  <Flex justify="space-between" gap={2} mb={5}>
                    <Text
                      fontFamily="mono"
                      fontSize="xs"
                      color="whiteAlpha.800"
                    >
                      {label}
                    </Text>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Flex>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.4}>
                    {text}
                  </Text>
                </Link>
              </Box>
            ))}
          </Grid>
        </Flex>
      </Grid>
      <Box bg="blue.solid" color="white" py={{ base: 7, md: 8 }}>
        <Frame>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 6, lg: 10 }}
            align={{ base: "start", lg: "center" }}
          >
            <Flex align="center" gap={4} flexShrink={0}>
              <Text
                fontSize="5xl"
                fontWeight={500}
                lineHeight={1}
                letterSpacing="-0.06em"
              >
                07
              </Text>
              <Text fontFamily="mono" fontSize="xs" lineHeight={1.7}>
                PROJETOS.
                <br />
                UM ECOSSISTEMA.
              </Text>
            </Flex>
            <Flex
              flex={1}
              wrap="wrap"
              gap={{ base: 4, md: 5 }}
              justify={{ lg: "space-between" }}
              borderLeft={{ lg: "1px solid" }}
              borderColor="whiteAlpha.400"
              pl={{ lg: 8 }}
            >
              {projects.map((project) => (
                <Box
                  asChild
                  key={project.slug}
                  fontSize="sm"
                  py={2}
                  borderBottom="1px solid"
                  borderColor="transparent"
                  _hover={{ borderColor: "white" }}
                >
                  <Link href={`/projetos/${project.slug}`}>{project.name}</Link>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Frame>
      </Box>
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
