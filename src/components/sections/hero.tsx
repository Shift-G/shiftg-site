"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Stack,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import { GradientBars } from "../ui/gradient-bars";

// Using global CSS animations defined in theme/global-css.ts

export function Hero() {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      {/* Gradient Bars Background */}
      <GradientBars bars={24} colors={["{colors.blue.500}", "transparent"]} />

      {/* Dynamic Gradient Background */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial-gradient(ellipse 80% 50% at 50% -20%, {colors.blue.500/50}, transparent)"
        _dark={{
          bgGradient:
            "radial-gradient(ellipse 80% 50% at 50% -20%, {colors.blue.700/40}, transparent)",
        }}
        zIndex={-2}
      />

      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <VStack
          gap={{ base: 8, md: 10 }}
          maxW="5xl"
          mx="auto"
          textAlign="center"
        >
          {/* Glass Morphism Badge */}
          <Box
            px={3}
            py={2}
            rounded="full"
            bg="{colors.whiteAlpha.200}"
            backdropFilter="blur(10px)"
            border="1px solid {colors.whiteAlpha.300}"
            boxShadow="0 8px 32px {colors.blue.500/10}"
          >
            <HStack gap={2}>
              <Box animation="pulse 2s ease-in-out infinite">
                <Icon as={Brain} boxSize={5} color="blue.500" />
              </Box>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="600"
                color="blue.600"
                _dark={{ color: "blue.300" }}
              >
                Inteligência Artificial • Dados • Automação
              </Text>
              <Box animation="pulse 2s ease-in-out infinite 0.5s">
                <Zap size={16} color="blue.500}" />
              </Box>
            </HStack>
          </Box>

          {/* Enhanced Title */}
          <VStack gap={4}>
            <Heading
              as="h1"
              size={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="900"
              lineHeight="none"
              letterSpacing="tight"
              color="fg"
            >
              Transforme seus{" "}
              <Text
                as="span"
                bgGradient="linear-gradient(35deg, {colors.blue.500}, {colors.blue.700})"
                bgClip="text"
                animation="pulse 3s ease-in-out infinite"
              >
                dados
              </Text>{" "}
              em{" "}
              <Text
                as="span"
                bgGradient="linear-gradient(35deg, {colors.blue.500}, {colors.blue.700})"
                bgClip="text"
              >
                inteligência
              </Text>
            </Heading>

            <Text
              fontSize="xl"
              color="blue.600"
              _dark={{ color: "blue.300" }}
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Soluções de IA sob medida para líderes visionários
            </Text>
          </VStack>

          {/* Enhanced Subtitle */}
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="fg.muted"
            maxW="4xl"
            lineHeight="tall"
            fontWeight="400"
          >
            Desenvolvemos sistemas inteligentes que automatizam processos,
            preveem tendências e entregam insights estratégicos para sua empresa
            tomar decisões mais rápidas e precisas.
          </Text>

          {/* Enhanced CTAs */}
          <Stack
            direction={{ base: "column", sm: "row" }}
            gap={6}
            w={{ base: "full", sm: "auto" }}
            mt={8}
          >
            <Link href="#contato" passHref>
              <Button
                size="xl"
                px={10}
                py={6}
                rounded="2xl"
                fontWeight="700"
                fontSize="lg"
                bg="{colors.gradient.blue}"
                color="white"
                border="none"
                boxShadow="0 10px 40px {colors.blue.500/30}"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 50px {colors.blue.500/40}",
                  bg: "linear-gradient(135deg, {colors.blue.600}, {colors.blue.800})",
                }}
                _active={{
                  transform: "translateY(0px)",
                }}
                transition="all 0.3s ease"
              >
                Agende uma demonstração
                <ArrowRight size={20} style={{ marginLeft: "12px" }} />
              </Button>
            </Link>
            <Link href="#casos" passHref>
              <Button
                size="xl"
                px={10}
                py={6}
                rounded="2xl"
                fontWeight="600"
                fontSize="lg"
                bg="{colors.whiteAlpha.200}"
                backdropFilter="blur(20px)"
                border="1px solid {colors.whiteAlpha.300}"
                color="fg"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "{colors.whiteAlpha.300}",
                  borderColor: "{colors.blue.500/30}",
                }}
                _active={{
                  transform: "translateY(0px)",
                }}
                transition="all 0.3s ease"
              >
                Ver casos de sucesso
              </Button>
            </Link>
          </Stack>

          <Text fontSize="lg" color="fg.muted" fontWeight="500">
            Consultoria gratuita • Suporte 24/7
          </Text>
        </VStack>

        {/* Enhanced Stats */}
        <Box mt={{ base: 16, md: 20 }}>
          <HStack justify="center" gap={{ base: 4, md: 4 }} flexWrap="wrap">
            {[
              { value: "100%", label: "Sob Medida", icon: "🎯" },
              { value: "5x", label: "Mais Rápido", icon: "⚡" },
              { value: "24/7", label: "Suporte", icon: "🤖" },
              { value: "ROI", label: "Garantido", icon: "📈" },
            ].map((stat, index) => (
              <Box
                key={stat.label}
                p={12}
                rounded="2xl"
                bg="{colors.whiteAlpha.200}"
                backdropFilter="blur(20px)"
                border="1px solid {colors.whiteAlpha.300}"
                boxShadow="0 8px 32px {colors.blue.500/10}"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 50px {colors.blue.500/20}",
                }}
                animation={`bounce ${10 + index}s ease-in-out infinite`}
              >
                <VStack gap={3}>
                  <Text fontSize="2xl">{stat.icon}</Text>
                  <Text
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="900"
                    bgGradient="{colors.gradient.purple}"
                    bgClip="text"
                    lineHeight="none"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="fg.muted"
                    fontWeight="600"
                    textAlign="center"
                  >
                    {stat.label}
                  </Text>
                </VStack>
              </Box>
            ))}
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
