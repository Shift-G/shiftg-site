"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Grid,
  GridItem,
  HStack,
  Badge,
} from "@chakra-ui/react";
import {
  BarChart3,
  Bot,
  MessageSquare,
  Settings,
  TrendingUp,
  Zap,
  Brain,
  Shield,
  Users,
  Target,
} from "lucide-react";

interface UseCaseBentoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  metrics?: string;
  featured?: boolean;
  accent?: "blue" | "green" | "orange";
}

function BentoCard({
  icon,
  title,
  description,
  category,
  metrics,
  featured = false,
  accent = "blue",
}: UseCaseBentoProps) {
  const accentColors = {
    blue: {
      bg: "blue.400",
      border: "blue.300",
      text: "blue.50",
    },
    green: {
      bg: "green.400",
      border: "green.300",
      text: "green.50",
    },
    orange: {
      bg: "orange.400",
      border: "orange.300",
      text: "orange.50",
    },
  };

  return (
    <Box
      p={{ base: 6, md: featured ? 8 : 6 }}
      h="full"
      bg="bg.surface"
      border="1px solid"
      borderColor="border"
      borderRadius="2xl"
      position="relative"
      overflow="hidden"
      transition="all 0.3s ease"
      cursor="pointer"
      role="group"
      _hover={{
        transform: "translateY(-2px)",
        borderColor: accentColors[accent].border,
        bg: "bg.muted",
      }}
    >
      {/* Top accent line */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="2px"
        bg={accentColors[accent].bg}
        opacity={0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
      />

      <VStack align="flex-start" gap={featured ? 6 : 4} h="full" position="relative">
        {/* Header */}
        <HStack justify="space-between" w="full" flexWrap="wrap" gap={3}>
          <Badge
            variant="subtle"
            colorPalette={accent}
            fontSize="xs"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="wider"
            px={3}
            py={1}
            borderRadius="full"
          >
            {category}
          </Badge>

          {metrics && (
            <Badge
              variant="outline"
              colorPalette="green"
              fontSize="xs"
              fontWeight="600"
              px={3}
              py={1}
              borderRadius="full"
            >
              {metrics}
            </Badge>
          )}
        </HStack>

        {/* Icon */}
        <Box
          p={featured ? 4 : 3}
          bg={accentColors[accent].bg}
          borderRadius="xl"
          color={accentColors[accent].text}
          transition="all 0.3s ease"
          _groupHover={{
            transform: "scale(1.05)",
          }}
        >
          {icon}
        </Box>

        {/* Content */}
        <VStack align="flex-start" gap={3} flex={1}>
          <Heading
            as="h3"
            size={featured ? "xl" : "lg"}
            fontWeight="700"
            color="fg"
            lineHeight="shorter"
          >
            {title}
          </Heading>

          <Text
            color="fg.muted"
            fontSize={featured ? "lg" : "md"}
            lineHeight="tall"
            fontWeight="400"
          >
            {description}
          </Text>
        </VStack>

        {/* Hover indicator */}
        <HStack
          gap={2}
          color={accentColors[accent].bg}
          fontSize="sm"
          fontWeight="600"
          opacity={0}
          transform="translateY(10px)"
          transition="all 0.3s ease"
          _groupHover={{
            opacity: 1,
            transform: "translateY(0)",
          }}
        >
          <Text>Explorar caso</Text>
          <Box
            transition="transform 0.3s ease"
            _groupHover={{ transform: "translateX(3px)" }}
          >
            →
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}

export function UseCasesBento() {
  const useCases = [
    {
      icon: <BarChart3 size={24} />,
      title: "People Analytics Preditivo",
      description: "Reduza turnover em até 35% prevendo quais colaboradores têm maior risco de sair. Dashboards com insights sobre engajamento, produtividade e fatores de retenção baseados em dados reais.",
      category: "Analytics",
      metrics: "-35% turnover",
      accent: "blue" as const,
      featured: true,
    },
    {
      icon: <Bot size={20} />,
      title: "Automação RH & Financeiro",
      description: "Automatize processos de recrutamento, gestão de benefícios e folha de pagamento. Reduza tempo de processamento em 80% e elimine erros manuais que custam milhares por mês.",
      category: "Automação",
      metrics: "80% mais rápido",
      accent: "blue" as const,
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Assistente Virtual Interno",
      description: "Chatbot inteligente que responde dúvidas de colaboradores 24/7 sobre políticas, benefícios e procedimentos. Reduza chamados ao RH em 60% e melhore experiência do colaborador.",
      category: "IA Conversacional",
      metrics: "24/7 disponível",
      accent: "green" as const,
    },
    {
      icon: <Settings size={20} />,
      title: "Plataformas Customizadas",
      description: "Sistemas de gestão, avaliação de desempenho e OKRs desenvolvidos especificamente para seus processos. Aumente produtividade da equipe em 45% com ferramentas que realmente se adaptam ao seu negócio.",
      category: "Software",
      metrics: "+45% produtividade",
      accent: "orange" as const,
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Dashboards Executivos",
      description: "Painéis de controle em tempo real com todos os KPIs críticos do negócio. Transforme dados complexos em decisões estratégicas com visualizações intuitivas que mostram o que realmente importa.",
      category: "Business Intelligence",
      metrics: "Tempo real",
      accent: "blue" as const,
      featured: true,
    },
    {
      icon: <Brain size={20} />,
      title: "Modelos Preditivos Avançados",
      description: "Algoritmos de Machine Learning treinados com seus dados para prever vendas, demanda e comportamento do cliente. Antecipe tendências e otimize operações com precisão de até 95%.",
      category: "Machine Learning",
      accent: "blue" as const,
    },
  ];

  return (
    <Box
      as="section"
      id="casos"
      py={{ base: 20, md: 28 }}
      bg="bg"
      position="relative"
    >
      <Container maxW="7xl" position="relative">
        <VStack gap={{ base: 12, md: 16 }} align="center">
          {/* Header */}
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="900"
              color="fg"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Da visão à{" "}
              <Text
                as="span"
                color="blue.400"
              >
                realidade
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
              fontWeight="400"
              maxW="3xl"
            >
              IA e Dados aplicados ao seu negócio com soluções que geram impacto real
            </Text>
          </VStack>

          {/* Bento Grid */}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)"
            }}
            templateRows={{
              base: "auto",
              md: "repeat(2, minmax(280px, auto))",
              lg: "repeat(2, minmax(220px, auto))"
            }}
            gap={{ base: 6, md: 6 }}
            w="full"
            maxW="7xl"
          >
            {/* Featured card 1 - Large */}
            <GridItem
              colSpan={{ base: 1, md: 2, lg: 2 }}
              rowSpan={{ base: 1, md: 2, lg: 1 }}
            >
              <BentoCard {...useCases[0]} />
            </GridItem>

            {/* Regular cards - Row 1 */}
            <GridItem
              colSpan={{ base: 1, md: 1, lg: 1 }}
              rowSpan={{ base: 1, md: 1, lg: 1 }}
            >
              <BentoCard {...useCases[1]} />
            </GridItem>

            <GridItem
              colSpan={{ base: 1, md: 1, lg: 1 }}
              rowSpan={{ base: 1, md: 1, lg: 1 }}
            >
              <BentoCard {...useCases[2]} />
            </GridItem>

            {/* Regular cards - Row 2 */}
            <GridItem
              colSpan={{ base: 1, md: 1, lg: 1 }}
              rowSpan={{ base: 1, md: 1, lg: 1 }}
            >
              <BentoCard {...useCases[3]} />
            </GridItem>

            {/* Featured card 2 - Large */}
            <GridItem
              colSpan={{ base: 1, md: 2, lg: 2 }}
              rowSpan={{ base: 1, md: 1, lg: 1 }}
            >
              <BentoCard {...useCases[4]} />
            </GridItem>

            {/* Last card */}
            <GridItem
              colSpan={{ base: 1, md: 1, lg: 1 }}
              rowSpan={{ base: 1, md: 1, lg: 1 }}
            >
              <BentoCard {...useCases[5]} />
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
