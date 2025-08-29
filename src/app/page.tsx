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
  Icon,
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
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SHIFT+G | Inteligência Artificial e Dados sob medida",
  description:
    "Desenvolvemos soluções de software que transformam dados complexos em decisões estratégicas, entregando autonomia e eficiência para sua empresa.",
  keywords: [
    "inteligência artificial",
    "IA",
    "data science",
    "análise de dados",
    "people analytics",
    "automação",
    "business intelligence",
    "machine learning",
    "software sob medida",
    "transformação digital",
  ],
  openGraph: {
    title: "SHIFT+G | Inteligência Artificial e Dados sob medida",
    description:
      "Transforme dados complexos em decisões estratégicas com soluções de IA personalizadas",
    type: "website",
    locale: "pt_BR",
    url: "https://shiftg.com.br",
    siteName: "SHIFT+G AI & Data",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIFT+G | Inteligência Artificial e Dados sob medida",
    description:
      "Transforme dados complexos em decisões estratégicas com soluções de IA personalizadas",
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
    title: "Dados & Inteligência Artificial",
    subtitle: "Inteligência que gera valor",
    description:
      "Transformamos seus dados brutos em ativos estratégicos. Desde a estruturação e governança até a implementação de modelos preditivos e dashboards interativos, entregamos os insights que sua liderança precisa para antecipar cenários e agir com confiança.",
    features: [
      "Estruturação e governança de dados",
      "Modelos preditivos e machine learning",
      "Dashboards interativos e em tempo real",
      "Análise preditiva e prescritiva",
    ],
    badge: "CORE",
  },
  {
    title: "Soluções de Software Sob Medida",
    subtitle: "Tecnologia que resolve",
    description:
      "Desenvolvemos sistemas, automações e ferramentas internas que eliminam gargalos operacionais. Seja para RH, Financeiro ou Operações, criamos aplicações escaláveis em nuvem que se conectam aos seus sistemas (ERP, CRM) e otimizam o dia a dia da sua equipe.",
    features: [
      "Sistemas personalizados e escaláveis",
      "Integração com ERPs e CRMs",
      "Automação de processos complexos",
      "APIs e microsserviços robustos",
    ],
    badge: "CUSTOM",
  },
];

const targetAudience = [
  {
    title: "C-Levels (CEO, COO, CFO)",
    description:
      "Buscando eficiência operacional, redução de custos e uma base de dados sólida para decisões estratégicas de alto impacto.",
    icon: <Target size={24} />,
  },
  {
    title: "Diretores e Gestores de RH",
    description:
      "Enfrentando desafios em People Analytics, automação de processos de folha, recrutamento inteligente e melhoria do engajamento.",
    icon: <Users size={24} />,
  },
  {
    title: "Líderes de Operações",
    description:
      "Precisando de ferramentas personalizadas para otimizar fluxos de trabalho, integrar sistemas e ganhar agilidade.",
    icon: <TrendingUp size={24} />,
  },
];

const differentials = [
  {
    icon: <Zap size={24} />,
    title: "Sob Medida, Não Genérico",
    description:
      "Nossas soluções são desenhadas para a sua realidade. Não acreditamos em 'tamanho único'. Entendemos seus processos, sua cultura e seus desafios para construir algo que realmente funcione.",
  },
  {
    icon: <Shield size={24} />,
    title: "Parceiro Estratégico, Não Apenas Fornecedor",
    description:
      "Nos envolvemos com seu negócio para entender o 'porquê' por trás da tecnologia. Nosso objetivo é o seu sucesso, entregando soluções que elevam a maturidade digital da sua empresa.",
  },
  {
    icon: <Brain size={24} />,
    title: "Inteligência Real, Não Apenas Relatórios",
    description:
      "Vamos além dos dashboards. Aplicamos IA para descobrir padrões, prever tendências (como turnover de funcionários) e automatizar tarefas complexas, transformando dados em ações inteligentes.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Agilidade e Escalabilidade",
    description:
      "Entregamos valor em ciclos rápidos e construímos sistemas robustos, preparados para crescer junto com a sua empresa, sem amarras tecnológicas.",
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
            bgGradient: "radial-gradient(ellipse 100% 60% at 50% 0%, {colors.blue.500/20}, transparent)"
          }}
          zIndex={-1}
        />

        {/* Floating Elements */}
        <Box
          position="absolute"
          top="20%"
          left="10%"
          w="150px"
          h="150px"
          borderRadius="full"
          bg="{colors.blue.500/10}"
          backdropFilter="blur(20px)"
          border="1px solid {colors.whiteAlpha.300}"
          animation="float 10s ease-in-out infinite"
          zIndex={-1}
        />
        
        <Box
          position="absolute"
          bottom="10%"
          right="15%"
          w="100px"
          h="100px"
          borderRadius="2xl"
          bg="{colors.purple.500/10}"
          backdropFilter="blur(20px)"
          border="1px solid {colors.whiteAlpha.300}"
          animation="float 8s ease-in-out infinite reverse"
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
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700}, {colors.purple.500})"
                  bgClip="text"
                >
                  transformar
                </Text>{" "}
                seus dados?
              </Heading>
              
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="fg.muted"
                maxW="3xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Vamos agendar uma conversa sem compromisso. Queremos entender seus 
                desafios e mostrar como a tecnologia sob medida da Shift+G pode 
                destravar o potencial da sua operação.
              </Text>
            </VStack>

            <VStack gap={8} w="full" maxW="lg">
              <Link href="mailto:contato@shiftg.com.br" passHref>
                <Button
                  size="xl"
                  px={12}
                  py={8}
                  rounded="2xl"
                  fontWeight="700"
                  fontSize="xl"
                  bg="{colors.gradient.blue}"
                  color="white"
                  border="none"
                  boxShadow="0 15px 50px {colors.blue.500/40}"
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 60px {colors.blue.500/50}",
                    bg: "linear-gradient(135deg, {colors.blue.600}, {colors.blue.800})"
                  }}
                  _active={{
                    transform: "translateY(0px)",
                  }}
                  transition="all 0.3s ease"
                  w={{ base: "full", sm: "auto" }}
                >
                  Agende uma demonstração gratuita
                  <ChevronRight size={20} style={{ marginLeft: '12px' }} />
                </Button>
              </Link>
              
              <Box
                px={8}
                py={4}
                rounded="xl"
                bg="{colors.whiteAlpha.200}"
                backdropFilter="blur(20px)"
                border="1px solid {colors.whiteAlpha.300}"
              >
                <HStack gap={3} justify="center">
                  <Mail size={20} color="blue.500" />
                  <Text fontSize="lg" color="fg.muted" fontWeight="500">
                    Ou envie um e-mail para{" "}
                    <Text as="span" fontWeight="700" color="blue.solid">
                      contato@shiftg.com.br
                    </Text>
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Page>
  );
}
