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
import { ArrowRight, MapPinHouseIcon } from "lucide-react";
import { GradientBars } from "../ui/gradient-bars";

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
              fontWeight="300"
              color="blue.700"
              _dark={{ color: "blue.300" }}
              textAlign="center"
            >
              Em breve: Sede em União da Vitória - PR
            </Text>
          </HStack>

          {/* Enhanced Title */}
          <VStack gap={4}>
            <Heading
              as="h1"
              size={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="400"
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
              fontWeight="300"
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
      </Container>
    </Box>
  );
}
