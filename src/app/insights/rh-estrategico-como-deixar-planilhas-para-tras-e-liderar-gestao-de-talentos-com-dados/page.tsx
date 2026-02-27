import { Metadata } from "next";
import {
  Box,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Users,
  BarChart3,
  Bot,
  TrendingUp,
  Target,
  Heart,
  Shield,
  ArrowRight,
  Brain,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `RH Estratégico | ${SITE_NAME}`,
  description:
    "Descubra como transformar o RH operacional em estratégico através de automação inteligente, people analytics e foco na experiência do colaborador.",
  alternates: {
    canonical: `${SITE_URL}/insights/rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados`,
  },
  openGraph: {
    title: "RH Estratégico e People Analytics",
    description:
      "Descubra como transformar o RH operacional em estratégico através de automação inteligente e people analytics.",
    url: `${SITE_URL}/insights/rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados`,
    type: "article",
    siteName: SITE_NAME,
  },
};

const pillars = [
  {
    number: "01",
    title: "Automação Inteligente de Processos",
    description: "Tirar o peso das tarefas repetitivas dos ombros da equipe. Processos que levam horas podem ser executados em minutos por robôs (RPA) e fluxos de trabalho automatizados.",
    icon: Bot,
    examples: [
      {
        title: "Onboarding e Offboarding",
        description: "Desde a criação de contas e e-mails para novos contratados até o checklist de desligamento automatizado.",
      },
      {
        title: "Gestão de Férias e Benefícios",
        description: "Fluxo de aprovação automático para gestores, atualizando o saldo em tempo real sem planilhas intermediárias.",
      },
      {
        title: "Administração da Folha de Pagamento",
        description: "Robôs consolidam dados do ponto, horas extras e bônus de diferentes fontes, em questão de segundos.",
      },
    ],
  },
  {
    number: "02",
    title: "People Analytics e Fim das Planilhas",
    description: "Adotar uma única fonte de verdade centralizando todos os dados dos colaboradores — desde o recrutamento, à avaliação de performance e remuneração.",
    icon: BarChart3,
    examples: [
      {
        title: "Análise de Perfil de Sucesso",
        description: "Identificar matematicamente qual perfil de candidato tem a maior taxa de sucesso após um ano na empresa.",
      },
      {
        title: "Liderança e Engajamento",
        description: "Cruzar dados de engajamento da equipe e produtividade de cada liderança técnica ou comercial.",
      },
      {
        title: "Predição de Churn",
        description: "Algoritmos apontam quais talentos críticos apresentam risco de saída baseado em dados de mercado e internos.",
      },
    ],
  },
  {
    number: "03",
    title: "Colaborador-Centricity (EX)",
    description: "Um RH inteligente reflete em experiência de primeira classe. Colaboradores têm sua burocracia reduzida a zero.",
    icon: Heart,
    examples: [
      {
        title: "Portais de Autoatendimento",
        description: "O colaborador extrai informes, solicita processos e ajusta dados em uma interface sem a necessidade de intervenção humana.",
      },
      {
        title: "Chatbots Internos de Dúvidas",
        description: "A IA responde dúvidas mais frequentes sobre políticas ou status de solicitações 24 horas por dia.",
      },
    ],
  },
];

const businessImpacts = [
  {
    title: "Decisões Algorítmicas",
    description: "Contratações, promoções e planos de sucessão baseados em matemática e resultados medidos.",
    icon: Brain,
  },
  {
    title: "Proteção contra Turnover",
    description: "Agir preventivamente sobre o churn economiza tempo de recrutamento, gaps de operação e onerosidade de onboardings repetidos.",
    icon: Shield,
  },
  {
    title: "Explosão de Produtividade",
    description: "RH ágil reduz atritos para a empresa como um todo. Ninguém perde 2 horas tentando achar um informe ou policy.",
    icon: TrendingUp,
  },
  {
    title: "Marca Empregadora Agressiva",
    description: "Talentos C-Level buscam organizações estruturadas e tecnológicas. Organização transmite autoridade no primeiro dia.",
    icon: Target,
  },
];

const strategicFocus = [
  "Analisar tendências de turnover e agir de forma preditiva",
  "Desenvolver planos de carreira atrelados a big data e performance",
  "Construir uma cultura baseada em métricas em tempo real",
];

