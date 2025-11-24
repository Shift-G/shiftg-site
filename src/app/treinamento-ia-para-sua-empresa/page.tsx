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
  List,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Target,
  Users,
  BookOpen,
  Zap,
  Award,
  Brain,
  Lock,
  TrendingUp,
  Clock,
  Lightbulb,
  FileText,
  Briefcase,
  GraduationCap,
  AlertCircle,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Treinamento de IA In Company | Shift+G",
  description: "Capacitação prática e estratégica para equipes que precisam usar IA com segurança, clareza e produtividade.",
};

function Hero() {
  return (
    <Box
      as="section"
      w={{ base: "full", md: "98dvw" }}
      mx={{ base: 0, md: "1dvw" }}
      rounded="3xl"
      minH={{ base: "auto", md: "90vh" }}
      position="relative"
      display="flex"
      alignItems="center"
      overflow="hidden"
      py={{ base: 20, md: 0 }}
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={0.6}
        backgroundImage="radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 80% 70%, #8b5cf6 0%, transparent 40%)"
        backgroundSize="100% 100%"
        hideBelow="sm"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack gap={{ base: 8, md: 12 }} maxW="4xl" mx="auto" align="center" textAlign="center">
          <Badge
            colorPalette="blue"
            size={{ base: "xs", md: "lg" }}
            px={5}
            py={2}
            rounded="full"
            fontWeight="medium"
            letterSpacing="wide"
            textTransform="none"
            bg="blue.50/30"
            color="blue.700"
            border="1px solid"
            borderColor="blue.600/30"
            backdropFilter="blur(12px)"
          >
            Treinamento Empresarial
          </Badge>

          <Heading
            as="h1"
            size={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="700"
            letterSpacing="-0.04em"
            lineHeight="1.1"
            bgImage="linear-gradient(35deg, {colors.blue.600}, {colors.blue.600})"
            bgClip="text"
          >
            Treinamento de IA In Company
          </Heading>

          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            color="gray.700"
            fontWeight="medium"
            lineHeight="1.4"
          >
            Capacitação prática e estratégica para equipes que precisam usar IA com segurança, clareza e produtividade.
          </Text>

          <VStack gap={3} fontSize={{ base: "lg", md: "xl" }} color="gray.600" lineHeight="1.6">
            <Text fontWeight="500">
              <strong style={{ color: "#3b82f6" }}>Transformamos conhecimento</strong> em prática.
            </Text>
            <Text fontWeight="500">
              <strong style={{ color: "#8b5cf6" }}>Transformamos prática</strong> em eficiência.
            </Text>
            <Text fontWeight="500">
              <strong style={{ color: "#ec4899" }}>Transformamos eficiência</strong> em vantagem competitiva.
            </Text>
          </VStack>

          <Button
            asChild
            size="xl"
            colorPalette="blue"
            fontSize="lg"
            h={14}
            px={10}
            bgImage="linear-gradient(35deg, {colors.blue.400}, {colors.blue.600})"
            _hover={{
              bgImage: "linear-gradient(35deg, {colors.blue.500}, {colors.blue.600})",
              transform: "translateY(-2px)",
              shadow: "xl"
            }}
            transition="all 0.3s"
            shadow="lg"
          >
            <Link href="/contato">
              Agendar Treinamento
              <ArrowRight />
            </Link>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

function WhyNowSection() {
  const challenges = [
    "o que a IA realmente é",
    "como funciona",
    "quais riscos envolve",
    "como usar com segurança",
    "como aplicar no dia a dia de forma produtiva"
  ];

  return (
    <Box py={{ base: 16, md: 24 }}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 12, md: 20 }} alignItems="center">
          <VStack align="start" gap={6}>
            <Heading as="h2" size="4xl" fontWeight="bold" letterSpacing="-0.03em">
              Por que treinar sua equipe em IA agora
            </Heading>
            <Text fontSize="2xl" color="blue.600" fontWeight="semibold" lineHeight="tall">
              A IA já está na operação — o que falta é maturidade para usar.
            </Text>
            <Text fontSize="lg" color="fg.muted" lineHeight="tall">
              A maioria das equipes não sabe:
            </Text>
            <List.Root gap={3} fontSize="lg" color="fg.muted" listStyle="none">
              {challenges.map((item, index) => (
                <List.Item key={index}>
                  <List.Indicator asChild color="blue.500">
                    <AlertCircle size={20} />
                  </List.Indicator>
                  {item}
                </List.Item>
              ))}
            </List.Root>
          </VStack>

          <Box
            p={10}
            bgImage="linear-gradient(35deg, {colors.blue.600}, {colors.blue.600})"
            rounded="3xl"
            color="white"
            position="relative"
            overflow="hidden"
            shadow="2xl"
          >
            <Box
              position="absolute"
              top={-10}
              right={-10}
              w="64"
              h="64"
              bg="white"
              filter="blur(100px)"
              opacity={0.1}
              rounded="full"
            />
            <VStack gap={6} align="start" position="relative" zIndex={1}>
              <Box p={3} bg="white/20" rounded="xl" backdropFilter="blur(8px)">
                <Target size={32} />
              </Box>
              <Heading size="2xl" fontWeight="bold">
                Sem preparo, empresas não capturam o ROI que a IA pode gerar
              </Heading>
              <Text fontSize="lg" color="white/90" lineHeight="tall">
                Nosso programa elimina ruído, esclarece dúvidas e cria confiança para que a IA seja usada de maneira estruturada, segura e eficiente.
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function WhatIsSection() {
  const pillars = [
    { icon: Target, text: "clareza executiva" },
    { icon: Zap, text: "prática real" },
    { icon: Shield, text: "segurança e governança" },
    { icon: TrendingUp, text: "visão estratégica" }
  ];

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="7xl">
        <VStack gap={12} textAlign="center">
          <VStack gap={4} maxW="4xl">
            <Heading as="h2" size="4xl" fontWeight="bold">
              O que é o Treinamento de IA In Company da Shift+G
            </Heading>
            <Text fontSize="xl" color="fg.muted" lineHeight="tall">
              Um programa feito sob medida para empresas que querem elevar o nível de suas equipes e criar cultura digital sólida.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 2, md: 4 }} gap={6} w="full">
            {pillars.map((pillar, index) => (
              <Box
                key={index}
                p={8}
                bg="white"
                rounded="2xl"
                border="1px solid"
                borderColor="gray.200"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "xl",
                  borderColor: "blue.300"
                }}
              >
                <VStack gap={4}>
                  <Box p={3} bg="blue.50" color="blue.600" rounded="xl">
                    <pillar.icon size={28} />
                  </Box>
                  <Text fontWeight="semibold" fontSize="md" textAlign="center">
                    {pillar.text}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>


          <Text fontSize="2xl" fontWeight="bold">
            É treinamento para fazer, não apenas para entender.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

function ProgramContentSection() {
  const modules = [
    {
      icon: Brain,
      title: "1. Fundamentos de IA aplicada ao negócio",
      subtitle: "Clareza sem tecnicismos. Objetividade sem superficialidade.",
      topics: [
        "O que é IA, em termos práticos",
        "Como modelos funcionam e onde fazem sentido",
        "Riscos, limitações e governança",
        "Identificar oportunidades reais no dia a dia",
        "Mudanças em eficiência, decisão e operação"
      ],
      color: "blue"
    },
    {
      icon: Zap,
      title: "2. Uso prático das ferramentas de IA",
      subtitle: "Módulo altamente aplicado, focado em produtividade.",
      topics: [
        "Construção de prompts eficazes",
        "Análise e revisão de textos",
        "Automações simples e suporte a decisões",
        "Geração de relatórios e documentos",
        "Fluxos inteligentes integrados ao trabalho real"
      ],
      color: "blue"
    },
    {
      icon: Lock,
      title: "3. Governança, segurança e boas práticas",
      subtitle: "IA precisa ser usada com responsabilidade.",
      topics: [
        "Riscos de vazamento de dados",
        "Boas práticas de segurança",
        "Limites e cuidados com ferramentas externas",
        "Criar regras internas e uso consciente",
        "Políticas de privacidade e diretrizes corporativas"
      ],
      color: "red"
    },
    {
      icon: Award,
      title: "4. Workshops executivos para C-Level",
      subtitle: "Formato voltado a decisão, eficiência e estratégia.",
      topics: [
        "Impacto real da IA em operações",
        "Aceleração de processos críticos",
        "Estimativas de ROI",
        "Riscos de não adoção",
        "Liderar equipes em ambiente de IA"
      ],
      color: "orange"
    },
    {
      icon: Users,
      title: "5. Programas para equipes operacionais",
      subtitle: "Aplicação prática para atividades específicas.",
      topics: [
        "Atendimento e SAC",
        "Operações industriais",
        "Financeiro/contábil",
        "RH e gestão de pessoas",
        "Vendas, jurídico, marketing"
      ],
      color: "green"
    },
    {
      icon: FileText,
      title: "6. Criação de Playbooks Internos",
      subtitle: "Garantia de continuidade e escala.",
      topics: [
        "Melhores práticas documentadas",
        "Regras de uso padronizadas",
        "Orientações de segurança",
        "Fluxos de trabalho recomendados",
        "Exemplos práticos aplicados à empresa"
      ],
      color: "cyan"
    }
  ];

  return (
    <Box py={{ base: 16, md: 24 }}>
      <Container maxW="7xl">
        <VStack gap={12}>
          <VStack gap={4} textAlign="center" maxW="4xl">
            <Heading as="h2" size="4xl" fontWeight="bold">
              Conteúdo do Programa
            </Heading>
            <Text fontSize="xl" color="fg.muted">
              Seis módulos completos que transformam sua equipe
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            {modules.map((module, index) => (
              <Box
                key={index}
                p={8}
                bg="white"
                rounded="2xl"
                border="2px solid"
                borderColor="gray.100"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-6px)",
                  shadow: "2xl",
                  borderColor: `${module.color}.300`
                }}
              >
                <VStack gap={6} align="start">
                  <Box
                    p={3}
                    bg={`${module.color}.50`}
                    color={`${module.color}.600`}
                    rounded="xl"
                  >
                    <module.icon size={32} />
                  </Box>
                  <VStack gap={2} align="start">
                    <Heading as="h3" size="lg" fontWeight="bold">
                      {module.title}
                    </Heading>
                    <Text fontSize="sm" color={`${module.color}.600`} fontWeight="medium">
                      {module.subtitle}
                    </Text>
                  </VStack>
                  <List.Root gap={2} fontSize="sm" color="fg.muted" listStyle="none">
                    {module.topics.map((topic, idx) => (
                      <List.Item key={idx}>
                        <List.Indicator asChild color={`${module.color}.500`}>
                          <CheckCircle2 size={16} />
                        </List.Indicator>
                        {topic}
                      </List.Item>
                    ))}
                  </List.Root>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

function FormatsSection() {
  const formats = [
    { icon: GraduationCap, title: "Treinamento completo", subtitle: "1 ou 2 dias intensivos" },
    { icon: Clock, title: "Workshop intensivo", subtitle: "4 horas práticas" },
    { icon: Lightbulb, title: "Módulos sob demanda", subtitle: "Personalizados para sua necessidade" },
    { icon: Briefcase, title: "Imersão para diretoria", subtitle: "Visão estratégica executiva" },
    { icon: Rocket, title: "Programas contínuos", subtitle: "Sessões mensais recorrentes" },
    { icon: Zap, title: "Aulas práticas", subtitle: "Foco em produtividade diária" }
  ];

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="7xl">
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading as="h2" size="4xl" fontWeight="bold">
              Formatos Disponíveis
            </Heading>
            <Text fontSize="xl" color="fg.muted" maxW="3xl">
              Flexibilidade total para se adaptar à sua empresa
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
            {formats.map((format, index) => (
              <Box
                key={index}
                p={8}
                bg="white"
                rounded="xl"
                border="1px solid"
                borderColor="gray.200"
                transition="all 0.2s"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "lg",
                  borderColor: "blue.300"
                }}
              >
                <HStack gap={4}>
                  <Box p={2} bg="blue.50" color="blue.600" rounded="lg">
                    <format.icon size={24} />
                  </Box>
                  <VStack align="start" gap={1}>
                    <Text fontWeight="bold" fontSize="lg">
                      {format.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                      {format.subtitle}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>


          <Text fontSize="2xl" fontWeight="bold">
            A entrega é flexível — o resultado, não.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

function WhenSection() {
  const scenarios = [
    { icon: TrendingUp, text: "Aumentar produtividade rapidamente" },
    { icon: AlertCircle, text: "Equipes têm dúvidas, receios ou visão limitada" },
    { icon: Target, text: "Liderança quer clareza estratégica" },
    { icon: Shield, text: "Existe resistência ou baixa maturidade digital" },
    { icon: Rocket, text: "Vai iniciar um projeto de IA" },
    { icon: Lock, text: "Precisa padronizar boas práticas" },
    { icon: Users, text: "Quer criar cultura digital consistente" },
    { icon: CheckCircle2, text: "Acelerar adoção e reduzir ruído" }
  ];

  return (
    <Box py={{ base: 16, md: 24 }}>
      <Container maxW="7xl">
        <VStack gap={12}>
          <VStack gap={4} textAlign="center" maxW="4xl">
            <Heading as="h2" size="4xl" fontWeight="bold">
              Quando este treinamento faz diferença
            </Heading>
            <Text fontSize="xl" color="fg.muted">
              Em todos esses cenários, o treinamento acelera adoção e reduz ruído
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} w="full">
            {scenarios.map((scenario, index) => (
              <Box
                key={index}
                p={6}
                bg="white"
                rounded="xl"
                border="1px solid"
                borderColor="gray.200"
                transition="all 0.2s"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "md",
                  borderColor: "blue.300"
                }}
              >
                <VStack gap={3} align="center">
                  <Box p={2} bg="blue.50" color="blue.600" rounded="lg">
                    <scenario.icon size={24} />
                  </Box>
                  <Text fontWeight="medium" fontSize="sm" textAlign="center">
                    {scenario.text}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

function WhyShiftGSection() {
  const differentials = [
    "Linguagem clara e executiva",
    "Treinamento aplicado à realidade do cliente",
    "Conteúdo atualizado e alinhado às melhores práticas",
    "Equilíbrio entre visão estratégica e produtividade real",
    "Seriedade institucional e rigor técnico",
    "Capacidade de ensinar temas complexos com simplicidade",
    "Expertise prática em IA aplicada a negócios",
    "Formação que gera impacto imediato no dia a dia"
  ];

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.900" color="white">
      <Container maxW="7xl">
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading as="h2" size="4xl" fontWeight="bold">
              Por que escolher a Shift+G
            </Heading>
            <Text fontSize="xl" color="gray.300">
              Somos a equipe que transforma entendimento em eficiência
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            {differentials.map((item, index) => (
              <HStack
                key={index}
                p={6}
                bg="white/5"
                rounded="xl"
                border="1px solid"
                borderColor="white/10"
                backdropFilter="blur(8px)"
                transition="all 0.2s"
                _hover={{
                  bg: "white/10",
                  borderColor: "blue.400/50"
                }}
              >
                <Box color="blue.400" flexShrink={0}>
                  <CheckCircle2 size={24} />
                </Box>
                <Text fontSize="lg" fontWeight="medium">
                  {item}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

import { ContactForm } from "@/components/forms/ContactForm";

function CTASection() {
  return (
    <Box py={{ base: 16, md: 24 }} id="contato" bg="gray.50">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 20 }} alignItems="center">
          <VStack gap={8} align="start" maxW="xl">
            <Badge
              colorPalette="blue"
              size="lg"
              px={4}
              py={1}
              rounded="full"
              bg="blue.100"
              color="blue.700"
            >
              Vamos conversar?
            </Badge>

            <Heading as="h2" size="4xl" fontWeight="bold" letterSpacing="-0.02em" lineHeight="1.1">
              Eleve o nível da sua equipe com IA
            </Heading>

            <Text fontSize="xl" color="gray.600" lineHeight="tall">
              A maturidade da sua empresa em IA começa pelas pessoas. Preencha o formulário e receba uma proposta personalizada para o seu cenário.
            </Text>

            <VStack gap={6} w="full" pt={4} align="stretch">
              <HStack gap={4}>
                <Box p={3} bg="blue.100" color="blue.600" rounded="xl">
                  <CheckCircle2 size={24} />
                </Box>
                <VStack align="start" gap={0}>
                  <Text fontWeight="bold" fontSize="lg">Atendimento Rápido</Text>
                  <Text color="gray.600">Retorno em até 24h úteis</Text>
                </VStack>
              </HStack>

              <HStack gap={4}>
                <Box p={3} bg="purple.100" color="purple.600" rounded="xl">
                  <Target size={24} />
                </Box>
                <VStack align="start" gap={0}>
                  <Text fontWeight="bold" fontSize="lg">Proposta Sob Medida</Text>
                  <Text color="gray.600">Análise do seu setor e porte</Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          <Box position="relative" zIndex={1}>
            {/* Decorative blob behind form */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="120%"
              h="120%"
              bgGradient="radial(blue.200, transparent 70%)"
              opacity={0.5}
              filter="blur(40px)"
              zIndex={-1}
            />
            <ContactForm />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default function TreinamentoIAPage() {
  return (
    <Page>
      <Navbar />
      <VStack gap={0} w="full" as="main" align="stretch">
        <Hero />
        <WhyNowSection />
        <WhatIsSection />
        <ProgramContentSection />
        <FormatsSection />
        <WhenSection />
        <WhyShiftGSection />
        <CTASection />
      </VStack>
      <Footer />
    </Page>
  );
}
