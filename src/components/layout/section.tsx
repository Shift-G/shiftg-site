"use client";

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

// Using global CSS animations defined in theme/global-css.ts

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  py?: { base?: number | string; md?: number | string };
  bg?: string;
  id?: string;
  _dark?: Record<string, any>;
  variant?: 'default' | 'gradient' | 'glass' | 'geometric';
}

export function Section({
  children,
  title,
  subtitle,
  centered = false,
  py = { base: 12, md: 16 },
  bg,
  id,
  _dark,
  variant = 'default',
}: SectionProps) {
  const getBackgroundStyles = () => {
    switch (variant) {
      case 'gradient':
        return {
          background: "linear-gradient(135deg, {colors.blue.500/5}, {colors.blue.500/5}, transparent)",
          _dark: { 
            background: "linear-gradient(135deg, {colors.blue.500/10}, {colors.blue.500/10}, transparent)" 
          }
        };
      case 'glass':
        return {
          bg: "{colors.whiteAlpha.50}",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid {colors.whiteAlpha.200}",
          borderBottom: "1px solid {colors.whiteAlpha.200}"
        };
      case 'geometric':
        return {
          position: "relative",
          bg: bg,
          _dark: _dark,
          overflow: "hidden"
        };
      default:
        return { bg, _dark };
    }
  };

  return (
    <Box as="section" py={py} id={id} {...getBackgroundStyles()}>
      {/* Geometric elements for geometric variant */}
      {variant === 'geometric' && (
        <>
          <Box
            position="absolute"
            top="10%"
            right="5%"
            w="100px"
            h="100px"
            borderRadius="full"
            bg="{colors.blue.500/8}"
            backdropFilter="blur(10px)"
            animation="float 8s ease-in-out infinite"
            zIndex={0}
          />
          <Box
            position="absolute"
            bottom="15%"
            left="3%"
            w="60px"
            h="60px"
            borderRadius="lg"
            bg="{colors.blue.500/8}"
            backdropFilter="blur(10px)"
            animation="float 6s ease-in-out infinite reverse"
            zIndex={0}
          />
        </>
      )}
      
      <Container maxW="7xl" position="relative" zIndex={1}>
        {(title || subtitle) && (
          <VStack
            gap={{ base: 4, md: 0 }}
            mb={{ base: 4, md: 12 }}
            textAlign={centered ? "center" : "left"}
            alignItems={centered ? "center" : "flex-start"}
            maxW={centered ? "4xl" : "full"}
            mx={centered ? "auto" : 0}
          >
            {title && (
              <Heading
                as="h2"
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="400"
                color="fg"
                lineHeight="shorter"
                letterSpacing="tight"
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="fg.muted"
                lineHeight="tall"
                fontWeight="400"
                maxW="3xl"
              >
                {subtitle}
              </Text>
            )}
          </VStack>
        )}
        {children}
      </Container>
    </Box>
  );
}
