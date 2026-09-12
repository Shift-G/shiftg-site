import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, clientCases, type Project } from "@/constants/projects";
import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Title,
} from "@/components/layout/editorial";

export function ProductCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Box
      asChild
      bg="white"
      color="black"
      p={{ base: 6, md: 9 }}
      display="flex"
      flexDirection="column"
      minW={0}
      transition="background 160ms ease"
      _hover={{ bg: "off" }}
      _focusVisible={{
        outline: "3px solid",
        outlineColor: "blue.solid",
        outlineOffset: "-3px",
      }}
    >
      <Link href={`/projetos/${project.slug}`}>
        <Flex justify="space-between" gap={4} mb={10}>
          <Text fontFamily="mono" fontSize="sm" color="blackAlpha.700">
            0{index + 1} / {project.category}
          </Text>
          <ArrowUpRight size={22} aria-hidden="true" />
        </Flex>
        <Flex h="90px" align="center" mb={8}>
          <Image
            src={`/images/products/${project.logo}`}
            alt={project.name}
            maxW="240px"
            w="full"
            maxH="72px"
            objectFit="contain"
            objectPosition="left center"
            loading="lazy"
          />
        </Flex>
        <Heading as="h3" fontSize="xl" fontWeight={500} mb={3}>
          {project.name}
        </Heading>
        <Text color="blackAlpha.700" fontSize="md" lineHeight={1.7} flex={1}>
          {project.summary}
        </Text>
        <Flex
          mt={8}
          pt={5}
          borderTop="1px solid"
          borderColor="blackAlpha.200"
          gap={3}
          justify="space-between"
          wrap="wrap"
        >
          <Text fontSize="sm">
            {project.partner ? `Com ${project.partner}` : project.ownership}
          </Text>
          <Text fontSize="sm" color="blue.solid">
            {project.stage || "Conhecer projeto"}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
}
export function Portfolio({ full = false }: { full?: boolean }) {
  return (
    <EditorialSection id="ecossistema">
      <Flex
        justify="space-between"
        align="end"
        gap={8}
        mb={12}
        direction={{ base: "column", lg: "row" }}
      >
        <Box maxW="760px">
          <Eyebrow>Nosso ecossistema</Eyebrow>
          <Title>
            Inteligência que já
            <br />
            tem <Accent>nome e aplicação.</Accent>
          </Title>
        </Box>
        <Text
          maxW="360px"
          color="blackAlpha.700"
          fontSize="lg"
          lineHeight={1.7}
        >
          Produtos próprios e colaborações que levam nossa tecnologia a
          diferentes setores.
        </Text>
      </Flex>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap="1px"
        bg="blackAlpha.200"
        border="1px solid"
        borderColor="blackAlpha.200"
      >
        {projects.map((project, index) => (
          <ProductCard key={project.slug} project={project} index={index} />
        ))}
        <Stack
          p={{ base: 7, md: 9 }}
          bg="blue.solid"
          color="white"
          justify="space-between"
          gridColumn={{ xl: "span 2" }}
          gap={8}
        >
          <Eyebrow light>Da operação ao produto</Eyebrow>
          <Heading
            as="h3"
            fontSize={{ base: "2rem", md: "2.75rem" }}
            fontWeight={400}
            lineHeight={1.15}
            maxW="560px"
          >
            O próximo projeto pode nascer de um desafio da sua empresa.
          </Heading>
          <Action light href="/contato">
            Vamos conversar sobre ele
          </Action>
        </Stack>
      </Grid>
      {!full && (
        <Box mt={8}>
          <Action secondary href="/ecossistema">
            Explorar o ecossistema completo
          </Action>
        </Box>
      )}
    </EditorialSection>
  );
}
export function ClientStories({ only }: { only?: string }) {
  const cases = only ? clientCases.filter((c) => c.id === only) : clientCases;
  const headlines: Record<string, string> = {
    tkv: "Inteligência na rotina jurídica.",
    abbaspel: "Cuidado que faz parte da gestão.",
    medcuritiba: "Uma parceria. Novas possibilidades.",
  };
  return (
    <EditorialSection id="clientes" muted>
      <Stack
        align="center"
        textAlign="center"
        mb={{ base: 10, md: 14 }}
        gap={0}
      >
        <Eyebrow>Empresas e lideranças</Eyebrow>
        <Title>
          Confiança de quem lidera.
          <br />
          <Accent>Presença onde importa.</Accent>
        </Title>
        <Text
          mt={6}
          maxW="640px"
          fontSize="lg"
          color="blackAlpha.700"
          lineHeight={1.7}
        >
          Relações próximas com empresas que colocam a transformação em prática.
        </Text>
      </Stack>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: only ? "1fr" : "repeat(3, minmax(0, 1fr))",
        }}
        gap={6}
        maxW={only ? "3xl" : "full"}
        mx="auto"
      >
        {cases.map((c) => (
          <Stack
            as="article"
            key={c.id}
            className="group"
            bg="white"
            border="1px solid"
            borderColor="blackAlpha.200"
            borderTop="3px solid"
            borderTopColor="blue.solid"
            p={{ base: 7, md: 8 }}
            gap={0}
          >
            <Flex h="90px" align="center" mb={8}>
              <Image
                src={`/images/partners/${c.logo}`}
                alt={c.company}
                maxW="200px"
                maxH="64px"
                objectFit="contain"
                loading="lazy"
                filter="grayscale(1)"
                opacity={0.7}
                transition="filter 240ms ease, opacity 240ms ease"
                _groupHover={{ filter: "grayscale(0)", opacity: 1 }}
                _groupFocusWithin={{ filter: "grayscale(0)", opacity: 1 }}
              />
            </Flex>
            <Heading
              as="h3"
              fontWeight={500}
              fontSize="2xl"
              letterSpacing="-0.03em"
              lineHeight={1.2}
            >
              {headlines[c.id]}
            </Heading>
            <Text
              mt={5}
              lineHeight={1.8}
              color="blackAlpha.700"
              fontSize="md"
              flex={1}
            >
              {c.description}
            </Text>
            <Box
              mt={8}
              pt={6}
              borderTop="1px solid"
              borderColor="blackAlpha.200"
            >
              <Text fontWeight={600}>{c.person}</Text>
              <Text fontSize="sm" color="blackAlpha.700" mt={1}>
                {c.role}
              </Text>
              <Text fontSize="sm" color="blackAlpha.700" mt={1}>
                {c.location}
              </Text>
            </Box>
            <Box mt={6}>
              <Action secondary href={`/projetos/${c.project}`}>
                Conheça o projeto
              </Action>
            </Box>
          </Stack>
        ))}
      </Grid>
    </EditorialSection>
  );
}
