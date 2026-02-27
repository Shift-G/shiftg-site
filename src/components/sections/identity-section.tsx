import {
  Box,
  Grid,
  Text,
  VStack,
} from "@chakra-ui/react";

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
        color="whiteAlpha.400"
        letterSpacing="0.1em"
        textTransform="uppercase"
        mb={1}
      >
        {block.label}
      </Text>
      <Text fontSize="sm" color="whiteAlpha.500" lineHeight={1.68}>
        {block.description}
      </Text>
    </Box>
  );
}

export function IdentitySection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: "90px" }}
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

      {/* Eye symbol */}
      <Box
        as="svg"
        position="absolute"
        right="-30px"
        top="50%"
        transform="translateY(-50%)"
        w={{ base: "250px", md: "420px" }}
        opacity={0.06}
        pointerEvents="none"
        color="white"
        viewBox="0 0 420 380"
        fill="none"
      >
        <polygon points="210,18 404,354 16,354" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <polygon points="210,65 365,330 55,330" stroke="currentColor" strokeWidth="1.2" fill="none" />
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
        {/* Left text */}
        <Box>
          <Text
            fontFamily="mono"
            fontSize="2xs"
            fontWeight={600}
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="whiteAlpha.400"
            mb={4}
          >
            A origem do nome
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "30px", md: "clamp(30px, 3.5vw, 48px)" }}
            fontWeight={800}
            lineHeight={1.06}
            letterSpacing="-1.2px"
            color="white"
            mb={4}
          >
            O símbolo
            <br />
            que carregamos.
          </Text>
          <Text fontSize="md" color="whiteAlpha.600" lineHeight={1.88} mt={4}>
            Nossa logo é um triângulo que forma o G — inscrito no quadrado e no círculo. Não é coincidência. É declaração de princípio.
          </Text>
        </Box>

        {/* Right blocks */}
        <VStack gap="2px" align="stretch">
          {blocks.map((block) => (
            <IdentityBlock key={block.label} block={block} />
          ))}
        </VStack>
      </Grid>
    </Box>
  );
}
