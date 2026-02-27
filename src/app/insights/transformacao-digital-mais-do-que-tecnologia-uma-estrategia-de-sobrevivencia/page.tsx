import { Metadata } from "next";
import {
  Box,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
  title: `Transformação Digital B2B | ${SITE_NAME}`,
  description:
    "Descubra como a transformação digital vai muito além do código: é a reconstrução da logística operante e de um fluxo de sobrevivência corporativa.",
  alternates: {
    canonical: `${SITE_URL}/insights/transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia`,
  },
  openGraph: {
    title: "A Reestruturação Tecnológica e Digital",
    description:
      "A sobrevivência B2B ancorada em frameworks consistentes de automação, não apenas na compra empilhada de softwares temporários.",
    url: `${SITE_URL}/insights/transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia`,
    type: "article",
    siteName: SITE_NAME,
  },
};

const riskFactors = [
  {
    title: "Falência Operacional por Desgaste",
    description:
      "A fadiga dos times varando a noite em conciliações assíncronas custa um preço gravíssimo ao P&L no longo prazo.",
    icon: TrendingDown,
  },
  {
    title: "Gargalos Intramuros Acelerados",
    description:
      "Sistemas ERP antigos amarrados a módulos incompatíveis empurram gargalos que escalam, sugando lucro líquido a cada passo mal executado.",
    icon: AlertTriangle,
  },
  {
    title: "Concorrência e Baixa Fricção",
    description:
      "A barreira B2B exige SLA rígido. Seu concorrente fecha ordens com robôs via WhatsApp sem fricção burocrática; você perde o lifetime value na prancheta.",
    icon: Users,
  },
  {
    title: "Cegueira Analítica",
    description:
      "Relatórios da semana passada? A mesa de diretores da sua organização deve ler os dados processados há menos de cinco minutos.",
    icon: BarChart3,
  },
];

const pillars = [
  {
    number: "ALPHA",
    title: "Design de Automação Fluida",
    description:
      "Ignorar redesenhos antes do deploy tecnológico é jogar dinheiro fora. Automatizar um sistema falho é acelerar os bloqueios. Nós reescrevemos o fluxo completo no diagrama cru e o preenchemos de robôs e integrações severas.",
    icon: Zap,
  },
  {
    number: "BRAVO",
    title: "Data Lake Controlado",
    description:
      "Extração centralizada: Sem 'achismos' nas quartas-feiras. Tabelas interligadas injetadas sob métricas preditivas apontando qual setor exige mais capex agora, em qual frente investir na próxima semana, etc.",
    icon: BarChart3,
  },
  {
    number: "CHARLIE",
    title: "Máquina de Aceleração CX",
    description:
      "No final, tudo é entregue ao cliente através de fricção-zero na camada visual. De LLMs processando dúvidas no suporte de Tier 1 até bots programando onboarding imediato em 10 segundos.",
    icon: Target,
  },
  {
    number: "DELTA",
    title: "Alinhamento e Deploy Humano",
    description:
      "Sistemas pesados assustam amadores. Destruímos silos. Uma interface deve ser cirúrgica e limpa a tal ponto em que a corporação respire com ela, tornando o ambiente coeso.",
    icon: Users,
  },
];

