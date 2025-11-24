import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  AspectRatio,
} from "@chakra-ui/react";

interface Leader {
  name: string;
  role: string;
  description: string;
}

export function AboutSection() {
  return (
    <Box as="section" py={{ base: 12, md: 16, lg: 20 }}>
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 8, md: 12 }}
          alignItems="center"
        >
          {/* Left column - Text content */}
          <VStack align="start" gap={{ base: 8, md: 10 }}>
            {/* About section */}
            <VStack align="start" gap={4}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="blue.solid"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Sobre a Shift+G
              </Text>
              <Heading
                as="h2"
                size={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="fg"
                lineHeight="tight"
              >
                Consultoria para empresas que precisam ir além.
              </Heading>
              <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                A Shift+G nasceu para elevar a maturidade tecnológica de empresas e
                instituições que operam com complexidade. Unimos estratégia, arquitetura
                e IA para criar eficiência profunda e decisões mais inteligentes.
              </Text>
            </VStack>
          </VStack>

          {/* Right column - Image placeholder */}
          <Box
            position="relative"
            order={{ base: -1, lg: 0 }}
          >
            <AspectRatio ratio={4 / 3} w="full">
              <Box
                bg="{colors.whiteAlpha.50}"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="{colors.whiteAlpha.200}"
                rounded="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {/* Placeholder for image - replace src with actual image */}
                <Text color="fg.muted" fontSize="sm">
                  Imagem da equipe ou escritório
                </Text>
                {/*
                Uncomment and use when you have an image:
                <Image
                  src="/images/team.jpg"
                  alt="Equipe Shift+G"
                  fill
                  style={{ objectFit: "cover", borderRadius: "0.75rem" }}
                />
                */}
              </Box>
            </AspectRatio>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
