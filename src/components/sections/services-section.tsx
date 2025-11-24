"use client";

import { Box, Container, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import { ServiceCard } from "@/components/cards/service-card";
import { BarChart3, Brain, LineChart, Network, ShieldCheck, Zap } from "lucide-react";

const services = [
    {
        icon: <Brain size={24} />,
        title: "Consultoria Estratégica em IA",
        description:
            "Transformamos o hype da IA em roteiros práticos de implementação que geram ROI real e vantagem competitiva sustentável.",
        colSpan: { base: 1, md: 2, lg: 2 },
        rowSpan: { base: 1, md: 2, lg: 2 },
        variant: "primary",
    },
    {
        icon: <LineChart size={24} />,
        title: "Eficiência Operacional",
        description:
            "Mapeamento e otimização de processos para eliminar gargalos e reduzir custos operacionais.",
        colSpan: { base: 1, md: 1, lg: 1 },
        rowSpan: { base: 1, md: 1, lg: 1 },
        variant: "default",
    },
    {
        icon: <Network size={24} />,
        title: "Arquitetura de Soluções",
        description:
            "Desenho de sistemas escaláveis e resilientes preparados para o futuro do seu negócio.",
        colSpan: { base: 1, md: 1, lg: 1 },
        rowSpan: { base: 1, md: 1, lg: 1 },
        variant: "default",
    },
    {
        icon: <Zap size={24} />,
        title: "Automação Inteligente",
        description:
            "Substituição de tarefas manuais repetitivas por fluxos automatizados de alta performance.",
        colSpan: { base: 1, md: 1, lg: 1 },
        rowSpan: { base: 1, md: 1, lg: 1 },
        variant: "default",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Governança de Dados",
        description:
            "Estruturação de dados para garantir qualidade, segurança e conformidade em toda a organização.",
        colSpan: { base: 1, md: 1, lg: 1 },
        rowSpan: { base: 1, md: 1, lg: 1 },
        variant: "default",
    },
    {
        icon: <BarChart3 size={24} />,
        title: "Business Intelligence",
        description:
            "Dashboards e relatórios que transformam dados brutos em insights acionáveis para a liderança.",
        colSpan: { base: 1, md: 2, lg: 2 },
        rowSpan: { base: 1, md: 1, lg: 1 },
        variant: "secondary",
    },
];

export function ServicesSection() {
    return (
        <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50" id="servicos">
            <Container maxW="7xl">
                <VStack gap={{ base: 12, md: 16 }} align="stretch">
                    <VStack gap={4} textAlign="center" maxW="3xl" mx="auto">
                        <Heading
                            as="h2"
                            size={{ base: "3xl", md: "4xl" }}
                            fontWeight="bold"
                            color="gray.900"
                            letterSpacing="-0.02em"
                        >
                            Soluções desenhadas para o <br />
                            <Text as="span" color="blue.600">
                                próximo nível de maturidade.
                            </Text>
                        </Heading>
                        <Text fontSize="xl" color="gray.600">
                            Nossa expertise cobre as lacunas críticas entre estratégia de negócio e execução tecnológica.
                        </Text>
                    </VStack>

                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
                        gap={6}
                        autoRows="minmax(200px, auto)"
                    >
                        {services.map((service, index) => (
                            <GridItem
                                key={index}
                                colSpan={service.colSpan}
                                rowSpan={service.rowSpan}
                            >
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    variant={service.variant as "default" | "primary" | "secondary"}
                                />
                            </GridItem>
                        ))}
                    </Grid>
                </VStack>
            </Container>
        </Box>
    );
}
