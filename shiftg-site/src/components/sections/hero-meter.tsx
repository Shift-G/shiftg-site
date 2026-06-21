"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const LABELS = ["Inicial", "Estruturado", "Inteligente", "Preditivo", "Adaptativo"];
const ACTIVE_IDX = 2;
const SEG_TARGETS = [1, 1, 1, 1, 0.45];
const RAIL_PCT = 72;
const EASE = "cubic-bezier(.32,.72,0,1)";

/* ── Maturity meter bar — segments fill left-to-right on mount ── */
export function ShiftMeter() {
  const reduced = usePrefersReducedMotion();
  const [on, setOn] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const active = on || reduced;

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
        {SEG_TARGETS.map((target, i) => (
          <Box key={i} flex={1} h="3px" bg="stone" position="relative" overflow="hidden">
            <Box
              position="absolute"
              inset={0}
              bg="blue.solid"
              transformOrigin="left"
              transform={active ? `scaleX(${target})` : "scaleX(0)"}
              transition={reduced ? undefined : `transform 0.7s ${EASE}`}
              transitionDelay={reduced ? undefined : `${i * 110}ms`}
            />
          </Box>
        ))}
      </HStack>

      <HStack justify="space-between" mt={1} gap={1}>
        {LABELS.map((l, i) => (
          <Text
            key={l}
            fontFamily="mono"
            fontSize="2xs"
            fontWeight={i === ACTIVE_IDX ? 700 : 500}
            color={i === ACTIVE_IDX ? "blue.solid" : "fg.subtle"}
            letterSpacing="0.02em"
            whiteSpace="nowrap"
          >
            {l}
          </Text>
        ))}
      </HStack>
    </VStack>
  );
}

/* ── Vertical Maturity Bar (desktop only) — fills + counts up on mount ── */
export function MaturityBar() {
  const reduced = usePrefersReducedMotion();
  const [pct, setPct] = useState(0);
  const [fill, setFill] = useState(false);

  useEffect(() => {
    if (reduced) {
      setPct(RAIL_PCT);
      setFill(true);
      return;
    }
    setFill(true);
    const t0 = performance.now();
    const duration = 1400;
    let raf = 0;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      setPct(Math.round(eased * RAIL_PCT));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

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
      <Box w="2px" h="180px" bg="blackAlpha.100" position="relative" overflow="hidden">
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h={`${RAIL_PCT}%`}
          transformOrigin="bottom"
          transform={fill ? "scaleY(1)" : "scaleY(0)"}
          transition={reduced ? undefined : `transform 1.4s ${EASE}`}
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
        css={{ fontVariantNumeric: "tabular-nums" }}
      >
        {pct}%
      </Text>
    </VStack>
  );
}
