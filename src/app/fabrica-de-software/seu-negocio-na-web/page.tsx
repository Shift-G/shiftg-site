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
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  ShoppingCart,
  Users,
  Zap,
  Shield,
  Code,
  Palette,
  BarChart3,
  CheckCircle,
  ChevronRight,
  MessageCircle,
  Mail,
  Rocket,
  Target,
  Star,
  Clock,
  CreditCard,
  Settings,
  Database,
  Eye,
  MousePointer,
  Heart,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_EMAIL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: `Seu Negócio na Web | ${SITE_NAME}`,
  description:
    "Leve seu negócio para o digital com sites e e-commerces que convertem. Desenvolvemos presenças digitais que geram resultados reais e aumentam suas vendas.",
  keywords: [
    "desenvolvimento de sites",
    "criação de e-commerce",
    "loja virtual",
    "site institucional",
    "landing page",
    "site responsivo",
    "desenvolvimento web",
    "presença digital",
    "site que converte",
    "e-commerce profissional",
  ],
  openGraph: {
    title: `Seu Negócio na Web | ${SITE_NAME}`,
    description:
      "Sites e e-commerces que convertem visitantes em clientes. Desenvolva sua presença digital profissional.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/fabrica-de-software/seu-negocio-na-web`,
    siteName: `${SITE_NAME} - Seu Negócio na Web`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Seu Negócio na Web | ${SITE_NAME}`,
    description:
      "Sites e e-commerces que convertem visitantes em clientes. Desenvolva sua presença digital profissional.",
  },
};

const problems = [
  {
    title: "Sites que Não Convertem",
    description:
      "Muitas visitas, poucas vendas. Seu site atual não está transformando visitantes em clientes.",
    icon: <MousePointer size={24} />,
  },
  {
    title: "Design Ultrapassado",
    description:
      "Visual amador que não transmite credibilidade e afasta potenciais clientes.",
    icon: <Eye size={24} />,
  },
  {
    title: "Não Aparece no Google",
    description:
      "Seu concorrente está na primeira página enquanto você está invisível nos resultados de busca.",
    icon: <Search size={24} />,
  },
  {
    title: "Lento e Não Responsivo",
    description:
      "Site que demora para carregar e não funciona bem no celular, perdendo 60% dos acessos mobile.",
    icon: <Smartphone size={24} />,
  },
];

const solutions = [
  {
    title: "Sites Institucionais",
    description:
      "Presença digital profissional que transmite credibilidade e converte visitantes em leads qualificados.",
    features: [
      "Design moderno e responsivo",
      "SEO otimizado",
      "Formulários de contato",
      "Integração com CRM",
    ],
    icon: <Globe size={24} />,
  },
  {
    title: "E-commerce Completo",
    description:
      "Loja virtual profissional com gestão de produtos, pagamentos e logística integrada.",
    features: [
      "Catálogo de produtos",
      "Carrinho e checkout",
      "Múltiplas formas de pagamento",
      "Gestão de estoque",
    ],
    icon: <ShoppingCart size={24} />,
  },
  {
    title: "Landing Pages",
    description:
      "Páginas de alta conversão para campanhas específicas, produtos ou eventos.",
    features: [
      "Foco em conversão",
      "A/B testing",
      "Analytics avançado",
      "Integração com ads",
    ],
    icon: <Target size={24} />,
  },
];

const features = [
  {
    title: "Design Responsivo",
    description:
      "Funciona perfeitamente em desktop, tablet e smartphone. Seus clientes acessam de qualquer dispositivo.",
    icon: <Smartphone size={24} />,
  },
  {
    title: "SEO Otimizado",
    description:
      "Seu site aparece no Google. Técnicas avançadas de SEO para você ser encontrado pelos clientes.",
    icon: <Search size={24} />,
  },
  {
    title: "Performance Máxima",
    description:
      "Carregamento ultrarrápido. Sites otimizados que mantêm seus visitantes engajados.",
    icon: <Zap size={24} />,
  },
  {
    title: "Segurança Enterprise",
    description:
      "SSL, proteção contra ataques e backups automáticos. Seu site sempre protegido e online.",
    icon: <Shield size={24} />,
  },
  {
    title: "Analytics Integrado",
    description:
      "Acompanhe visitantes, conversões e vendas. Dados que ajudam você a tomar melhores decisões.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Gestão Simples",
    description:
      "Painel administrativo intuitivo. Você mesmo pode atualizar conteúdos e produtos.",
    icon: <Settings size={24} />,
  },
];

const process = [
  {
    step: "01",
    title: "Estratégia e Planejamento",
    description:
      "Entendemos seu negócio, público-alvo e objetivos para criar a estratégia digital perfeita.",
    deliverables: [
      "Análise do público-alvo",
      "Pesquisa de concorrência",
      "Arquitetura da informação",
      "Estratégia de conversão",
    ],
  },
  {
    step: "02",
    title: "Design e Experiência",
    description:
      "Criamos interfaces modernas e intuitivas que encantam seus clientes e facilitam a navegação.",
    deliverables: [
      "Wireframes e mockups",
      "Design system personalizado",
      "Prototipagem interativa",
      "Testes de usabilidade",
    ],
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description:
      "Transformamos o design em realidade com código limpo, rápido e otimizado para conversão.",
    deliverables: [
      "Desenvolvimento frontend",
      "Integração com backend",
      "Testes de funcionalidade",
      "Otimização de performance",
    ],
  },
  {
    step: "04",
    title: "Lançamento e Otimização",
    description:
      "Colocamos seu site no ar e acompanhamos os resultados, otimizando para máxima performance.",
    deliverables: [
      "Deploy e configuração",
      "Monitoramento de performance",
      "Análise de conversões",
      "Otimizações contínuas",
    ],
  },
];

const pricing = [
  {
    name: "Site Institucional",
    price: "R$ 8.900",
    duration: "4-6 semanas",
    description: "Presença digital profissional para sua empresa",
    features: [
      "Até 10 páginas",
      "Design responsivo",
      "SEO básico",
      "Formulário de contato",
      "Google Analytics",
      "3 meses de suporte",
    ],
    highlighted: false,
  },
  {
    name: "E-commerce Starter",
    price: "R$ 18.900",
    duration: "6-8 semanas",
    description: "Loja virtual completa para começar a vender online",
    features: [
      "Até 100 produtos",
      "Carrinho e checkout",
      "Integração com pagamentos",
      "Gestão de estoque",
      "Painel administrativo",
      "6 meses de suporte",
    ],
    highlighted: true,
  },
  {
    name: "E-commerce Pro",
    price: "R$ 35.900",
    duration: "8-12 semanas",
    description: "Solução completa para grandes operações",
    features: [
      "Produtos ilimitados",
      "Múltiplos vendedores",
      "Integrações avançadas",
      "Sistema de cupons",
      "Relatórios avançados",
      "12 meses de suporte",
    ],
    highlighted: false,
  },
];

const technologies = [
  {
    category: "Frontend",
    technologies: ["React/Next.js", "TypeScript", "Chakra UI", "PWA"],
    icon: <Code size={24} />,
  },
  {
    category: "E-commerce",
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    icon: <ShoppingCart size={24} />,
  },
  {
    category: "Performance",
    technologies: ["CDN", "Otimização", "Caching", "Compressão"],
    icon: <Zap size={24} />,
  },
  {
    category: "SEO & Analytics",
    technologies: ["Google Analytics", "Search Console", "SEO técnico", "Schema"],
    icon: <BarChart3 size={24} />,
  },
];

export default function WebBusinessPage() {
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
          top="15%"
          right="8%"
          w="180px"
          h="180px"
          borderRadius="full"
          bg="{colors.blue.500/5}"
          backdropFilter="blur(10px)"
          animation="float 10s ease-in-out infinite"
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
                Web Development
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
                Seu Negócio{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                  bgClip="text"
                >
                  na Web
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Desenvolvemos sites e e-commerces profissionais que transformam
                visitantes em clientes. Sua presença digital que realmente
                vende e gera resultados.
              </Text>
            </VStack>

            {/* Stats */}
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 4, md: 8 }} w="full" maxW="2xl">
              {[
                { value: "4-6", label: "Semanas" },
                { value: "100%", label: "Responsivo" },
                { value: "SEO", label: "Otimizado" },
                { value: "24/7", label: "Online" },
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
                  Criar Meu Site Agora
                  <ChevronRight size={20} style={{ marginLeft: "12px" }} />
                </Button>
              </Link>
            </Stack>

            <Text fontSize="lg" color="fg.muted" fontWeight="500">
              Consultoria gratuita • Sites que convertem
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Problems Section */}
      <Section
        title="Problemas que Impedem seu Sucesso Online"
        subtitle="Se você tem um site que não gera resultados, ou ainda não tem presença digital, está perdendo clientes todos os dias."
        centered
        variant="gradient"
      >
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
            Não deixe que um site ruim afaste seus clientes. É hora de ter uma
            presença digital que trabalha a seu favor.
          </Text>
        </Box>
      </Section>

      {/* Solutions Section */}
      <Section
        title="Soluções Web que Geram Resultados"
        subtitle="Do site institucional ao e-commerce completo, desenvolvemos presenças digitais que convertem."
        centered
      >
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={{ base: 8, md: 12 }}>
          {solutions.map((solution, index) => (
            <Box
              key={solution.title}
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              bg={index === 1 ? "{colors.blue.500/10}" : "{colors.whiteAlpha.50}"}
              border="1px solid"
              borderColor={index === 1 ? "{colors.blue.500/20}" : "{colors.whiteAlpha.200}"}
            >
              <VStack align="flex-start" gap={6}>
                <Box
                  p={4}
                  rounded="xl"
                  bg={index === 1 ? "{colors.blue.500}" : "{colors.blue.500/10}"}
                  color={index === 1 ? "white" : "blue.solid"}
                >
                  {solution.icon}
                </Box>
                
                <VStack align="flex-start" gap={4}>
                  <Heading
                    as="h3"
                    size="xl"
                    fontWeight="300"
                    color="fg"
                  >
                    {solution.title}
                  </Heading>
                  <Text
                    color="fg.muted"
                    fontSize="lg"
                    lineHeight="tall"
                  >
                    {solution.description}
                  </Text>
                </VStack>

                <VStack align="flex-start" gap={3} w="full">
                  {solution.features.map((feature) => (
                    <HStack key={feature} gap={3}>
                      <CheckCircle size={20} color="{colors.blue.500}" />
                      <Text color="fg.muted" fontSize="md">
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      {/* Features Section */}
      <Section
        title="Características dos Nossos Sites"
        subtitle="Cada projeto é desenvolvido com as melhores práticas para garantir performance, conversão e resultados."
        centered
        variant="glass"
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
        title="Nossa Metodologia de Desenvolvimento Web"
        subtitle="Um processo estruturado que garante que seu site seja exatamente o que seu negócio precisa."
        centered
        variant="geometric"
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

      {/* Technologies Section */}
      <Section
        title="Tecnologias Modernas"
        subtitle="Utilizamos as melhores ferramentas para criar sites rápidos, seguros e escaláveis."
        centered
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {technologies.map((tech) => (
            <Box
              key={tech.category}
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              bg="{colors.whiteAlpha.50}"
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
                    {tech.icon}
                  </Box>
                  <Heading
                    as="h4"
                    size="lg"
                    fontWeight="300"
                    color="fg"
                  >
                    {tech.category}
                  </Heading>
                </HStack>
                <VStack align="flex-start" gap={2}>
                  {tech.technologies.map((technology) => (
                    <HStack key={technology} gap={2}>
                      <CheckCircle size={16} color="{colors.blue.500}" />
                      <Text color="fg.muted" fontSize="md">
                        {technology}
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
        title="Investimento em Sua Presença Digital"
        subtitle="Planos transparentes para cada tipo de negócio e necessidade."
        centered
        variant="glass"
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
                  Dominar
                </Text>{" "}
                o Digital?
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Pare de perder clientes para sites melhores. Crie uma presença
                digital que converte visitantes em vendas e faz seu negócio
                crescer online.
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
                  Começar Meu Projeto Web
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
                    <Clock size={18} color="blue.500" />
                    <Text fontSize="md" color="fg.muted" fontWeight="500">
                      Orçamento gratuito
                    </Text>
                  </HStack>
                </Box>

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
