import {
  Box,
  Grid,
  Text,
  VStack,
} from "@chakra-ui/react";

interface PersonData {
  initials: string;
  pillarName: string;
  name: string;
  role: string;
  description: string;
}

const persons: PersonData[] = [
  {
    initials: "W",
    pillarName: "Profundidade Técnica",
    name: "William Novak",
    role: "Founder · Arquitetura & IA",
    description:
      "+15 anos em projetos de alta complexidade no Brasil e exterior. O arquiteto da operação — transforma desafios em soluções escaláveis e precisas.",
  },
  {
    initials: "F",
    pillarName: "Força Executiva",
    name: "Fabio José Roiek",
    role: "Co-Founder · Estratégia & Executivo",
    description:
      "Formação especializada e atuação no setor administrativo com ênfase em empreendimentos corporativos. A força que conecta estratégia, governança e as portas que precisam ser abertas.",
  },
];

function PersonCard({ person }: { person: PersonData }) {
  return (
    <Box
      bg="white"
      px={7}
      py={7}
      position="relative"
      transition="background 0.2s"
      _hover={{
        bg: "#fafaf8",
        "& .pillar-bar": { transform: "scaleY(1)" },
      }}
    >
      {/* Left pillar bar */}
      <Box
        className="pillar-bar"
        position="absolute"
        left={0}
        top={0}
        bottom={0}
        w="3px"
        bg="gold.500"
        transform="scaleY(0)"
        transformOrigin="top"
        transition="transform 0.3s"
      />

      {/* Pillar name (top right) */}
      <Text
        position="absolute"
        right={5}
        top={5}
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={700}
        letterSpacing="0.16em"
        color="gold.500"
        opacity={0.55}
        textTransform="uppercase"
      >
        {person.pillarName}
      </Text>

      <Grid templateColumns="44px 1fr" gap={4} alignItems="start">
        {/* Avatar */}
        <Box
          w="44px"
          h="44px"
          bg="blue.solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="sm"
          fontWeight={800}
          color="white"
          letterSpacing="-0.5px"
          flexShrink={0}
        >
          {person.initials}
        </Box>

        <Box>
          <Text
            fontSize="md"
            fontWeight={700}
            color="fg"
            letterSpacing="-0.2px"
            mb="2px"
          >
            {person.name}
          </Text>
          <Text
            fontFamily="mono"
            fontSize="2xs"
            fontWeight={600}
            color="blue.solid"
            letterSpacing="0.04em"
            mb={2}
          >
            {person.role}
          </Text>
          <Text fontSize="sm" color="fg.muted" lineHeight={1.68}>
            {person.description}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

export function TeamSection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: "90px" }}
      px={{ base: 6, md: "60px" }}
      bg="stone"
      borderTop="1px solid"
      borderColor="blackAlpha.100"
      position="relative"
      overflow="hidden"
      id="sobre"
    >
      {/* Decorative columns (desktop only) */}
      <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        left="60px"
        top={0}
        bottom={0}
        w="3px"
        bgGradient="to-b"
        gradientFrom="transparent"
        gradientVia="gold.500/20"
        gradientTo="transparent"
      />
      <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        right="60px"
        top={0}
        bottom={0}
        w="3px"
        bgGradient="to-b"
        gradientFrom="transparent"
        gradientVia="gold.500/20"
        gradientTo="transparent"
      />

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 10, lg: "80px" }}
        alignItems="end"
      >
        {/* Left text */}
        <Box>
          <Text
            fontFamily="mono"
            fontSize="2xs"
            fontWeight={600}
            letterSpacing="0.18em"
            color="gold.500"
            opacity={0.75}
            textTransform="uppercase"
            mb={5}
          >
            Sobre Nós
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
            fontWeight={800}
            lineHeight={1.04}
            letterSpacing="-1.5px"
            color="fg"
          >
            Dois pilares.
            <br />
            <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="gray.emphasized">
              Uma obra.
            </Text>
          </Text>
          <Text fontSize="md" color="fg.muted" lineHeight={1.88} maxW="380px" mt={4}>
            Uma sociedade fundada sobre dois princípios complementares — profundidade técnica e força executiva. Juntos, sustentam tudo que a Shift+G constrói.
          </Text>
        </Box>

        {/* Persons */}
        <VStack gap="2px" align="stretch">
          {persons.map((person) => (
            <PersonCard key={person.initials} person={person} />
          ))}
        </VStack>
      </Grid>
    </Box>
  );
}
