"use client";

import {
  Box,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTAFinalSection() {
  return (
    <Box
      as="section"
      py={{ base: 20, md: "120px" }}
      px={{ base: 6, md: "60px" }}
      bg="white"
      borderTop="1px solid"
      borderColor="blackAlpha.100"
      textAlign="center"
      position="relative"
      overflow="hidden"
      id="contato"
    >
      {/* Star symbol background */}
      <Box
        as="svg"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: "350px", md: "580px" }}
        opacity={0.03}
        pointerEvents="none"
        color="blue.solid"
        // @ts-ignore
        viewBox="0 0 560 560"
        fill="none"
      >
        <polygon
          points="280,20 310,250 540,280 310,310 280,540 250,310 20,280 250,250"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <polygon
          points="280,80 302,258 480,280 302,302 280,480 258,302 80,280 258,258"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="280" cy="280" r="52" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text
          x="280"
          y="280"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'DM Serif Display', serif"
          fontSize="60"
          fill="currentColor"
        >
          G
        </text>
      </Box>

      <VStack gap={{ base: 5, md: 6 }} position="relative" zIndex={1}>
        {/* Subtitle */}
        <HStack
          fontFamily="mono"
          fontSize="2xs"
          fontWeight={600}
          letterSpacing="0.16em"
          textTransform="uppercase"
          color="blue.solid"
          gap={3}
          justify="center"
        >
          <Box w="22px" h="1px" bg="blue.solid" />
          <Text>Próximo passo</Text>
          <Box w="22px" h="1px" bg="blue.solid" />
        </HStack>

        {/* Heading */}
        <Text
          as="h2"
          fontSize={{ base: "40px", md: "clamp(44px, 6vw, 88px)" }}
          fontWeight={800}
          lineHeight={0.93}
          letterSpacing="-3px"
          color="fg"
        >
          Quando estiver
          <br />
          <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="gray.emphasized">
            pronto para
          </Text>
          <br />
          <Text as="span" color="blue.solid">
            outro nível.
          </Text>
        </Text>

        {/* Description */}
        <Text fontSize="md" color="fg.muted" lineHeight={1.82}>
          Uma conversa de 30 minutos pode mudar a direção da sua operação.
        </Text>

        {/* CTA button */}
        <Box
          as={Link}
          // @ts-ignore
          href="/contato"
          display="inline-flex"
          alignItems="center"
          gap="9px"
          bg="blue.solid"
          color="white"
          px={{ base: 8, md: 10 }}
          py={{ base: 4, md: "16px" }}
          fontWeight={600}
          fontSize="md"
          textDecoration="none"
          transition="all 0.22s"
          _hover={{ opacity: 0.88, transform: "translateY(-2px)" }}
          mt={6}
        >
          Agendar consulta executiva
          <ArrowRight size={14} />
        </Box>
      </VStack>
    </Box>
  );
}
