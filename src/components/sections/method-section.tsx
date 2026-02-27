import {
  Box,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

/* ── Section Tag ── */
function SectionTag({ children }: { children: string }) {
  return (
    <HStack
      fontFamily="mono"
      fontSize="2xs"
      fontWeight={600}
      letterSpacing="0.16em"
      textTransform="uppercase"
      color="blue.solid"
      gap="10px"
      mb={4}
    >
      <Box w="18px" h="1.5px" bg="blue.solid" />
      <Text>{children}</Text>
    </HStack>
  );
}

interface StepData {
  number: string;
  title: string;
  description: string;
}

const steps: StepData[] = [
  {
    number: "01",
    title: "Imersão — entendemos antes de propor",
    description:
      "Operação, cultura, riscos e objetivos reais. O arquiteto mede antes de traçar.",
  },
  {
    number: "02",
    title: "Arquitetura — estrutura antes da execução",
    description:
      "Desenhamos a solução ideal. Nenhuma pedra é assentada sem o plano estar correto.",
  },
  {
    number: "03",
    title: "Edificação — execução com rigor",
    description:
      "IA, desenvolvimento, treinamento ou RH. O que o projeto exigir, entregamos com precisão.",
  },
  {
    number: "04",
    title: "Luz — clareza e visibilidade permanente",
    description:
      "Ficamos até o resultado ser real. A obra só está concluída quando o cliente opera em outro nível.",
  },
];

function StepItem({ step }: { step: StepData }) {
  return (
    <Grid
      templateColumns="44px 1fr"
      gap="22px"
      py="22px"
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
      alignItems="start"
    >
      <Text
        fontFamily="mono"
        fontSize="xs"
        fontWeight={500}
        color="gray.emphasized"
        letterSpacing="0.06em"
        pt="3px"
      >
        {step.number}
      </Text>
      <Box>
        <Text
          fontSize="md"
          fontWeight={700}
          color="fg"
          letterSpacing="-0.2px"
          mb="3px"
        >
          {step.title}
        </Text>
        <Text fontSize="sm" color="fg.muted" lineHeight={1.68}>
          {step.description}
        </Text>
      </Box>
    </Grid>
  );
}

export function MethodSection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: "90px" }}
      px={{ base: 6, md: "60px" }}
      bg="white"
      borderTop="1px solid"
      borderColor="blackAlpha.100"
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "400px 1fr" }}
        gap={{ base: 10, lg: "80px" }}
        alignItems="start"
      >
        {/* Left sidebar */}
        <Box>
          <SectionTag>Método</SectionTag>
          <Text
            as="h2"
            fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
            fontWeight={800}
            lineHeight={1.04}
            letterSpacing="-1.5px"
            color="fg"
          >
            Construímos
            <br />
            sobre{" "}
            <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="gray.emphasized">
              alicerces
              <br />
              verdadeiros.
            </Text>
          </Text>

          {/* Ashlar note */}
          <Box
            mt={7}
            px={5}
            py="18px"
            border="1px solid"
            borderColor="gold.500/22"
            borderLeft="3px solid"
            borderLeftColor="gold.500"
          >
            <Text fontSize="sm" color="fg.muted" lineHeight={1.72} fontStyle="italic">
              <Text as="strong" color="gold.500" fontStyle="normal" fontWeight={600}>
                Pedra bruta → pedra polida.
              </Text>
              <br />
              Todo cliente que chega tem um potencial que ainda não foi lapidado. Nossa função é revelar e edificar.
            </Text>
          </Box>
        </Box>

        {/* Steps */}
        <Box borderTop="1px solid" borderColor="blackAlpha.100">
          {steps.map((step) => (
            <StepItem key={step.number} step={step} />
          ))}
        </Box>
      </Grid>
    </Box>
  );
}
