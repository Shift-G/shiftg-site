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
      p={{ base: 8, md: 10 }}
      rounded="3xl"
      bg="{colors.whiteAlpha.200}"
      backdropFilter="blur(25px)"
      border="1px solid {colors.whiteAlpha.300}"
      boxShadow="0 8px 32px {colors.blackAlpha.300}"
      transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: "translateY(-12px)",
        boxShadow: "0 25px 70px {colors.blue.500/25}",
        borderColor: "{colors.blue.500/40}",
        bg: "{colors.whiteAlpha.300}"
      }}
      h="full"
      display="flex"
      flexDirection="column"
      position="relative"
      overflow="hidden"
      role="group"
    >
      {/* Animated background gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="3px"
        bgGradient="linear-gradient(90deg, transparent, {colors.blue.500}, {colors.blue.500}, transparent)"
        opacity={0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
      />

      <VStack align="flex-start" gap={6} flex={1}>
        {badge && (
          <Box
            px={4}
            py={2}
            rounded="full"
            bg="{colors.gradient.blue}"
            color="white"
            fontSize="xs"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="wider"
            boxShadow="0 4px 15px {colors.blue.500/30}"
          >
            {badge}
          </Box>
        )}
        
        <VStack align="flex-start" gap={4}>
          <Heading 
            as="h3" 
            size="xl" 
            fontWeight="800" 
            color="fg"
            lineHeight="shorter"
          >
            {title}
          </Heading>
          <Text 
            fontWeight="600" 
            color="blue.solid" 
            fontSize="lg"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            {subtitle}
          </Text>
          <Text 
            color="fg.muted" 
            lineHeight="tall" 
            fontSize="md"
            fontWeight="400"
          >
            {description}
          </Text>
        </VStack>

        <List.Root gap={4} mt={6} style={{ listStyleType: "none" }}>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <HStack align="flex-start" gap={4}>
                <Box
                  mt={0.5}
                  p={1}
                  rounded="md"
                  bg="{colors.blue.500/10}"
                  color="blue.solid"
                  flexShrink={0}
                  transition="all 0.3s ease"
                  _groupHover={{
                    bg: "{colors.blue.500/20}",
                    transform: "scale(1.1)"
                  }}
                >
                  <Check size={16} />
                </Box>
                <Text 
                  fontSize="md" 
                  color="fg.muted"
                  fontWeight="500"
                  lineHeight="tall"
                >
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
