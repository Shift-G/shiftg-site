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
  Bot,
  TrendingUp,
  Target,
  Users,
  Shield,
  ArrowRight,
  Zap,
  DollarSign,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `RPA: Automação Absoluta | ${SITE_NAME}`,
  description:
    "Descubra como o RPA de performance em conjunto à IA pode eliminar operações robóticas dos ombros humanos e fatiar despesas contábeis.",
  alternates: {
    canonical: `${SITE_URL}/insights/rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa`,
  },
  openGraph: {
    title: "Hiperautomação via RPA + I.A.",
    description:
      "A aniquilação definitiva das rotinas robóticas através de engines RPA customizadas e blindadas pela inteligência computacional.",
    url: `${SITE_URL}/insights/rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa`,
    type: "article",
    siteName: SITE_NAME,
  },
};

const useCases = [
  {
    title: "Mesa Financeira e Controladoria",
    icon: DollarSign,
    examples: [
      "Leitura cega de contas a pagar sob arquiteturas assíncronas",
      "Puxadas massivas de relatórios para conciliação em múltiplos CNPJs",
      "Processos D-1 gerados instantaneamente sem intervenção às 03:00 da manhã.",
    ],
  },
  {
    title: "RH & Gestão Analítica da Base",
    icon: Users,
    examples: [
      "Onboarding: Acesso preditivo completo e criação de usuários com perfis prévios",
      "Atualização assíncrona cruzada entre a folha ADP, o software de performance e a rede intraweb",
    ],
  },
  {
    title: "Engenharia Logística Subjacente",
    icon: BarChart3,
    examples: [
      "Despacho cruzado (Drop / CrossDock) autônomo baseado em métrica ML",
      "Ocorrências em transportadoras detectadas e reportadas à matriz via RPA sem necessidade de painel."
    ],
  },
];

const benefits = [
  {
    title: "ROI Acelerado na Primeira Milha",
    description: "Cada processo estático é dinheiro sangrando à base de custo-hora por operador. Extirpou as horas, lucrou integralmente.",
    icon: TrendingUp,
  },
  {
    title: "Torque e Eficiência Desenfreada",
    description: "Sem cansaço ocular, sem intervalo de descanso, taxa de processamento de dezenas a centenas de tarefas/s em VM clusterizada.",
    icon: Zap,
  },
  {
    title: "Latência ou Erro: Zero",
    description: "O Copy/Paste humano falha à taxa de exaustão, custando milhões em devoluções. Máquinas em pipeline não faturam errado o CTe.",
    icon: Target,
  },
  {
    title: "Alívio C-Level e Escala Tática",
    description: "Ao demitir o funcionário virtual (o humano que só preenche planilhas), você o aloca estrategicamente para desenhar novas engrenagens nas Key-Accounts vitais.",
    icon: Users,
  },
  {
    title: "Malha de Logs Intransponível (Compliance)",
    description: "RPA não comete desvios éticos em sistemas bancários, emitindo footprints em cada cursor num Datawarehouse perfeitamente rastreável.",
    icon: Shield,
  },
];

const rpaCapabilities = [
  "Aciona Gatilhos do Windows Server",
  "Preenche DOMS em navegadores Web",
  "Opera Legacy Mainframes via SSH",
  "Leitura de Arrays pesados no Excel",
  "Anexação massiva e envios SMTP"
];

