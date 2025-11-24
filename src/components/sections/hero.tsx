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
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={0.5}
        backgroundImage="radial-gradient(circle at 60% 40%, {colors.blue.500/30} 0%, transparent 50%)"
        backgroundSize="100% 100%"
      />
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={0.2}
        backgroundImage="radial-gradient(circle at 50% 50%, {colors.blue.300} 1px, transparent 1px)"
        backgroundSize="32px 32px"
        maskImage="linear-gradient(to bottom, black 40%, transparent 100%)"
      />

      <Container maxW="7xl" position="relative" zIndex={1} py={{ base: 20, md: 0 }}>
        <VStack gap={{ base: 8, md: 10 }} maxW="5xl" mx="auto" align={{ base: "center", md: "center" }} textAlign={{ base: "center", md: "center" }}>
          {/* Badge */}
          <Badge
            colorPalette="blue"
            size={{ base: "xs", md: "lg" }}
            px={5}
            py={2}
            rounded="full"
            fontWeight="medium"
            letterSpacing="wide"
            textTransform="none"
            bg="blue.50"
            color="blue.700"
            border="1px solid"
            borderColor="blue.100"
            _dark={{ bg: "blue.900/20", color: "blue.200", borderColor: "blue.800" }}
            backdropFilter="blur(8px)"
          >
            Consultoria Especializada em Inteligência Artificial
          </Badge>

          {/* Main Heading */}
          <Heading
            as="h1"
            size={{ base: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="600"
            letterSpacing="-0.04em"
            lineHeight="0.9"
            color="fg"
          >
            Inteligência, eficiência e visão{" "}
            <Text as="span" color="blue.600" _dark={{ color: "blue.400" }}>
              — aplicadas ao que realmente importa.
            </Text>
          </Heading>

          {/* Subtitle */}
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="fg.muted"
            maxW="3xl"
            lineHeight="1.6"
            fontWeight="medium"
          >
            Estratégia, IA e arquitetura para elevar eficiência, escala e competitividade.</Text>

          {/* CTA Buttons */}
          <Box display="flex" gap={4} flexDirection={{ base: "column", sm: "row" }} w={{ base: "full", sm: "auto" }}>
            <Button
              asChild
              size="xl"
              colorPalette="blue"
              fontSize="lg"
              h={14}
              px={8}
              _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
              transition="all 0.2s"
            >
              <Link href="#contato">
                Falar com especialista
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              fontSize="lg"
              h={14}
              px={8}
              _hover={{ bg: "gray.50", _dark: { bg: "whiteAlpha.100" } }}
            >
              <Link href="#servicos">Ver serviços</Link>
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
