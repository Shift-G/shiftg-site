"use client";

import { Box, Container, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <Box
      as="section"
      minH={{ base: "70vh", md: "80vh" }}
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      {/* Background removed for minimalist look */}

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack
          gap={{ base: 6, md: 8 }}
          textAlign="center"
          maxW="4xl"
          mx="auto"
        >
          <VStack gap={{ base: 4, md: 6 }}>
            <Heading
              as="h1"
              size={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="fg"
              lineHeight="tight"
              letterSpacing="-0.025em"
            >
              Inteligência, eficiência e visão — aplicadas ao que realmente importa.
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="3xl"
              lineHeight="tall"
            >
              Estratégia, IA e arquitetura para elevar eficiência, escala e competitividade.
            </Text>
          </VStack>

          <Button
            asChild
            size="lg"
            colorPalette="blue"
            px={8}
          >
            <Link href="/contato">
              Agendar uma consulta executiva
              <ChevronRight size={18} />
            </Link>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
