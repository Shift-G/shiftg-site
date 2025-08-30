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
  Bot,
  Clock,
  Target,
  TrendingUp,
  Users,
  Shield,
  BarChart3,
  ArrowRight,
  Zap,
  FileText,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: "RPA: Liberte sua Equipe das Tarefas Repetitivas e Foque no que Realmente Importa",
  description:
    "Descubra como o RPA (Robotic Process Automation) pode transformar sua operação, eliminando tarefas repetitivas e liberando sua equipe para atividades estratégicas. Entenda os benefícios, casos de uso e como combinar RPA com IA.",
  keywords: [
    "RPA",
    "automação de processos",
    "robotic process automation",
    "eficiência operacional",
    "redução de custos",
    "transformação digital",
    "automação inteligente",
    "hiperautomação",
  ],
  openGraph: {
    title: "RPA: Liberte sua Equipe das Tarefas Repetitivas e Foque no que Realmente Importa",
    description:
      "Descubra como o RPA pode transformar sua operação, eliminando tarefas repetitivas e liberando sua equipe para atividades estratégicas.",
    url: `${SITE_URL}/insights/rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa`,
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RPA e Automação de Processos - SHIFT+G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPA: Liberte sua Equipe das Tarefas Repetitivas e Foque no que Realmente Importa",
    description:
      "Descubra como o RPA pode transformar sua operação, eliminando tarefas repetitivas e liberando sua equipe para atividades estratégicas.",
    images: ["/og-image.png"],
  },
};

const useCases = [
  {
    title: "Financeiro e Contábil",
    icon: DollarSign,
    examples: [
      "Processamento de contas a pagar e a receber",
      "Conciliação bancária e de cartões de crédito",
      "Geração automática de relatórios financeiros e de fechamento",
    ],
  },
  {
    title: "Recursos Humanos (RH)",
    icon: Users,
    examples: [
      "Processos de onboarding (criação de logins, envio de e-mails de boas-vindas)",
      "Atualização de dados de funcionários em diferentes sistemas",
      "Processamento da folha de pagamento e gestão de benefícios",
    ],
  },
  {
    title: "Operações e Logística",
    icon: BarChart3,
    examples: [
      "Processamento de pedidos de compra e venda",
      "Rastreamento de remessas e atualização de status",
      "Gestão e atualização de inventário em sistemas",
    ],
  },
];

const benefits = [
  {
    title: "ROI Rápido e Mensurável",
    description: "A economia gerada pela automação de horas de trabalho é direta e fácil de calcular. Projetos de RPA costumam se pagar em poucos meses.",
    icon: TrendingUp,
  },
  {
    title: "Aumento Exponencial da Eficiência",
    description: "Um robô pode executar uma tarefa em uma fração do tempo que um humano levaria, liberando gargalos e acelerando ciclos de negócio inteiros.",
    icon: Zap,
  },
  {
    title: "Qualidade e Precisão (Erro Zero)",
    description: "Elimina erros de digitação e falhas humanas em processos críticos, garantindo a integridade dos seus dados.",
    icon: Target,
  },
  {
    title: "Satisfação e Valorização da Equipe",
    description: "Ao remover as tarefas monótonas, você permite que sua equipe foque em análise, estratégia e interação com clientes — atividades de maior valor agregado.",
    icon: Users,
  },
  {
    title: "Compliance e Auditoria Simplificados",
    description: "Cada passo executado por um robô é registrado, criando um log completo e rastreável de todas as atividades.",
    icon: Shield,
  },
];

const rpaCapabilities = [
  "Clica em botões",
  "Preenche formulários",
  "Copia e cola dados",
  "Abre sistemas e aplicativos",
  "Lê e-mails e manipula arquivos",
];

