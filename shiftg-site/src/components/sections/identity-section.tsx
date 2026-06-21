"use client";

import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import { Reveal } from "@/components/ui/reveal";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/* ── Identity Block ── */
interface IdentityBlockData {
  glyph: React.ReactNode;
  label: string;
  description: string;
}

const blocks: IdentityBlockData[] = [
  {
    glyph: (
      <Text fontFamily="mono" fontWeight={700} fontSize="2xl" lineHeight={1} color="white">
        shift+
      </Text>
    ),
    label: "Transformação",
    description:
      "Todo cliente que nos procura sai diferente. Shift é o movimento que separa o que era do que pode ser. A ruptura necessária, o salto de maturidade.",
  },
  {
    glyph: (
      <Text fontFamily="serif" fontWeight={400} fontSize="4xl" lineHeight={1} color="white">
        G
      </Text>
    ),
    label: "Gnosis — o conhecimento que ilumina",
    description:
      "O G no centro do triângulo. Conhecimento aplicado com propósito, que transforma complexidade em clareza e dados em decisão.",
  },
];

function IdentityBlock({ block }: { block: IdentityBlockData }) {
  return (
    <Box
      px={7}
      py={6}
      bg="whiteAlpha.100"
      transition="background 0.2s"
      _hover={{ bg: "whiteAlpha.200" }}
    >
      <Box mb={1}>{block.glyph}</Box>
      <Text
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={600}
        color="whiteAlpha.500"
        letterSpacing="0.1em"
        textTransform="uppercase"
        mb={1}
      >
        {block.label}
      </Text>
      <Text fontSize="sm" color="whiteAlpha.600" lineHeight={1.68}>
        {block.description}
      </Text>
    </Box>
  );
}

export function IdentitySection() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const drawn = inView || reduced;

  // Stroke draw-on for the all-seeing triangles
  const drawStyle = (len: number): React.CSSProperties => ({
    strokeDasharray: len,
    strokeDashoffset: drawn ? 0 : len,
    transition: reduced ? undefined : "stroke-dashoffset 2.2s cubic-bezier(.32,.72,0,1)",
  });

  return (
    <Box
      ref={ref}
      as="section"
      py={{ base: 16, md: "110px" }}
      px={{ base: 6, md: "60px" }}
      bg="blue.solid"
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Grid pattern overlay */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="repeating-conic-gradient(rgba(255,255,255,0.02) 0% 25%, transparent 0% 50%)"
        backgroundSize="40px 40px"
        pointerEvents="none"
      />

      {/* Eye symbol — draws on as the section enters view */}
      <Box
        as="svg"
        position="absolute"
        right={{ base: "-40px", md: "-30px" }}
        top="50%"
        transform="translateY(-50%)"
        w={{ base: "280px", md: "480px" }}
        opacity={0.13}
        pointerEvents="none"
        color="white"
        // @ts-ignore
        viewBox="0 0 420 380"
        fill="none"
      >
        <polygon points="210,18 404,354 16,354" stroke="currentColor" strokeWidth="2.5" fill="none" style={drawStyle(1180)} />
        <polygon points="210,65 365,330 55,330" stroke="currentColor" strokeWidth="1.2" fill="none" style={drawStyle(980)} />
        <line x1="210" y1="18" x2="210" y2="0" stroke="currentColor" strokeWidth="1.5" />
        <line x1="210" y1="18" x2="195" y2="2" stroke="currentColor" strokeWidth="1" />
        <line x1="210" y1="18" x2="225" y2="2" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="210" cy="222" rx="56" ry="34" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M154,222 Q210,178 266,222" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M154,222 Q210,266 266,222" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="210" cy="222" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="210" cy="222" r="11" fill="currentColor" />
      </Box>

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 10, lg: "80px" }}
        alignItems="center"
        position="relative"
        zIndex={1}
      >
        {/* Left text — the climax */}
        <Box>
          <Text
            fontFamily="mono"
            fontSize="2xs"
            fontWeight={600}
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="whiteAlpha.500"
            mb={5}
          >
            A origem do nome
          </Text>
          <Text
            fontFamily="serif"
            fontStyle="italic"
            fontWeight={400}
            fontSize={{ base: "64px", md: "clamp(64px, 9vw, 132px)" }}
            lineHeight={0.86}
            letterSpacing="-3px"
            color="white"
          >
            Gnosis.
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "26px", md: "clamp(26px, 3vw, 40px)" }}
            fontWeight={800}
            lineHeight={1.08}
            letterSpacing="-1px"
            color="white"
            mt={5}
          >
            O conhecimento que ilumina
            <br />
            o que estava no escuro.
          </Text>
          <Text fontSize="md" color="whiteAlpha.700" lineHeight={1.88} mt={6} maxW="46ch">
            Nossa logo é um triângulo que forma o G — inscrito no quadrado e no círculo. Não é coincidência. É declaração de princípio: transformar complexidade em clareza, e dados em decisão.
          </Text>
        </Box>

        {/* Right blocks — staggered reveal */}
        <VStack gap="2px" align="stretch">
          {blocks.map((block, i) => (
            <Reveal key={block.label} delay={i * 120} y={18}>
              <IdentityBlock block={block} />
            </Reveal>
          ))}
        </VStack>
      </Grid>
    </Box>
  );
}
