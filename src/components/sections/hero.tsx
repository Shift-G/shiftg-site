"use client";

import { Box, Button, Container, Heading, Text, VStack, Badge } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <Box
      as="section"
      minH="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      bg="white"
      _dark={{ bg: "gray.900" }}
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={0.4}
        backgroundImage="radial-gradient({colors.blue.200} 1px, transparent 1px)"
        backgroundSize="24px 24px"
        maskImage="linear-gradient(to bottom, black 60%, transparent 100%)"
      />

      <Container maxW="7xl" position="relative" zIndex={1} py={{ base: 20, md: 0 }}>
        <VStack gap={{ base: 8, md: 10 }} maxW="4xl" align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>
          {/* Badge */}
          <Badge
            colorPalette="blue"
            size="lg"
            px={4}
            py={2}
            rounded="full"
            fontWeight="semibold"
            letterSpacing="wide"
          >
            Consultoria Especializada em Inteligência Artificial
          </Badge>

          {/* Main Heading */}
          <Heading
            as="h1"
            size={{ base: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="black"
            letterSpacing="-0.03em"
            lineHeight="0.95"
            color="fg"
          >
            Transforme dados em{" "}
            <Text as="span" color="blue.600">
              decisões estratégicas
            </Text>
          </Heading>

          {/* Subtitle */}
          <Text fontSize={{ base: "xl", md: "2xl" }} color="fg.muted" maxW="3xl" lineHeight="tall">
            A Shift+G é a consultoria que líderes escolhem para transformar complexidade operacional em vantagem
            competitiva — com IA, automação e inteligência aplicada.
          </Text>

          {/* CTA Buttons */}
          <Box display="flex" gap={4} flexDirection={{ base: "column", sm: "row" }} w={{ base: "full", sm: "auto" }}>
            <Button asChild size="xl" colorPalette="blue" _hover={{ transform: "translateY(-2px)" }} transition="all 0.2s">
              <Link href="#contato">
                Falar com especialista
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" _hover={{ bg: "gray.50" }}>
              <Link href="#servicos">Ver serviços</Link>
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
