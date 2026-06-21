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
      bg={highlighted
        ? "blue.500/5"
        : "transparent"
      }
      border="1px solid"
      borderColor={highlighted
        ? "blue.500"
        : "border"
      }
      transition="all 0.3s ease"
      _hover={{
        borderColor: "blue.500",
        bg: "blue.500/5",
        transform: "translateY(-2px)"
      }}
      h="full"
      position="relative"
      overflow="hidden"
    >
      <VStack align="flex-start" gap={5}>
        <Box
          p={3}
          rounded="lg"
          bg={highlighted
            ? "blue.500"
            : "bg.subtle"
          }
          color={highlighted ? "white" : "blue.500"}
          border="1px solid"
          borderColor={highlighted ? "transparent" : "border"}
        >
          {icon}
        </Box>

        <VStack align="flex-start" gap={3}>
          <Heading
            as="h3"
            size="lg"
            fontWeight="400"
            color="fg"
          >
            {title}
          </Heading>
          <Text
            color="fg.muted"
            fontSize="md"
            lineHeight="tall"
            fontWeight="300"
          >
            {description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
