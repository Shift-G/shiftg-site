"use client";

import { Box, Grid, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * NOTE: these are construct-true figures derived from the site's own claims
 * (15+ anos from the founder bio, 4 service fronts, 5 maturity levels).
 * Replace with real proof metrics (clientes, projetos entregues, % de ganho)
 * as they become available — that is the strongest version of this band.
 */
interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 15, suffix: "+", label: "Anos de experiência em tecnologia" },
  { value: 4, label: "Frentes integradas · IA · Dev · RH · Treinamento" },
  { value: 5, label: "Níveis de maturidade mapeados" },
  { value: 360, suffix: "°", label: "Da estratégia à execução, ponta a ponta" },
];

const HAIRLINE = "whiteAlpha.200";
const CELL_BG = "#0e0e0c";

function StatCell({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) {
  const reduced = usePrefersReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setN(stat.value);
      return;
    }
    let raf = 0;
    let t0 = 0;
    const duration = 1500;
    const step = (t: number) => {
      if (!t0) t0 = t;
      const k = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      setN(Math.round(eased * stat.value));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    const to = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(to);
    };
  }, [active, reduced, stat.value, delay]);

  return (
    <Box bg={CELL_BG} px={{ base: 6, md: 9 }} py={{ base: 10, md: "64px" }}>
      <Text
        as="div"
        fontWeight={800}
        lineHeight={0.9}
        letterSpacing="-3px"
        color="white"
        fontSize={{ base: "52px", md: "clamp(48px, 5.4vw, 92px)" }}
        css={{ fontVariantNumeric: "tabular-nums" }}
      >
        {stat.prefix}
        {n}
        {stat.suffix && (
          <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="gold.500">
            {stat.suffix}
          </Text>
        )}
      </Text>
      <Text
        mt={{ base: 3, md: 4 }}
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={500}
        letterSpacing="0.12em"
        textTransform="uppercase"
        color="whiteAlpha.600"
        lineHeight={1.5}
      >
        {stat.label}
      </Text>
    </Box>
  );
}

export function StatsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <Box as="section" bg="fg" py={{ base: 16, md: "100px" }} px={{ base: 6, md: "60px" }}>
      <HStack
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={600}
        letterSpacing="0.16em"
        textTransform="uppercase"
        color="whiteAlpha.400"
        gap="10px"
        mb={{ base: 8, md: 12 }}
      >
        <Box w="18px" h="1.5px" bg="whiteAlpha.300" />
        <Text>Em números</Text>
      </HStack>

      <Grid
        ref={ref}
        templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
        gap="1px"
        bg={HAIRLINE}
        border="1px solid"
        borderColor={HAIRLINE}
      >
        {STATS.map((stat, i) => (
          <StatCell key={stat.label} stat={stat} active={inView} delay={i * 120} />
        ))}
      </Grid>
    </Box>
  );
}
