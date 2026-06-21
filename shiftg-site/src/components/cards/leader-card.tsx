import { Box, Heading, Text, VStack } from "@chakra-ui/react";

interface LeaderCardProps {
  name: string;
  role: string;
  description: string;
}

export function LeaderCard({ name, role, description }: LeaderCardProps) {
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
        borderColor: "{colors.blue.500/30}",
        bg: { base: "{colors.whiteAlpha.100}", _dark: "{colors.whiteAlpha.100}" },
      }}
      h="full"
    >
      <VStack align="start" gap={4}>
        <VStack align="start" gap={1}>
          <Heading as="h3" size="md" color="fg">
            {name}
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color="blue.solid"
          >
            {role}
          </Text>
        </VStack>

        <Text color="fg.muted" fontSize="sm" lineHeight="tall">
          {description}
        </Text>
      </VStack>
    </Box>
  );
}
