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
        ? "rgba(59, 130, 246, 0.1)" 
        : "rgba(255, 255, 255, 0.05)"
      }
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor={highlighted 
        ? "rgba(59, 130, 246, 0.3)" 
        : "rgba(255, 255, 255, 0.1)"
      }
      boxShadow={highlighted 
        ? "0 8px 32px rgba(59, 130, 246, 0.2)" 
        : "0 8px 32px rgba(0, 0, 0, 0.1)"
      }
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: "translateY(-8px) scale(1.02)",
        boxShadow: highlighted 
          ? "0 20px 60px rgba(59, 130, 246, 0.3)" 
          : "0 20px 60px rgba(59, 130, 246, 0.15)",
        borderColor: "rgba(59, 130, 246, 0.4)",
        bg: highlighted 
          ? "rgba(59, 130, 246, 0.15)" 
          : "rgba(255, 255, 255, 0.1)"
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
        bgGradient="linear-gradient(90deg, transparent, #3b82f6, transparent)"
        opacity={highlighted ? 1 : 0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
      />
      
      <VStack align="flex-start" gap={5}>
        <Box
          p={4}
          rounded="xl"
          bg={highlighted 
            ? "linear-gradient(135deg, #3b82f6, #1d4ed8)" 
            : "rgba(59, 130, 246, 0.1)"
          }
          color={highlighted ? "white" : "#3b82f6"}
          boxShadow={highlighted 
            ? "0 8px 25px rgba(59, 130, 246, 0.3)" 
            : "0 4px 15px rgba(59, 130, 246, 0.2)"
          }
          transition="all 0.3s ease"
          _groupHover={{
            transform: "scale(1.1) rotate(5deg)",
            boxShadow: "0 12px 35px rgba(59, 130, 246, 0.4)"
          }}
        >
          {icon}
        </Box>
        
        <VStack align="flex-start" gap={3}>
          <Heading 
            as="h3" 
            size="lg" 
            fontWeight="700" 
            color="fg"
            bgGradient={highlighted 
              ? "linear-gradient(135deg, #3b82f6, #1d4ed8)" 
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
