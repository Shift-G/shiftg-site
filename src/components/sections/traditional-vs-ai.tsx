import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Grid,
  GridItem,
  Badge,
  Flex,
} from "@chakra-ui/react";
import {
  Clock,
  Users,
  TrendingDown,
  AlertTriangle,
  Zap,
  Brain,
  TrendingUp,
  BarChart3,
  Target,
  Cpu,
} from "lucide-react";

interface ComparisonItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric?: string;
  isAI?: boolean;
}

function ComparisonCard({
  icon,
  title,
  description,
  metric,
  isAI = false,
}: ComparisonItemProps) {
  return (
    <Box
      p={{ base: 6, md: 8 }}
      bg={isAI ? "blue.500/5" : "red.500/5"}
      border="1px solid"
      borderColor={isAI ? "blue.500/20" : "red.500/20"}
      borderRadius="2xl"
      position="relative"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-2px)",
        borderColor: isAI ? "blue.500/40" : "red.500/40",
        bg: isAI ? "blue.500/10" : "red.500/10",
      }}
    >
      {/* Status indicator */}
      <Box
        position="absolute"
        top={4}
        right={4}
        w={3}
        h={3}
        borderRadius="full"
        bg={isAI ? "green.500" : "red.500"}
        boxShadow={`0 0 10px ${isAI ? "green.500/50" : "red.500/50"}`}
      />

      <VStack align="flex-start" gap={4}>
        <HStack gap={3}>
          <Box
            p={2}
            bg={isAI ? "blue.500/20" : "red.500/20"}
            borderRadius="lg"
            color={isAI ? "blue.500" : "red.500"}
          >
            {icon}
          </Box>
          <Badge
            variant={isAI ? "solid" : "outline"}
            colorPalette={isAI ? "green" : "red"}
            fontSize="xs"
            fontWeight="600"
            textTransform="uppercase"
          >
            {isAI ? "Com IA" : "Tradicional"}
          </Badge>
        </HStack>

        <VStack align="flex-start" gap={2}>
          <Heading as="h4" size="md" fontWeight="700" color="fg">
            {title}
          </Heading>
          <Text color="fg.muted" fontSize="sm" lineHeight="tall">
            {description}
          </Text>
        </VStack>

        {metric && (
          <Box
            px={3}
            py={2}
            bg={isAI ? "green.500/10" : "red.500/10"}
            border="1px solid"
            borderColor={isAI ? "green.500/20" : "red.500/20"}
            borderRadius="lg"
          >
            <Text
              fontSize="sm"
              fontWeight="700"
              color={isAI ? "green.600" : "red.600"}
            >
              {metric}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export function TraditionalVsAI() {
  const traditionalSystems = [
    {
      icon: <Clock size={20} />,
      title: "Processos Manuais Ineficientes",
      description:
        "Análises que consomem dias ou semanas da equipe, com planilhas complexas propensas a erros humanos e retrabalho constante.",
      metric: "8-12 horas por análise",
    },
    {
      icon: <Users size={20} />,
      title: "Equipe Sobrecarregada",
      description:
        "Profissionais passam 70% do tempo em tarefas repetitivas e operacionais, com burnout e baixa produtividade estratégica.",
      metric: "70% tempo operacional",
    },
    {
      icon: <AlertTriangle size={20} />,
      title: "Decisões Reativas e Arriscadas",
      description:
        "Sem dados preditivos confiáveis, as decisões são baseadas em intuição e experiência passada, resultando em oportunidades perdidas.",
      metric: "60-70% de precisão",
    },
    {
      icon: <TrendingDown size={20} />,
      title: "Custos Escalando Linearmente",
      description:
        "Cada ponto de crescimento exige contratação proporcional, aumentando custos fixos e reduzindo margem de lucro.",
      metric: "Crescimento linear",
    },
  ];

  const aiSystems = [
    {
      icon: <Zap size={20} />,
      title: "Automação Inteligente e Rápida",
      description:
        "Análises complexas executadas em minutos com processamento automático de grandes volumes de dados. Zero erros humanos e resultados instantâneos.",
      metric: "15-30 minutos",
    },
    {
      icon: <Brain size={20} />,
      title: "Equipe Focada em Estratégia",
      description:
        "Profissionais liberados para atividades de alto valor agregado: inovação, estratégia e crescimento. Eliminação completa de tarefas repetitivas.",
      metric: "80% tempo estratégico",
    },
    {
      icon: <Target size={20} />,
      title: "Decisões Data-Driven e Precisas",
      description:
        "Insights preditivos com Machine Learning antecipam cenários futuros e otimizam resultados com precisão cirúrgica baseada em dados reais.",
      metric: "90-95% de precisão",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Escalabilidade Exponencial",
      description:
        "Processa 10x mais dados sem aumentar equipe. Custos fixos se mantêm enquanto a capacidade de processamento cresce exponencialmente.",
      metric: "10x mais capacidade",
    },
  ];

  const benefits = [
    {
      icon: <BarChart3 size={24} />,
      title: "ROI Comprovado",
      value: "300-500%",
      description: "Retorno sobre investimento em 6-12 meses",
    },
    {
      icon: <Users size={24} />,
      title: "Produtividade",
      value: "+85%",
      description: "Aumento na produtividade da equipe",
    },
    {
      icon: <Cpu size={24} />,
      title: "Eficiência",
      value: "70%",
      description: "Redução em custos operacionais",
    },
  ];

  return (
    <Box
      as="section"
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background gradient */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial-gradient(ellipse 80% 50% at 50% 0%, blue.500/5, transparent)"
        _dark={{
          bgGradient:
            "radial-gradient(ellipse 80% 50% at 50% 0%, blue.500/10, transparent)",
        }}
      />

      <Container maxW="7xl" position="relative">
        <VStack gap={{ base: 16, md: 20 }}>
          {/* Header */}
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Badge
              variant="outline"
              colorPalette="blue"
              fontSize="sm"
              px={4}
              py={2}
            >
              Transformação Digital
            </Badge>

            <Heading
              as="h2"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="900"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Por que{" "}
              <Text
                as="span"
                bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.800})"
                bgClip="text"
              >
                IA não é opcional
              </Text>{" "}
              para líderes visionários?
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
              fontWeight="400"
            >
              A diferença entre competir e liderar está na capacidade de
              transformar dados em vantagem competitiva. Veja como a IA
              revoluciona operações e multiplica resultados.
            </Text>
          </VStack>

          {/* Comparison Grid */}
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr auto 1fr" }}
            gap={{ base: 12, lg: 8 }}
            w="full"
            alignItems="start"
          >
            {/* Traditional Systems */}
            <GridItem>
              <VStack gap={6}>
                <VStack gap={3} textAlign="center">
                  <Badge variant="outline" colorPalette="red" fontSize="sm">
                    Sistemas Tradicionais
                  </Badge>
                  <Heading as="h3" size="xl" color="fg">
                    Como você opera hoje
                  </Heading>
                  <Text color="fg.muted" fontSize="md">
                    Processos manuais, decisões reativas
                  </Text>
                </VStack>

                <VStack gap={4} w="full">
                  {traditionalSystems.map((item, index) => (
                    <ComparisonCard key={index} {...item} />
                  ))}
                </VStack>
              </VStack>
            </GridItem>

            {/* VS Divider */}
            <GridItem
              display={{ base: "none", lg: "flex" }}
              justifyContent="center"
              pos="relative"
            >
              <Flex
                direction="column"
                align="center"
                gap={4}
                py={8}
                position="sticky"
                top="0%"
              >
                <Box w="1px" h="100px" bg="border" />
                <Box
                  px={4}
                  py={2}
                  bg="blue.500"
                  color="white"
                  borderRadius="full"
                  fontWeight="700"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  VS
                </Box>
                <Box w="1px" h="100px" bg="border" />
              </Flex>
            </GridItem>

            {/* AI Systems */}
            <GridItem>
              <VStack gap={6}>
                <VStack gap={3} textAlign="center">
                  <Badge variant="solid" colorPalette="green" fontSize="sm">
                    Sistemas com IA
                  </Badge>
                  <Heading as="h3" size="xl" color="fg">
                    Seu potencial com IA
                  </Heading>
                  <Text color="fg.muted" fontSize="md">
                    Automação inteligente, decisões preditivas
                  </Text>
                </VStack>

                <VStack gap={4} w="full">
                  {aiSystems.map((item, index) => (
                    <ComparisonCard key={index} {...item} isAI />
                  ))}
                </VStack>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
