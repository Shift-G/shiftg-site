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
  TrendingUp,
  DollarSign,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title:
    "O ROI da Inteligência Artificial: Como Calcular o Impacto da IA no Balanço da sua Empresa",
  description:
    "Descubra como calcular o retorno sobre investimento da Inteligência Artificial em sua empresa. Entenda os 4 vetores de retorno e a fórmula prática para medir o impacto financeiro da IA no seu negócio.",
  keywords: [
    "ROI inteligência artificial",
    "retorno investimento IA",
    "impacto financeiro IA",
    "calculadora ROI IA",
    "benefícios IA empresas",
    "automação processos",
    "redução custos IA",
    "estratégia IA",
  ],
  openGraph: {
    title:
      "O ROI da Inteligência Artificial: Como Calcular o Impacto da IA no Balanço da sua Empresa",
    description:
      "Descubra como calcular o retorno sobre investimento da Inteligência Artificial em sua empresa. Entenda os 4 vetores de retorno e a fórmula prática para medir o impacto financeiro da IA.",
    url: `${SITE_URL}/insights/o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa`,
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ROI da Inteligência Artificial - SHIFT+G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "O ROI da Inteligência Artificial: Como Calcular o Impacto da IA no Balanço da sua Empresa",
    description:
      "Descubra como calcular o retorno sobre investimento da Inteligência Artificial em sua empresa. Entenda os 4 vetores de retorno e a fórmula prática.",
    images: ["/og-image.png"],
  },
};

const roiVectors = [
  {
    title: "Redução Drástica de Custos Operacionais",
    description:
      "Este é o benefício mais direto e fácil de medir. A IA é uma especialista em otimizar processos e automatizar tarefas que antes consumiam horas de trabalho humano.",
    icon: TrendingUp,
    examples: [
      {
        title: "Automação de Back-Office (RPA + IA)",
        description:
          "Processamento automático de notas fiscais, conciliação bancária e análise de documentos. O ganho é medido em horas/homem economizadas.",
      },
      {
        title: "Atendimento ao Cliente",
        description:
          "Chatbots e voicebots que resolvem 80% das dúvidas comuns, 24/7, reduzindo a necessidade de uma grande equipe de suporte Nível 1.",
      },
      {
        title: "Otimização de Logística",
        description:
          "Algoritmos que calculam as rotas de entrega mais eficientes, economizando combustível, tempo e custos de manutenção.",
      },
    ],
  },
  {
    title: "Aumento Direto de Receita",
    description:
      "A IA não serve apenas para economizar, mas também para gerar novas oportunidades de negócio e maximizar as existentes.",
    icon: DollarSign,
    examples: [
      {
        title: "Sistemas de Recomendação",
        description:
          'Aumento do ticket médio em e-commerces e plataformas através de sugestões de produtos personalizadas (ex: "quem comprou X também comprou Y").',
      },
      {
        title: "Qualificação de Leads (Lead Scoring)",
        description:
          "Modelos de IA que analisam o perfil e o comportamento de leads, priorizando aqueles com maior probabilidade de conversão para o time de vendas.",
      },
      {
        title: "Precificação Dinâmica",
        description:
          "Ajuste automático de preços com base na demanda, estoque e comportamento do mercado, maximizando a margem de lucro.",
      },
    ],
  },
  {
    title: "Mitigação de Riscos e Perdas",
    description:
      "O que não se perde é lucro. A capacidade preditiva da IA é uma ferramenta poderosa para evitar problemas antes que eles aconteçam, protegendo o balanço da empresa.",
    icon: Shield,
    examples: [
      {
        title: "Detecção de Fraudes",
        description:
          "Análise de transações em tempo real para identificar padrões suspeitos e bloquear atividades fraudulentas, economizando milhões em perdas.",
      },
      {
        title: "Manutenção Preditiva",
        description:
          "Sensores e IA que monitoram máquinas e preveem falhas, permitindo manutenções programadas e evitando paradas de produção caríssimas.",
      },
      {
        title: "Análise de Churn (Rotatividade de Clientes)",
        description:
          "Modelos que identificam clientes com alta probabilidade de cancelar um serviço, permitindo ações de retenção proativas.",
      },
    ],
  },
  {
    title: "Otimização de Ativos Estratégicos",
    description:
      "A IA potencializa os ativos mais importantes da sua empresa: capital, tempo e pessoas.",
    icon: BarChart3,
    examples: [
      {
        title: "Gestão de Estoque",
        description:
          "Previsão de demanda que evita tanto a falta de produtos (perda de vendas) quanto o excesso de estoque (custo de armazenagem e capital parado).",
      },
      {
        title: "People Analytics",
        description:
          "Análise de dados de RH para prever turnover de talentos, otimizar processos de recrutamento e identificar necessidades de treinamento, reduzindo custos de contratação e aumentando a produtividade.",
      },
    ],
  },
];

