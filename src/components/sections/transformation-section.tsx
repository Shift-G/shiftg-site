"use client";

import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { motion } from "motion/react";
import {
  Database,
  FileSpreadsheet,
  Layers,
  Server,
  Workflow,
} from "lucide-react";
import { AnimatedBeam } from "@/components/animated-beam";

// Circle component for holding icons
const Circle = forwardRef<HTMLDivElement, { children?: React.ReactNode }>(({ children }, ref) => {
  return (
    <Box
      ref={ref}
      position="relative"
      zIndex={10}
      w={12}
      h={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
      rounded="full"
      border="2px solid"
      borderColor="whiteAlpha.300"
      bg="whiteAlpha.200"
      color="white"
    >
      {children}
    </Box>
  );
});

Circle.displayName = "Circle";

export function TransformationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Chaos inputs
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const icon3Ref = useRef<HTMLDivElement>(null);
  const icon4Ref = useRef<HTMLDivElement>(null);
  const icon5Ref = useRef<HTMLDivElement>(null);

  // Order outputs
  const output1Ref = useRef<HTMLDivElement>(null);
  const output2Ref = useRef<HTMLDivElement>(null);

  return (
    <Box
      as="section"
      w="98dvw"
      mx="1dvw"
      rounded="3xl"
      minH="80vh"
      position="relative"
      display="flex"
      alignItems="center"
      my={{ base: 16, md: 4 }}
      bg="blue.500"
      overflow="hidden"
    >
      {/* Background Pattern - Subtle Pulse */}
      <motion.div
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <Container maxW="7xl" position="relative" zIndex={1} py={{ base: 20, md: 0 }}>
        <Flex direction={{ base: "column", lg: "row" }} align="center" justify="space-between" gap={{ base: 12, lg: 20 }}>
          {/* Text Content */}
          <VStack align={{ base: "center", lg: "start" }} textAlign={{ base: "center", lg: "left" }} maxW="lg" gap={6}>
            <Heading
              as="h2"
              size={{ base: "4xl", md: "5xl", lg: "7xl" }}
              fontWeight="bold"
              color="white"
              letterSpacing="-0.03em"
              lineHeight="1.05"
            >
              Do caos operacional à <br />
              <Text as="span" color="blue.200">
                clareza estratégica.
              </Text>
            </Heading>
            <Text fontSize="xl" color="blue.100" lineHeight="1.6" fontWeight="medium">
              Transformamos dados dispersos, processos manuais e complexidade em um sistema inteligente que impulsiona
              decisões.
            </Text>
          </VStack>

          {/* Animation Container */}
          <Box
            ref={containerRef}
            w={{ base: "100%", md: "700px" }}
            h="450px"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Left Side: Chaos Inputs */}
            <Flex direction="column" position="absolute" left={{ base: 0, md: 4 }} gap={6} justify="center" h="100%">
              <Circle ref={icon1Ref}>
                <Database size={20} />
              </Circle>
              <Circle ref={icon2Ref}>
                <FileSpreadsheet size={20} />
              </Circle>
              <Circle ref={icon3Ref}>
                <Server size={20} />
              </Circle>
              <Circle ref={icon4Ref}>
                <Workflow size={20} />
              </Circle>
              <Circle ref={icon5Ref}>
                <Layers size={20} />
              </Circle>
            </Flex>

            {/* Center Text (Nossa Solução) */}
            <VStack
              ref={centerRef}
              position="relative"
              zIndex={10}
              gap={2}
              textAlign="center"
              px={0}
              py={4}
              bg="whiteAlpha.100"
              rounded="2xl"
              border="1px solid"
              borderColor="whiteAlpha.300"
              backdropFilter="blur(12px)"
              shadow="xl"
            >
              <Heading as="h3" size="xl" color="white" fontWeight="bold" letterSpacing="tight">
                Nossa Solução
              </Heading>
              <Text color="blue.100" fontSize="md" maxW="220px" lineHeight="short">
                Inteligência aplicada a processos críticos
              </Text>
            </VStack>

            {/* Right Side: Order Outputs */}
            <Flex direction="column" position="absolute" right={{ base: 0, md: 4 }} gap={12} justify="center" h="100%">
              <Box
                ref={output1Ref}
                px={5}
                py={3}
                bg="white"
                color="blue.600"
                rounded="xl"
                fontWeight="bold"
                shadow="lg"
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Text>Eficiência</Text>
              </Box>
              <Box
                ref={output2Ref}
                px={5}
                py={3}
                bg="white"
                color="blue.600"
                rounded="xl"
                fontWeight="bold"
                shadow="lg"
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Text>Escala</Text>
              </Box>
            </Flex>

            {/* Animated Beams - Chaos to Center */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={icon1Ref}
              toRef={centerRef}
              pathColor="rgba(255,255,255,0.1)"
              gradientStartColor="#ffffff"
              gradientStopColor="#93c5fd"
              delay={0}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={icon2Ref}
              toRef={centerRef}
              pathColor="rgba(255,255,255,0.1)"
              gradientStartColor="#ffffff"
              gradientStopColor="#93c5fd"
              delay={0.4}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={icon3Ref}
              toRef={centerRef}
              pathColor="rgba(255,255,255,0.1)"
              gradientStartColor="#ffffff"
              gradientStopColor="#93c5fd"
              delay={0.8}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={icon4Ref}
              toRef={centerRef}
              pathColor="rgba(255,255,255,0.1)"
              gradientStartColor="#ffffff"
              gradientStopColor="#93c5fd"
              delay={1.2}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={icon5Ref}
              toRef={centerRef}
              pathColor="rgba(255,255,255,0.1)"
              gradientStartColor="#ffffff"
              gradientStopColor="#93c5fd"
              delay={1.6}
              duration={3}
            />

            {/* Animated Beams - Center to Outputs */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={output1Ref}
              pathColor="rgba(255,255,255,0.2)"
              gradientStartColor="#93c5fd"
              gradientStopColor="#ffffff"
              delay={0}
              duration={2.5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={output2Ref}
              pathColor="rgba(255,255,255,0.2)"
              gradientStartColor="#93c5fd"
              gradientStopColor="#ffffff"
              delay={0.5}
              duration={2.5}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
