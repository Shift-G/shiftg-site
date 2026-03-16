import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* ── Stage dots ── */
function StageDots() {
  const states: ("done" | "active" | "default")[] = [
    "done",
    "done",
    "active",
    "default",
    "default",
  ];

  return (
    <HStack gap="5px">
      {states.map((s, i) => (
        <Box
          key={i}
          w="6px"
          h="6px"
          bg={
            s === "done"
              ? "gold.500"
              : s === "active"
                ? "blue.solid"
                : "fg.subtle"
          }
          transform={s === "active" ? "scale(1.3)" : undefined}
        />
      ))}
    </HStack>
  );
}

/* ── Maturity meter bar ── */
function ShiftMeter() {
  const labels = ["Inicial", "Estruturado", "Inteligente", "Preditivo", "Adaptativo"];
  const activeIdx = 2;

  return (
    <VStack align="stretch" gap={2}>
      <Text
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={500}
        letterSpacing="0.14em"
        textTransform="uppercase"
        color="fg.subtle"
      >
        Onde sua empresa está → onde vai chegar
      </Text>

      <HStack gap="4px">
        {[0, 1, 2, 3, 4].map((i) => (
          <Box
            key={i}
            flex={1}
            h="3px"
            bg="stone"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              inset={0}
              bg="blue.solid"
              transform={
                i <= 3
                  ? "scaleX(1)"
                  : "scaleX(0.45)"
              }
              transformOrigin="left"
              opacity={i <= 4 ? 1 : 0}
            />
          </Box>
        ))}
      </HStack>

      <HStack justify="space-between" mt={1}>
        {labels.map((l, i) => (
          <Text
            key={l}
            fontFamily="mono"
            fontSize="sm"
            fontWeight={500}
            color={i === activeIdx ? "blue.solid" : "fg.subtle"}
            letterSpacing="0.04em"
          >
            {l}
          </Text>
        ))}
      </HStack>
    </VStack>
  );
}

/* ── Vertical Maturity Bar (desktop only) ── */
function MaturityBar() {
  return (
    <VStack
      display={{ base: "none", lg: "flex" }}
      position="absolute"
      left={{ base: 6, lg: "60px" }}
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      align="center"
    >
      <Text
        css={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={500}
        letterSpacing="0.2em"
        textTransform="uppercase"
        color="fg.subtle"
        mb={3}
      >
        Maturidade Digital
      </Text>
      <Box w="2px" h="180px" bg="blackAlpha.100" position="relative">
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="72%"
          bgGradient="to-t"
          gradientFrom="blue.solid"
          gradientTo="blue.solid/25"
        />
      </Box>
      <Text
        mt={2}
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={700}
        color="blue.solid"
      >
        +G
      </Text>
    </VStack>
  );
}

export function HeroHome() {
  return (
    <Box
      as="section"
      minH="calc(100vh - 80px)"
      bg="white"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      position="relative"
      overflow="hidden"
      px={{ base: 6, md: "60px", lg: "112px" }}
    >
      {/* Background grid pattern */}
      {/* <Box
        position="absolute"
        inset="62% 0 0 0"
        backgroundImage="repeating-conic-gradient(rgba(0,0,0,0.022) 0% 25%, transparent 0% 50%)"
        backgroundSize="44px 44px"
        pointerEvents="none"
        maskImage="linear-gradient(to bottom, transparent, black 55%)"
      /> */}

      <MaturityBar />

      {/* Hero content */}
      <VStack
        position="relative"
        zIndex={2}
        align="flex-start"
        pt={{ base: "120px", md: "100px" }}
      >
        {/* Stage indicator */}
        <HStack gap={3} mb={{ base: 6, md: "30px" }}>
          <StageDots />
          <Text
            fontFamily="mono"
            fontSize="2xs"
            fontWeight={600}
            letterSpacing="0.13em"
            textTransform="uppercase"
            color="blue.solid"
          >
            Jornada de Maturidade Tecnológica
          </Text>
        </HStack>

        {/* Main heading */}
        <Heading
          as="h1"
          fontSize={{ base: "42px", md: "clamp(54px, 7.8vw, 116px)" }}
          lineHeight={0.94}
          letterSpacing="-2px"
          color="fg"
          maxW="980px"
          mb={0}
        >
          <Text
            as="span"
            fontFamily="mono"
            fontWeight={700}
            color="blue.solid"
            letterSpacing="-0.04em"
            position="relative"
            display="inline-block"
          >
            Shift
            <Box
              as="span"
              position="absolute"
              bottom="6px"
              left={0}
              right={0}
              h="4px"
              bg="gold.500"
              opacity={0.45}
            />
          </Text>{" "}
          <Text as="span" fontWeight={800}>
            a sua
          </Text>
          <br />
          <Text as="span" fontWeight={800}>
            empresa para
          </Text>
          <br />
          <Text
            as="span"
            fontFamily="serif"
            fontWeight={400}
            fontStyle="italic"
            color="blue.solid"
          >
            o próximo
          </Text>
          <br />
          <Text as="span" fontWeight={800}>
            nível.
          </Text>
        </Heading>

        {/* Bottom bar */}
        <Box
          borderTop="1px solid"
          borderColor="blackAlpha.100"
          mt={{ base: 8, md: "44px" }}
          pt={{ base: 6, md: "28px" }}
          pb={{ base: 10, md: "52px" }}
          w="full"
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 7, lg: "48px" }}
            align={{ base: "flex-start", lg: "center" }}
          >
            {/* Description */}
            <Text
              fontSize="md"
              color="fg.muted"
              lineHeight={1.85}
              flex={1}
            >
              Elevamos a maturidade tecnológica da sua organização —
              Consultoria, IA, treinamento, RH e desenvolvimento.
              Tudo que a transformação exige, lado a lado com você.
            </Text>

            {/* Meter */}
            <Box flex={1} w={{ base: "full", lg: "auto" }}>
              <ShiftMeter />
            </Box>

            {/* CTA */}
            <Box
              as={Link}
              // @ts-ignore
              href="/contato"
              display="inline-flex"
              alignItems="center"
              gap="9px"
              bg="blue.solid"
              color="white"
              px={{ base: 6, md: "30px" }}
              py={{ base: 4, md: "15px" }}
              fontWeight={600}
              fontSize="sm"
              textDecoration="none"
              whiteSpace="nowrap"
              transition="all 0.22s"
              _hover={{ opacity: 0.88, transform: "translateY(-2px)" }}
            >
              Iniciar a transformação
              <ArrowRight size={14} />
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
}
