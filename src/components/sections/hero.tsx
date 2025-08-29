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
} from "@chakra-ui/react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <Box as="section" position="relative" overflow="hidden">
      {/* Background Gradient */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear-gradient(0deg, {colors.blue.50}, transparent)"
        _dark={{ bgGradient: "linear-gradient(0deg, {colors.blue.900/20}, transparent)" }}
        zIndex={-1}
      />
      
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <VStack gap={{ base: 6, md: 8 }} maxW="4xl" mx="auto" textAlign="center">
          {/* Badge */}
          <HStack
            px={3}
            py={1}
            rounded="full"
            bg="blue.subtle"
            borderWidth="1px"
            borderColor="blue.emphasized"
          >
            <Sparkles size={14} className="text-blue-600" />
            <Text fontSize="sm" fontWeight="600" color="blue.fg">
              Soluções sob medida em IA & Data
            </Text>
          </HStack>

          {/* Título Principal */}
          <Heading
            as="h1"
            size={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="800"
            lineHeight="shorter"
            color="fg"
          >
            Inteligência Artificial e Dados,{" "}
            <Text
              as="span"
              bgGradient="linear-gradient(0deg, {colors.blue.500}, {colors.blue.600})"
              bgClip="text"
            >
              sob medida
            </Text>{" "}
            para sua liderança.
          </Heading>

          {/* Subtítulo */}
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            maxW="3xl"
            lineHeight="tall"
          >
            Desenvolvemos soluções de software que transformam dados complexos em 
            decisões estratégicas, entregando autonomia e eficiência para sua empresa.
          </Text>

          {/* CTAs */}
          <Stack
            direction={{ base: "column", sm: "row" }}
            gap={4}
            w={{ base: "full", sm: "auto" }}
            mt={4}
          >
            <Link href="#contato" passHref>
              <Button
                size="lg"
                colorPalette="blue"
                fontWeight="600"
                px={8}
              >
                Fale com um especialista
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Button>
            </Link>
            <Link href="#casos" passHref>
              <Button
                size="lg"
                variant="outline"
                colorPalette="gray"
                fontWeight="600"
                px={8}
              >
                Ver casos de uso
              </Button>
            </Link>
          </Stack>

          {/* Supporting Text */}
          <Text fontSize="sm" color="fg.muted" mt={2}>
            Vamos desenhar a solução ideal para o seu desafio de negócio.
          </Text>
        </VStack>

        {/* Stats ou Logos de Clientes (opcional) */}
        <HStack
          justify="center"
          gap={{ base: 8, md: 16 }}
          mt={{ base: 12, md: 16 }}
          flexWrap="wrap"
        >
          {[
            { value: "100%", label: "Personalizado" },
            { value: "10x", label: "Mais Eficiência" },
            { value: "24/7", label: "Suporte" },
            { value: "ROI", label: "Garantido" },
          ].map((stat) => (
            <VStack key={stat.label} gap={1}>
              <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="800"
                bgGradient="linear-gradient(0deg, {colors.blue.500}, {colors.blue.600})"
                bgClip="text"
              >
                {stat.value}
              </Text>
              <Text fontSize="sm" color="fg.muted" fontWeight="500">
                {stat.label}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}
