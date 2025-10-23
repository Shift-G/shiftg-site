"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  Badge,
  Icon,
  For,
  Button,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import {
  Shield,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock,
  Award,
  Eye,
  Cloud,
  Brain,
  Target,
  Lock,
  BarChart3,
  AlertTriangle,
  Zap,
  ShieldCheck,
  Activity,
  LineChart,
  ArrowRight,
  Check,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const challenges = [
  {
    icon: AlertTriangle,
    text: "Um único erro de cálculo ou atraso pode gerar multas elevadas",
  },
  {
    icon: AlertTriangle,
    text: "Processos trabalhistas consomem tempo, energia e reputação",
  },
  {
    icon: AlertTriangle,
    text: "Falhas de conformidade podem resultar em bloqueios contratuais e perda de licitações futuras",
  },
];

const phases = [
  {
    number: "01",
    colorScheme: "blue",
    icon: Target,
    title: "Diagnóstico Inicial",
    description:
      "Análise completa do cenário atual, identificando vulnerabilidades críticas e oportunidades de otimização.",
    features: [
      {
        icon: Activity,
        text: "Levantamento completo de dados, fluxos, contratos e obrigações legais",
      },
      {
        icon: ShieldCheck,
        text: "Identificação de vulnerabilidades e pontos críticos",
      },
    ],
  },
  {
    number: "02",
    colorScheme: "purple",
    icon: Cloud,
    title: "Integração e Cloud Setup",
    description:
      "Migração segura para nuvem com infraestrutura robusta e escalável.",
    features: [
      {
        icon: Lock,
        text: "Migração e estruturação dos dados na nuvem",
      },
      {
        icon: Eye,
        text: "Garantia de segurança, rastreabilidade e integração com portal de governança",
      },
    ],
  },
  {
    number: "03",
    colorScheme: "green",
    icon: Users,
    title: "Operação Assistida",
    description:
      "Transição suave com treinamento especializado e suporte dedicado.",
    features: [
      {
        icon: Users,
        text: "Treinamento do time do cliente",
      },
      {
        icon: TrendingUp,
        text: "Operação supervisionada com estabilidade total em 60 a 90 dias",
      },
    ],
  },
];

const techStack = [
  {
    icon: Eye,
    title: "Portal de Governança",
    description: "Interface de comunicação e gestão integrada com o cliente",
    color: "blue",
    features: [
      "Visibilidade em tempo real",
      "Aprovações colaborativas",
      "Rastreabilidade total",
    ],
  },
  {
    icon: Lock,
    title: "Camada Cloud",
    description:
      "Armazenamento seguro e centralizado de informações trabalhistas e contratuais",
    color: "purple",
    features: [
      "Infraestrutura escalável",
      "Backup automático",
      "Compliance LGPD",
    ],
  },
  {
    icon: Brain,
    title: "IA Operacional",
    description:
      "Automação de rotinas, cruzamento de dados e alertas de risco antecipados",
    color: "orange",
    features: [
      "Alertas preditivos",
      "Automação inteligente",
      "Análise de padrões",
    ],
  },
];

const pricingPlans = [
  {
    name: "Starter",
    range: "50 – 300",
    employees: "funcionários",
    price: "30",
    description: "Ideal para pequenas prestadoras de serviço",
    color: "blue",
    features: [
      "Portal de Governança",
      "Suporte 8x5",
      "Treinamento básico",
      "Relatórios mensais",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    range: "301 – 1.000",
    employees: "funcionários",
    price: "22",
    description: "Custo reduzido por escala",
    color: "purple",
    features: [
      "Tudo do Starter",
      "Suporte 24/7",
      "Treinamento avançado",
      "Relatórios semanais",
      "Gerente de conta dedicado",
    ],
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    name: "Scale",
    range: "1.001 – 5.000",
    employees: "funcionários",
    price: "15",
    description: "Maior eficiência operacional",
    color: "green",
    features: [
      "Tudo do Growth",
      "SLA personalizado",
      "Consultoria estratégica",
      "Dashboards customizados",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    range: "+5.000",
    employees: "funcionários",
    price: "12",
    description: "Contrato Enterprise sob medida",
    color: "orange",
    features: [
      "Tudo do Scale",
      "SLA premium",
      "Integração customizada",
      "Suporte white-glove",
      "Roadmap prioritário",
    ],
    highlighted: false,
  },
];

const slaItems = [
  {
    icon: Award,
    title: "Disponibilidade do sistema",
    value: "99,9%",
    color: "blue",
    description: "Infraestrutura redundante com failover automático",
  },
  {
    icon: Clock,
    title: "Tempo de resposta",
    value: "até 2h úteis",
    color: "purple",
    description: "Equipe dedicada com atendimento prioritário",
  },
  {
    icon: Users,
    title: "Suporte humano",
    value: "24/7",
    description: "Via chat, e-mail e WhatsApp corporativo",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Garantia de conformidade",
    value: "100%",
    description:
      "Cobertura integral de riscos trabalhistas derivados de falhas operacionais sob nossa responsabilidade",
    color: "green",
  },
];

const metrics = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Redução nos custos operacionais do DP",
    color: "green",
    description: "Eficiência operacional comprovada",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Conformidade com legislação trabalhista e LGPD",
    color: "blue",
    description: "Zero passivos trabalhistas",
  },
  {
    icon: BarChart3,
    value: "Expressiva",
    label: "Diminuição de passivos e multas",
    color: "purple",
    description: "Prevenção proativa de riscos",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Redução de riscos jurídicos e fiscais",
    description: "Operação blindada contra passivos trabalhistas",
    color: "blue",
  },
  {
    icon: CheckCircle2,
    title: "Prevenção de multas e falhas processuais",
    description: "Monitoramento contínuo e alertas antecipados",
    color: "green",
  },
  {
    icon: Award,
    title: "Conformidade contínua com legislação",
    description: "Atualização automática às mudanças trabalhistas e LGPD",
    color: "purple",
  },
  {
    icon: Clock,
    title: "Liberação do tempo da liderança",
    description: "Foco total em decisões estratégicas",
    color: "orange",
  },
  {
    icon: Eye,
    title: "Governança compartilhada",
    description: "Total transparência via portal de governança",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Tranquilidade para o CEO",
    description: "Segurança e previsibilidade para todo o negócio",
    color: "green",
  },
];

const differentials = [
  {
    icon: Brain,
    title: "Tecnologia Proprietária",
    description:
      "O Sentinela é Powered by Shift+G, garantindo base sólida em engenharia, IA e automação.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Time de Elite",
    description: "Pequeno, ágil e de alta performance.",
    color: "purple",
  },
  {
    icon: Award,
    title: "Modelo BPaaS Real",
    description:
      "Você contrata o processo como um serviço, com SLA, métricas e entregas claras.",
    color: "orange",
  },
  {
    icon: Eye,
    title: "Visão Preventiva",
    description: "Atuamos antes do problema, não depois.",
    color: "blue",
  },
  {
    icon: Target,
    title: "Foco em Resultado",
    description: "Entregamos paz de espírito, não relatórios.",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Powered by Shift+G",
    description:
      "Confiança e excelência de quem já transformou centenas de operações.",
    color: "green",
  },
];

export default function SentinelaPage() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Section
        variant="gradient"
        py={{
          base: 6,
          md: 20,
        }}
      >
        <VStack gap={8} textAlign="center" maxW="4xl" mx="auto">
          <Box position="relative">
            <Icon
              color="blue.solid"
              fontSize={{ base: "6xl", md: "8xl" }}
              position="relative"
              zIndex={2}
            >
              <Shield />
            </Icon>
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="150%"
              h="150%"
              bg="blue.solid/10"
              rounded="full"
              filter="blur(40px)"
              zIndex={1}
            />
          </Box>

          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "7xl" }}
            fontWeight="800"
            bgGradient="to-r"
            gradientFrom="blue.solid"
            gradientTo="purple.solid"
            bgClip="text"
            letterSpacing="tight"
          >
            Sentinela
          </Heading>

          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="600"
            color="fg"
          >
            Vigilância Operacional Inteligente
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            maxW="3xl"
            lineHeight="tall"
          >
            Transforme a gestão de pessoas em um processo seguro, previsível e
            tranquilo. Enquanto sua equipe cresce, o Sentinela garante que tudo
            permaneça sob controle.
          </Text>

          <Box
            p={6}
            bg="blue.500/10"
            borderWidth="2px"
            borderColor="blue.200"
            rounded="2xl"
            backdropFilter="blur(10px)"
            _dark={{ borderColor: "blue.800" }}
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="700"
              color="blue.solid"
              fontStyle="italic"
            >
              "Você trabalha com leveza. Nós velamos pela sua segurança."
            </Text>
          </Box>
        </VStack>
      </Section>

      {/* Contexto de Mercado - NÃO MEXER */}
      <Section title="O Desafio" subtitle="Entenda o cenário atual">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <VStack align="stretch" gap={6}>
            <Heading as="h3" fontSize="2xl" fontWeight="700">
              A Realidade das Empresas
            </Heading>
            <Text color="fg.muted" fontSize="lg" lineHeight="tall">
              Empresas prestadoras de serviços terceirizados — especialmente
              aquelas que operam contratos de licitação — convivem diariamente
              com uma operação de Departamento Pessoal sobrecarregada e
              vulnerável.
            </Text>

            <VStack gap={4} align="stretch">
              <For each={challenges}>
                {(challenge) => (
                  <Flex
                    gap={4}
                    p={5}
                    bg="red.50"
                    rounded="xl"
                    borderWidth="1px"
                    borderColor="red.200"
                    align="start"
                    _dark={{ bg: "red.950/30", borderColor: "red.800/50" }}
                  >
                    <Icon
                      color="red.solid"
                      fontSize="2xl"
                      flexShrink={0}
                      mt={0.5}
                    >
                      <challenge.icon />
                    </Icon>
                    <Text color="fg" fontWeight="500" lineHeight="tall">
                      {challenge.text}
                    </Text>
                  </Flex>
                )}
              </For>
            </VStack>
          </VStack>

          <Box
            bg="red.50"
            p={8}
            rounded="2xl"
            borderWidth="2px"
            borderColor="red.200"
            position="relative"
            overflow="hidden"
            _dark={{ bg: "red.950", borderColor: "red.800" }}
          >
            <Box
              position="absolute"
              top={0}
              right={0}
              w="200px"
              h="200px"
              bg="red.500/10"
              rounded="full"
              filter="blur(60px)"
            />

            <VStack align="stretch" gap={6} position="relative" zIndex={2}>
              <Badge
                colorPalette="red"
                size="lg"
                w="fit-content"
                px={4}
                py={2}
                fontSize="sm"
              >
                Alerta Crítico
              </Badge>

              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="700"
                color="red.solid"
              >
                O Custo da Insegurança
              </Heading>

              <Box
                p={6}
                bg="white"
                rounded="xl"
                textAlign="center"
                _dark={{ bg: "red.900/30" }}
              >
                <Text fontSize="5xl" fontWeight="900" color="red.solid" mb={2}>
                  R$ 1 milhão+
                </Text>
                <Text color="fg.muted" fontSize="sm">
                  Perdas anuais estimadas
                </Text>
              </Box>

              <Text color="fg.muted" lineHeight="tall">
                Em empresas com mais de 500 colaboradores, as perdas anuais com
                passivos e retrabalho podem ultrapassar esse valor.
              </Text>

              <Box
                p={5}
                bg="blue.500/10"
                borderWidth="2px"
                borderColor="blue.200"
                rounded="xl"
                _dark={{ borderColor: "blue.800" }}
              >
                <Text fontWeight="600" color="fg" lineHeight="tall">
                  O Sentinela surge como o antídoto — um serviço que assume o
                  peso operacional do DP para que o empresário possa focar no
                  crescimento, com a certeza de que sua base está protegida.
                </Text>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </Section>

      {/* A Solução */}
      <Section
        title="A Solução"
        subtitle="BPaaS completo para Departamento Pessoal"
        variant="glass"
      >
        <VStack gap={10}>
          <Box
            bg="blue.50"
            p={{ base: 8, md: 12 }}
            rounded="3xl"
            textAlign="center"
            borderWidth="2px"
            borderColor="blue.200"
            position="relative"
            overflow="hidden"
            maxW="5xl"
            mx="auto"
            _dark={{ bg: "blue.950", borderColor: "blue.800" }}
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="100%"
              h="100%"
              bg="blue.500/5"
              rounded="full"
              filter="blur(80px)"
            />

            <VStack gap={6} position="relative" zIndex={2}>
              <Icon color="blue.solid" fontSize="6xl">
                <ShieldCheck />
              </Icon>

              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="600"
                color="fg"
                lineHeight="tall"
              >
                O Sentinela é um{" "}
                <Text as="span" color="blue.solid" fontWeight="900">
                  BPaaS
                </Text>{" "}
                (Business Process as a Service) que executa, monitora e protege
                toda a operação de Departamento Pessoal da sua empresa.
              </Text>

              <Text fontSize="lg" color="fg.muted">
                É mais do que terceirização. É uma entrega de resultados, com
                foco em segurança, conformidade e tranquilidade operacional.
              </Text>
            </VStack>
          </Box>

          <Box
            p={8}
            bg="gradient-to-r"
            gradientFrom="blue.500/5"
            gradientTo="purple.500/5"
            rounded="2xl"
            borderWidth="1px"
            borderColor="border"
            maxW="4xl"
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="700"
              textAlign="center"
              color="blue.solid"
              fontStyle="italic"
              lineHeight="tall"
            >
              "O Sentinela é a torre de controle que garante que tudo funcione
              antes que qualquer problema apareça."
            </Text>
          </Box>
        </VStack>
      </Section>

      {/* Como Funciona - NÃO MEXER */}
      <Section
        title="Como Funciona"
        subtitle="Três fases para implantação completa"
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          <For each={phases}>
            {(phase) => (
              <Box
                bg="bg.subtle"
                p={8}
                rounded="3xl"
                borderWidth="2px"
                borderColor={`${phase.colorScheme}.200`}
                position="relative"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "2xl",
                  borderColor: `${phase.colorScheme}.300`,
                }}
                _dark={{ borderColor: `${phase.colorScheme}.800` }}
              >
                <Box
                  position="absolute"
                  top={-10}
                  right={-10}
                  fontSize="9xl"
                  fontWeight="900"
                  color={`${phase.colorScheme}.100`}
                  opacity={0.5}
                  _dark={{ color: `${phase.colorScheme}.900/30` }}
                >
                  {phase.number}
                </Box>

                <VStack align="stretch" gap={6} position="relative" zIndex={2}>
                  <HStack justify="space-between">
                    <Badge
                      colorPalette={phase.colorScheme}
                      size="lg"
                      px={4}
                      py={2}
                      fontSize="sm"
                      fontWeight="700"
                    >
                      Fase {phase.number}
                    </Badge>
                    <Icon fontSize="4xl" color={`${phase.colorScheme}.solid`}>
                      <phase.icon />
                    </Icon>
                  </HStack>

                  <Heading as="h3" fontSize="2xl" fontWeight="700">
                    {phase.title}
                  </Heading>

                  <Text color="fg.muted" lineHeight="tall">
                    {phase.description}
                  </Text>

                  <Box
                    w="full"
                    h="1px"
                    bg={`${phase.colorScheme}.200`}
                    _dark={{ bg: `${phase.colorScheme}.800` }}
                  />

                  <VStack gap={3} align="stretch">
                    <For each={phase.features}>
                      {(feature) => (
                        <HStack gap={3} align="start">
                          <Icon
                            color={`${phase.colorScheme}.solid`}
                            fontSize="xl"
                            mt={0.5}
                            flexShrink={0}
                          >
                            <feature.icon />
                          </Icon>
                          <Text fontSize="sm" color="fg" lineHeight="tall">
                            {feature.text}
                          </Text>
                        </HStack>
                      )}
                    </For>
                  </VStack>
                </VStack>
              </Box>
            )}
          </For>
        </SimpleGrid>

        <Box
          mt={12}
          p={8}
          bg="blue.50"
          rounded="2xl"
          borderWidth="2px"
          borderColor="blue.200"
          _dark={{ bg: "blue.950", borderColor: "blue.800" }}
        >
          <HStack gap={4}>
            <Icon color="blue.solid" fontSize="3xl" flexShrink={0}>
              <Eye />
            </Icon>
            <Text fontWeight="600" color="fg" lineHeight="tall">
              Durante toda a operação, o cliente mantém visibilidade e poder de
              aprovação via portal colaborativo (conceito Kanban), garantindo
              governança compartilhada e controle total.
            </Text>
          </HStack>
        </Box>
      </Section>

      {/* Estrutura Tecnológica com Swiper */}
      <Section
        title="Estrutura Tecnológica"
        subtitle="Base tecnológica de ponta com operação proativa"
        variant="geometric"
      >
        <Box px={{ base: 0, md: 12 }}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{ paddingBottom: "50px" }}
          >
            {techStack.map((tech, index) => (
              <SwiperSlide key={index}>
                <Box
                  bg="bg.subtle"
                  p={8}
                  rounded="3xl"
                  borderWidth="2px"
                  borderColor="border"
                  position="relative"
                  overflow="hidden"
                  h="full"
                  minH="400px"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: `${tech.color}.300`,
                    shadow: "2xl",
                    transform: "scale(1.02)",
                  }}
                >
                  <VStack align="stretch" gap={6} h="full">
                    <Box
                      p={5}
                      bg={`${tech.color}.500/10`}
                      rounded="2xl"
                      w="fit-content"
                      mx="auto"
                    >
                      <Icon fontSize="6xl" color={`${tech.color}.solid`}>
                        <tech.icon />
                      </Icon>
                    </Box>

                    <VStack align="stretch" gap={3} textAlign="center">
                      <Heading as="h3" fontSize="2xl" fontWeight="700">
                        {tech.title}
                      </Heading>
                      <Text color="fg.muted" lineHeight="tall">
                        {tech.description}
                      </Text>
                    </VStack>

                    <Box w="full" h="2px" bg="border" my={2} />

                    <VStack gap={3} align="stretch" flex={1}>
                      {tech.features.map((feature, fIndex) => (
                        <HStack gap={3} key={fIndex}>
                          <Icon color={`${tech.color}.solid`} fontSize="lg">
                            <CheckCircle2 />
                          </Icon>
                          <Text fontSize="sm" color="fg">
                            {feature}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box
          mt={12}
          p={8}
          bg="gradient-to-r"
          gradientFrom="blue.500/5"
          gradientTo="purple.500/5"
          rounded="2xl"
          borderWidth="1px"
          borderColor="border"
          textAlign="center"
        >
          <HStack justify="center" gap={3} flexWrap="wrap">
            <Icon color="blue.solid" fontSize="2xl">
              <Zap />
            </Icon>
            <Text fontWeight="600" color="fg" fontSize="lg">
              Arquitetura 24/7, auditável, rastreável e escalável
            </Text>
          </HStack>
        </Box>
      </Section>

      {/* Modelo de Serviço - PLANOS REDESENHADOS */}
      <Section
        title="Escolha o Seu Plano"
        subtitle="Investimento inicial + mensalidade recorrente"
        variant="glass"
      >
        <VStack gap={8} position="relative" zIndex={2}>
          <Badge
            colorPalette="blue"
            size="lg"
            px={6}
            py={3}
            fontSize="md"
            fontWeight="700"
          >
            Setup Único
          </Badge>

          <VStack gap={3}>
            <Heading as="h3" fontSize="3xl" fontWeight="700">
              Investimento Inicial
            </Heading>
            <Text color="fg.muted" fontSize="lg">
              Pague uma única vez para começar
            </Text>
          </VStack>

          <VStack gap={10} mb={6}>
            <Text fontSize="sm" color="fg.muted" textTransform="uppercase">
              A partir de
            </Text>
            <Heading
              fontSize="7xl"
              fontWeight="900"
              color="blue.solid"
              lineHeight="none"
            >
              R$ 30.000
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={3} w="full" maxW="3xl">
            <HStack gap={2}>
              <Icon color="blue.solid" fontSize="2xl">
                <Check />
              </Icon>
              <Text fontWeight="600" fontSize="sm">
                Diagnóstico completo
              </Text>
            </HStack>
            <HStack gap={2}>
              <Icon color="blue.solid" fontSize="2xl">
                <Check />
              </Icon>
              <Text fontWeight="600" fontSize="sm">
                Setup de infraestrutura
              </Text>
            </HStack>
            <HStack gap={2}>
              <Icon color="blue.solid" fontSize="2xl">
                <Check />
              </Icon>
              <Text fontWeight="600" fontSize="sm">
                Treinamento do time
              </Text>
            </HStack>
          </SimpleGrid>

          {/* Planos Mensais */}
          <VStack gap={8} w="full">
            <VStack gap={3}>
              <Badge
                colorPalette="purple"
                size="lg"
                px={6}
                py={3}
                fontSize="md"
                fontWeight="700"
              >
                Mensalidade por Colaborador
              </Badge>
              <Heading
                as="h3"
                fontSize="3xl"
                fontWeight="700"
                textAlign="center"
              >
                Escolha o plano ideal para sua empresa
              </Heading>
              <Text
                color="fg.muted"
                fontSize="lg"
                textAlign="center"
                maxW="2xl"
              >
                Todos os planos incluem acesso ao portal de governança, suporte
                especializado e atualizações contínuas
              </Text>
            </VStack>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              gap={6}
              w="full"
              mt={8}
            >
              <For each={pricingPlans}>
                {(plan) => (
                  <Box
                    bg="bg.subtle"
                    p={8}
                    rounded="3xl"
                    borderWidth="3px"
                    borderColor={plan.highlighted ? `blue.400` : "border"}
                    position="relative"
                    overflow="hidden"
                    transition="all 0.3s"
                    transform={plan.highlighted ? "scale(1.05)" : "scale(1)"}
                    shadow={plan.highlighted ? "2xl" : "md"}
                    _hover={{
                      transform: "scale(1.05)",
                      shadow: "2xl",
                      borderColor: `blue.400`,
                    }}
                    _dark={{
                      borderColor: plan.highlighted ? "blue.600" : "border",
                    }}
                  >
                    {plan.highlighted && (
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        py={2}
                        bg={`blue.solid`}
                        textAlign="center"
                      >
                        <Text
                          color="white"
                          fontSize="sm"
                          fontWeight="700"
                          textTransform="uppercase"
                        >
                          {plan.badge}
                        </Text>
                      </Box>
                    )}

                    <VStack
                      gap={6}
                      align="stretch"
                      mt={plan.highlighted ? 8 : 0}
                    >
                      <VStack gap={2} align="start">
                        <Text
                          fontSize="sm"
                          color={`${plan.color}.solid`}
                          fontWeight="700"
                          textTransform="uppercase"
                        >
                          {plan.name}
                        </Text>
                        <Heading
                          fontSize="5xl"
                          fontWeight="900"
                          lineHeight="none"
                        >
                          R$ {plan.price}
                        </Heading>
                        <Text fontSize="sm" color="fg.muted">
                          por colaborador/mês
                        </Text>
                      </VStack>

                      <Box
                        p={4}
                        bg={`${plan.color}.50`}
                        rounded="xl"
                        textAlign="center"
                        _dark={{ bg: `${plan.color}.950/30` }}
                      >
                        <Text fontWeight="700" fontSize="lg" color="fg">
                          {plan.range}
                        </Text>
                        <Text fontSize="sm" color="fg.muted">
                          {plan.employees}
                        </Text>
                      </Box>

                      <Text
                        fontSize="sm"
                        color="fg.muted"
                        textAlign="center"
                        minH="40px"
                      >
                        {plan.description}
                      </Text>

                      <Box w="full" h="1px" bg="border" />

                      <VStack gap={3} align="stretch" flex={1}>
                        <For each={plan.features}>
                          {(feature) => (
                            <HStack gap={2} align="start">
                              <Icon
                                color={`${plan.color}.solid`}
                                fontSize="lg"
                                mt={0.5}
                                flexShrink={0}
                              >
                                <Check />
                              </Icon>
                              <Text fontSize="sm" lineHeight="tall">
                                {feature}
                              </Text>
                            </HStack>
                          )}
                        </For>
                      </VStack>

                      <Button
                        colorPalette={plan.color}
                        size="lg"
                        variant={plan.highlighted ? "solid" : "outline"}
                        w="full"
                      >
                        Escolher Plano
                        <Icon>
                          <ArrowRight />
                        </Icon>
                      </Button>
                    </VStack>
                  </Box>
                )}
              </For>
            </SimpleGrid>
          </VStack>
        </VStack>
      </Section>

      {/* SLA e Garantias */}
      <Section title="SLA e Garantias" subtitle="Compromisso com excelência">
        <VStack align="stretch" gap={6}>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            lineHeight="tall"
            mx="auto"
          >
            Nosso compromisso vai além da tecnologia. Garantimos a excelência
            operacional com SLAs claros e suporte dedicado para sua
            tranquilidade.
          </Text>

          <Box
            w="full"
            h="1px"
            bg="gradient-to-r"
            gradientFrom="transparent"
            gradientVia="border"
            gradientTo="transparent"
          />

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <For each={slaItems}>
              {(item) => (
                <HStack align="start" gap={4}>
                  <Icon
                    fontSize="2xl"
                    color={`${item.color}.solid`}
                    flexShrink={0}
                  >
                    <item.icon />
                  </Icon>
                  <VStack align="start" gap={1} flex={1}>
                    <HStack gap={3} flexWrap="wrap">
                      <Text fontWeight="700" fontSize="lg">
                        {item.title}
                      </Text>
                      <Badge colorPalette={item.color} size="sm">
                        {item.value}
                      </Badge>
                    </HStack>
                    <Text color="fg.muted" fontSize="sm" lineHeight="tall">
                      {item.description}
                    </Text>
                  </VStack>
                </HStack>
              )}
            </For>
          </SimpleGrid>
        </VStack>
      </Section>

      {/* Retorno e Valor */}
      <Section
        title="Retorno e Valor Entregue"
        subtitle="Resultados comprovados"
        variant="gradient"
      >
        <VStack gap={0} rounded="xl" borderWidth={2} overflow="hidden">
          <For each={metrics}>
            {(metric) => (
              <HStack
                gap={{ base: 4, md: 6 }}
                align="center"
                p={{ base: 6, md: 8 }}
                bg="white"
                borderBottomWidth="2px"
                borderColor={`${metric.color}.200`}
                _dark={{ bg: "gray.900", borderColor: `${metric.color}.800` }}
                _last={{
                  borderBottomWidth: 0,
                }}
                w="full"
              >
                <Box
                  p={4}
                  bg={`${metric.color}.500/10`}
                  rounded="xl"
                  flexShrink={0}
                >
                  <Icon fontSize="4xl" color={`${metric.color}.solid`}>
                    <metric.icon />
                  </Icon>
                </Box>

                <VStack align="start" gap={2} flex={1}>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: "lg", md: "xl" }}
                    lineHeight="short"
                  >
                    {metric.label}
                  </Text>
                  <Text color="fg.muted" fontSize="sm" lineHeight="tall">
                    {metric.description}
                  </Text>
                </VStack>

                <Box flexShrink={0}>
                  <Text
                    fontSize={{ base: "3xl", md: "5xl" }}
                    fontWeight="900"
                    color={`${metric.color}.solid`}
                    lineHeight="none"
                  >
                    {metric.value}
                  </Text>
                </Box>
              </HStack>
            )}
          </For>
        </VStack>

        <Text
          fontSize={{ base: "lg", md: "gl" }}
          color="fg"
          lineHeight="tall"
          mt={4}
        >
          O investimento é racional. O retorno é financeiro e emocional:
          segurança, previsibilidade e tranquilidade para o gestor e para toda a
          operação.
        </Text>
      </Section>

      {/* Benefícios com Swiper */}
      <Section title="Benefícios Diretos" subtitle="Valor entregue">
        <Box px={{ base: 0, md: 8 }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{ paddingBottom: "50px" }}
          >
            {benefits.map((benefit, index) => (
              <SwiperSlide key={index}>
                <Box
                  bg="bg.subtle"
                  p={6}
                  rounded="2xl"
                  borderWidth="2px"
                  borderColor="border"
                  h="full"
                  minH="200px"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: `${benefit.color}.300`,
                    shadow: "xl",
                    transform: "translateY(-4px)",
                  }}
                >
                  <VStack align="stretch" gap={4} h="full">
                    <Box
                      p={3}
                      bg={`${benefit.color}.500/10`}
                      rounded="xl"
                      w="fit-content"
                    >
                      <Icon fontSize="3xl" color={`${benefit.color}.solid`}>
                        <benefit.icon />
                      </Icon>
                    </Box>

                    <VStack align="start" gap={2} flex={1}>
                      <Text fontWeight="700" fontSize="lg" lineHeight="short">
                        {benefit.title}
                      </Text>
                      <Text color="fg.muted" fontSize="sm" lineHeight="tall">
                        {benefit.description}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box
          mt={12}
          p={10}
          bg="gradient-to-r"
          gradientFrom="blue.50"
          gradientTo="purple.50"
          rounded="3xl"
          textAlign="center"
          borderWidth="2px"
          borderColor="blue.200"
          _dark={{
            gradientFrom: "blue.950",
            gradientTo: "purple.950",
            borderColor: "blue.800",
          }}
        >
          <Icon color="blue.solid" fontSize="6xl" mb={6}>
            <Shield />
          </Icon>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            color="blue.solid"
            fontStyle="italic"
            lineHeight="tall"
          >
            "Enquanto a operação acontece, o Sentinela vela por ela —
            silenciosamente, com precisão e vigilância."
          </Text>
        </Box>
      </Section>

      {/* Diferenciais */}
      <Section
        title="Diferenciais Shift+G"
        subtitle="Por que escolher o Sentinela"
        variant="geometric"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          <For each={differentials}>
            {(diff) => (
              <HStack align="start" gap={4}>
                <Box flexShrink={0} pt={1}>
                  <Icon fontSize="xl" color={`${diff.color}.solid`}>
                    <diff.icon />
                  </Icon>
                </Box>
                <VStack align="start" gap={1} flex={1}>
                  <Text fontWeight="700" fontSize="md" lineHeight="short">
                    {diff.title}
                  </Text>
                  <Text color="fg.muted" fontSize="sm" lineHeight="tall">
                    {diff.description}
                  </Text>
                </VStack>
              </HStack>
            )}
          </For>
        </SimpleGrid>
      </Section>

      <Footer />
    </Page>
  );
}
