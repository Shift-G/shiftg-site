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
import { UseCaseCard } from "@/components/cards/use-case-card";
import {
  Zap,
  Users,
  TrendingUp,
  Target,
  Brain,
  BarChart3,
  Shield,
  Rocket,
  Bot,
  UserCheck,
  MessageSquare,
  Settings,
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

const useCases = [
  {
    icon: <BarChart3 size={20} />,
    title: "People Analytics Preditivo",
    description:
      "Reduza a rotatividade prevendo quais colaboradores têm maior risco de sair e entenda os fatores de engajamento da sua equipe com dashboards inteligentes.",
    category: "RH",
    metrics: "-35% turnover",
  },
  {
    icon: <Bot size={20} />,
    title: "Automação para RH e Financeiro",
    description:
      "Automatize o processo de recrutamento, a gestão de benefícios ou a conciliação da folha de pagamento, liberando seu time para atividades estratégicas.",
    category: "Automação",
    metrics: "80% mais rápido",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Chatbots Internos Inteligentes",
    description:
      "Crie um assistente virtual para responder dúvidas frequentes de colaboradores, agilizar o onboarding e melhorar a comunicação interna 24/7.",
    category: "IA",
    metrics: "24/7 disponível",
  },
  {
    icon: <Settings size={20} />,
    title: "Plataformas de Gestão Customizadas",
    description:
      "Desenvolva uma ferramenta de avaliação de desempenho, gestão de metas (OKRs) ou controle de projetos totalmente alinhada à cultura da sua empresa.",
    category: "Software",
    metrics: "+45% produtividade",
  },
];

export default function HomePage() {
  return (
    <Page>
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Problems Section */}
      <ProblemsSection />

      {/* Solutions Section */}
      <Section
        id="solucoes"
        title="A parceria estratégica para sua transformação digital"
        subtitle="A Shift+G não é apenas uma fábrica de software. Somos seus parceiros na jornada de dados e IA. Construímos ferramentas sob medida que se integram perfeitamente aos seus processos, capacitando suas equipes com a inteligência e a autonomia necessárias para escalar."
        centered
        bg="bg.subtle"
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
        bg="bg.subtle"
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
      <Section
        id="casos"
        title="Da visão à realidade: IA e Dados aplicados ao seu negócio"
        centered
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={{ base: 6, md: 8 }}>
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </SimpleGrid>
      </Section>

      {/* Final CTA Section */}
      <Section
        id="contato"
        py={{ base: 16, md: 20 }}
        bg="blue.subtle"
      >
        <Container maxW="4xl">
          <VStack gap={{ base: 6, md: 8 }} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "3xl" }}
              fontWeight="800"
              color="fg"
            >
              Pronto para transformar seus dados em seu maior ativo?
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="2xl"
            >
              Vamos agendar uma conversa sem compromisso. Queremos entender seus 
              desafios e mostrar como a tecnologia sob medida da Shift+G pode 
              destravar o potencial da sua operação.
            </Text>

            <VStack gap={4} w="full" maxW="md">
              <Link href="mailto:contato@shiftg.com.br" passHref>
                <Button
                  size="lg"
                  colorPalette="blue"
                  fontWeight="600"
                  w={{ base: "full", sm: "auto" }}
                  px={8}
                >
                  Agende uma demonstração gratuita
                  <ChevronRight size={18} style={{ marginLeft: '8px' }} />
                </Button>
              </Link>
              
              <HStack gap={2}>
                <Mail size={16} />
                <Text fontSize="sm" color="fg.muted">
                  Ou, se preferir, envie um e-mail para{" "}
                  <Text as="span" fontWeight="600" color="blue.fg">
                    contato@shiftg.com.br
                  </Text>
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </Container>
      </Section>

      <Footer />
    </Page>
  );
}
