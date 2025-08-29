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
  AlertTriangle,
  TrendingDown,
  Users,
  BarChart3,
  Target,
  ArrowRight,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Transformação Digital: Mais do que Tecnologia, uma Estratégia de Sobrevivência",
  description:
    "Descubra como a transformação digital vai além da tecnologia e se torna uma estratégia essencial de sobrevivência para empresas modernas. Entenda os 4 pilares fundamentais e o roteiro prático em 3 passos.",
  keywords: [
    "transformação digital",
    "estratégia empresarial",
    "eficiência operacional",
    "business intelligence",
    "inovação",
    "cultura data-driven",
    "processos inteligentes",
    "experiência do cliente",
  ],
  openGraph: {
    title: "Transformação Digital: Mais do que Tecnologia, uma Estratégia de Sobrevivência",
    description:
      "Descubra como a transformação digital vai além da tecnologia e se torna uma estratégia essencial de sobrevivência para empresas modernas.",
    url: `${SITE_URL}/insights/transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia`,
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Transformação Digital - SHIFT+G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transformação Digital: Mais do que Tecnologia, uma Estratégia de Sobrevivência",
    description:
      "Descubra como a transformação digital vai além da tecnologia e se torna uma estratégia essencial de sobrevivência para empresas modernas.",
    images: ["/og-image.png"],
  },
};

const riskFactors = [
  {
    title: "Perda de Competitividade",
    description:
      "Concorrentes mais ágeis, que usam dados para entender o cliente e otimizar a operação, saem na frente.",
    icon: TrendingDown,
  },
  {
    title: "Ineficiência que Custa Caro",
    description:
      "Processos manuais e sistemas desconectados geram custos ocultos, consomem tempo valioso da sua equipe e criam gargalos que impedem o crescimento.",
    icon: AlertTriangle,
  },
  {
    title: "Experiência do Cliente Defasada",
    description:
      "Clientes modernos esperam interações rápidas, personalizadas e digitais. Um atendimento lento ou um processo de compra complicado é um convite para que procurem a concorrência.",
    icon: Users,
  },
  {
    title: "Decisões no Escuro",
    description:
      "Sem dados centralizados e acessíveis, a gestão opera com uma visão parcial da realidade, aumentando os riscos e perdendo oportunidades estratégicas.",
    icon: BarChart3,
  },
];

const pillars = [
  {
    number: "01",
    title: "Processos Inteligentes",
    description:
      "É sobre redesenhar workflows para eliminar atritos. Significa automatizar tarefas repetitivas, integrar sistemas para que os dados fluam livremente e dar à sua equipe as ferramentas certas para que possam focar no que realmente importa: o trabalho estratégico.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Cultura Orientada a Dados",
    description:
      "É a mudança de uma cultura baseada em 'achismo' para uma que valoriza a evidência. Significa capacitar gestores com dashboards intuitivos e insights preditivos, tornando as decisões mais rápidas, precisas e confiáveis em todos os níveis da organização.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Foco na Experiência do Cliente (CX)",
    description:
      "É usar a tecnologia para entender e servir melhor seu cliente. Desde um chatbot que resolve dúvidas instantaneamente até a análise de dados para prever suas necessidades, o objetivo é criar uma jornada fluida e memorável que gera lealdade.",
    icon: Target,
  },
  {
    number: "04",
    title: "Pessoas e Colaboração",
    description:
      "A melhor tecnologia do mundo é inútil se as pessoas não a adotarem. A transformação bem-sucedida envolve capacitar os colaboradores, quebrar silos entre departamentos e promover um ambiente onde a inovação e a adaptação são a norma.",
    icon: Users,
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico – Onde Estamos?",
    description:
      "O ponto de partida é um mergulho profundo na sua operação atual. Quais são os maiores gargalos? Onde os dados estão escondidos? Qual o nível de maturidade digital de cada área? Sem um diagnóstico preciso, qualquer investimento é um tiro no escuro.",
  },
  {
    number: "02",
    title: "Estratégia – Para Onde Vamos?",
    description:
      "Com o diagnóstico em mãos, é hora de traçar o mapa. Definir prioridades claras (o que trará mais impacto com menor esforço?), criar um roadmap de implementação e estabelecer os KPIs que medirão o sucesso. A estratégia garante que cada ação esteja alinhada aos objetivos maiores do negócio.",
  },
  {
    number: "03",
    title: "Execução – Como Chegamos Lá?",
    description:
      "É aqui que a estratégia se torna realidade. Seja através do desenvolvimento de um software sob medida, da implementação de uma plataforma de dados ou da automação de um workflow crítico, a execução precisa ser ágil. Começar com Provas de Conceito (PoCs) ou um Produto Mínimo Viável (MVP) é a forma mais inteligente de validar ideias, gerar resultados rápidos e ajustar o curso conforme necessário.",
  },
];

