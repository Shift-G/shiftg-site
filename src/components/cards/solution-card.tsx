"use client";

import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Badge,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Check } from "lucide-react";

interface SolutionCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge?: string;
}

export function SolutionCard({
  title,
  subtitle,
  description,
  features,
  badge,
}: SolutionCardProps) {
  return (
    <Box
      p={{ base: 6, md: 8 }}
      rounded="xl"
      borderWidth="1px"
      borderColor="border"
      bg="surface"
      transition="all 0.2s"
      _hover={{
        borderColor: "blue.200",
        _dark: { borderColor: "blue.700" },
      }}
      h="full"
      display="flex"
      flexDirection="column"
    >
      <VStack align="flex-start" gap={4} flex={1}>
        {badge && (
          <Badge colorPalette="blue" variant="subtle" fontSize="xs">
            {badge}
          </Badge>
        )}
        
        <VStack align="flex-start" gap={2}>
          <Heading as="h3" size="lg" fontWeight="700" color="fg">
            {title}
          </Heading>
          <Text fontWeight="500" color="blue.600" _dark={{ color: "blue.400" }}>
            {subtitle}
          </Text>
          <Text color="fg.muted" lineHeight="tall" mt={2}>
            {description}
          </Text>
        </VStack>

        <List.Root gap={3} mt={4}>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <HStack align="flex-start" gap={3}>
                <Box
                  mt={0.5}
                  color="blue.500"
                  flexShrink={0}
                >
                  <Check size={18} />
                </Box>
                <Text fontSize="sm" color="fg.muted">
                  {feature}
                </Text>
              </HStack>
            </ListItem>
          ))}
        </List.Root>
      </VStack>
    </Box>
  );
}
