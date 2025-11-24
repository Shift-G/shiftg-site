import { Metadata } from "next";
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Button,
    SimpleGrid,
    Badge,
    HStack,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, FileText, BarChart3, AlertTriangle, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Diagnóstico Inteligente | Shift+G",
    description: "Clareza estratégica para entender onde a IA gera impacto real — antes de qualquer investimento alto.",
};

function Hero() {
    return (
        <Box
            as="section"
            w={{ base: "full", md: "98dvw" }}
            mx={{ base: 0, md: "1dvw" }}
            rounded="3xl"
            minH={{ base: "auto", md: "80vh" }}
            position="relative"
            display="flex"
            alignItems="center"
            bg={{ base: "white", md: "gray.100" }}
            overflow="hidden"
            py={{ base: 20, md: 0 }}
        >
            {/* Background Pattern */}
            <Box
                position="absolute"
                inset={0}
                zIndex={0}
                opacity={0.5}
                backgroundImage="radial-gradient(circle at 60% 0%, {colors.blue.500} 0%, transparent 50%)"
                backgroundSize="100% 100%"
                hideBelow="sm"
            />

            <Container maxW="7xl" position="relative" zIndex={1}>
                <VStack gap={{ base: 8, md: 10 }} maxW="4xl" mx="auto" align="center" textAlign="center">
                    <Badge
                        colorPalette="blue"
                        size={{ base: "xs", md: "lg" }}
                        px={5}
                        py={2}
                        rounded="full"
                        fontWeight="medium"
                        letterSpacing="wide"
                        textTransform="none"
                        bg="blue.50/20"
                        color="blue.600"
                        border="1px solid"
                        borderColor="blue.600/20"
                        backdropFilter="blur(8px)"
                    >
                        Consultoria Estratégica
                    </Badge>

                    <Heading
                        as="h1"
                        size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                        fontWeight="600"
                        letterSpacing="-0.04em"
                        lineHeight="1.1"
                    >
                        Diagnóstico Inteligente de IA
                    </Heading>

                    <Text
                        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                        color="blue.500"
                        fontWeight="medium"
                        lineHeight="1.4"
                    >
                        Clareza estratégica para entender onde a IA gera impacto real — antes de qualquer investimento alto.
                    </Text>

                    <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        color="fg.muted"
                        maxW="3xl"
                        lineHeight="1.6"
                    >
                        Analisamos sua operação, conversamos com líderes, identificamos oportunidades, mapeamos riscos e entregamos um plano claro de ações viáveis.
                    </Text>

                    <Button
                        asChild
                        size="xl"
                        colorPalette="blue"
                        fontSize="lg"
                        h={14}
                        px={8}
                        _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                        transition="all 0.2s"
                    >
                        <Link href="#contato">
                            Solicitar Diagnóstico
                            <ArrowRight />
                        </Link>
                    </Button>
                </VStack>
            </Container>
        </Box>
    );
}

function IntroSection() {
    return (
        <Box py={{ base: 16, md: 24 }}>
            <Container maxW="7xl">
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 12, md: 20 }} alignItems="center">
                    <VStack align="start" gap={6}>
                        <Heading as="h2" size="3xl" fontWeight="bold" letterSpacing="-0.03em">
                            O que é o Diagnóstico Inteligente
                        </Heading>
                        <Text fontSize="lg" color="fg.muted" lineHeight="tall">
                            O Diagnóstico Inteligente é o primeiro passo para aplicar IA com responsabilidade, método e foco em resultado.
                        </Text>
                        <Text fontSize="lg" color="fg.muted" lineHeight="tall">
                            É uma etapa de baixa barreira, estruturada para revelar onde a IA faz sentido, quanto pode gerar de impacto e como deve ser aplicada.
                        </Text>
                        <Text fontSize="lg" fontWeight="medium" color="blue.600">
                            Não vendemos ferramenta. Vendemos clareza.
                        </Text>
                    </VStack>
                    <Box
                        p={8}
                        bg="gray.50"
                        rounded="2xl"
                        border="1px solid"
                        borderColor="gray.200"
                    >
                        <VStack gap={6} align="start">
                            <HStack gap={4}>
                                <Box p={2} bg="blue.100" color="blue.600" rounded="lg">
                                    <ShieldCheck size={24} />
                                </Box>
                                <Text fontWeight="semibold" fontSize="lg">Segurança para decidir</Text>
                            </HStack>
                            <Text color="fg.muted">A forma mais segura de iniciar, evitando desperdício, hype e decisões caras baseadas em achismos.</Text>

                            <HStack gap={4}>
                                <Box p={2} bg="blue.100" color="blue.600" rounded="lg">
                                    <Target size={24} />
                                </Box>
                                <Text fontWeight="semibold" fontSize="lg">Foco no resultado</Text>
                            </HStack>
                            <Text color="fg.muted">Identificamos onde a IA realmente move o ponteiro do seu negócio.</Text>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

