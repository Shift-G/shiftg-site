import { Metadata } from "next";
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  List,
  Stack,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { FeatureCard } from "@/components/cards/feature-card";
import {
  Code,
  Cog,
  Database,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Target,
  ChevronRight,
  MessageCircle,
  Mail,
  Wrench,
  Building2,
  BarChart3,
  Lock,
  Layers,
  Rocket,
  CheckCircle,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_EMAIL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: `Fábrica de Software | ${SITE_NAME}`,
  description:
    "Desenvolvemos software sob medida que resolve desafios únicos do seu negócio. Sistemas personalizados, integração inteligente e automação de processos para empresas que buscam eficiência e autonomia.",
  keywords: [
    "fábrica de software",
    "desenvolvimento personalizado",
    "software sob medida",
    "automação de processos",
    "sistemas corporativos",
    "integração de sistemas",
    "dashboards executivos",
    "desenvolvimento ágil",
    "ferramentas corporativas",
    "plataformas internas",
  ],
  openGraph: {
    title: `Fábrica de Software | ${SITE_NAME}`,
    description:
      "Software sob medida que resolve os desafios únicos do seu negócio. Deixe as limitações das ferramentas genéricas para trás.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/fabrica-de-software`,
    siteName: `${SITE_NAME} - Fábrica de Software`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Fábrica de Software | ${SITE_NAME}`,
    description:
      "Software sob medida que resolve os desafios únicos do seu negócio. Deixe as limitações das ferramentas genéricas para trás.",
  },
};

const problems = [
  {
    title: "Processos Manuais e Lentos",
    description:
      "Tarefas repetitivas que consomem tempo precioso e geram gargalos operacionais na sua equipe.",
    icon: <Cog size={24} />,
  },
  {
    title: "Silos de Informação",
    description:
      "Dados importantes espalhados por diferentes sistemas, impedindo uma visão unificada do negócio.",
    icon: <Database size={24} />,
  },
  {
    title: "Baixa Autonomia",
    description:
      "Dependência constante de fornecedores externos para customizações simples ou extração de relatórios.",
    icon: <Lock size={24} />,
  },
  {
    title: "Soluções Rígidas",
    description:
      "Ferramentas que forçam sua operação a se adaptar a elas, e não o contrário.",
    icon: <Wrench size={24} />,
  },
];

const teamSolutions = [
  {
    title: "Plataformas Internas Customizadas",
    description:
      "Sistemas de onboarding, avaliação de desempenho, gestão de metas e solicitações internas, desenhados para a sua cultura.",
    icon: <Building2 size={24} />,
  },
  {
    title: "Automação de Workflows",
    description:
      "Ferramentas para automatizar aprovações, relatórios financeiros, conciliação de dados e processos de back-office.",
    icon: <Zap size={24} />,
  },
  {
    title: "Portais de Colaboradores e Clientes",
    description:
      "Ambientes centralizados e seguros para comunicação, consulta de informações e autoatendimento.",
    icon: <Users size={24} />,
  },
];

const managementSolutions = [
  {
    title: "Dashboards Operacionais em Tempo Real",
    description:
      "Painéis que consolidam métricas de diferentes fontes (ERP, CRM, planilhas) para uma visão clara da performance.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Sistemas de Controle e Compliance",
    description:
      "Ferramentas para garantir a conformidade com regulações, auditar processos e gerenciar riscos.",
    icon: <Shield size={24} />,
  },
  {
    title: "Integrações Inteligentes",
    description:
      "Conectamos seus softwares existentes (ERP, CRM, ATS) para criar um ecossistema de dados coeso e funcional.",
    icon: <Layers size={24} />,
  },
];

const approach = [
  {
    step: "01",
    title: "Imersão e Diagnóstico",
    description:
      "Mergulhamos no seu desafio para entender as causas e não apenas os sintomas. Mapeamos processos, entrevistamos usuários e definimos os KPIs de sucesso.",
  },
  {
    step: "02",
    title: "Design e Prototipação",
    description:
      "Desenhamos a solução com foco total na experiência do usuário (UX). Validamos fluxos e interfaces antes de escrever a primeira linha de código.",
  },
  {
    step: "03",
    title: "Desenvolvimento Ágil",
    description:
      "Construímos sua solução em ciclos rápidos, com entregas incrementais. Você acompanha o progresso de perto e tem visibilidade total do projeto.",
  },
  {
    step: "04",
    title: "Entrega e Evolução",
    description:
      "Entregamos uma solução pronta para uso, com treinamento e suporte. Nossos sistemas são feitos para evoluir junto com a sua empresa.",
  },
];

const differentials = [
  {
    title: "DNA de Dados e IA",
    description:
      "Mesmo nas soluções sem IA, construímos sistemas com uma arquitetura preparada para o futuro, facilitando análises e a eventual implementação de inteligência.",
    icon: <Code size={24} />,
  },
  {
    title: "Foco no Executivo",
    description:
      "Falamos a sua língua. Entendemos de budget, ROI e impacto estratégico. Nossa meta é resolver seu problema de negócio, não apenas entregar um software.",
    icon: <Target size={24} />,
  },
  {
    title: "Escalabilidade Nativa",
    description:
      "Nossas soluções são desenvolvidas em nuvem, prontas para crescer em volume de usuários e dados sem perder performance.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Autonomia Real",
    description:
      "Nosso objetivo é empoderar seu time. Entregamos ferramentas que reduzem dependências, simplificam processos e dão mais autonomia para a gestão.",
    icon: <Rocket size={24} />,
  },
];

export default function SoftwareFactoryPage() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        minH="90vh"
        display="flex"
        alignItems="center"
        bg="bg"
      >
        {/* Background Elements */}
        <Box
          position="absolute"
          top="10%"
          right="5%"
          w="200px"
          h="200px"
          borderRadius="full"
          bg="{colors.blue.500/5}"
          backdropFilter="blur(10px)"
          animation="float 8s ease-in-out infinite"
          zIndex={0}
        />
        <Box
          position="absolute"
          bottom="15%"
          left="3%"
          w="120px"
          h="120px"
          borderRadius="lg"
          bg="{colors.blue.500/5}"
          backdropFilter="blur(10px)"
          animation="float 6s ease-in-out infinite reverse"
          zIndex={0}
        />

        <Container maxW="7xl" py={{ base: 16, md: 24 }} position="relative" zIndex={1}>
          <VStack gap={{ base: 8, md: 12 }} maxW="5xl" mx="auto" textAlign="center">
            {/* Badge */}
            <Box
              px={4}
              py={2}
              rounded="full"
              bg="{colors.blue.500/10}"
              border="1px solid {colors.blue.500/20}"
            >
              <Text
                fontSize="sm"
                fontWeight="600"
                color="blue.solid"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Fábrica de Software
              </Text>
            </Box>

            {/* Title */}
            <VStack gap={4}>
              <Heading
                as="h1"
                size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="900"
                lineHeight="none"
                letterSpacing="tight"
                color="fg"
              >
                Tecnologia que{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                  bgClip="text"
                >
                  Impulsiona
                </Text>{" "}
                sua Operação
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Desenvolvemos as ferramentas que sua empresa precisa para operar
                com máxima eficiência, autonomia e inteligência. Com ou sem IA.
              </Text>
            </VStack>

            {/* CTA */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              gap={6}
              w={{ base: "full", sm: "auto" }}
              mt={8}
            >
              <Link href="#contato" passHref>
                <Button
                  size="xl"
                  px={10}
                  py={6}
                  variant="solid"
                  colorPalette="blue"
                >
                  Falar com um Especialista
                  <ChevronRight size={20} style={{ marginLeft: "12px" }} />
                </Button>
              </Link>
            </Stack>

            <Text fontSize="lg" color="fg.muted" fontWeight="500">
              Consultoria gratuita • Software sob medida
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Problems Section */}
      <Section
        title="Ferramentas Genéricas Não Resolvem Desafios Únicos"
        subtitle="Sua equipe ainda depende de planilhas complexas que só uma pessoa entende? Seus processos estão amarrados a sistemas legados ou a softwares de prateleira que não conversam entre si?"
        centered
        variant="gradient"
      >
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="fg.muted"
          textAlign="center"
          mb={{ base: 8, md: 12 }}
          maxW="4xl"
          mx="auto"
        >
          A realidade de muitas empresas é clara:
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {problems.map((problem, index) => (
            <FeatureCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              highlighted={index === 0}
            />
          ))}
        </SimpleGrid>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="fg.muted"
          textAlign="center"
          mt={{ base: 8, md: 12 }}
          maxW="4xl"
          mx="auto"
        >
          Essa falta de flexibilidade não apenas reduz a produtividade, mas
          também impede a inovação e o crescimento.
        </Text>
      </Section>

      {/* Solution Section */}
      <Section
        title="A Solução: Software Sob Medida, Desenvolvido para Você"
        subtitle="Nem todo desafio precisa de Inteligência Artificial, mas todo desafio precisa da ferramenta certa."
        centered
      >
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="fg.muted"
          textAlign="center"
          maxW="5xl"
          mx="auto"
          lineHeight="tall"
        >
          Nossa{" "}
          <Text as="span" fontWeight="700" color="blue.solid">
            Fábrica de Software
          </Text>{" "}
          é o braço de desenvolvimento da Shift+G dedicado a construir soluções
          corporativas personalizadas. Traduzimos as necessidades específicas
          do seu negócio em sistemas robustos, escaláveis e intuitivos, que
          entregam o controle da operação de volta para as suas mãos.
        </Text>

        <Box
          mt={{ base: 8, md: 12 }}
          p={{ base: 6, md: 8 }}
          rounded="2xl"
          bg="{colors.blue.500/10}"
          border="1px solid {colors.blue.500/20}"
          textAlign="center"
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="600"
            color="blue.solid"
          >
            Nós criamos a ponte entre a sua estratégia e a execução, garantindo
            que a tecnologia trabalhe a seu favor.
          </Text>
        </Box>
      </Section>

      {/* Specialized Services Section */}
      <Section
        title="Nossos Serviços Especializados"
        subtitle="Duas verticais especializadas para atender diferentes necessidades do seu negócio digital."
        centered
        variant="glass"
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 8, md: 12 }}>
          {/* SaaS Development */}
          <Box
            p={{ base: 6, md: 8 }}
            rounded="2xl"
            bg="{colors.blue.500/10}"
            border="1px solid {colors.blue.500/20}"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-4px)",
              borderColor: "{colors.blue.500/40}",
            }}
          >
            <VStack align="flex-start" gap={6}>
              <HStack gap={4}>
                <Box
                  p={4}
                  rounded="xl"
                  bg="{colors.blue.500}"
                  color="white"
                >
                  <Rocket size={24} />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Heading
                    as="h3"
                    size="xl"
                    fontWeight="700"
                    color="fg"
                  >
                    Construa seu SaaS
                  </Heading>
                  <Text color="blue.solid" fontSize="sm" fontWeight="600">
                    Plataformas Escaláveis
                  </Text>
                </VStack>
              </HStack>

              <Text
                color="fg.muted"
                fontSize="lg"
                lineHeight="tall"
              >
                Transforme sua ideia em um SaaS rentável. Desenvolvemos
                plataformas completas, escaláveis e prontas para conquistar o
                mercado. Da MVP ao produto final.
              </Text>

              <VStack align="flex-start" gap={3} w="full">
                {[
                  "Arquitetura Multi-tenant",
                  "Sistema de Billing",
                  "MVP em 8-12 semanas",
                  "Escalabilidade garantida",
                ].map((feature) => (
                  <HStack key={feature} gap={3}>
                    <CheckCircle size={20} color="{colors.blue.500}" />
                    <Text color="fg.muted" fontSize="md">
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </VStack>

              <Link href="/fabrica-de-software/construa-seu-saas" passHref>
                <Button
                  size="lg"
                  variant="solid"
                  colorPalette="blue"
                  w="full"
                  mt={4}
                >
                  Explorar SaaS Development
                  <ChevronRight size={18} style={{ marginLeft: "8px" }} />
                </Button>
              </Link>
            </VStack>
          </Box>

          {/* Web Development */}
          <Box
            p={{ base: 6, md: 8 }}
            rounded="2xl"
            bg="{colors.whiteAlpha.50}"
            border="1px solid {colors.whiteAlpha.200}"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-4px)",
              borderColor: "{colors.blue.500/40}",
              bg: "{colors.whiteAlpha.100}",
            }}
          >
            <VStack align="flex-start" gap={6}>
              <HStack gap={4}>
                <Box
                  p={4}
                  rounded="xl"
                  bg="{colors.blue.500/10}"
                  color="blue.solid"
                >
                  <Globe size={24} />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Heading
                    as="h3"
                    size="xl"
                    fontWeight="700"
                    color="fg"
                  >
                    Seu Negócio na Web
                  </Heading>
                  <Text color="blue.solid" fontSize="sm" fontWeight="600">
                    Sites & E-commerce
                  </Text>
                </VStack>
              </HStack>

              <Text
                color="fg.muted"
                fontSize="lg"
                lineHeight="tall"
              >
                Sites e e-commerces profissionais que transformam visitantes em
                clientes. Presença digital que realmente vende e gera
                resultados para seu negócio.
              </Text>

              <VStack align="flex-start" gap={3} w="full">
                {[
                  "Design Responsivo",
                  "SEO Otimizado",
                  "E-commerce Completo",
                  "Performance Máxima",
                ].map((feature) => (
                  <HStack key={feature} gap={3}>
                    <CheckCircle size={20} color="{colors.blue.500}" />
                    <Text color="fg.muted" fontSize="md">
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </VStack>

              <Link href="/fabrica-de-software/seu-negocio-na-web" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  colorPalette="blue"
                  w="full"
                  mt={4}
                >
                  Explorar Web Development
                  <ChevronRight size={18} style={{ marginLeft: "8px" }} />
                </Button>
              </Link>
            </VStack>
          </Box>
        </SimpleGrid>
      </Section>

      {/* Solutions by Category */}
      <Section
        title="Soluções que Geram Impacto Real"
        subtitle="Construímos sistemas que resolvem problemas concretos e capacitam seus times."
        centered
        variant="glass"
      >
        <VStack gap={{ base: 12, md: 16 }}>
          {/* Team Solutions */}
          <VStack gap={{ base: 6, md: 8 }}>
            <Heading
              as="h3"
              size={{ base: "xl", md: "2xl" }}
              fontWeight="700"
              color="fg"
              textAlign="center"
            >
              Para seus Times (RH, Financeiro, Operações)
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
              {teamSolutions.map((solution) => (
                <FeatureCard
                  key={solution.title}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                />
              ))}
            </SimpleGrid>
          </VStack>

          {/* Management Solutions */}
          <VStack gap={{ base: 6, md: 8 }}>
            <Heading
              as="h3"
              size={{ base: "xl", md: "2xl" }}
              fontWeight="700"
              color="fg"
              textAlign="center"
            >
              Para sua Gestão
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
              {managementSolutions.map((solution) => (
                <FeatureCard
                  key={solution.title}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Section>

      {/* Approach Section */}
      <Section
        title="Nossa Abordagem: Da Estratégia ao Código"
        subtitle="Não somos apenas desenvolvedores. Somos parceiros estratégicos que entendem de negócio."
        centered
        variant="geometric"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 12 }}>
          {approach.map((step, index) => (
            <Box
              key={step.step}
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              bg="{colors.whiteAlpha.50}"
              border="1px solid {colors.whiteAlpha.200}"
              position="relative"
            >
              <VStack align="flex-start" gap={4}>
                <Box
                  px={4}
                  py={2}
                  rounded="full"
                  bg="{colors.blue.500}"
                  color="white"
                  fontSize="sm"
                  fontWeight="700"
                >
                  {step.step}
                </Box>
                <Heading
                  as="h4"
                  size="lg"
                  fontWeight="700"
                  color="fg"
                >
                  {step.title}
                </Heading>
                <Text
                  color="fg.muted"
                  fontSize="md"
                  lineHeight="tall"
                >
                  {step.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      {/* Differentials Section */}
      <Section
        title="Por que a Fábrica de Software da Shift+G?"
        centered
        variant="gradient"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {differentials.map((diff, index) => (
            <FeatureCard
              key={diff.title}
              icon={diff.icon}
              title={diff.title}
              description={diff.description}
              highlighted={index === 0}
            />
          ))}
        </SimpleGrid>
      </Section>

      {/* Final CTA Section */}
      <Box
        as="section"
        id="contato"
        py={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        {/* Dynamic Background */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="radial-gradient(ellipse 100% 60% at 50% 0%, {colors.blue.500/50}, transparent)"
          _dark={{
            bgGradient:
              "radial-gradient(ellipse 100% 60% at 50% 0%, {colors.blue.500/20}, transparent)",
          }}
          zIndex={-1}
        />

        <Container maxW="5xl">
          <VStack gap={{ base: 8, md: 12 }} textAlign="center">
            <VStack gap={6}>
              <Heading
                as="h2"
                size={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="900"
                lineHeight="none"
                letterSpacing="tight"
              >
                Pronto para{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                  bgClip="text"
                >
                  Transformar
                </Text>{" "}
                sua Operação?
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Deixe as limitações das ferramentas genéricas para trás. Vamos
                construir juntos a solução que sua empresa realmente precisa
                para alcançar o próximo nível de eficiência e crescimento.
              </Text>
            </VStack>

            <VStack gap={8} w="full" maxW="lg">
              <Link
                href={`https://wa.me/${SITE_PHONE.replace(/[^\d]/g, "")}`}
                target="_blank"
                passHref
              >
                <Button
                  size="xl"
                  px={{ base: 4, sm: 6 }}
                  py={8}
                  rounded="2xl"
                  fontWeight="700"
                  fontSize="xl"
                  variant="solid"
                  colorPalette="blue"
                  w={{ base: "full", sm: "auto" }}
                >
                  <MessageCircle size={20} style={{ marginRight: "12px" }} />
                  Fale com Nossos Especialistas
                  <ChevronRight size={20} style={{ marginLeft: "12px" }} />
                </Button>
              </Link>

              <HStack gap={6} wrap="wrap" justify="center">
                <Box
                  px={6}
                  py={3}
                  rounded="xl"
                  bg="{colors.whiteAlpha.200}"
                  backdropFilter="blur(20px)"
                  border="1px solid {colors.whiteAlpha.300}"
                >
                  <HStack gap={3} justify="center">
                    <Mail size={18} color="blue.500" />
                    <Text fontSize="md" color="fg.muted" fontWeight="500">
                      <Link href={`mailto:${SITE_EMAIL}`}>
                        <Text
                          as="span"
                          fontWeight="700"
                          color="blue.solid"
                          _hover={{ textDecoration: "underline" }}
                        >
                          {SITE_EMAIL}
                        </Text>
                      </Link>
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Page>
  );
}
