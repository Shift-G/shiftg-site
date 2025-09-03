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
  Stack,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { FeatureCard } from "@/components/cards/feature-card";
import {
  Rocket,
  Code,
  Cloud,
  Shield,
  TrendingUp,
  Users,
  CreditCard,
  Settings,
  Database,
  Zap,
  Target,
  CheckCircle,
  ChevronRight,
  MessageCircle,
  Mail,
  Layers,
  Lock,
  BarChart3,
  Smartphone,
  Globe,
  Lightbulb,
  DollarSign,
  Timer,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_EMAIL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: `Construa seu SaaS | ${SITE_NAME}`,
  description:
    "Transforme sua ideia em um SaaS rentável. Desenvolvemos plataformas completas, escaláveis e prontas para o mercado. Da MVP ao produto final, cuidamos de toda a jornada tecnológica.",
  keywords: [
    "desenvolvimento saas",
    "criar plataforma saas",
    "mvp saas",
    "software como serviço",
    "desenvolvimento de plataforma",
    "saas escalável",
    "arquitetura saas",
    "monetização saas",
    "plataforma multi-tenant",
    "desenvolvimento de produto",
  ],
  openGraph: {
    title: `Construa seu SaaS | ${SITE_NAME}`,
    description:
      "Da ideia ao SaaS rentável. Desenvolvemos sua plataforma completa, escalável e pronta para conquistar o mercado.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/fabrica-de-software/construa-seu-saas`,
    siteName: `${SITE_NAME} - Construa seu SaaS`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Construa seu SaaS | ${SITE_NAME}`,
    description:
      "Da ideia ao SaaS rentável. Desenvolvemos sua plataforma completa, escalável e pronta para conquistar o mercado.",
  },
};

const challenges = [
  {
    title: "Arquitetura Complexa",
    description:
      "SaaS requer arquitetura multi-tenant, isolamento de dados e escalabilidade desde o primeiro dia.",
    icon: <Layers size={24} />,
  },
  {
    title: "Segurança Avançada",
    description:
      "Proteção de dados de múltiplos clientes, compliance e criptografia de ponta a ponta.",
    icon: <Lock size={24} />,
  },
  {
    title: "Monetização e Billing",
    description:
      "Sistemas de cobrança recorrente, planos flexíveis e gestão de assinaturas.",
    icon: <CreditCard size={24} />,
  },
  {
    title: "Escalabilidade desde o MVP",
    description:
      "Código que cresce junto com seu negócio, sem necessidade de reescrita.",
    icon: <TrendingUp size={24} />,
  },
];

const features = [
  {
    title: "Arquitetura Multi-Tenant",
    description:
      "Isolamento perfeito entre clientes, otimização de recursos e gestão centralizada de dados.",
    icon: <Database size={24} />,
  },
  {
    title: "Sistema de Autenticação",
    description:
      "Login seguro, SSO, autenticação de dois fatores e gestão de permissões granular.",
    icon: <Shield size={24} />,
  },
  {
    title: "Dashboard Administrativo",
    description:
      "Painel completo para gestão de usuários, analytics, configurações e monitoramento.",
    icon: <Settings size={24} />,
  },
  {
    title: "API REST Completa",
    description:
      "APIs documentadas, versionadas e prontas para integrações e aplicativos móveis.",
    icon: <Code size={24} />,
  },
  {
    title: "Billing e Assinaturas",
    description:
      "Sistema completo de cobrança recorrente, múltiplos planos e gestão de pagamentos.",
    icon: <CreditCard size={24} />,
  },
  {
    title: "Analytics Integrado",
    description:
      "Métricas de uso, performance e negócio integradas nativamente na plataforma.",
    icon: <BarChart3 size={24} />,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery e Validação",
    description:
      "Entendemos sua ideia, validamos o mercado e definimos o MVP que gerará maior impacto.",
    deliverables: [
      "Pesquisa de mercado e concorrência",
      "Definição de personas e casos de uso",
      "Especificação técnica do MVP",
      "Roadmap de funcionalidades",
    ],
  },
  {
    step: "02",
    title: "Prototipação e UX",
    description:
      "Criamos protótipos navegáveis e interfaces que convertem visitantes em clientes pagantes.",
    deliverables: [
      "Wireframes e fluxos de usuário",
      "Design system personalizado",
      "Protótipo interativo",
      "Testes de usabilidade",
    ],
  },
  {
    step: "03",
    title: "Desenvolvimento MVP",
    description:
      "Construímos a primeira versão com as funcionalidades essenciais, pronta para validação no mercado.",
    deliverables: [
      "Aplicação web responsiva",
      "Sistema de autenticação",
      "Funcionalidades core",
      "Infraestrutura em nuvem",
    ],
  },
  {
    step: "04",
    title: "Evolução e Escala",
    description:
      "Iteramos baseado no feedback dos usuários e adicionamos funcionalidades conforme o crescimento.",
    deliverables: [
      "Novas funcionalidades",
      "Otimizações de performance",
      "Integrações adicionais",
      "Suporte e manutenção",
    ],
  },
];

const techStack = [
  {
    category: "Frontend",
    technologies: ["React/Next.js", "TypeScript", "Chakra UI", "PWA"],
    icon: <Smartphone size={24} />,
  },
  {
    category: "Backend",
    technologies: ["Node.js/Python", "PostgreSQL", "Redis", "Microserviços"],
    icon: <Database size={24} />,
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS/GCP", "Docker", "CI/CD", "Monitoring"],
    icon: <Cloud size={24} />,
  },
  {
    category: "Segurança",
    technologies: ["OAuth 2.0", "JWT", "Criptografia", "LGPD/GDPR"],
    icon: <Shield size={24} />,
  },
];

const pricing = [
  {
    name: "MVP Starter",
    price: "R$ 45.000",
    duration: "8-12 semanas",
    description: "Ideal para validar sua ideia no mercado",
    features: [
      "Aplicação web responsiva",
      "Autenticação básica",
      "3-5 funcionalidades core",
      "Dashboard administrativo",
      "Deploy em produção",
      "2 meses de suporte",
    ],
    highlighted: false,
  },
  {
    name: "SaaS Completo",
    price: "R$ 85.000",
    duration: "16-20 semanas",
    description: "Plataforma completa pronta para escalar",
    features: [
      "Tudo do MVP Starter",
      "Sistema de billing",
      "Múltiplos planos de assinatura",
      "Analytics avançado",
      "API REST documentada",
      "Integrações (Stripe, email, etc)",
      "6 meses de suporte",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    duration: "A definir",
    description: "Para plataformas complexas e high-scale",
    features: [
      "Tudo do SaaS Completo",
      "Arquitetura customizada",
      "Integrações complexas",
      "Compliance avançado",
      "Multi-região",
      "Suporte dedicado 24/7",
    ],
    highlighted: false,
  },
];

export default function SaasPage() {
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
                fontWeight="300"
                color="blue.solid"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                SaaS Development
              </Text>
            </Box>

            {/* Title */}
            <VStack gap={4}>
              <Heading
                as="h1"
                size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="300"
                lineHeight="none"
                letterSpacing="tight"
                color="fg"
              >
                Construa seu{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                  bgClip="text"
                >
                  SaaS
                </Text>{" "}
                Rentável
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Transforme sua ideia em uma plataforma SaaS completa, escalável e
                pronta para conquistar o mercado. Da MVP ao produto final,
                cuidamos de toda a jornada tecnológica.
              </Text>
            </VStack>

            {/* Stats */}
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 4, md: 8 }} w="full" maxW="2xl">
              {[
                { value: "8-12", label: "Semanas MVP" },
                { value: "Multi-tenant", label: "Arquitetura" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Suporte" },
              ].map((stat) => (
                <Box key={stat.label} textAlign="center">
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="300"
                    color="blue.solid"
                    lineHeight="none"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="fg.muted"
                    fontWeight="300"
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

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
                  Transformar Ideia em SaaS
                  <ChevronRight size={20} style={{ marginLeft: "12px" }} />
                </Button>
              </Link>
            </Stack>

            <Text fontSize="lg" color="fg.muted" fontWeight="500">
              Consultoria gratuita • MVP em 8-12 semanas
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Challenges Section */}
      <Section
        title="Os Desafios Únicos de um SaaS"
        subtitle="Desenvolver um SaaS vai muito além de criar um site. É uma arquitetura complexa que precisa ser pensada desde o primeiro dia."
        centered
        variant="gradient"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {challenges.map((challenge, index) => (
            <FeatureCard
              key={challenge.title}
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.description}
              highlighted={index === 0}
            />
          ))}
        </SimpleGrid>

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
            fontWeight="300"
            color="blue.solid"
          >
            É por isso que construir um SaaS requer expertise especializada.
            Nós temos a experiência para fazer certo desde o início.
          </Text>
        </Box>
      </Section>

      {/* Features Section */}
      <Section
        title="Funcionalidades Essenciais que Desenvolvemos"
        subtitle="Todo SaaS de sucesso precisa dessas funcionalidades. Nós construímos todas elas com qualidade enterprise."
        centered
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </SimpleGrid>
      </Section>

      {/* Process Section */}
      <Section
        title="Nossa Metodologia de Desenvolvimento"
        subtitle="Um processo testado e refinado para transformar ideias em SaaS de sucesso."
        centered
        variant="glass"
      >
        <VStack gap={{ base: 8, md: 12 }}>
          {process.map((step, index) => (
            <Box
              key={step.step}
              w="full"
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              bg={index % 2 === 0 ? "{colors.blue.500/10}" : "{colors.whiteAlpha.50}"}
              border="1px solid"
              borderColor={index % 2 === 0 ? "{colors.blue.500/20}" : "{colors.whiteAlpha.200}"}
            >
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }} alignItems="center">
                <VStack align="flex-start" gap={6}>
                  <HStack gap={4}>
                    <Box
                      px={4}
                      py={2}
                      rounded="full"
                      bg="{colors.blue.500}"
                      color="white"
                      fontSize="lg"
                      fontWeight="300"
                    >
                      {step.step}
                    </Box>
                    <Heading
                      as="h3"
                      size={{ base: "lg", md: "xl" }}
                      fontWeight="300"
                      color="fg"
                    >
                      {step.title}
                    </Heading>
                  </HStack>
                  <Text
                    color="fg.muted"
                    fontSize="lg"
                    lineHeight="tall"
                  >
                    {step.description}
                  </Text>
                </VStack>

                <VStack align="flex-start" gap={4}>
                  <Text fontWeight="300" color="fg" fontSize="lg">
                    Principais Entregas:
                  </Text>
                  <VStack align="flex-start" gap={3}>
                    {step.deliverables.map((deliverable) => (
                      <HStack key={deliverable} gap={3}>
                        <CheckCircle size={20} color="{colors.blue.500}" />
                        <Text color="fg.muted" fontSize="md">
                          {deliverable}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </SimpleGrid>
            </Box>
          ))}
        </VStack>
      </Section>

      {/* Tech Stack Section */}
      <Section
        title="Stack Tecnológico Moderno"
        subtitle="Utilizamos as melhores tecnologias do mercado para garantir performance, segurança e escalabilidade."
        centered
        variant="geometric"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {techStack.map((stack) => (
            <Box
              key={stack.category}
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              bg="whiteAlpha.50"
              border="1px solid {colors.whiteAlpha.200}"
            >
              <VStack align="flex-start" gap={4}>
                <HStack gap={3}>
                  <Box
                    p={3}
                    rounded="xl"
                    bg="{colors.blue.500/10}"
                    color="blue.solid"
                  >
                    {stack.icon}
                  </Box>
                  <Heading
                    as="h4"
                    size="lg"
                    fontWeight="300"
                    color="fg"
                  >
                    {stack.category}
                  </Heading>
                </HStack>
                <VStack align="flex-start" gap={2}>
                  {stack.technologies.map((tech) => (
                    <HStack key={tech} gap={2}>
                      <CheckCircle size={16} color="{colors.blue.500}" />
                      <Text color="fg.muted" fontSize="md">
                        {tech}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      {/* Pricing Section */}
      <Section
        title="Planos de Desenvolvimento"
        subtitle="Escolha o modelo que melhor se adapta ao seu momento e orçamento."
        centered
      >
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={{ base: 6, md: 8 }}>
          {pricing.map((plan) => (
            <Box
              key={plan.name}
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              bg={plan.highlighted ? "{colors.blue.500/10}" : "{colors.whiteAlpha.50}"}
              border="2px solid"
              borderColor={plan.highlighted ? "{colors.blue.500}" : "{colors.whiteAlpha.200}"}
              position="relative"
            >
              {plan.highlighted && (
                <Box
                  position="absolute"
                  top={-3}
                  left="50%"
                  transform="translateX(-50%)"
                  px={4}
                  py={1}
                  rounded="full"
                  bg="{colors.blue.500}"
                  color="white"
                  fontSize="sm"
                  fontWeight="300"
                >
                  Mais Popular
                </Box>
              )}

              <VStack align="flex-start" gap={6}>
                <VStack align="flex-start" gap={2}>
                  <Heading
                    as="h3"
                    size="xl"
                    fontWeight="300"
                    color="fg"
                  >
                    {plan.name}
                  </Heading>
                  <Text color="fg.muted" fontSize="md">
                    {plan.description}
                  </Text>
                </VStack>

                <VStack align="flex-start" gap={1}>
                  <Text
                    fontSize="3xl"
                    fontWeight="300"
                    color="blue.solid"
                  >
                    {plan.price}
                  </Text>
                  <Text color="fg.muted" fontSize="sm">
                    {plan.duration}
                  </Text>
                </VStack>

                <VStack align="flex-start" gap={3} w="full">
                  {plan.features.map((feature) => (
                    <HStack key={feature} gap={3}>
                      <CheckCircle size={20} color="{colors.blue.500}" />
                      <Text color="fg.muted" fontSize="sm">
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </VStack>

                <Button
                  size="lg"
                  variant={plan.highlighted ? "solid" : "outline"}
                  colorPalette="blue"
                  w="full"
                  mt={4}
                >
                  Escolher {plan.name}
                </Button>
              </VStack>
            </Box>
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
                fontWeight="300"
                lineHeight="none"
                letterSpacing="tight"
              >
                Pronto para{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                  bgClip="text"
                >
                  Revolucionar
                </Text>{" "}
                seu Mercado?
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Sua ideia pode ser o próximo SaaS de sucesso. Vamos construir
                juntos uma plataforma que seus clientes vão amar e que vai
                gerar receita recorrente para seu negócio.
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
                  fontWeight="300"
                  fontSize="xl"
                  variant="solid"
                  colorPalette="blue"
                  w={{ base: "full", sm: "auto" }}
                >
                  <MessageCircle size={20} style={{ marginRight: "12px" }} />
                  Começar Meu SaaS Agora
                  <ChevronRight size={20} style={{ marginLeft: "12px" }} />
                </Button>
              </Link>

              <HStack gap={6} wrap="wrap" justify="center">
                <Box
                  px={6}
                  py={3}
                  rounded="xl"
                  bg="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                  border="1px solid {colors.whiteAlpha.300}"
                >
                  <HStack gap={3} justify="center">
                    <Timer size={18} color="blue.500" />
                    <Text fontSize="md" color="fg.muted" fontWeight="500">
                      Consultoria gratuita de 60 minutos
                    </Text>
                  </HStack>
                </Box>

                <Box
                  px={6}
                  py={3}
                  rounded="xl"
                  bg="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                  border="1px solid {colors.whiteAlpha.300}"
                >
                  <HStack gap={3} justify="center">
                    <Mail size={18} color="blue.500" />
                    <Text fontSize="md" color="fg.muted" fontWeight="500">
                      <Link href={`mailto:${SITE_EMAIL}`}>
                        <Text
                          as="span"
                          fontWeight="300"
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
