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
  accent?: "blue" | "purple" | "green" | "orange";
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
      bg: "blue.500",
      border: "blue.400",
      glow: "blue.500/30",
    },
    purple: {
      bg: "purple.500", 
      border: "purple.400",
      glow: "purple.500/30",
    },
    green: {
      bg: "green.500",
      border: "green.400", 
      glow: "green.500/30",
    },
    orange: {
      bg: "orange.500",
      border: "orange.400",
      glow: "orange.500/30",
    },
  };

  return (
    <Box
      p={{ base: 6, md: featured ? 8 : 6 }}
      h="full"
      bg="gray.900"
      border="1px solid"
      borderColor="gray.800"
      borderRadius="2xl"
      position="relative"
      overflow="hidden"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      cursor="pointer"
      role="group"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: accentColors[accent].border,
        boxShadow: `0 20px 40px -8px ${accentColors[accent].glow}`,
      }}
    >
      {/* Gradient overlay */}
      <Box
        position="absolute"
        inset={0}
        bgGradient={`radial-gradient(circle at top right, ${accentColors[accent].bg}/10, transparent 70%)`}
        opacity={0}
        transition="opacity 0.4s ease"
        _groupHover={{ opacity: 1 }}
      />

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
          color="white"
          transition="all 0.3s ease"
          _groupHover={{
            transform: "scale(1.1) rotate(-3deg)",
            boxShadow: `0 8px 25px ${accentColors[accent].glow}`,
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
            color="white"
            lineHeight="shorter"
          >
            {title}
          </Heading>
          
          <Text
            color="gray.300"
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
      description: "Reduza a rotatividade prevendo quais colaboradores têm maior risco de sair e entenda os fatores de engajamento com dashboards inteligentes.",
      category: "Analytics",
      metrics: "-35% turnover",
      accent: "blue" as const,
      featured: true,
    },
    {
      icon: <Bot size={20} />,
      title: "Automação RH & Financeiro",
      description: "Automatize recrutamento, benefícios e folha de pagamento.",
      category: "Automação",
      metrics: "80% mais rápido",
      accent: "purple" as const,
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Assistente Virtual Interno",
      description: "Chatbot inteligente para dúvidas de colaboradores 24/7.",
      category: "IA Conversacional",
      metrics: "24/7 disponível",
      accent: "green" as const,
    },
    {
      icon: <Settings size={20} />,
      title: "Plataformas Customizadas",
      description: "Ferramentas de gestão, avaliação e OKRs sob medida.",
      category: "Software",
      metrics: "+45% produtividade",
      accent: "orange" as const,
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Dashboards Executivos",
      description: "Visualizações em tempo real dos KPIs mais importantes para tomada de decisão estratégica baseada em dados.",
      category: "Business Intelligence",
      metrics: "Tempo real",
      accent: "blue" as const,
      featured: true,
    },
    {
      icon: <Brain size={20} />,
      title: "Modelos Preditivos",
      description: "Machine Learning para prever tendências e otimizar processos.",
      category: "Machine Learning",
      accent: "purple" as const,
    },
  ];

  return (
    <Box
      as="section"
      id="casos"
      py={{ base: 20, md: 28 }}
      bg="black"
      position="relative"
      overflow="hidden"
    >
      {/* Background effects */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="blue.500/5"
        filter="blur(60px)"
        animation="float 15s ease-in-out infinite"
      />
      
      <Box
        position="absolute"
        bottom="10%"
        right="10%"
        w="250px"
        h="250px"
        borderRadius="full"
        bg="purple.500/5"
        filter="blur(60px)"
        animation="float 12s ease-in-out infinite reverse"
      />

      <Container maxW="7xl" position="relative">
        <VStack gap={{ base: 12, md: 16 }} align="center">
          {/* Header */}
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="900"
              color="white"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Da visão à{" "}
              <Text
                as="span"
                bgGradient="linear-gradient(135deg, blue.400, purple.400, green.400)"
                bgClip="text"
              >
                realidade
              </Text>
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              lineHeight="tall"
              fontWeight="400"
            >
              IA e Dados aplicados ao seu negócio com soluções que geram impacto real
            </Text>
          </VStack>

          {/* Bento Grid */}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(4, 1fr)",
              lg: "repeat(6, 1fr)"
            }}
            templateRows={{
              base: "auto",
              md: "repeat(3, 280px)",
              lg: "repeat(2, 320px)"
            }}
            gap={{ base: 6, md: 6 }}
            w="full"
            maxW="6xl"
          >
            {/* Featured card 1 - Large */}
            <GridItem
              colSpan={{ base: 1, md: 2, lg: 3 }}
              rowSpan={{ base: 1, md: 2, lg: 1 }}
            >
              <BentoCard {...useCases[0]} />
            </GridItem>

            {/* Regular cards */}
            <GridItem
              colSpan={{ base: 1, md: 2, lg: 1 }}
              rowSpan={{ base: 1, md: 1, lg: 1 }}
            >
              <BentoCard {...useCases[1]} />
            </GridItem>

            <GridItem
              colSpan={{ base: 1, md: 2, lg: 2 }}
              rowSpan={{ base: 1, md: 1, lg: 1 }}
            >
              <BentoCard {...useCases[2]} />
            </GridItem>

            <GridItem
              colSpan={{ base: 1, md: 2, lg: 2 }}
              rowSpan={{ base: 1, md: 1, lg: 1 }}
            >
              <BentoCard {...useCases[3]} />
            </GridItem>

            {/* Featured card 2 - Large */}
            <GridItem
              colSpan={{ base: 1, md: 2, lg: 3 }}
              rowSpan={{ base: 1, md: 1, lg: 1 }}
            >
              <BentoCard {...useCases[4]} />
            </GridItem>

            <GridItem
              colSpan={{ base: 1, md: 2, lg: 1 }}
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
