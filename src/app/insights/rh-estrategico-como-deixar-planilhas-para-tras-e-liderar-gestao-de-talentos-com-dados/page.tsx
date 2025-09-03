import { Metadata } from "next";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Badge,
  SimpleGrid,
  Card,
  Icon,
  Separator,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import {
  Users,
  BarChart3,
  Bot,
  Zap,
  Target,
  TrendingUp,
  Heart,
  MessageCircle,
  Calendar,
  FileText,
  Shield,
  ArrowRight,
  Brain,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: "RH Estratégico: Como Deixar as Planilhas para Trás e Liderar a Gestão de Talentos com Dados",
  description:
    "Descubra como transformar o RH operacional em estratégico através de automação inteligente, people analytics e foco na experiência do colaborador. Entenda os 3 pilares da transformação digital no RH.",
  keywords: [
    "RH estratégico",
    "people analytics",
    "recursos humanos",
    "automação RH",
    "gestão de talentos",
    "employee experience",
    "transformação digital RH",
    "dados recursos humanos",
  ],
  openGraph: {
    title: "RH Estratégico: Como Deixar as Planilhas para Trás e Liderar a Gestão de Talentos com Dados",
    description:
      "Descubra como transformar o RH operacional em estratégico através de automação inteligente, people analytics e foco na experiência do colaborador.",
    url: `${SITE_URL}/insights/rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados`,
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RH Estratégico e People Analytics - SHIFT+G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RH Estratégico: Como Deixar as Planilhas para Trás e Liderar a Gestão de Talentos com Dados",
    description:
      "Descubra como transformar o RH operacional em estratégico através de automação inteligente, people analytics e foco na experiência do colaborador.",
    images: ["/og-image.png"],
  },
};

const pillars = [
  {
    number: "01",
    title: "Automação Inteligente de Processos",
    description: "O primeiro passo é tirar o peso das tarefas repetitivas dos ombros da sua equipe. Processos que hoje levam horas (e estão sujeitos a erros) podem ser executados em minutos por robôs de software (RPA) e fluxos de trabalho automatizados.",
    icon: Bot,
    examples: [
      {
        title: "Onboarding e Offboarding",
        description: "Desde a criação de contas e e-mails para novos contratados até o checklist de desligamento, tudo pode ser orquestrado automaticamente.",
      },
      {
        title: "Gestão de Férias e Benefícios", 
        description: "Colaboradores solicitam por um portal simples, e o fluxo de aprovação é disparado automaticamente para os gestores, atualizando o saldo em tempo real.",
      },
      {
        title: "Administração da Folha de Pagamento",
        description: "Robôs podem consolidar dados do ponto, horas extras e bônus de diferentes fontes, preparando tudo para o processamento final.",
      },
    ],
  },
  {
    number: "02",
    title: "Adeus, Planilhas! Olá, People Analytics!",
    description: "Este é o coração da transformação. Trata-se de unificar todos os dados dos colaboradores — desde o recrutamento, passando pela performance, engajamento, remuneração e até dados de outros sistemas — em uma única fonte da verdade.",
    icon: BarChart3,
    examples: [
      {
        title: "Análise de Perfil de Sucesso",
        description: "Qual perfil de candidato tem a maior taxa de sucesso após um ano na empresa?",
      },
      {
        title: "Liderança e Engajamento",
        description: "Quais líderes têm as equipes mais engajadas e com menor rotatividade?",
      },
      {
        title: "Predição de Churn",
        description: "Podemos prever qual colaborador tem alto risco de deixar a empresa nos próximos 6 meses?",
      },
    ],
  },
  {
    number: "03",
    title: "A Experiência do Colaborador (EX) no Centro de Tudo",
    description: "Um RH moderno e eficiente reflete diretamente na forma como o colaborador percebe a empresa. Facilitar a vida da equipe é um dos maiores retornos desse investimento.",
    icon: Heart,
    examples: [
      {
        title: "Portais de Autoatendimento",
        description: "Um único lugar onde o colaborador pode consultar seu holerite, solicitar férias, atualizar dados cadastrais e acessar documentos, sem precisar abrir um chamado.",
      },
      {
        title: "Chatbots Internos",
        description: "Um assistente virtual disponível 24/7 para responder às dúvidas mais frequentes sobre políticas da empresa, benefícios ou status de solicitações.",
      },
      {
        title: "Comunicação Personalizada",
        description: "Automação que permite enviar comunicações relevantes para grupos específicos de funcionários, garantindo que a mensagem certa chegue à pessoa certa no momento certo.",
      },
    ],
  },
];