export default function RHEstrategicoBlogPost() {
  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch" bg="off">

        {/* ── Header ── */}
        <Box
          bg="stone"
          px={{ base: 6, md: "60px", lg: "112px" }}
          pt={{ base: "140px", md: "180px" }}
          pb={{ base: 16, md: "80px" }}
          borderBottom="1px solid"
          borderColor="blackAlpha.200"
          position="relative"
        >
          {/* Subtle math/grid pattern */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="linear-gradient(#00000004 1px, transparent 1px), linear-gradient(90deg, #00000004 1px, transparent 1px)"
            backgroundSize="40px 40px"
            pointerEvents="none"
          />

          <VStack align="flex-start" gap={6} maxW="900px" mx="auto" position="relative" zIndex={2}>
            <HStack gap={3}>
              <Box w="6px" h="6px" bg="blue.solid" />
              <Text fontFamily="mono" fontSize="2xs" fontWeight={600} letterSpacing="0.1em" textTransform="uppercase" color="blue.solid">
                Report de Inteligência // RH Estratégico
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "40px", md: "56px", lg: "64px" }}
              fontWeight={800}
              lineHeight={1}
              letterSpacing="-2px"
              color="fg"
            >
              Liderando a Gestão de Talentos com {" "}
              <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="blue.solid">
                Dados e I.A.
              </Text>
            </Text>

            <Text fontSize="lg" color="fg.muted" lineHeight={1.8}>
              A transformação de um back-office lento para uma máquina estratégica.
            </Text>
          </VStack>
        </Box>

        {/* ── Content Body ── */}
        <Box px={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }}>
          <VStack maxW="800px" mx="auto" align="stretch" gap={10}>
            <Text fontSize="lg" color="fg" lineHeight={1.8} fontWeight={500}>
              Planilha de controle de férias. Outra para o banco de horas. Uma terceira para a avaliação de desempenho.
              Um arquivo em PDF para o organograma. Um sistema para a folha de pagamento que não conversa com o software de recrutamento.
            </Text>

            <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
              Para muitos profissionais de RH, essa colcha de retalhos digital é a realidade diária. Um labirinto de dados descentralizados que consome um tempo precioso em tarefas operacionais, deixando pouco ou nenhum espaço para o que realmente importa: a estratégia de gestão de pessoas e alocação de squads. O resultado? O RH fica preso em um ciclo reativo, apagando incêndios, quando deveria atuar como um parceiro analítico da diretoria.
            </Text>

            {/* Callout brutalista */}
            <Box p={8} bg="white" border="1px solid" borderColor="blackAlpha.200" position="relative">
              <Box position="absolute" top={0} left={0} w="4px" h="full" bg="blue.solid" />
              <Text fontSize="xl" fontWeight={600} color="fg" lineHeight={1.6}>
                A tecnologia, quando aplicada de forma impiedosa, é a alavanca que aniquila o trabalho repetitivo e transforma o departamento num pólo estratégico.
              </Text>
            </Box>

            {/* O Grande Shift */}
            <Box pt={8}>
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={6} color="fg">
                O Grande Shift: De Executor a Arquiteto
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8} mb={6}>
                A automação não substitui liderança; ela potencializa. O foco sai do controle burocrático para as seguintes missões críticas:
              </Text>

              <VStack align="stretch" gap="1px" bg="blackAlpha.200" p="1px">
                {strategicFocus.map((focus, i) => (
                  <HStack key={i} bg="white" p={6} gap={4}>
                    <Lightbulb color="var(--chakra-colors-blue-solid)" size={20} />
                    <Text fontSize="sm" fontWeight={500}>{focus}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* Pillars Grid */}
            <Box pt={10}>
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={8} color="fg">
                Os Tripés da Transformação Analítica
              </Text>

              <VStack align="stretch" gap={8}>
                {pillars.map((pillar) => (
                  <Box key={pillar.title} bg="white" border="1px solid" borderColor="blackAlpha.200" p={8}>
                    <HStack gap={6} mb={6} align="flex-start">
                      <Text fontFamily="mono" fontSize="3xl" fontWeight={800} color="blackAlpha.300">
                        {pillar.number}
                      </Text>
                      <VStack align="flex-start" gap={2}>
                        <Text fontSize="xl" fontWeight={800}>{pillar.title}</Text>
                        <Text fontSize="sm" color="fg.muted" lineHeight={1.7}>
                          {pillar.description}
                        </Text>
                      </VStack>
                    </HStack>

                    <Box pl={{ base: 0, md: 16 }}>
                      <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle" mb={4}>CENÁRIOS DE DEPLOY</Text>
                      <VStack align="stretch" gap={4}>
                        {pillar.examples.map((ex, idx) => (
                          <Box key={idx} borderLeft="1px solid" borderColor="blackAlpha.200" pl={4}>
                            <Text fontSize="sm" fontWeight={700} color="fg" mb={1}>{ex.title}</Text>
                            <Text fontSize="xs" color="fg.muted" lineHeight={1.6}>{ex.description}</Text>
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Business Impact Grid */}
            <Box pt={10}>
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={6} color="fg">
                Por que a Diretoria assina o Cheque?
              </Text>

              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="1px" bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200">
                {businessImpacts.map((impact, i) => (
                  <VStack key={i} bg="white" p={8} align="flex-start" gap={4}>
                    <Box color="blue.solid"><impact.icon size={24} /></Box>
                    <Text fontSize="lg" fontWeight={800}>{impact.title}</Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>{impact.description}</Text>
                  </VStack>
                ))}
              </Grid>
            </Box>

            {/* Conclusion Box CTA */}
            <Box mt={12} bg="fg" color="white" p={{ base: 8, md: 12 }} textAlign="center">
              <Text fontSize="2xl" fontWeight={800} mb={4}>O Futuro da Alocação é Imediato</Text>
              <Text fontSize="md" color="whiteAlpha.800" maxW="600px" mx="auto" mb={8} lineHeight={1.6}>
                Se os dados de seus talentos não lhe fornecem respostas em tempo real, você está operando em inércia.
              </Text>
              <Link href="/transformacao-digital">
                <Box
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="10px"
                  bg="blue.solid"
                  color="white"
                  px="32px"
                  py="16px"
                  fontWeight={600}
                  fontSize="sm"
                  transition="all 0.2s"
                  _hover={{ bg: "blue.fg" }}
                >
                  Solicitar Diagnóstico P-Level
                  <ArrowRight size={14} />
                </Box>
              </Link>
            </Box>

          </VStack>
        </Box>

      </VStack>
      <Footer />
    </Page>
  );
}
