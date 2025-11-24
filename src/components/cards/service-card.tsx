import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Box
      p={{ base: 6, md: 8 }}
      bg={{ base: "{colors.whiteAlpha.50}", _dark: "{colors.whiteAlpha.50}" }}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={{ base: "{colors.whiteAlpha.200}", _dark: "{colors.whiteAlpha.200}" }}
      rounded="xl"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: "translateY(-6px)",
        borderColor: "{colors.blue.500/30}",
        bg: { base: "{colors.whiteAlpha.100}", _dark: "{colors.whiteAlpha.100}" },
      }}
      h="full"
    >
      <VStack align="start" gap={4}>
        <Flex
          align="center"
          justify="center"
          w={12}
          h={12}
          bg="{colors.blue.500/10}"
          rounded="lg"
          color="blue.solid"
          flexShrink={0}
        >
          {icon}
        </Flex>

        <VStack align="start" gap={2}>
          <Heading as="h3" size="md" color="fg">
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