export default function RPABlogPost() {
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
                Report de Inteligência // RPA Engine
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
              Aniquilação Imediata da {" "}
              <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="blue.solid">
                Burocracia Manual.
              </Text>
            </Text>

            <Text fontSize="lg" color="fg.muted" lineHeight={1.8}>
              Deixe máquinas conduzirem tarefas de máquinas. Alinhe robôs automatizados em suas interfaces corporativas e expulse os gargalos crônicos do sistema.
            </Text>
          </VStack>
        </Box>

        {/* ── Content Body ── */}
        <Box px={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }}>
          <VStack maxW="800px" mx="auto" align="stretch" gap={10}>
            <Text fontSize="lg" color="fg" lineHeight={1.8} fontWeight={500}>
              Copiar strings de um PDF e colá-las no ERP base. Puxar as estatísticas por ID semanal em portais desconexos, aglutiná-las, rodar uma macro e encaminhá-las via intranet. Todas as rotinas que não dependem da criatividade humana são lixo metabólico da organização moderna, drenando performance e o P&L inteiro em silêncio.
            </Text>

            <Text fontSize="md" color="fg.muted" lineHeight={1.8}>
              E se sua equipe executiva pudesse apenas liderar? Um operador digital (bot RPA embarcado em Virtual Machine) jamais se dispersa. Ele mapeia os pixels e coletores de interface do seu sistema velho e traciona 24hrs de produtividade letal entregando taxas zero-error nas tabelas finais.
            </Text>

            {/* Box Callout */}
            <Box p={8} bg="white" border="1px solid" borderColor="blackAlpha.200" position="relative">
              <Box position="absolute" top={0} left={0} w="4px" h="full" bg="blue.solid" />
              <Text fontSize="lg" fontWeight={600} color="fg" lineHeight={1.6}>
                O cenário RPA no B2B atual ignora processos artesanais e vai direto à fonte. Você aponta uma regra, nós alocamos uma instância Serverless de RPA, e o processo ocorre assincronamente (Invisível aos seus olhos) a milissegundos.
              </Text>
            </Box>

            {/* Core capabilities */}
            <Box pt={8}>
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={6} color="fg">
                Mapeamento Brutal de Interfaces
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8} mb={6}>
                Com o framework da Shift+G operante, não precisamos de API abertas dos portais antigos (embora favoreçam). Nossos extratores dissecam elementos renderizados de tela e executam a regra corporativa:
              </Text>

              <VStack align="stretch" gap="1px" bg="blackAlpha.200" p="1px">
                {rpaCapabilities.map((capability, i) => (
                  <HStack key={i} bg="white" p={6} gap={4}>
                    <Bot color="var(--chakra-colors-blue-solid)" size={20} />
                    <Text fontFamily="mono" fontSize="sm" fontWeight={600}>{capability.toUpperCase()}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* Impact / Benefits */}
            <Box pt={10} borderTop="1px solid" borderColor="blackAlpha.200">
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={8} color="fg">
                Por que a Inversão RPA paga as contas
              </Text>

              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="1px" bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200">
                {benefits.map((benefit, i) => (
                  <VStack key={i} bg="white" p={8} align="flex-start" gap={4}>
                    <Box color="blue.solid"><benefit.icon size={24} /></Box>
                    <Text fontSize="lg" fontWeight={800}>{benefit.title}</Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>{benefit.description}</Text>
                  </VStack>
                ))}
              </Grid>
            </Box>

            {/* Advanced Matrix */}
            <Box pt={10} borderTop="1px solid" borderColor="blackAlpha.200">
              <Text as="h2" fontSize="2xl" fontWeight={800} mb={6} color="fg">
                A Virada Estratégica: Quando RPA invoca Modelos LLM
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight={1.8} mb={8}>
                Sistemas convencionais de automação travam perante a irregularidade de uma Invoice (Nota de Insumos extrativista) manchada em PDF. O diferencial SHIFT+G é arquitetar a mescla implacável de RPA e I.A generativa (Vision):
              </Text>

              <VStack align="stretch" gap={8}>
                {useCases.map((useCase) => (
                  <Box key={useCase.title} bg="white" border="1px solid" borderColor="blackAlpha.200" p={{ base: 8, md: 10 }}>
                    <HStack gap={6} mb={6} align="flex-start">
                      <Box color="blue.solid"><useCase.icon size={24} /></Box>
                      <Text fontSize="xl" fontWeight={800} flex={1}>{useCase.title}</Text>
                    </HStack>

                    <Box pl={12}>
                      <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle" mb={4}>DEPLOY EXECUTADO</Text>
                      <VStack align="stretch" gap={4}>
                        {useCase.examples.map((ex, idx) => (
                          <Box key={idx} borderLeft="1px solid" borderColor="blackAlpha.200" pl={4}>
                            <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>{ex}</Text>
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Conclusion Box CTA */}
            <Box mt={12} bg="fg" color="white" p={{ base: 8, md: 12 }} textAlign="center">
              <Text fontSize="2xl" fontWeight={800} mb={4}>Substitua Imediatamente o Trabalho Arcaico.</Text>
              <Text fontSize="md" color="whiteAlpha.800" maxW="600px" mx="auto" mb={8} lineHeight={1.6}>
                Nós calculamos onde as máquinas podem drenar os custos inúteis com exatidão matemática. Despache as burocracias para pipelines RPA.
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
                  Solicitar Robô via Diagnóstico
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
