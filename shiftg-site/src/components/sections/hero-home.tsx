import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight, Gauge } from "lucide-react";
import Link from "next/link";
import { ShiftMeter, MaturityBar } from "./hero-meter";

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

      {/* Medidor de Prompt — floating badge (top center) */}
      <Box
        asChild
        position="absolute"
        top={{ base: "16px", md: "26px" }}
        left="50%"
        transform="translateX(-50%)"
        zIndex={4}
        maxW="calc(100% - 24px)"
      >
        <Link href="/medidor-de-prompt">
          <HStack
            as="span"
            gap={{ base: 2, md: "10px" }}
            align="center"
            bg="white"
            border="1px solid"
            borderColor="blackAlpha.200"
            rounded="none"
            pl="5px"
            pr={{ base: 3, md: 4 }}
            py="5px"
            transition="border-color 0.2s, background 0.2s"
            css={{
              "& .badge-arrow": { transition: "transform 0.2s" },
              "&:hover": { borderColor: "var(--chakra-colors-blue-solid)" },
              "&:hover .badge-arrow": { transform: "translateX(3px)" },
            }}
          >
            <HStack
              as="span"
              gap="6px"
              align="center"
              bg="blue.solid"
              color="white"
              rounded="none"
              px="10px"
              py="5px"
            >
              <Box
                as="span"
                w="6px"
                h="6px"
                bg="white"
                animation="pulse 1.6s ease-in-out infinite"
              />
              <Text fontFamily="mono" fontSize="2xs" fontWeight={700} letterSpacing="0.12em">
                NOVO
              </Text>
            </HStack>

            <Box as="span" color="blue.solid" display="inline-flex">
              <Gauge size={16} strokeWidth={2} />
            </Box>

            <Text fontSize={{ base: "xs", md: "sm" }} fontWeight={700} color="fg" whiteSpace="nowrap">
              Medidor de Prompt
              <Text as="span" display={{ base: "none", md: "inline" }} fontWeight={500} color="fg.muted">
                {" "}— sua pontuação e dicas pra falar melhor com a IA
              </Text>
            </Text>

            <Box as="span" className="badge-arrow" color="blue.solid" display="inline-flex">
              <ArrowRight size={14} />
            </Box>
          </HStack>
        </Link>
      </Box>

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
            letterSpacing="-3px"
            css={{ lineHeight: 0.92 }}
          >
            o próximo nível.
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
              asChild
              position="relative"
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
              overflow="hidden"
              css={{
                "& .cta-wipe": {
                  transformOrigin: "left",
                  transform: "scaleX(0)",
                  transition: "transform 0.32s cubic-bezier(.32,.72,0,1)",
                },
                "& .cta-label, & .cta-arrow": { transition: "color 0.22s, transform 0.2s" },
                "&:hover .cta-wipe": { transform: "scaleX(1)" },
                "&:hover .cta-label, &:hover .cta-arrow": {
                  color: "var(--chakra-colors-black)",
                },
                "&:hover .cta-arrow": { transform: "translateX(4px)" },
              }}
            >
              <Link href="/contato">
                <Box
                  as="span"
                  className="cta-wipe"
                  position="absolute"
                  inset={0}
                  bg="gold.500"
                  zIndex={0}
                />
                <Box as="span" className="cta-label" position="relative" zIndex={1}>
                  Iniciar a transformação
                </Box>
                <Box
                  as="span"
                  className="cta-arrow"
                  position="relative"
                  zIndex={1}
                  display="inline-flex"
                >
                  <ArrowRight size={14} />
                </Box>
              </Link>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
}
