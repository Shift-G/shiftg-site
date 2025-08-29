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
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Target,
  Bot,
  TrendingUp,
  MapIcon,
  MapPinHouseIcon,
} from "lucide-react";
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
      <Box display={{ base: "none", md: "block" }}>
        <GradientBars bars={24} colors={["{colors.blue.500}", "transparent"]} />
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <GradientBars bars={6} colors={["{colors.blue.500}", "transparent"]} />
      </Box>

      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <VStack
          gap={{ base: 2, md: 4 }}
          maxW="5xl"
          mx="auto"
          textAlign="center"
        >
          {/* Announcement Badge */}
          <HStack
            px={2}
            py={1}
            rounded="full"
            bg="blue.50"
            _dark={{ bg: "blue.900/20", borderColor: "blue.800" }}
            border="1px solid"
            pos="absolute"
            top={6}
            left="50%"
            transform="translateX(-50%)"
            borderColor="blue.200"
            minW="300px"
          >
            <Icon as={MapPinHouseIcon} boxSize={4} color="blue.500" />
            <Text
              fontSize={{ base: "xs", md: "xs" }}
              fontWeight="600"
              color="blue.700"
              _dark={{ color: "blue.300" }}
              textAlign="center"
            >
              Em breve: Sede em União da Vitória - PR
            </Text>
          </HStack>

          {/* Glass Morphism Badge */}
          {/* <Box
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
          </Box> */}

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
            fontSize={{ base: "md", md: "2xl" }}
            maxW="4xl"
            lineHeight="tall"
            fontWeight="400"
          >
            Desenvolvemos soluções de IA que transformam dados em decisões
            estratégicas, automatizam processos complexos e geram vantagem
            competitiva sustentável.
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
                variant="solid"
                colorPalette="blue"
              >
                Fale com um especialista
                <ArrowRight size={20} style={{ marginLeft: "12px" }} />
              </Button>
            </Link>
          </Stack>

          <Text fontSize="lg" color="fg.muted" fontWeight="500">
            Consultoria gratuita • Suporte 24/7
          </Text>
        </VStack>

        {/* Enhanced Stats */}
        <Box mt={{ base: 16, md: 20 }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 2, md: 8 }}>
            {[
              {
                value: "300%",
                label: "Produtividade",
                Icon: Target,
              },
              {
                value: "6 meses",
                label: "ROI Garantido",
                Icon: Zap,
              },
              {
                value: "24/7",
                label: "Suporte Técnico",
                Icon: Bot,
              },
              {
                value: "100%",
                label: "Sob Medida",
                Icon: TrendingUp,
              },
            ].map((stat, index) => (
              <Box
                key={stat.label}
                p={{ base: 6, md: 8 }}
                rounded="xl"
                bg="bg.subtle/10"
                backdropFilter="blur(10px)"
                animation={`fadeInUp 0.6s ease-out ${index * 0.1}s both`}
                overflow="hidden"
                boxShadow="0px 0px 10px {colors.blue.500/20}"
              >
                <VStack gap={4} position="relative" zIndex={1}>
                  <Icon as={stat.Icon} boxSize={8} color={"blue.500"} />

                  <VStack gap={1}>
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="900"
                      bgGradient={`linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})`}
                      bgClip="text"
                      lineHeight="none"
                      letterSpacing="tight"
                    >
                      {stat.value}
                    </Text>

                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color="blue.fg"
                      fontWeight="600"
                      textAlign="center"
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      {stat.label}
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
