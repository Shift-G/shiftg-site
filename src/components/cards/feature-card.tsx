"use client";

import { Box, VStack, Text, Heading } from "@chakra-ui/react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
}

export function FeatureCard({ icon, title, description, highlighted = false }: FeatureCardProps) {
  return (
    <Box
      p={{ base: 6, md: 8 }}
      rounded="xl"
      borderWidth="1px"
      borderColor={highlighted ? "blue.emphasized" : "border"}
      bg={highlighted ? "blue.subtle" : "bg.subtle"}
      transition="all 0.2s"
      _hover={{
        borderColor: "blue.emphasized",
        transform: "translateY(-2px)",
      }}
      h="full"
    >
      <VStack align="flex-start" gap={4}>
        <Box
          p={3}
          rounded="lg"
          bg={highlighted ? "blue.muted" : "bg.muted"}
          color={highlighted ? "blue.fg" : "fg.muted"}
        >
          {icon}
        </Box>
        
        <VStack align="flex-start" gap={2}>
          <Heading as="h3" size="md" fontWeight="600" color="fg">
            {title}
          </Heading>
          <Text color="fg.muted" fontSize="sm" lineHeight="tall">
            {description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