const businessImpacts = [
  {
    title: "Decisões Mais Inteligentes",
    description: "Contratações, promoções e planos de sucessão baseados em dados.",
    icon: Brain,
  },
  {
    title: "Redução de Turnover",
    description: "A capacidade de agir proativamente para reter talentos economiza milhões em custos de recrutamento e treinamento.",
    icon: Shield,
  },
  {
    title: "Aumento da Produtividade",
    description: "Um RH ágil e colaboradores autônomos significam menos tempo gasto com burocracia e mais tempo focado nos objetivos da empresa.",
    icon: TrendingUp,
  },
  {
    title: "Fortalecimento da Marca Empregadora",
    description: "Uma experiência do colaborador moderna e eficiente atrai e retém os melhores profissionais do mercado.",
    icon: Target,
  },
];

const strategicFocus = [
  "Analisar tendências de turnover e agir antes que os melhores talentos peçam demissão",
  "Desenvolver planos de carreira baseados em dados de performance e potencial",
  "Construir uma cultura organizacional forte e mensurável",
  "Melhorar a jornada e a experiência do colaborador em cada ponto de contato",
];

export default function RHEstrategicoBlogPost() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Section py={{ base: 16, md: 20 }}>
        <Container maxW="4xl">
          <VStack gap={6} textAlign="center">
            <HStack flexWrap="wrap" justify="center" gap={2}>
              <Badge colorPalette="blue" variant="surface">
                Recursos Humanos
              </Badge>
              <Badge colorPalette="blue" variant="surface">
                People Analytics
              </Badge>
              <Badge colorPalette="blue" variant="surface">
                Employee Experience
              </Badge>
            </HStack>
            
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="400"
              color="fg"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              RH Estratégico: Como Deixar as Planilhas para Trás e Liderar a Gestão de Talentos com Dados
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
              maxW="3xl"
            >
              Planilha de controle de férias. Outra para o banco de horas. Uma terceira para a avaliação de desempenho. Um arquivo em PDF para o organograma. Um sistema para a folha de pagamento que não conversa com o software de recrutamento.
            </Text>
          </VStack>
        </Container>
      </Section>

      {/* Problem Section */}
      <Section bg="bg.subtle">
        <Container maxW="4xl">
          <VStack gap={6} textAlign="center">
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg"
              lineHeight="tall"
              fontWeight="500"
            >
              Para muitos profissionais de RH, essa colcha de retalhos digital é a realidade diária. Um labirinto de dados descentralizados que consome um tempo precioso em tarefas operacionais, deixando pouco ou nenhum espaço para o que realmente importa: a estratégia de gestão de pessoas.
            </Text>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
            >
              O resultado? O RH fica preso em um ciclo reativo, apagando incêndios e administrando burocracias, quando deveria estar atuando como um parceiro estratégico, um verdadeiro arquiteto da cultura e do desenvolvimento de talentos da empresa.
            </Text>

            <Box
              p={6}
              bg="blue.50"
              _dark={{ bg: "blue.950" }}
              borderRadius="lg"
              borderLeft="4px solid"
              borderColor="blue.500"
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="300"
                color="blue.700"
                _dark={{ color: "blue.300" }}
                textAlign="center"
              >
                Mas essa realidade está mudando. A tecnologia, quando aplicada de forma inteligente, é a alavanca que transforma o RH operacional em um RH estratégico e orientado a dados.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Section>

      {/* The Great Shift Section */}
      <Section
        title="O Grande Shift: De Executor de Tarefas a Arquiteto de Pessoas"
        subtitle="A transformação digital no RH não é sobre substituir pessoas por robôs. É sobre potencializar as pessoas com as ferramentas certas. É sobre libertar os profissionais de RH do trabalho manual para que possam focar em:"
        centered
      >
        <VStack gap={6}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            {strategicFocus.map((focus, index) => (
              <Card.Root key={index} variant="outline">
                <Card.Body p={6}>
                  <HStack gap={4}>
                    <Icon color="blue.500" size="lg">
                      <Lightbulb />
                    </Icon>
                    <Text color="fg" lineHeight="tall" fontSize="sm">
                      {focus}
                    </Text>
                  </HStack>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="fg.muted"
            lineHeight="tall"
            textAlign="center"
            mt={6}
          >
            Para chegar lá, a transformação se apoia em três pilares fundamentais:
          </Text>
        </VStack>
      </Section>

      {/* Pillars Section */}
      <Section
        title="Os 3 Pilares da Transformação do RH"
        centered
        bg="bg.subtle"
      >
        <VStack gap={12}>
          {pillars.map((pillar, index) => (
            <Box key={pillar.title} w="full">
              <Card.Root variant="outline" bg="bg">
                <Card.Body p={8}>
                  <VStack gap={6} alignItems="flex-start">
                    <HStack gap={6} alignItems="flex-start">
                      <VStack gap={4} alignItems="center" minW="80px">
                        <Text
                          fontSize="3xl"
                          fontWeight="400"
                          color="blue.500"
                          lineHeight="1"
                        >
                          {pillar.number}
                        </Text>
                        <Icon color="blue.500" size="xl">
                          <pillar.icon />
                        </Icon>
                      </VStack>
                      <VStack gap={4} alignItems="flex-start" flex={1}>
                        <Heading as="h3" size="lg" color="fg">
                          {pillar.title}
                        </Heading>
                        <Text color="fg.muted" lineHeight="tall" fontSize="md">
                          {pillar.description}
                        </Text>
                      </VStack>
                    </HStack>

                    <Box w="full" pl={16}>
                      <Heading as="h4" size="md" color="fg" mb={4}>
                        Exemplos Práticos:
                      </Heading>
                      <VStack gap={4} alignItems="flex-start">
                        {pillar.examples.map((example) => (
                          <Box key={example.title}>
                            <Text fontWeight="300" color="fg" mb={1}>
                              • {example.title}:
                            </Text>
                            <Text color="fg.muted" lineHeight="tall" fontSize="sm" pl={4}>
                              {example.description}
                            </Text>
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  </VStack>
                </Card.Body>
              </Card.Root>
              {index < pillars.length - 1 && (
                <Box textAlign="center" py={4}>
                  <Icon color="blue.300" size="sm">
                    <ArrowRight />
                  </Icon>
                </Box>
              )}
            </Box>
          ))}
        </VStack>
      </Section>

      {/* Business Impact Section */}
      <Section
        title="O Impacto no Negócio: Por que o CEO vai Apoiar essa Mudança"
        subtitle="Transformar o RH não é um projeto isolado; é um investimento estratégico com impacto direto nos resultados da empresa:"
        centered
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {businessImpacts.map((impact) => (
            <Card.Root key={impact.title} variant="outline">
              <Card.Body p={6}>
                <VStack gap={4} alignItems="flex-start">
                  <HStack>
                    <Icon color="green.500" size="lg">
                      <impact.icon />
                    </Icon>
                    <Heading as="h3" size="md" color="fg">
                      {impact.title}
                    </Heading>
                  </HStack>
                  <Text color="fg.muted" lineHeight="tall" fontSize="sm">
                    {impact.description}
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Section>

      {/* Conclusion Section */}
      <Section bg="bg.subtle">
        <Container maxW="4xl">
          <VStack gap={8} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="fg"
              fontWeight="300"
            >
              O Futuro do RH é Hoje
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
            >
              A tecnologia não veio para substituir o lado "humano" dos Recursos Humanos. Ela veio para libertá-lo da sobrecarga administrativa, permitindo que a equipe de RH faça o que faz de melhor: cuidar das pessoas.
            </Text>

            <Box
              p={6}
              bg="green.50"
              _dark={{ bg: "green.950" }}
              borderRadius="lg"
              borderLeft="4px solid"
              borderColor="green.500"
              textAlign="center"
            >
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="green.700"
                _dark={{ color: "green.300" }}
                lineHeight="tall"
              >
                Quando os dados estão centralizados e organizados, as planilhas se tornam dashboards inteligentes que respondem a perguntas críticas e transformam o RH em um centro de inteligência de negócios.
              </Text>
            </Box>

            <Separator />

            <VStack gap={4}>
              <Heading
                as="h3"
                size="lg"
                color="fg"
                fontWeight="300"
              >
                Quer mapear as oportunidades para transformar o RH da sua empresa em um centro de inteligência e estratégia?
              </Heading>

              <Button
                asChild
                size="lg"
                colorPalette="blue"
                variant="solid"
              >
                <Link href="/transformacao-digital">
                  Agende um Diagnóstico de Maturidade para o seu RH
                  <ArrowRight />
                </Link>
              </Button>
            </VStack>
          </VStack>
        </Container>
      </Section>

      <Footer />
    </Page>
  );
}
