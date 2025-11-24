"use client";

import { Box, Container, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

const metrics = [
    {
        value: "+15",
        label: "Anos de Experiência",
        description: "Liderando transformações tecnológicas em grandes empresas.",
    },
    {
        value: "R$ 50M+",
        label: "Impacto Gerado",
        description: "Em redução de custos e aumento de receita para clientes.",
    },
    {
        value: "100%",
        label: "Foco em Resultado",
        description: "Metodologia proprietária orientada a ROI e eficiência.",
    },
];

export function MetricsSection() {
    return (
        <Box as="section" py={{ base: 16, md: 24 }} bg="white" borderTop="1px solid" borderColor="gray.100">
            <Container maxW="7xl">
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={{ base: 12, md: 8 }}>
                    {metrics.map((metric, index) => (
                        <GridItem key={index}>
                            <VStack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }} gap={2}>
                                <Text
                                    fontSize={{ base: "5xl", md: "6xl" }}
                                    fontWeight="800"
                                    color="blue.600"
                                    lineHeight="1"
                                    letterSpacing="-0.03em"
                                >
                                    {metric.value}
                                </Text>
                                <Heading as="h3" size="lg" fontWeight="bold" color="gray.900">
                                    {metric.label}
                                </Heading>
                                <Text color="gray.600" fontSize="lg">
                                    {metric.description}
                                </Text>
                            </VStack>
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
