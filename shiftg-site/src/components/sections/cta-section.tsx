"use client";

import { Box, Container, Heading, Button, VStack } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      position="relative"
    >
      {/* Background removed for minimalist look */}

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack
          gap={{ base: 6, md: 8 }}
          textAlign="center"
          maxW="3xl"
          mx="auto"
        >
          <Heading
            as="h2"
            size={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="fg"
            lineHeight="tight"
          >
            Quando sua empresa estiver pronta para operar em outro nível, estamos prontos para conduzir.
          </Heading>

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