export default function TransformacaoDigitalBlogPost() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Section py={{ base: 16, md: 20 }}>
        <Container maxW="4xl">
          <VStack gap={6} textAlign="center">
            <HStack flexWrap="wrap" justify="center" gap={2}>
              <Badge colorPalette="blue" variant="surface">
                Transformação Digital
              </Badge>
              <Badge colorPalette="blue" variant="surface">
                Estratégia
              </Badge>
              <Badge colorPalette="blue" variant="surface">
                Inovação
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
              Transformação Digital: Mais do que Tecnologia, uma Estratégia de Sobrevivência
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
              maxW="3xl"
            >
              Planilhas intermináveis que viram a noite para serem consolidadas. Sistemas que não conversam entre si, forçando o retrabalho manual. Decisões importantes baseadas mais em intuição do que em dados concretos.
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="tall"
              maxW="2xl"
            >
              Se esse cenário soa familiar, sua empresa não está sozinha. Mas em um mundo onde a agilidade define os vencedores, operar dessa forma não é mais uma opção.
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
              O termo "Transformação Digital" é frequentemente jogado em reuniões e apresentações, mas seu significado real muitas vezes se perde. Muitos o associam a projetos de TI complexos ou à adoção de um software da moda.
            </Text>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
            >
              Na Shift+G, vemos de outra forma: é uma redefinição fundamental de como sua empresa opera, compete e entrega valor aos seus clientes.
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
                Não se trata de digitalizar o caos. Trata-se de usar a tecnologia como um catalisador para ser mais inteligente, mais rápido e mais resiliente.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Section>

      {/* Risk Factors Section */}
      <Section
        title="Por que a Inércia se Tornou o Maior Risco do seu Negócio?"
        subtitle="Ignorar a transformação digital hoje é como uma empresa do século XX que se recusava a usar o telefone. As consequências da inércia são claras e cada vez mais aceleradas:"
        centered
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {riskFactors.map((risk) => (
            <Card.Root key={risk.title} variant="outline">
              <Card.Body p={6}>
                <VStack gap={4} alignItems="flex-start">
                  <HStack>
                    <Icon color="red.500" size="lg">
                      <risk.icon />
                    </Icon>
                    <Heading as="h3" size="md" color="fg">
                      {risk.title}
                    </Heading>
                  </HStack>
                  <Text color="fg.muted" lineHeight="tall">
                    {risk.description}
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Section>

      {/* Pillars Section */}
      <Section
        title="Os 4 Pilares da Verdadeira Transformação Digital"
        subtitle="Uma transformação bem-sucedida não se apoia em uma única tecnologia, mas em uma mudança integrada que equilibra quatro pilares essenciais:"
        centered
        bg="bg.subtle"
      >
        <VStack gap={8}>
          {pillars.map((pillar, index) => (
            <Box key={pillar.title} w="full">
              <Card.Root variant="outline" bg="bg">
                <Card.Body p={8}>
                  <HStack gap={6} alignItems="flex-start">
                    <VStack gap={4} alignItems="center" minW="80px">
                      <Text
                        fontSize="3xl"
                        fontWeight="800"
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

      {/* Roadmap Section */}
      <Section
        title="Como Começar? Um Roteiro Prático em 3 Passos"
        subtitle="A jornada pode parecer complexa, mas ela começa com um primeiro passo claro e estruturado."
        centered
      >
        <VStack gap={6}>
          {steps.map((step, index) => (
            <Box key={step.title} w="full">
              <Card.Root variant="outline">
                <Card.Body p={8}>
                  <HStack gap={6} alignItems="flex-start">
                    <Box
                      minW="60px"
                      h="60px"
                      bg="blue.500"
                      color="white"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="xl"
                      fontWeight="700"
                    >
                      {step.number}
                    </Box>
                    <VStack gap={4} alignItems="flex-start" flex={1}>
                      <Heading as="h3" size="lg" color="fg">
                        {step.title}
                      </Heading>
                      <Text color="fg.muted" lineHeight="tall" fontSize="md">
                        {step.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
              {index < steps.length - 1 && (
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

      {/* Conclusion Section */}
      <Section bg="bg.subtle">
        <Container maxW="4xl">
          <VStack gap={8} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="fg"
              fontWeight="700"
            >
              A Jornada é Contínua, o Parceiro é Fundamental
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
            >
              A transformação digital não é um projeto com início, meio e fim. É uma jornada contínua de melhoria e adaptação.
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="tall"
              maxW="3xl"
            >
              Navegar por essa jornada exige mais do que apenas tecnologia; exige um parceiro com visão de negócio, expertise técnica e a capacidade de não apenas planejar, mas executar. Um parceiro que entende que o objetivo final não é implementar um sistema, mas sim destravar o potencial da sua empresa.
            </Text>

            <Separator />

            <VStack gap={4}>
              <Heading
                as="h3"
                size="lg"
                color="fg"
                fontWeight="600"
              >
                Pronto para dar o primeiro passo e entender em que estágio de maturidade digital sua empresa se encontra?
              </Heading>

              <Button
                asChild
                size="lg"
                colorPalette="blue"
                variant="solid"
              >
                <Link href="/transformacao-digital">
                  Converse com nossos especialistas
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