function TimelineSection() {
    const steps = [
        {
            day: "Dia 1–3",
            title: "Entrada e Contexto",
            description: "Reunião inicial + entendimento do cenário atual. Coletamos informações essenciais sobre processos, desafios, metas e maturidade digital.",
            icon: Clock
        },
        {
            day: "Dias 4–10",
            title: "Imersão Operacional",
            description: "Entrevistas, análises de fluxos, avaliação de dados, mapeamento de gargalos e oportunidades. Aqui entendemos como o negócio realmente funciona.",
            icon: FileText
        },
        {
            day: "Dias 10–15",
            title: "Conversas Estratégicas",
            description: "Discussões orientadas a objetivos, riscos, cultura e capacidade de adoção. Conectamos visão executiva com viabilidade técnica.",
            icon: Lightbulb
        },
        {
            day: "Dias 15–20",
            title: "Construção dos Caminhos",
            description: "Criamos um mapa objetivo: problemas reais que a IA resolve, estimativas de impacto, soluções internas ou de mercado, investimentos e riscos.",
            icon: BarChart3
        },
        {
            day: "Dias 20–25",
            title: "Entrega e Direcionamento",
            description: "Finalizamos com um documento claro, direto e acionável: um plano de IA que faz sentido e evita decisões equivocadas.",
            icon: CheckCircle2
        }
    ];

    return (
        <Box py={{ base: 16, md: 24 }} bg="gray.50">
            <Container maxW="7xl">
                <VStack gap={16}>
                    <VStack gap={4} textAlign="center" maxW="3xl" mx="auto">
                        <Heading as="h2" size="3xl" fontWeight="bold">
                            Metodologia e Linha do Tempo
                        </Heading>
                        <Text fontSize="lg" color="fg.muted">
                            Um processo estruturado de 25 dias para transformar incerteza em plano de ação.
                        </Text>
                    </VStack>

                    <Box position="relative" w="full">
                        {/* Connecting Line (Desktop) */}
                        <Box
                            position="absolute"
                            left="50%"
                            top="0"
                            bottom="0"
                            w="2px"
                            bg="blue.100"
                            transform="translateX(-50%)"
                            display={{ base: "none", md: "block" }}
                        />

                        <VStack gap={12} w="full">
                            {steps.map((step, index) => (
                                <HStack
                                    key={index}
                                    w="full"
                                    justify={index % 2 === 0 ? "flex-start" : "flex-end"}
                                    position="relative"
                                    flexDirection={{ base: "column", md: "row" }}
                                    gap={{ base: 4, md: 0 }}
                                >
                                    {/* Center Dot (Desktop) */}
                                    <Box
                                        position="absolute"
                                        left="50%"
                                        top={{ base: "0", md: "50%" }}
                                        transform="translate(-50%, -50%)"
                                        w={4}
                                        h={4}
                                        bg="blue.500"
                                        rounded="full"
                                        border="4px solid white"
                                        boxShadow="md"
                                        display={{ base: "none", md: "block" }}
                                        zIndex={2}
                                    />

                                    <Box
                                        w={{ base: "full", md: "45%" }}
                                        bg="white"
                                        p={8}
                                        rounded="xl"
                                        shadow="sm"
                                        border="1px solid"
                                        borderColor="gray.100"
                                        position="relative"
                                    >
                                        <Badge colorPalette="blue" mb={3}>{step.day}</Badge>
                                        <Heading as="h3" size="lg" mb={3}>{step.title}</Heading>
                                        <Text color="fg.muted">{step.description}</Text>
                                    </Box>
                                </HStack>
                            ))}
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
}

function ValueSection() {
    return (
        <Box py={{ base: 16, md: 24 }}>
            <Container maxW="7xl">
                <Box
                    bg="blue.900"
                    color="white"
                    rounded="3xl"
                    p={{ base: 8, md: 16 }}
                    position="relative"
                    overflow="hidden"
                >
                    {/* Decorative elements */}
                    <Box
                        position="absolute"
                        top={0}
                        right={0}
                        w="64"
                        h="64"
                        bg="blue.500"
                        filter="blur(100px)"
                        opacity={0.2}
                        rounded="full"
                    />

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} alignItems="center" position="relative" zIndex={1}>
                        <VStack align="start" gap={6}>
                            <Heading as="h2" size="3xl" fontWeight="bold">
                                Por que essa etapa é paga?
                            </Heading>
                            <Text fontSize="lg" color="white/80" lineHeight="tall">
                                O Diagnóstico Inteligente não é consultoria gratuita disfarçada. É um trabalho profundo, técnico e estratégico, conduzido por especialistas em arquitetura, IA e negócios.
                            </Text>
                            <Text fontSize="lg" color="white/80" lineHeight="tall">
                                Ele reduz risco, evita gastos desnecessários e garante que qualquer investimento tenha base sólida. É o primeiro filtro para entender o que vale a pena fazer — e o que não vale.
                            </Text>
                        </VStack>
                        <VStack gap={6}>
                            <Box p={6} bg="white/10" rounded="xl" w="full" border="1px solid" borderColor="white/20">
                                <HStack gap={4}>
                                    <AlertTriangle color="#60a5fa" />
                                    <Text fontWeight="semibold" fontSize="lg">Redução de Risco</Text>
                                </HStack>
                                <Text mt={2} color="white/70">Evite investir em projetos que não trazem retorno real.</Text>
                            </Box>
                            <Box p={6} bg="white/10" rounded="xl" w="full" border="1px solid" borderColor="white/20">
                                <HStack gap={4}>
                                    <Target color="#60a5fa" />
                                    <Text fontWeight="semibold" fontSize="lg">Direcionamento Estratégico</Text>
                                </HStack>
                                <Text mt={2} color="white/70">Saiba exatamente onde focar seus recursos.</Text>
                            </Box>
                        </VStack>
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
}

function DeliverablesSection() {
    const deliverables = [
        "Documento executivo com análise da operação",
        "Mapa de oportunidades de IA",
        "Estimativa de impacto e ROI",
        "Avaliação de riscos e dependências",
        "Cenários estratégicos",
        "Recomendação final clara e priorizada"
    ];

    return (
        <Box py={{ base: 16, md: 24 }} bg="gray.50">
            <Container maxW="7xl">
                <VStack gap={12}>
                    <Heading as="h2" size="3xl" textAlign="center" fontWeight="bold">
                        O que você recebe
                    </Heading>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
                        {deliverables.map((item, index) => (
                            <Box
                                key={index}
                                p={8}
                                bg="white"
                                rounded="xl"
                                shadow="sm"
                                border="1px solid"
                                borderColor="gray.100"
                                transition="all 0.2s"
                                _hover={{ transform: "translateY(-2px)", shadow: "md" }}
                            >
                                <VStack align="start" gap={4}>
                                    <Box p={2} bg="blue.50" color="blue.600" rounded="lg">
                                        <CheckCircle2 size={24} />
                                    </Box>
                                    <Text fontWeight="semibold" fontSize="lg">{item}</Text>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
}

function CTA() {
    return (
        <Box py={{ base: 16, md: 24 }}>
            <Container maxW="7xl">
                <VStack gap={8} textAlign="center" maxW="3xl" mx="auto">
                    <Heading as="h2" size="3xl" fontWeight="bold">
                        Comece com clareza.
                    </Heading>
                    <Text fontSize="xl" color="fg.muted">
                        Não tome decisões baseadas em suposições. Solicite seu Diagnóstico Inteligente hoje.
                    </Text>
                    <Button
                        asChild
                        size="xl"
                        colorPalette="blue"
                        fontSize="lg"
                        h={14}
                        px={10}
                        id="contato"
                    >
                        <Link href="/contato">
                            Solicitar Diagnóstico Inteligente
                            <ArrowRight />
                        </Link>
                    </Button>
                </VStack>
            </Container>
        </Box>
    );
}

export default function DiagnosticoPage() {
    return (
        <Page>
            <Navbar />
            <VStack gap={0} w="full" as="main" align="stretch">
                <Hero />
                <IntroSection />
                <TimelineSection />
                <ValueSection />
                <DeliverablesSection />
                <CTA />
            </VStack>
            <Footer />
        </Page>
    );
}
