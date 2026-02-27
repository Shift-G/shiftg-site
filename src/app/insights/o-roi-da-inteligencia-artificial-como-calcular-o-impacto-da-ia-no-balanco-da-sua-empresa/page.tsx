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
  TrendingUp,
  DollarSign,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title:
    `O ROI da Inteligência Artificial | ${SITE_NAME}`,
  description:
    "Descubra como calcular o retorno sobre investimento da Inteligência Artificial em sua empresa. Entenda os vetores de retorno e a fórmula.",
  alternates: {
    canonical: `${SITE_URL}/insights/o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa`,
  },
  openGraph: {
    title:
      "O ROI Matemático e Bruto da Inteligência Artificial",
    description:
      "Descubra como calcular o retorno sobre investimento de sistemas de Inteligência Artificial no seu ecossistema empresarial.",
    url: `${SITE_URL}/insights/o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa`,
    type: "article",
    siteName: SITE_NAME,
  },
};

const roiVectors = [
  {
    title: "Corte Agressivo de Custos",
    description:
      "O ganho imediato, letal e documentado. I.A e engines otimizam lógicas em background que antes demandavam dias inteiros.",
    icon: TrendingUp,
    examples: [
      {
        title: "Back-Office Autônomo (RPA + IA)",
        description:
          "Varredura e validação automática de NFs, reconciliações e leitura de documentos massivos. Retorno medido em milhares de horas poupadas.",
      },
      {
        title: "Customer Success Escalonado",
        description:
          "Engines que varrem SLAs e documentações complexas, entregando a solução exata para N1 e N2, permitindo que a equipe escale em volume sem contratar na mesma velocidade.",
      },
      {
        title: "Modelagem de Abastecimento",
        description:
          "Algoritmos estocásticos e de visão prevendo reposições de rotas de entrega mais rápidas, cortando custos ociosos.",
      },
    ],
  },
  {
    title: "Multiplicação Vertical da Receita",
    description:
      "Máquinas não servem só para poupar caixa. Elas constroem trilhos de conversão silenciosos.",
    icon: DollarSign,
    examples: [
      {
        title: "Mecanismo de Recomendação",
        description:
          'Ticket Elevado via sugestão algorítmica. Lojas e SaaS expandem faturamento cruzado instantaneamente.',
      },
      {
        title: "Lead Scoring de Elite",
        description:
          "I.A. lê o perfil histórico de leads da Blacklist, esmagando falsos positivos e passando apenas contas quentes ao time Sales.",
      },
      {
        title: "Dynamic Pricing",
        description:
          "E-commerces B2B rodam scripts de ajustes automáticos na madrugada com base em cotações e estoques dos players concorrentes.",
      },
    ],
  },
  {
    title: "Bloqueio Seco de Riscos",
    description:
      "O que não se perde no buraco negro operativo é lucro na ponta do lápis.",
    icon: Shield,
    examples: [
      {
        title: "Filtro Ativo Anti-Fraudes",
        description:
          "Algoritmo supervisionado trava operações dúbias em milissegundos. Dezenas de milhões segurados no P&L do ano fiscal.",
      },
      {
        title: "Manutenção Preditiva (IoT + Analytics)",
        description:
          "A máquina avisa a fadiga de material duas semanas antes de fraturar na linha de montagem.",
      },
      {
        title: "Churn Defense System",
        description:
          "Análise semântica e preditiva nos tickets B2B cruza a queda de login e atitudes, disparando sinais vitais para Key Accounts reterem os Top Clients.",
      },
    ],
  },
  {
    title: "Acurácia no Capital C-Level",
    description:
      "Capital imobilizado e giro de caixa precisam de clareza binária. A tecnologia tira as vendas de olhos (achismos) da jogada.",
    icon: BarChart3,
    examples: [
      {
        title: "Engenharia de Estoque",
        description:
          "Deep Learning analisa séries temporais massivas que exterminam tanto rupturas nas prateleiras como a poeira por capital retido.",
      },
      {
        title: "Gestão HR-Tech (People Analytics)",
        description:
          "Taxa de alerta algorítmica mapeando saturação e burnouts ocultos, poupando processos caríssimos de demissão e onboardings longos.",
      },
    ],
  },
];