export default function RPABlogPost() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Section py={{ base: 16, md: 20 }}>
        <Container maxW="4xl">
          <VStack gap={6} textAlign="center">
            <HStack flexWrap="wrap" justify="center" gap={2}>
              <Badge colorPalette="blue" variant="surface">
                RPA
              </Badge>
              <Badge colorPalette="blue" variant="surface">
                Automação
              </Badge>
              <Badge colorPalette="blue" variant="surface">
                Eficiência Operacional
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
              RPA: Liberte sua Equipe das Tarefas Repetitivas e Foque no que Realmente Importa
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
              maxW="3xl"
            >
              Copiar dados de uma planilha para um sistema. Colar informações de um e-mail em um CRM. Baixar relatórios, anexar em um e-mail e enviar para uma lista de pessoas. Todos os dias. Repetidamente.
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
              Essa rotina manual e repetitiva não é apenas tediosa; ela é um ladrão silencioso de produtividade, um convite a erros humanos e um obstáculo ao crescimento do seu negócio.
            </Text>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
            >
              E se você pudesse delegar todas essas tarefas a um "funcionário digital" que trabalha 24 horas por dia, 7 dias por semana, sem se cansar e com 100% de precisão?
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
                Bem-vindo ao mundo do RPA (Robotic Process Automation), o primeiro passo, e um dos mais impactantes, na jornada de automação inteligente da sua empresa.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Section>

      {/* What is RPA Section */}
      <Section
        title="O que é, Exatamente, o RPA?"
        subtitle="Esqueça os robôs de metal dos filmes de ficção científica. O RPA é um robô de software, um 'trabalhador digital' que você treina para executar tarefas baseadas em regras em qualquer sistema de computador."
        centered
      >
        <VStack gap={8}>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="fg.muted"
            lineHeight="tall"
            textAlign="center"
            maxW="3xl"
          >
            Pense nele como um assistente virtual que opera a interface do usuário (a tela do computador) da mesma forma que uma pessoa faria:
          </Text>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4} w="full">
            {rpaCapabilities.map((capability) => (
              <Card.Root key={capability} variant="outline">
                <Card.Body p={4} textAlign="center">
                  <Icon color="blue.500" size="lg" mb={3}>
                    <Bot />
                  </Icon>
                  <Text fontWeight="600" color="fg" fontSize="sm">
                    {capability}
                  </Text>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg"
            lineHeight="tall"
            fontWeight="600"
            textAlign="center"
          >
            A grande vantagem é que ele faz tudo isso de forma mais rápida, sem erros e sem precisar de pausas.
          </Text>

          <Box
            p={6}
            bg="yellow.50"
            _dark={{ bg: "yellow.950" }}
            borderRadius="lg"
            borderLeft="4px solid"
            borderColor="yellow.500"
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="yellow.700"
              _dark={{ color: "yellow.300" }}
              lineHeight="tall"
            >
              <strong>Importante:</strong> RPA não é o mesmo que Inteligência Artificial. Enquanto o RPA é o mestre em seguir instruções (as "mãos" da operação), a IA é capaz de aprender e tomar decisões (o "cérebro"). A magia, como veremos, acontece quando os dois trabalham juntos.
            </Text>
          </Box>
        </VStack>
      </Section>

      {/* Use Cases Section */}
      <Section
        title="Onde o RPA Pode Gerar Impacto Imediato?"
        subtitle="A beleza do RPA está em sua aplicabilidade em praticamente qualquer departamento que lide com processos digitais repetitivos."
        centered
        bg="bg.subtle"
      >
        <VStack gap={8}>
          {useCases.map((useCase) => (
            <Card.Root key={useCase.title} variant="outline" w="full">
              <Card.Body p={8}>
                <VStack gap={6} alignItems="flex-start">
                  <HStack gap={4}>
                    <Icon color="blue.500" size="xl">
                      <useCase.icon />
                    </Icon>
                    <Heading as="h3" size="lg" color="fg">
                      {useCase.title}
                    </Heading>
                  </HStack>
                  <VStack gap={3} alignItems="flex-start" w="full" pl={12}>
                    {useCase.examples.map((example) => (
                      <Text key={example} color="fg.muted" lineHeight="tall">
                        • {example}
                      </Text>
                    ))}
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </VStack>
      </Section>

      {/* Benefits Section */}
      <Section
        title="Os Benefícios que Vão Além da Automação"
        subtitle="Implementar RPA não se trata apenas de cortar custos. O retorno sobre o investimento (ROI) se manifesta de várias formas:"
        centered
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {benefits.map((benefit) => (
            <Card.Root key={benefit.title} variant="outline">
              <Card.Body p={6}>
                <VStack gap={4} alignItems="flex-start">
                  <HStack>
                    <Icon color="green.500" size="lg">
                      <benefit.icon />
                    </Icon>
                    <Heading as="h3" size="md" color="fg">
                      {benefit.title}
                    </Heading>
                  </HStack>
                  <Text color="fg.muted" lineHeight="tall" fontSize="sm">
                    {benefit.description}
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Section>

      {/* RPA + AI Section */}
      <Section
        title="O Próximo Shift: Quando o RPA Encontra a Inteligência Artificial"
        subtitle="O RPA por si só é poderoso, mas ele brilha ainda mais quando combinado com a IA, um conceito conhecido como Automação Inteligente ou Hiperautomação."
        centered
        bg="bg.subtle"
      >
        <VStack gap={8}>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="fg.muted"
            lineHeight="tall"
            textAlign="center"
            maxW="3xl"
          >
            Imagine o seguinte cenário:
          </Text>

          <VStack gap={6} w="full">
            <Card.Root variant="outline">
              <Card.Body p={6}>
                <HStack gap={4}>
                  <Box
                    minW="40px"
                    h="40px"
                    bg="blue.500"
                    color="white"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="lg"
                    fontWeight="700"
                  >
                    1
                  </Box>
                  <Text color="fg" lineHeight="tall">
                    Um robô RPA abre um e-mail e baixa o anexo de uma nota fiscal.
                  </Text>
                </HStack>
              </Card.Body>
            </Card.Root>

            <Card.Root variant="outline">
              <Card.Body p={6}>
                <HStack gap={4}>
                  <Box
                    minW="40px"
                    h="40px"
                    bg="purple.500"
                    color="white"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="lg"
                    fontWeight="700"
                  >
                    2
                  </Box>
                  <Text color="fg" lineHeight="tall">
                    Uma IA (com Visão Computacional e Processamento de Linguagem Natural) lê e entende os dados não estruturados daquela nota (fornecedor, valor, data, itens).
                  </Text>
                </HStack>
              </Card.Body>
            </Card.Root>

            <Card.Root variant="outline">
              <Card.Body p={6}>
                <HStack gap={4}>
                  <Box
                    minW="40px"
                    h="40px"
                    bg="green.500"
                    color="white"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="lg"
                    fontWeight="700"
                  >
                    3
                  </Box>
                  <Text color="fg" lineHeight="tall">
                    O robô RPA pega esses dados já validados pela IA e os insere no seu sistema ERP para aprovação.
                  </Text>
                </HStack>
              </Card.Body>
            </Card.Root>
          </VStack>

          <Box
            p={6}
            bg="purple.50"
            _dark={{ bg: "purple.950" }}
            borderRadius="lg"
            borderLeft="4px solid"
            borderColor="purple.500"
            textAlign="center"
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="purple.700"
              _dark={{ color: "purple.300" }}
              lineHeight="tall"
            >
              Essa combinação permite automatizar processos de ponta a ponta, mesmo aqueles que envolvem tomada de decisão ou interpretação de documentos complexos.
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
              Sua Jornada de Automação Começa Hoje
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="tall"
            >
              A transformação digital não precisa começar com um projeto gigantesco e intimidador. O RPA oferece uma porta de entrada pragmática, com vitórias rápidas e um impacto profundo na eficiência e na moral da sua equipe.
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="tall"
              maxW="3xl"
            >
              Ao libertar seus talentos humanos da tirania das tarefas repetitivas, você não está apenas otimizando o presente; está capacitando sua empresa para construir o futuro.
            </Text>

            <Separator />

            <VStack gap={4}>
              <Heading
                as="h3"
                size="lg"
                color="fg"
                fontWeight="600"
              >
                Quer identificar os processos com maior potencial de automação e alto ROI na sua empresa?
              </Heading>

              <Button
                asChild
                size="lg"
                colorPalette="blue"
                variant="solid"
              >
                <Link href="/transformacao-digital">
                  Solicite um Mapeamento de Oportunidades de Automação
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
