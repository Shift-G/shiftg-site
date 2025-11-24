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
            minH="100vh"
            bg="blue.600"
            position="relative"
            overflow="hidden"
            display="flex"
            alignItems="center"
        >
            {/* Background Pattern - Subtle Pulse */}
            <motion.div
                animate={{ opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <Container maxW="7xl" position="relative" zIndex={1} py={{ base: 20, md: 0 }}>
                <Flex direction={{ base: "column", lg: "row" }} align="center" justify="space-between" gap={16}>
                    {/* Text Content */}
                    <VStack align={{ base: "center", lg: "start" }} textAlign={{ base: "center", lg: "left" }} maxW="lg" gap={6}>
                        <Heading
                            as="h2"
                            size={{ base: "4xl", md: "5xl" }}
                            fontWeight="bold"
                            color="white"
                            letterSpacing="-0.02em"
                            lineHeight="1.1"
                        >
                            Do caos operacional à <br />
                            <Text as="span" color="blue.200">
                                clareza estratégica.
                            </Text>
                        </Heading>
                        <Text fontSize="xl" color="blue.100" lineHeight="tall">
                            Transformamos dados dispersos, processos manuais e complexidade em um sistema inteligente que impulsiona
                            decisões.
                        </Text>
                    </VStack>

                    {/* Animation Container */}
                    <Box
                        ref={containerRef}
                        w={{ base: "100%", md: "700px" }}
                        h="400px"
                        position="relative"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {/* Left Side: Chaos Inputs */}
                        <Flex direction="column" position="absolute" left="0" gap={4} justify="center" h="100%">
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
                            px={8}
                            py={6}
                            bg="whiteAlpha.100"
                            rounded="2xl"
                            border="2px solid"
                            borderColor="whiteAlpha.300"
                            backdropFilter="blur(10px)"
                        >
                            <Heading as="h3" size="xl" color="white" fontWeight="bold" letterSpacing="tight">
                                Nossa Solução
                            </Heading>
                            <Text color="blue.100" fontSize="sm" maxW="200px">
                                Inteligência aplicada a processos críticos
                            </Text>
                        </VStack>

                        {/* Right Side: Order Outputs */}
                        <Flex direction="column" position="absolute" right="0" gap={8} justify="center" h="100%">
                            <Box ref={output1Ref} w={3} h={3} rounded="full" bg="white" opacity={0.8} />
                            <Box ref={output2Ref} w={3} h={3} rounded="full" bg="white" opacity={0.8} />
                        </Flex>

                        {/* Animated Beams - Chaos to Center */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={icon1Ref}
                            toRef={centerRef}
                            pathColor="rgba(255,255,255,0.2)"
                            gradientStartColor="#ffffff"
                            gradientStopColor="#60a5fa"
                            delay={0}
                            duration={3}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={icon2Ref}
                            toRef={centerRef}
                            pathColor="rgba(255,255,255,0.2)"
                            gradientStartColor="#ffffff"
                            gradientStopColor="#60a5fa"
                            delay={0.4}
                            duration={3}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={icon3Ref}
                            toRef={centerRef}
                            pathColor="rgba(255,255,255,0.2)"
                            gradientStartColor="#ffffff"
                            gradientStopColor="#60a5fa"
                            delay={0.8}
                            duration={3}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={icon4Ref}
                            toRef={centerRef}
                            pathColor="rgba(255,255,255,0.2)"
                            gradientStartColor="#ffffff"
                            gradientStopColor="#60a5fa"
                            delay={1.2}
                            duration={3}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={icon5Ref}
                            toRef={centerRef}
                            pathColor="rgba(255,255,255,0.2)"
                            gradientStartColor="#ffffff"
                            gradientStopColor="#60a5fa"
                            delay={1.6}
                            duration={3}
                        />

                        {/* Animated Beams - Center to Outputs */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={centerRef}
                            toRef={output1Ref}
                            pathColor="rgba(255,255,255,0.3)"
                            gradientStartColor="#60a5fa"
                            gradientStopColor="#ffffff"
                            delay={0}
                            duration={2.5}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={centerRef}
                            toRef={output2Ref}
                            pathColor="rgba(255,255,255,0.3)"
                            gradientStartColor="#60a5fa"
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
