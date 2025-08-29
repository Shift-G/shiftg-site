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
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";

// Using global CSS animations defined in theme/global-css.ts

export function Hero() {
  return (
    <Box as="section" position="relative" overflow="hidden" minH="100vh" display="flex" alignItems="center">
      {/* Dynamic Gradient Background */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.5), transparent)"
        _dark={{ 
          bgGradient: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(29, 78, 216, 0.4), transparent)" 
        }}
        zIndex={-2}
      />

      {/* Floating Elements */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        w="120px"
        h="120px"
        borderRadius="full"
        bg="rgba(59, 130, 246, 0.1)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        animation="float 6s ease-in-out infinite"
        zIndex={-1}
      />
      
      <Box
        position="absolute"
        top="60%"
        left="5%"
        w="80px"
        h="80px"
        borderRadius="2xl"
        bg="rgba(139, 92, 246, 0.1)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        animation="float 8s ease-in-out infinite reverse"
        zIndex={-1}
      />

      <Box
        position="absolute"
        bottom="20%"
        right="20%"
        w="60px"
        h="60px"
        borderRadius="lg"
        bg="rgba(14, 165, 233, 0.1)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        animation="float 4s ease-in-out infinite"
        zIndex={-1}
      />
      
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <VStack gap={{ base: 8, md: 10 }} maxW="5xl" mx="auto" textAlign="center">
          {/* Glass Morphism Badge */}
          <Box
            px={6}
            py={3}
            rounded="full"
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(20px)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            boxShadow="0 8px 32px rgba(59, 130, 246, 0.1)"
          >
            <HStack gap={2}>
              <Box animation="pulse 2s ease-in-out infinite">
                <Brain size={16} color="#3b82f6" />
              </Box>
              <Text fontSize="sm" fontWeight="600" color="blue.600" _dark={{ color: "blue.300" }}>
                Inteligência Artificial • Dados • Automação
              </Text>
              <Box animation="pulse 2s ease-in-out infinite 0.5s">
                <Zap size={16} color="#3b82f6" />
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
                bgGradient="linear-gradient(135deg, #3b82f6, #1d4ed8, #8b5cf6)"
                bgClip="text"
                animation="pulse 3s ease-in-out infinite"
              >
                dados
              </Text>{" "}
              em{" "}
              <Text
                as="span"
                bgGradient="linear-gradient(135deg, #667eea, #764ba2)"
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
                bg="linear-gradient(135deg, #3b82f6, #1d4ed8)"
                color="white"
                border="none"
                boxShadow="0 10px 40px rgba(59, 130, 246, 0.3)"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 50px rgba(59, 130, 246, 0.4)",
                  bg: "linear-gradient(135deg, #2563eb, #1e40af)"
                }}
                _active={{
                  transform: "translateY(0px)",
                }}
                transition="all 0.3s ease"
              >
                Agende uma demonstração
                <ArrowRight size={20} style={{ marginLeft: '12px' }} />
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
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(20px)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                color="fg"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "rgba(255, 255, 255, 0.2)",
                  borderColor: "rgba(59, 130, 246, 0.3)"
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

          {/* Enhanced Supporting Text */}
          <Box
            mt={6}
            px={6}
            py={3}
            rounded="xl"
            bg="rgba(255, 255, 255, 0.05)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.1)"
          >
            <Text fontSize="lg" color="fg.muted" fontWeight="500">
              ✨ Consultoria gratuita • Resultados garantidos • Suporte 24/7
            </Text>
          </Box>
        </VStack>

        {/* Enhanced Stats */}
        <Box mt={{ base: 16, md: 20 }}>
          <HStack
            justify="center"
            gap={{ base: 8, md: 16 }}
            flexWrap="wrap"
          >
            {[
              { value: "100%", label: "Sob Medida", icon: "🎯" },
              { value: "5x", label: "Mais Rápido", icon: "⚡" },
              { value: "24/7", label: "Suporte", icon: "🤖" },
              { value: "ROI", label: "Garantido", icon: "📈" },
            ].map((stat, index) => (
              <Box
                key={stat.label}
                p={6}
                rounded="2xl"
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(20px)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                boxShadow="0 8px 32px rgba(59, 130, 246, 0.1)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 50px rgba(59, 130, 246, 0.2)"
                }}
                animation={`float ${4 + index}s ease-in-out infinite`}
              >
                <VStack gap={3}>
                  <Text fontSize="2xl">{stat.icon}</Text>
                  <Text
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="900"
                    bgGradient="linear-gradient(135deg, #3b82f6, #8b5cf6)"
                    bgClip="text"
                    lineHeight="none"
                  >
                    {stat.value}
                  </Text>
                  <Text fontSize="sm" color="fg.muted" fontWeight="600" textAlign="center">
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