export default function ROIInteligenciaArtificialBlogPost() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Section py={{ base: 16, md: 20 }}>
        <Container maxW="4xl">
          <VStack gap={6} textAlign="center">
            <HStack flexWrap="wrap" justify="center" gap={2}>
              <Badge colorPalette="blue" variant="surface">
                Inteligência Artificial
              </Badge>
              <Badge colorPalette="blue" variant="surface">
                ROI
              </Badge>
              <Badge colorPalette="blue" variant="surface">
                Estratégia de Negócios
              </Badge>
            </HStack>

            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="800"
              color="fg"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              O ROI da Inteligência Artificial: Como Calcular o Impacto da IA no
              Balanço da sua Empresa
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
              maxW="3xl"
            >
              Em qualquer reunião de diretoria, ao se discutir um novo projeto,
              a pergunta é inevitável: "Qual é o retorno sobre o investimento?".
              Com a Inteligência Artificial não é diferente.
            </Text>
          </VStack>
        </Container>
      </Section>

      {/* Intro Section */}
      <Section bg="bg.subtle">
        <Container maxW="4xl">
          <VStack gap={6} textAlign="center">
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg"
              lineHeight="tall"
              fontWeight="500"
            >
              Por trás do hype tecnológico, executivos e C-levels querem saber a
              mesma coisa: como a IA se traduz em resultados financeiros
              tangíveis?
            </Text>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
            >
              Muitos ainda veem a IA como um centro de custo para inovação — um
              investimento caro e de retorno incerto. Mas essa visão está
              ultrapassada.
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
                fontWeight="600"
                color="blue.700"
                _dark={{ color: "blue.300" }}
                textAlign="center"
              >
                Quando aplicada de forma estratégica, a Inteligência Artificial
                não é um custo; é um motor de lucratividade com um ROI claro e
                mensurável.
              </Text>
            </Box>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="tall"
            >
              Neste artigo, vamos desmistificar o cálculo do ROI da IA,
              mostrando exatamente onde e como ela gera valor real para o seu
              negócio.
            </Text>
          </VStack>
        </Container>
      </Section>

      {/* ROI Vectors Section */}
      <Section
        title="Os 4 Vetores de Retorno da Inteligência Artificial"
        subtitle="O impacto financeiro da IA pode ser dividido em quatro grandes áreas. Uma solução bem implementada geralmente atua em mais de uma delas simultaneamente."
        centered
      >
        <VStack gap={12}>
          {roiVectors.map((vector, index) => (
            <Card.Root key={vector.title} variant="outline" w="full">
              <Card.Body p={8}>
                <VStack gap={6} alignItems="flex-start">
                  <HStack gap={4}>
                    <Icon color="blue.500" size="xl">
                      <vector.icon />
                    </Icon>
                    <VStack gap={2} alignItems="flex-start" flex={1}>
                      <Heading as="h3" size="lg" color="fg">
                        {index + 1}. {vector.title}
                      </Heading>
                      <Text color="fg.muted" lineHeight="tall">
                        {vector.description}
                      </Text>
                    </VStack>
                  </HStack>

                  <Box w="full" pl={12}>
                    <Heading as="h4" size="md" color="fg" mb={4}>
                      Exemplos Práticos:
                    </Heading>
                    <VStack gap={4} alignItems="flex-start">
                      {vector.examples.map((example) => (
                        <Box key={example.title}>
                          <Text fontWeight="600" color="fg" mb={1}>
                            • {example.title}:
                          </Text>
                          <Text
                            color="fg.muted"
                            lineHeight="tall"
                            fontSize="sm"
                            pl={4}
                          >
                            {example.description}
                          </Text>
                        </Box>
                      ))}
                    </VStack>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </VStack>
      </Section>

      {/* ROI Formula Section */}
      <Section
        title="Calculando o ROI na Prática: Uma Fórmula Simplificada"
        subtitle="Embora cada projeto tenha suas particularidades, a lógica do cálculo é sempre a mesma:"
        centered
        bg="bg.subtle"
      >
        <VStack gap={8}>
          <Box
            p={8}
            bg="white"
            _dark={{ bg: "gray.900" }}
            borderRadius="lg"
            border="1px solid"
            borderColor="border"
            textAlign="center"
          >
            <Text fontSize="xl" fontWeight="700" color="fg" fontFamily="mono">
              ROI (%) = (Benefícios Financeiros - Custo Total da Solução) /
              Custo Total da Solução × 100
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            <Card.Root variant="outline">
              <Card.Body p={6}>
                <VStack gap={4} alignItems="flex-start">
                  <HStack>
                    <Icon color="green.500" size="lg">
                      <TrendingUp />
                    </Icon>
                    <Heading as="h3" size="md" color="fg">
                      Benefícios Financeiros
                    </Heading>
                  </HStack>
                  <Text color="fg.muted" lineHeight="tall" fontSize="sm">
                    A soma dos ganhos em todos os vetores mencionados (ex:
                    economia com salários em tarefas automatizadas + aumento de
                    vendas por recomendação + valor salvo em fraudes evitadas).
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root variant="outline">
              <Card.Body p={6}>
                <VStack gap={4} alignItems="flex-start">
                  <HStack>
                    <Icon color="red.500" size="lg">
                      <DollarSign />
                    </Icon>
                    <Heading as="h3" size="md" color="fg">
                      Custo Total da Solução
                    </Heading>
                  </HStack>
                  <Text color="fg.muted" lineHeight="tall" fontSize="sm">
                    Inclui não apenas o desenvolvimento ou licenciamento, mas
                    também custos de infraestrutura (nuvem), treinamento da
                    equipe e manutenção contínua.
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </SimpleGrid>

          <Box
            p={6}
            bg="blue.50"
            _dark={{ bg: "blue.950" }}
            borderRadius="lg"
            borderLeft="4px solid"
            borderColor="blue.500"
            textAlign="center"
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="blue.700"
              _dark={{ color: "blue.300" }}
              lineHeight="tall"
            >
              Um parceiro estratégico como a Shift+G ajuda a mapear e
              quantificar essas variáveis <em>antes</em> do início do projeto,
              garantindo que a iniciativa tenha um business case sólido.
            </Text>
          </Box>
        </VStack>
      </Section>

      {/* Conclusion Section */}
      <Section>
        <Container maxW="4xl">
          <VStack gap={8} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="fg"
              fontWeight="700"
            >
              Inteligência Artificial não é Magia, é Matemática de Negócios
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
            >
              Deixar de investir em IA por considerá-la um "custo de futuro" é
              um erro estratégico. A tecnologia já é o presente e seus
              concorrentes já estão fazendo essa conta.
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="tall"
              maxW="3xl"
            >
              O verdadeiro desafio não é decidir <em>se</em> aplicar IA, mas{" "}
              <em>onde</em> aplicá-la para gerar o maior e mais rápido retorno.
              A resposta está em uma análise criteriosa dos seus processos,
              gargalos e oportunidades.
            </Text>

            <Separator />

            <VStack gap={4}>
              <Heading as="h3" size="lg" color="fg" fontWeight="600">
                Quer descobrir onde a Inteligência Artificial pode gerar o maior
                retorno para a sua empresa?
              </Heading>

              <Button asChild size="lg" colorPalette="blue" variant="solid">
                <Link href="/transformacao-digital">
                  Solicite uma Análise de Potencial de ROI
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