export default function TransformacaoDigitalBlogPost() {
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
                Report de Inteligência // Digital Core
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "40px", md: "56px", lg: "70px" }}
              fontWeight={800}
              lineHeight={1}
              letterSpacing="-2px"
              color="fg"
            >
              Extrema Sobrevivência na Nova {" "}
              <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="blue.solid">
                Era da Informação.
              </Text>
            </Text>

            <Text fontSize="lg" color="fg.muted" lineHeight={1.8}>
              Mapeamento sobre os 4 Pilares Inquebráveis: não se baseie apenas na pilha técnica (Stack), reconstrua a logística corporativa do zero através de um modelo mental agressivo.
            </Text>
          </VStack>
        </Box>

        {/* ── Content Body ── */}
        <Box px={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }}>
          <VStack maxW="800px" mx="auto" align="stretch" gap={10}>
            <Text fontSize="lg" color="fg" lineHeight={1.8} fontWeight={500}>
              A expressão 'Transformação Digital' soa diluída repetida à exaustão por consultorias padrão. Quando aplicamos este modelo mental na Shift+G não queremos forçar assinaturas mensais de dezenas de SaaS (Software As a Service) coloridos e sim desmontar o veículo organizacional com a engenharia reversa mais pura e refazê-lo.
            </Text>

            <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
              Compram-se módulos complexos para resolver fluxos internos simples — adicionando ruídos impagáveis e redundâncias mortais à operação. Transformação não é digitalização compulsiva do lixo prévio de dados, é a destruição da engrenagem enferrujada e substituição desta por pipelines invisíveis e autoescaláveis.
            </Text>

            {/* Box Callout */}
            <Box p={8} bg="white" border="1px solid" borderColor="blackAlpha.200" position="relative">
              <Box position="absolute" top={0} left={0} w="4px" h="full" bg="blue.solid" />
              <Text fontSize="lg" fontWeight={600} color="fg" lineHeight={1.6}>
                Evitamos a falácia dos pacotes "ágil" pré-feitos. Operações verdadeiramente perigosas no mercado B2B constroem soluções robustas dedicadas ao estresse — desenhando processos com IA para matar gargalos em 4 macros.
              </Text>
            </Box>

            {/* Inercia Risk Grid */}
            <Box pt={8}>
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={6} color="fg">
                A Inércia Institucional Corrói Patrimônio
              </Text>

              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="1px" bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200">
                {riskFactors.map((risk, i) => (
                  <VStack key={i} bg="white" p={8} align="flex-start" gap={4}>
                    <Box color="red.600"><risk.icon size={24} /></Box>
                    <Text fontSize="lg" fontWeight={800}>{risk.title}</Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>{risk.description}</Text>
                  </VStack>
                ))}
              </Grid>
            </Box>

            {/* Pilares */}
            <Box pt={10} borderTop="1px solid" borderColor="blackAlpha.200">
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={8} color="fg">
                Os Quatro Vetores do Core Brutal
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8} mb={8}>
                Operar num nível militar nos projetos não significa abandonar a intuição humana, e sim livrá-la da mediocridade do data entry repetitivo entregando-a focos hiper-analíticos (estratégia global B2B, inovação pura, alianças pesadas).
              </Text>

              <VStack align="stretch" gap={8}>
                {pillars.map((pillar) => (
                  <Box key={pillar.title} bg="white" border="1px solid" borderColor="blackAlpha.200" p={{ base: 8, md: 10 }}>
                    <HStack gap={6} mb={6} align="flex-start">
                      <Text fontFamily="mono" fontSize="2xl" fontWeight={800} color="blackAlpha.300" transform="rotate(-90deg)" transformOrigin="center left" position="absolute" mt={8} ml={-4} display={{ base: "none", md: "block" }}>
                        {pillar.number}
                      </Text>
                      <Box pl={{ base: 0, md: 8 }} flex={1}>
                        <HStack gap={4} mb={3}>
                          <Box color="blue.solid"><pillar.icon size={24} /></Box>
                          <Text fontSize="xl" fontWeight={800}>{pillar.title}</Text>
                        </HStack>
                        <Text fontSize="sm" color="fg.muted" lineHeight={1.7}>
                          {pillar.description}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Conclusion Box CTA */}
            <Box mt={12} bg="fg" color="white" p={{ base: 8, md: 12 }} textAlign="center">
              <Text fontSize="2xl" fontWeight={800} mb={4}>Cortes Precisos na Jornada Corporativa</Text>
              <Text fontSize="md" color="whiteAlpha.800" maxW="600px" mx="auto" mb={8} lineHeight={1.6}>
                Evite ser mais uma corporação esmagada sob milhões do P&L estocados em ineficiência burocrática por recusa à base tecnológica de nova esteira.
              </Text>
              <Link href="/diagnostico-inteligente">
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
                  Acessar o Portal de Diagnósticos
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
