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
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Hero } from "@/components/sections/hero";
import { ProblemsSection } from "@/components/sections/problems";
import { FeatureCard } from "@/components/cards/feature-card";
import { SolutionCard } from "@/components/cards/solution-card";
import { UseCasesBento } from "@/components/sections/use-cases-bento";
import { TraditionalVsAI } from "@/components/sections/traditional-vs-ai";
import {
  Zap,
  Users,
  TrendingUp,
  Target,
  Brain,
  Shield,
  Rocket,
  ChevronRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_EMAIL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | IA e Dados que Multiplicam Resultados`,
  description:
    "Transforme dados brutos em vantagem competitiva. Desenvolvemos soluções de IA e analytics que aumentam produtividade em até 300% e geram ROI garantido em 6 meses.",
  keywords: [
    "inteligência artificial empresarial",
    "IA para RH",
    "people analytics avançado",
    "automação inteligente",
    "business intelligence",
    "machine learning corporativo",
    "análise preditiva",
    "data science aplicada",
    "transformação digital",
    "ROI inteligência artificial",
    "dashboards executivos",
    "automação processos",
  ],
  openGraph: {
    title: `${SITE_NAME} | IA e Dados que Multiplicam Resultados`,
    description:
      "Aumente produtividade em 300% e garanta ROI em 6 meses com nossas soluções de IA e analytics personalizadas para sua empresa",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: `${SITE_NAME} - IA & Dados Empresariais`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | IA e Dados que Multiplicam Resultados`,
    description:
      "Aumente produtividade em 300% e garanta ROI em 6 meses com nossas soluções de IA e analytics personalizadas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const solutions = [
  {
    title: "Analytics & Inteligência Artificial",
    subtitle: "Dados que geram decisões estratégicas",
    description:
      "Transformamos dados brutos em vantagem competitiva. Desenvolvemos modelos de machine learning que preveem turnover, otimizam produtividade e identificam oportunidades de crescimento. Dashboards executivos em tempo real com insights acionáveis que multiplicam seus resultados.",
    features: [
      "People Analytics avançado com ML",
      "Modelos preditivos de alta precisão",
      "Dashboards executivos em tempo real",
      "Análise de dados para tomada de decisão",
    ],
    badge: "CORE",
  },
  {
    title: "Automações Inteligentes",
    subtitle: "Processos que funcionam sozinhos",
    description:
      "Eliminamos gargalos operacionais e liberamos sua equipe para atividades estratégicas. Desenvolvemos automações que processam dados 10x mais rápido, integram sistemas legados e geram economia de até 70% em custos operacionais. ROI garantido em 6 meses.",
    features: [
      "Automação de RH e folha de pagamento",
      "Integração ERP/CRM inteligente",
      "APIs e microsserviços escaláveis",
      "Processos 100% automatizados",
    ],
    badge: "AUTOMATION",
  },
];

const targetAudience = [
  {
    title: "Executivos C-Level",
    description:
      "CEOs, COOs e CFOs que precisam transformar dados em vantagem competitiva. Buscam reduzir custos operacionais em até 70%, aumentar produtividade da equipe e tomar decisões baseadas em insights precisos e preditivos.",
    icon: <Target size={24} />,
  },
  {
    title: "Diretores de RH",
    description:
      "Lutando contra altos índices de turnover e baixa produtividade. Precisam de People Analytics avançado para reter talentos, automatizar processos de RH e melhorar o engajamento organizacional com dados acionáveis.",
    icon: <Users size={24} />,
  },
  {
    title: "Líderes de Operações",
    description:
      "Sobrecarregados com processos manuais e sistemas desconectados. Buscam automação inteligente que integre ERPs, CRMs e fluxos de trabalho para eliminar gargalos e acelerar a execução operacional.",
    icon: <TrendingUp size={24} />,
  },
];

const differentials = [
  {
    icon: <Zap size={24} />,
    title: "ROI Garantido em 6 Meses",
    description:
      "Não vendemos tecnologia pelo prazer de vender. Garantimos retorno sobre investimento mensurável em até 6 meses, com métricas claras de produtividade, redução de custos e aumento de receita.",
  },
  {
    icon: <Shield size={24} />,
    title: "Consultoria Técnica Gratuita",
    description:
      "Antes de qualquer proposta, fazemos uma consultoria gratuita para mapear seus processos, identificar oportunidades de automação e apresentar um plano de ação com projeções de resultados.",
  },
  {
    icon: <Brain size={24} />,
    title: "Machine Learning Aplicado ao Seu Negócio",
    description:
      "Cada solução inclui algoritmos de ML treinados com seus dados específicos. Não usamos modelos genéricos - desenvolvemos inteligência artificial que entende seu negócio particular.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Suporte 24/7 e Evolução Contínua",
    description:
      "Seu sucesso é nossa prioridade. Oferecemos suporte técnico 24/7 e atualizações constantes das soluções, garantindo que elas evoluam junto com seu negócio.",
  },
];

export default function HomePage() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Traditional vs AI Comparison */}
      <TraditionalVsAI />

      {/* Problems Section */}
      <ProblemsSection />

      {/* Solutions Section */}
      <Section
        id="solucoes"
        title="A parceria estratégica para sua transformação digital"
        subtitle="A Shift+G não é apenas uma fábrica de software. Somos seus parceiros na jornada de dados e IA. Construímos ferramentas sob medida que se integram perfeitamente aos seus processos, capacitando suas equipes com a inteligência e a autonomia necessárias para escalar."
        centered
        variant="gradient"
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }}>
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </SimpleGrid>
      </Section>

      {/* Target Audience Section */}
      <Section
        id="publico"
        title="Para líderes que buscam mais que tecnologia: buscam resultados"
        subtitle="Falamos a língua do negócio. Entendemos a pressão por eficiência, a necessidade de melhorar a experiência do colaborador e o desafio de transformar dados em um diferencial competitivo."
        centered
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
          {targetAudience.map((audience) => (
            <FeatureCard
              key={audience.title}
              icon={audience.icon}
              title={audience.title}
              description={audience.description}
            />
          ))}
        </SimpleGrid>
      </Section>

      {/* Differentials Section */}
      <Section
        id="diferenciais"
        title="O que nos torna diferentes?"
        centered
        variant="glass"
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

      {/* Use Cases Section */}
      <UseCasesBento />

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
                textAlign={{ base: "left", md: "center" }}
              >
                Pronto para{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700}, {colors.blue.500})"
                  bgClip="text"
                >
                  transformar
                </Text>{" "}
                seus dados?
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="3xl"
                lineHeight="tall"
                fontWeight="400"
                textAlign={{ base: "left", md: "center" }}
              >
                Agende uma consultoria gratuita de 30 minutos. Vamos mapear seus
                processos, identificar oportunidades de automação e apresentar
                um plano com ROI projetado em até 6 meses. Sem compromisso,
                apenas resultados claros.
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
                  bg="{colors.gradient.blue}"
                  color="white"
                  border="none"
                  boxShadow="0 15px 50px {colors.blue.500/40}"
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 60px {colors.blue.500/50}",
                    bg: "linear-gradient(135deg, {colors.blue.600}, {colors.blue.800})",
                  }}
                  _active={{
                    transform: "translateY(0px)",
                  }}
                  transition="all 0.3s ease"
                  w={{ base: "full", sm: "auto" }}
                >
                  <MessageCircle size={20} style={{ marginRight: "12px" }} />
                  Agendar pelo WhatsApp
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
