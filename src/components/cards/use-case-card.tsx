"use client";

import {
  Box,
  VStack,
  Text,
  Heading,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  metrics?: string;
}

export function UseCaseCard({
  icon,
  title,
  description,
  category,
  metrics,
}: UseCaseCardProps) {
  return (
    <Box
      p={{ base: 6, md: 7 }}
      rounded="xl"
      borderWidth="1px"
      borderColor="border"
      bg="bg.subtle"
      transition="all 0.2s"
      cursor="pointer"
      _hover={{
        borderColor: "blue.emphasized",
        bg: "blue.subtle",
      }}
      h="full"
      display="flex"
      flexDirection="column"
    >
      <VStack align="flex-start" gap={4} flex={1}>
        <HStack justify="space-between" w="full">
          <Badge colorPalette="gray" variant="subtle" fontSize="xs">
            {category}
          </Badge>
          {metrics && (
            <Text fontSize="xs" fontWeight="600" color="green.fg">
              {metrics}
            </Text>
          )}
        </HStack>

        <Box
          p={2}
          rounded="lg"
          bg="blue.subtle"
          color="blue.fg"
        >
          {icon}
        </Box>
        
        <VStack align="flex-start" gap={2} flex={1}>
          <Heading as="h4" size="md" fontWeight="600" color="fg">
            {title}
          </Heading>
          <Text color="fg.muted" fontSize="sm" lineHeight="tall">
            {description}
          </Text>
        </VStack>

        <HStack gap={2} color="blue.fg">
          <Text fontSize="sm" fontWeight="600">
            Saiba mais
          </Text>
          <ArrowRight size={16} />
        </HStack>
      </VStack>
    </Box>
  );
}
