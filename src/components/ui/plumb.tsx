import { Box, Text } from "@chakra-ui/react";

export function Plumb() {
  return (
    <Box
      h="1px"
      bg="blackAlpha.100"
      mx={{ base: 6, md: "60px" }}
      position="relative"
    >
      <Text
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        fontSize="8px"
        color="gold.500"
        opacity={0.5}
        bg="off"
        px={2}
      >
        ▼
      </Text>
    </Box>
  );
}
