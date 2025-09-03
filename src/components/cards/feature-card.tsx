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
      rounded="2xl"
      bg={highlighted 
        ? "{colors.blue.500/10}" 
        : "{colors.whiteAlpha.100}"
      }
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor={highlighted 
        ? "{colors.blue.500/30}" 
        : "{colors.whiteAlpha.200}"
      }
      boxShadow={highlighted 
        ? "0 8px 32px {colors.blue.500/20}" 
        : "0 8px 32px {colors.blackAlpha.200}"
      }
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: "translateY(-8px) scale(1.02)",
        boxShadow: highlighted 
          ? "0 20px 60px {colors.blue.500/30}" 
          : "0 20px 60px {colors.blue.500/15}",
        borderColor: "{colors.blue.500/40}",
        bg: highlighted 
          ? "{colors.blue.500/15}" 
          : "{colors.whiteAlpha.200}"
      }}
      h="full"
      position="relative"
      overflow="hidden"
    >
      {/* Gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="2px"
        bgGradient="linear-gradient(90deg, transparent, {colors.blue.500}, transparent)"
        opacity={highlighted ? 1 : 0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
      />
      
      <VStack align="flex-start" gap={5}>
        <Box
          p={4}
          rounded="xl"
          bg={highlighted 
            ? "{colors.gradient.blue}" 
            : "{colors.blue.500/10}"
          }
          color={highlighted ? "white" : "blue.solid"}
          boxShadow={highlighted 
            ? "0 8px 25px {colors.blue.500/30}" 
            : "0 4px 15px {colors.blue.500/20}"
          }
          transition="all 0.3s ease"
          _groupHover={{
            transform: "scale(1.1) rotate(5deg)",
            boxShadow: "0 12px 35px {colors.blue.500/40}"
          }}
        >
          {icon}
        </Box>
        
        <VStack align="flex-start" gap={3}>
          <Heading 
            as="h3" 
            size="lg" 
            fontWeight="300" 
            color="fg"
            bgGradient={highlighted 
              ? "{colors.gradient.blue}" 
              : undefined
            }
            bgClip={highlighted ? "text" : undefined}
          >
            {title}
          </Heading>
          <Text 
            color="fg.muted" 
            fontSize="md" 
            lineHeight="tall"
            fontWeight="400"
          >
            {description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
