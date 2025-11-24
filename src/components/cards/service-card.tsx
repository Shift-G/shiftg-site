import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "default" | "primary" | "secondary";
}

export function ServiceCard({ icon, title, description, variant = "default" }: ServiceCardProps) {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  return (
    <Box
      p={{ base: 6, md: 8 }}
      bg={isPrimary ? "blue.600" : "white"}
      border="1px solid"
      borderColor={isPrimary ? "blue.600" : "gray.100"}
      rounded="2xl"
      h="full"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      shadow={isPrimary ? "xl" : "sm"}
      _hover={{
        borderColor: isPrimary ? "blue.500" : "blue.200",
        transform: "translateY(-4px)",
        shadow: isPrimary ? "2xl" : "md",
      }}
    >
      <VStack align="start" gap={6}>
        <Flex
          align="center"
          justify="center"
          w={16}
          h={16}
          bg={isPrimary ? "whiteAlpha.200" : "blue.50"}
          rounded="xl"
          color={isPrimary ? "white" : "blue.600"}
          flexShrink={0}
          border="1px solid"
          borderColor={isPrimary ? "whiteAlpha.300" : "blue.100"}
        >
          {icon}
        </Flex>

        <VStack align="start" gap={3}>
          <Heading
            as="h3"
            size={isPrimary ? { base: "3xl", lg: "7xl" } : { base: "xl", lg: "2xl" }}
            color={isPrimary ? "white" : "gray.900"}
            fontWeight="bold"
            letterSpacing="-0.01em"
            lineHeight="shorter"
          >
            {title}
          </Heading>
          <Text
            color={isPrimary ? "blue.100" : "gray.600"}
            fontSize={isPrimary ? "lg" : "md"}
            lineHeight="1.6"
          >
            {description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
