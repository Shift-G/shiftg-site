"use client";

import { Box, Container, VStack, Heading, Text } from "@chakra-ui/react";

const philosophyItems = [
  "Compreender o negócio antes da tecnologia",
  "Transformar dados dispersos em clareza executiva",
  "Automatizar o que trava o crescimento",
  "Criar soluções que conversam entre si",
  "Reduzir riscos e aumentar previsibilidade",
];

export function PhilosophySection() {
  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      bg="{colors.blue.500/5}"
      py={{ base: 16, md: 20, lg: 24 }}
    >
      {/* Decorative gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="1px"
        bg="linear-gradient(90deg, transparent 0%, {colors.blue.500/30} 50%, transparent 100%)"
      />

      <Container maxW="7xl">
        <VStack gap={{ base: 12, md: 16, lg: 20 }} align="start">
          {/* Main headline */}
          <VStack align="start" gap={{ base: 4, md: 6 }}>
            <Heading
              as="h2"
              size={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              color="fg"
              lineHeight="tight"
              letterSpacing="-0.03em"
            >
              Tecnologia não é ferramenta.
              <br />
              <Text as="span" color="blue.solid">
                É arquitetura de futuro.
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="3xl"
              lineHeight="tall"
            >
              Na Shift+G, tecnologia não começa pelo código — começa pela estratégia.
              Enxergamos processos, cultura, riscos e metas antes de qualquer solução.
            </Text>
          </VStack>

          {/* Philosophy items - Typography focused */}
          <VStack align="start" gap={{ base: 4, md: 6 }} w="full">
            {philosophyItems.map((item, index) => (
              <Text
                key={index}
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="medium"
                color="fg"
                lineHeight="tight"
                position="relative"
                pl={{ base: 6, md: 8 }}
                _before={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  w: { base: 3, md: 4 },
                  h: "2px",
                  bg: "blue.solid",
                }}
              >
                {item}
              </Text>
            ))}
          </VStack>

          {/* Closing statement */}
          <Box
            pt={{ base: 8, md: 12 }}
            borderTop="1px solid"
            borderColor="{colors.whiteAlpha.200}"
            w="full"
          >
            <Heading
              as="h3"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              color="fg"
              lineHeight="tight"
            >
              Entregamos tecnologia que faz sentido,
              <br />
              funciona e gera{" "}
              <Text as="span" color="blue.solid">
                impacto real.
              </Text>
            </Heading>
          </Box>
        </VStack>
      </Container>

      {/* Bottom decorative gradient */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="1px"
        bg="linear-gradient(90deg, transparent 0%, {colors.blue.500/30} 50%, transparent 100%)"
      />
    </Box>
  );
}
