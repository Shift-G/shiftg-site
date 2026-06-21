import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  icon?: ReactNode;
}

export function ProcessStep({ number, title, icon }: ProcessStepProps) {
  return (
    <Box
      p={{ base: 5, md: 6 }}
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
    >
      <VStack align="start" gap={3}>
        <Flex align="center" gap={3}>
          <Flex
            align="center"
            justify="center"
            w={8}
            h={8}
            bg="{colors.blue.500/10}"
            rounded="full"
            flexShrink={0}
          >
            {icon ? (
              <Box color="blue.solid">{icon}</Box>
            ) : (
              <Text fontSize="sm" fontWeight="semibold" color="blue.solid">
                {number}
              </Text>
            )}
          </Flex>
          <Heading as="h4" size="sm" color="fg">
            {title}
          </Heading>
        </Flex>
      </VStack>
    </Box>
  );
}
