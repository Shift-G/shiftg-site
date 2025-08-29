"use client";

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  py?: { base?: number | string; md?: number | string };
  bg?: string;
  id?: string;
  _dark?: Record<string, any>;
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
}: SectionProps) {
  return (
    <Box as="section" py={py} bg={bg} id={id} _dark={_dark}>
      <Container maxW="7xl">
        {(title || subtitle) && (
          <VStack
            gap={{ base: 3, md: 4 }}
            mb={{ base: 8, md: 12 }}
            textAlign={centered ? "center" : "left"}
            alignItems={centered ? "center" : "flex-start"}
            maxW={centered ? "3xl" : "full"}
            mx={centered ? "auto" : 0}
          >
            {title && (
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                fontWeight="700"
                color="fg"
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="fg.muted"
                lineHeight="tall"
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