export default function ROIInteligenciaArtificialBlogPost() {
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
                Report de Inteligência // Finanças & Infra
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
              O ROI Numérico da{" "}
              <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="blue.solid">
                I.A. nos Balanços.
              </Text>
            </Text>

            <Text fontSize="lg" color="fg.muted" lineHeight={1.8}>
              Mapeamento direto sobre os ponteiros macro: redução letal de despesas, bloqueios de fraude e matemática de ganho sobre hardware implementado.
            </Text>
          </VStack>
        </Box>

        {/* ── Content Body ── */}
        <Box px={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }}>
          <VStack maxW="800px" mx="auto" align="stretch" gap={10}>
            <Text fontSize="lg" color="fg" lineHeight={1.8} fontWeight={500}>
              Em um Board de Diretoria que se preze, a aprovação de uma nova infraestrutura técnica esbarra numa barreira primária de fogo: a comprovação implacável de <strong>Retorno Sobre o Investimento.</strong> Não existem planilhas de "expectativa"; existem balanços.
            </Text>

            <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
              O hype estético das ferramentas generativas poluiu o conceito inicial. Redes neurais pesadas (Transformers), Visão Computacional de Baixa Latência e Predição de Séries Temporais (Time-Series) não são ferramentas de design; são vetores de otimização de lucro bruto e eliminação sistemática de perdas em grande volume corporativo.
            </Text>

            {/* Box Callout */}
            <Box p={8} bg="white" border="1px solid" borderColor="blackAlpha.200" position="relative">
              <Box position="absolute" top={0} left={0} w="4px" h="full" bg="blue.solid" />
              <Text fontSize="lg" fontWeight={600} color="fg" lineHeight={1.6}>
                O arquiteto da Shift+G opera em cima de um dogma: um algoritmo só é injetado no processo do parceiro B2B se a modelagem matemática garantir que ele paga seu aluguel computacional nas primeiras frações de ano.
              </Text>
            </Box>

            {/* Vectors */}
            <Box pt={8}>
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={8} color="fg">
                Quatro Vetores Matemáticos de Retorno
              </Text>

              <VStack align="stretch" gap={8}>
                {roiVectors.map((vector) => (
                  <Box key={vector.title} bg="white" border="1px solid" borderColor="blackAlpha.200" p={{ base: 8, md: 10 }}>
                    <HStack gap={6} mb={6} align="flex-start">
                      <Box color="blue.solid"><vector.icon size={28} /></Box>
                      <VStack align="flex-start" gap={2}>
                        <Text fontSize="xl" fontWeight={800}>{vector.title}</Text>
                        <Text fontSize="sm" color="fg.muted" lineHeight={1.7}>
                          {vector.description}
                        </Text>
                      </VStack>
                    </HStack>

                    <Box pl={{ base: 0, md: 16 }}>
                      <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle" mb={4}>CENÁRIOS DE EXIBIÇÃO</Text>
                      <VStack align="stretch" gap={4}>
                        {vector.examples.map((ex, idx) => (
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

            {/* Calculo */}
            <Box pt={10} borderTop="1px solid" borderColor="blackAlpha.200">
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={6} color="fg">
                A Fórmula C-Level (TCO Analítico)
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8} mb={8}>
                Não negligenciamos a manutenção no escuro das nuvens nem custos de tokens pesados em pipelines GPT. A modelagem impõe que <code>ROI = (Benefícios Extraídos - TCO) / TCO</code> onde o TCO engloba implantação, infraestrutura persistente e manutenção corretiva.
              </Text>

              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="1px" bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200">
                <VStack bg="white" p={6} align="flex-start" gap={4}>
                  <Box color="green.600"><TrendingUp size={24} /></Box>
                  <Text fontSize="lg" fontWeight={800}>Delta de Benefícios (Mensal)</Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>Recortes monetários dos gargalos que foram explodidos: Fraudes Barradas + Redução Salarial em Operações Níveis 1 + Otimização de Infra.</Text>
                </VStack>
                <VStack bg="white" p={6} align="flex-start" gap={4}>
                  <Box color="red.600"><DollarSign size={24} /></Box>
                  <Text fontSize="lg" fontWeight={800}>TCO & Burn Rate</Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>Os encargos e tickets de subscrição na cloud (Azure, AWS), consumo elétrico/operacional remoto de API's e custo por inferência calculada.</Text>
                </VStack>
              </Grid>
            </Box>

            {/* Conclusion Box CTA */}
            <Box mt={12} bg="fg" color="white" p={{ base: 8, md: 12 }} textAlign="center">
              <Text fontSize="2xl" fontWeight={800} mb={4}>Matemática, Nunca Magia</Text>
              <Text fontSize="md" color="whiteAlpha.800" maxW="600px" mx="auto" mb={8} lineHeight={1.6}>
                Evite injetar buzzwords operacionais se o balanço não provar validade real no fim do dia fiscal. Mantenha os engenheiros focados e alinhados.
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
                  P-Level Diagnostic Tracker
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
