import {
  Box,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

interface PillarData {
  virtue: string;
  title: string;
  description: string;
}

const pillars: PillarData[] = [
  {
    virtue: "Sabedoria",
    title: "Consultoria & Estratégia",
    description:
      "Diagnóstico preciso, arquitetura robusta e visão sistêmica. Compreendemos o negócio antes de propor qualquer caminho.",
  },
  {
    virtue: "Força",
    title: "IA, Tech & Execução",
    description:
      "Automação, inteligência aplicada e desenvolvimento sob medida. Executamos com responsabilidade total pelo resultado.",
  },
  {
    virtue: "Beleza",
    title: "Pessoas & Resultado",
    description:
      "Treinamento in company, gestão de pessoas e RH inteligente. O resultado final precisa ser elegante e sustentável.",
  },
];

function PillarCard({ pillar }: { pillar: PillarData }) {
  return (
    <VStack
      align="flex-start"
      bg="white"
      px={{ base: 6, md: 8 }}
      py={{ base: 8, md: 10 }}
      position="relative"
      overflow="hidden"
      transition="background 0.2s"
      _hover={{ bg: "#fafaf8" }}
    >
      {/* Top gold accent */}
      <Box
        position="absolute"
        top={0}
        left={8}
        right={8}
        h="3px"
        bgGradient="to-r"
        gradientFrom="transparent"
        gradientVia="gold.500"
        gradientTo="transparent"
        opacity={0.35}
      />

      {/* Virtue */}
      <HStack
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={600}
        letterSpacing="0.18em"
        textTransform="uppercase"
        color="gold.500"
        gap={2}
        mb={4}
      >
        <Text opacity={0.5}>—</Text>
        <Text>{pillar.virtue}</Text>
      </HStack>

      {/* Title */}
      <Text
        fontSize={{ base: "md", md: "lg" }}
        fontWeight={700}
        color="fg"
        letterSpacing="-0.3px"
        mb={2}
      >
        {pillar.title}
      </Text>

      {/* Description */}
      <Text fontSize="sm" color="fg.muted" lineHeight={1.78}>
        {pillar.description}
      </Text>
    </VStack>
  );
}

export function PillarsSection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: "90px" }}
      px={{ base: 6, md: "60px" }}
      bg="off"
    >
      {/* Header */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 7, lg: "80px" }}
        align={{ base: "flex-start", lg: "flex-end" }}
        mb={{ base: 10, md: 14 }}
      >
        <Box flex={1}>
          <Text
            as="h2"
            fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
            fontWeight={800}
            lineHeight={1.04}
            letterSpacing="-1.5px"
            color="fg"
          >
            Três pilares.
            <br />
            <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="gray.emphasized">
              Um propósito.
            </Text>
          </Text>
        </Box>
        <Text flex={1} fontSize="md" color="fg.muted" lineHeight={1.9}>
          Não somos uma fábrica de sistemas. Somos parceiros que entram fundo na operação — com sabedoria para entender, força para executar e beleza no resultado entregue.
        </Text>
      </Flex>

      {/* Pillars grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap="2px"
      >
        {pillars.map((p) => (
          <PillarCard key={p.virtue} pillar={p} />
        ))}
      </Grid>
    </Box>
  );
}
