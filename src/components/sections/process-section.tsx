"use client";

import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStepData[] = [
  {
    number: "01",
    title: "Imersão estratégica na operação",
    description:
      "Entendemos profundamente seu negócio, cultura, desafios e objetivos antes de propor qualquer solução.",
  },
  {
    number: "02",
    title: "Análise profunda de processos",
    description:
      "Mapeamos gargalos, redundâncias e oportunidades de melhoria em toda a cadeia operacional.",
  },
  {
    number: "03",
    title: "Arquitetura sob medida",
    description:
      "Desenhamos soluções que se encaixam na sua realidade, respeitando cultura e capacidade de absorção.",
  },
  {
    number: "04",
    title: "IA aplicada com propósito",
    description:
      "Implementamos inteligência artificial onde ela gera valor real, não onde está na moda.",
  },
  {
    number: "05",
    title: "Automação de fluxos críticos",
    description:
      "Eliminamos trabalho manual repetitivo, reduzimos erros e liberamos sua equipe para o estratégico.",
  },
  {
    number: "06",
    title: "Entrega contínua e acompanhamento",
    description:
      "Evoluímos junto com você, medindo resultados e ajustando rotas com base em dados reais.",
  },
];

function ProcessStepItem({ step }: { step: ProcessStepData }) {
  return (
    <Box
      p={{ base: 6, md: 8 }}
      bg={{ base: "{colors.whiteAlpha.50}", _dark: "{colors.whiteAlpha.50}" }}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={{ base: "{colors.whiteAlpha.200}", _dark: "{colors.whiteAlpha.200}" }}
      rounded="xl"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        borderColor: "{colors.blue.500/30}",
        bg: { base: "{colors.whiteAlpha.100}", _dark: "{colors.whiteAlpha.100}" },
      }}
      h="full"
    >
      <VStack align="start" gap={4}>
        {/* Number */}
        <Text
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          color="blue.solid"
          lineHeight="none"
          letterSpacing="-0.05em"
        >
          {step.number}
        </Text>

        {/* Content */}
        <VStack align="start" gap={2}>
          <Heading as="h3" size={{ base: "md", md: "lg" }} color="fg" lineHeight="tight">
            {step.title}
          </Heading>
          <Text color="fg.muted" fontSize="sm" lineHeight="tall">
            {step.description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}

export function ProcessSection() {
  return (
    <Box as="section" py={{ base: 12, md: 16, lg: 20 }}>
      <Container maxW="7xl">
        <VStack gap={{ base: 10, md: 12 }}>
          {/* Section header */}
          <VStack gap={3} textAlign="center" maxW="3xl" mx="auto">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="fg"
            >
              Como Trabalhamos
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
              Método preciso. Impacto mensurável.
            </Text>
          </VStack>

          {/* Process steps grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 4, md: 6 }}>
            {processSteps.map((step, index) => (
              <ProcessStepItem key={index} step={step} />
            ))}
          </SimpleGrid>

          {/* Closing statement */}
          <Box
            pt={{ base: 6, md: 8 }}
            borderTop="1px solid"
            borderColor="{colors.whiteAlpha.200}"
            w="full"
            maxW="4xl"
            mx="auto"
          >
            <Text
              color="fg"
              textAlign="center"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="tall"
            >
              Trabalhamos como uma extensão da sua liderança —{" "}
              <Text as="span" fontWeight="semibold" color="blue.solid">
                com responsabilidade total pelo resultado.
              </Text>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
