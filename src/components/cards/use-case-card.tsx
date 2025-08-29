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
      p={{ base: 7, md: 8 }}
      rounded="2xl"
      bg="rgba(255, 255, 255, 0.06)"
      backdropFilter="blur(20px)"
      border="1px solid rgba(255, 255, 255, 0.12)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      cursor="pointer"
      _hover={{
        transform: "translateY(-6px) scale(1.02)",
        boxShadow: "0 20px 60px rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 0.3)",
        bg: "rgba(59, 130, 246, 0.08)"
      }}
      h="full"
      display="flex"
      flexDirection="column"
      position="relative"
      overflow="hidden"
      role="group"
    >
      {/* Hover gradient effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="2px"
        bgGradient="linear-gradient(90deg, transparent, #3b82f6, transparent)"
        opacity={0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
      />

      <VStack align="flex-start" gap={5} flex={1}>
        <HStack justify="space-between" w="full">
          <Box
            px={3}
            py={1}
            rounded="full"
            bg="rgba(59, 130, 246, 0.15)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(59, 130, 246, 0.2)"
          >
            <Text 
              fontSize="xs" 
              fontWeight="700" 
              color="#3b82f6"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {category}
            </Text>
          </Box>
          {metrics && (
            <Box
              px={3}
              py={1}
              rounded="full"
              bg="rgba(34, 197, 94, 0.15)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(34, 197, 94, 0.2)"
            >
              <Text 
                fontSize="xs" 
                fontWeight="700" 
                color="#22c55e"
              >
                {metrics}
              </Text>
            </Box>
          )}
        </HStack>

        <Box
          p={4}
          rounded="xl"
          bg="linear-gradient(135deg, #3b82f6, #1d4ed8)"
          color="white"
          boxShadow="0 8px 25px rgba(59, 130, 246, 0.3)"
          transition="all 0.3s ease"
          _groupHover={{
            transform: "scale(1.1) rotate(-5deg)",
            boxShadow: "0 12px 35px rgba(59, 130, 246, 0.4)"
          }}
        >
          {icon}
        </Box>
        
        <VStack align="flex-start" gap={3} flex={1}>
          <Heading 
            as="h4" 
            size="lg" 
            fontWeight="700" 
            color="fg"
            lineHeight="shorter"
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

        <HStack 
          gap={3} 
          color="#3b82f6"
          transition="all 0.3s ease"
          _groupHover={{
            transform: "translateX(5px)",
            color: "#1d4ed8"
          }}
        >
          <Text fontSize="sm" fontWeight="600">
            Saiba mais
          </Text>
          <Box
            transition="transform 0.3s ease"
            _groupHover={{ transform: "translateX(3px)" }}
          >
            <ArrowRight size={16} />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}
