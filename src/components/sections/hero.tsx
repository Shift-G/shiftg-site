"use client";

import { Box, Button, Container, Heading, Text, VStack, Badge } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <Box
      as="section"
      w={{ base: "full", md: "98dvw" }}
      mx={{ base: 0, md: "1dvw" }}
      rounded="3xl"
      minH={{ base: "auto", md: "80vh" }}
      position="relative"
      display="flex"
      alignItems="center"
      bg={{ base: "white", md: "gray.100" }}
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={0.5}
        backgroundImage="radial-gradient(circle at 60% 0%, {colors.blue.500} 0%, transparent 50%)"
        backgroundSize="100% 100%"
        hideBelow="sm"
      />
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={.1}
        backgroundImage="radial-gradient(circle at 25% 25%, {colors.gray.900} 1px, transparent 1px)"
        backgroundSize="24px 24px"
        maskImage="linear-gradient(to bottom, black 40%, transparent 100%)"
        hideBelow="sm"
      />

      <Container maxW="7xl" position="relative" zIndex={1} py={{ base: 20, md: 0 }}>
        <VStack gap={{ base: 8, md: 10 }} maxW="full" mx="auto" align={{ base: "center", md: "flex-start" }} textAlign="left">
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
            bg="blue.50/20"
            color="blue.600"
            border="1px solid"
            borderColor="blue.600/20"
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
            lineHeight=".8"
          >
            Inteligência, eficiência e visão<br />
            <Text as="span" fontWeight="400" fontSize={{ base: "3xl", md: "3xl", lg: "6xl" }} color="blue.500">
              — aplicadas ao que realmente importa.
            </Text>
          </Heading>

          {/* Subtitle */}
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
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
