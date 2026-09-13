import { PageSeo } from "@/components/seo/page-seo";
import { Frame } from "@/components/layout/editorial";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Page } from "@/components/layout/page";
import { IllustratedHero } from "@/components/sections/editorial-media";
import { CAREERS_EMAIL } from "@/constants";
import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import {
  Activity,
  ArrowRight,
  Cpu,
  Monitor,
  Terminal,
  Zap,
} from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "Carreiras",
  "Torne-se um arquiteto na SHIFT+G. Vagas presenciais (CLT) em União da Vitória/PR para FullStack e IA.",
  "/carreiras",
);

/* ── Section Tag ── */
function SectionTag({
  children,
  color = "blue.solid",
}: {
  children: string;
  color?: string;
}) {
  return (
    <HStack
      fontFamily="mono"
      fontSize="sm"
      fontWeight={600}
      letterSpacing="0.16em"
      textTransform="uppercase"
      color={color}
      gap="10px"
      mb={4}
    >
      <Box w="18px" h="1.5px" bg={color} />
      <Text>{children}</Text>
    </HStack>
  );
}

const jobs = [
  {
    title: "Desenvolvedor FullStack (Python & React)",
    department: "Cloud & Engine",
    type: "PRESENCIAL · UNIÃO DA VITÓRIA/PR",
    description:
      "Construa de ponta a ponta. Backend em Python e frontend em React, entregando produtos sólidos em produção.",
    icon: <Cpu size={24} />,
    featured: true,
  },
  {
    title: "AI Prompt Engineer Júnior",
    department: "AI Lab",
    type: "PRESENCIAL · UNIÃO DA VITÓRIA/PR",
    description:
      "Desenhe e refine prompts para LLMs. Itere, avalie e otimize fluxos de IA com método e curiosidade.",
    icon: <Terminal size={24} />,
    featured: true,
  },
];

const workspaceBenefits = [
  {
    icon: <Monitor size={20} />,
    label: "Setup Mac/PC de alta performance fornecido",
  },
  { icon: <Activity size={20} />, label: "Health / Plano nível executivo" },
  {
    icon: <Zap size={20} />,
    label: "Orçamento Mensal para Labs e Certificações",
  },
  {
    icon: <Terminal size={20} />,
    label: "Assinaturas liberadas (Copilot, Cursor, OpenAI)",
  },
];

export default function CareersPage() {
  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch">
        <PageSeo name="Carreiras" path="/carreiras" />
        {/* ── Hero ── */}
        <IllustratedHero
          eyebrow={"Carreiras / Construa com a SHIFT+G"}
          title={"Seu próximo desafio."}
          accent={"Uma transformação real."}
          description={
            "Trabalhe com arquitetura, inteligência artificial e produtos que fazem parte da operação das empresas. Construímos lado a lado, na nossa base em União da Vitória, PR."
          }
          visual={"engenharia"}
          caption={"Pessoas que pensam, constroem e assumem a execução."}
          tags={["União da Vitória / PR", "Presencial", "CLT"]}
          href={"#open-roles"}
          cta={"Conhecer as oportunidades"}
        />

        {/* ── Culture / Setup ── */}
        <Box
          as="section"
          py={{ base: 16, md: "110px" }}
          bg="blue.solid"
          color="white"
          position="relative"
          overflow="hidden"
        >
          <Frame>
            {/* Subtle geo bg */}
            <Box
              position="absolute"
              right={-20}
              top={-20}
              opacity={0.05}
              pointerEvents="none"
            >
              <svg width="600" height="600" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                <path d="M 5,50 L 95,50" stroke="white" strokeWidth="0.5" />
                <path d="M 50,5 L 50,95" stroke="white" strokeWidth="0.5" />
              </svg>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: 12, lg: "80px" }}
              position="relative"
              zIndex={2}
            >
              <Box>
                <SectionTag color="gold.500">WORKSPACE DA BASE</SectionTag>
                <Text
                  as="h2"
                  fontSize={{ base: "32px", md: "48px" }}
                  fontWeight={800}
                  lineHeight={1.1}
                  letterSpacing="-1px"
                  mb={6}
                >
                  Arsenal para{" "}
                  <Text
                    as="span"
                    fontFamily="serif"
                    fontStyle="italic"
                    fontWeight={400}
                    color="gold.500"
                  >
                    engenheiros.
                  </Text>
                </Text>
                <Text fontSize="lg" color="whiteAlpha.800" lineHeight={1.8}>
                  Não economizamos na infantaria. Na base da SHIFT+G em União da
                  Vitória/PR, a matriz entrega o hardware pesado e paga as
                  assinaturas das melhores IAs que existem para que seu teclado
                  escreva código e soluções de forma hiper-produtiva. Propósito
                  importa, mas a infraestrutura te carrega.
                </Text>
              </Box>

              <VStack align="stretch" gap="1px" bg="whiteAlpha.200" p="1px">
                {workspaceBenefits.map((item, i) => (
                  <HStack key={i} bg="blue.900" p={6} gap={4}>
                    <Box color="gold.500">{item.icon}</Box>
                    <Text fontSize="md" fontWeight={600}>
                      {item.label}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Grid>
          </Frame>
        </Box>

        {/* ── Vagas Grid Table ── */}
        <Box
          id="open-roles"
          as="section"
          py={{ base: 16, md: "110px" }}
          bg="white"
        >
          <Frame>
            <VStack
              align="center"
              textAlign="center"
              mb={{ base: 12, md: 16 }}
              maxW="700px"
              mx="auto"
            >
              <SectionTag>BOARD DE ALOCAÇÃO</SectionTag>
              <Text
                as="h2"
                fontSize={{ base: "32px", md: "44px" }}
                fontWeight={800}
                lineHeight={1.1}
                letterSpacing="-1px"
              >
                Vagas de{" "}
                <Text
                  as="span"
                  fontFamily="serif"
                  fontStyle="italic"
                  fontWeight={400}
                  color="blue.solid"
                >
                  Operação.
                </Text>
              </Text>
            </VStack>

            <VStack w="full" bg="blackAlpha.100" p="1px" gap="1px">
              {jobs.map((job, i) => (
                <Grid
                  key={i}
                  templateColumns={{ base: "1fr", lg: "300px 1fr 200px" }}
                  gap={{ base: 6, lg: 10 }}
                  bg="off"
                  p={{ base: 8, md: 10 }}
                  w="full"
                  alignItems="center"
                  _hover={{ bg: "white" }}
                  transition="all 0.2s"
                >
                  {/* Left Col - Identity */}
                  <VStack align="flex-start" gap={3}>
                    {job.featured && (
                      <Box bg="blue.solid" color="white" px={3} py={1}>
                        <Text fontFamily="mono" fontSize="sm" fontWeight={800}>
                          PRIORIDADE ALTA
                        </Text>
                      </Box>
                    )}
                    {!job.featured && (
                      <Box
                        bg="stone"
                        color="fg.subtle"
                        border="1px solid"
                        borderColor="blackAlpha.200"
                        px={3}
                        py={1}
                      >
                        <Text fontFamily="mono" fontSize="sm" fontWeight={800}>
                          {job.department.toUpperCase()}
                        </Text>
                      </Box>
                    )}
                    <Text
                      fontSize="2xl"
                      fontWeight={800}
                      letterSpacing="-0.5px"
                      color="fg"
                      mt={2}
                    >
                      {job.title}
                    </Text>
                  </VStack>

                  {/* Middle Col - Spec & Briefing */}
                  <VStack align="flex-start" gap={2}>
                    <HStack gap={4} mb={2}>
                      <HStack color="fg.subtle" gap={2}>
                        <Terminal size={14} />
                        <Text
                          fontFamily="mono"
                          fontSize="10px"
                          fontWeight={700}
                        >
                          {job.department.toUpperCase()}
                        </Text>
                      </HStack>
                      <HStack color="blue.solid" gap={2}>
                        <Activity size={14} />
                        <Text
                          fontFamily="mono"
                          fontSize="10px"
                          fontWeight={700}
                        >
                          {job.type}
                        </Text>
                      </HStack>
                    </HStack>
                    <Text fontSize="sm" color="fg.muted" lineHeight={1.6}>
                      {job.description}
                    </Text>
                  </VStack>

                  {/* Right Col - Action */}
                  <VStack
                    align={{ base: "flex-start", lg: "flex-end" }}
                    gap={4}
                    w="full"
                  >
                    <Box
                      as="a"
                      // @ts-ignore
                      href={`mailto:${CAREERS_EMAIL}?subject=Candidatura: ${job.title}&body=Olá! Segue em anexo meu histórico para a posição de ${job.title}.`}
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      gap="10px"
                      bg="transparent"
                      color="blue.solid"
                      border="1px solid"
                      borderColor="blue.solid"
                      px="24px"
                      py="10px"
                      fontWeight={700}
                      fontSize="xs"
                      textTransform="uppercase"
                      transition="all 0.2s"
                      _hover={{ bg: "blue.solid", color: "white" }}
                      w={{ base: "full", lg: "auto" }}
                    >
                      Apresente-se
                    </Box>
                  </VStack>
                </Grid>
              ))}
            </VStack>
          </Frame>
        </Box>

        {/* ── Naked CTA ── */}
        <Box
          as="section"
          py={{ base: 16, md: "80px" }}
          bg="stone"
          borderTop="1px solid"
          borderColor="blackAlpha.100"
          textAlign="center"
        >
          <Frame>
            <Text fontSize="2xl" fontWeight={800} color="fg" mb={4}>
              Nenhuma vaga ativa bateu com você?
            </Text>
            <Text fontSize="md" color="fg.muted" maxW="600px" mx="auto" mb={8}>
              Gênios sempre encontram porta aberta. Submeta uma aplicação bruta
              e justifique por que precisamos de você dentro da Matrix.
            </Text>
            <Box
              as="a"
              // @ts-ignore
              href={`mailto:${CAREERS_EMAIL}?subject=Candidatura Espontânea&body=Nenhuma vaga se aplica, mas vocês precisam olhar esse currículo anexado.`}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              gap="10px"
              bg="fg"
              color="white"
              px="32px"
              py="16px"
              fontWeight={600}
              fontSize="sm"
              transition="all 0.2s"
              _hover={{ bg: "black" }}
            >
              Envio Espontâneo
              <ArrowRight size={14} />
            </Box>
          </Frame>
        </Box>
      </VStack>

      <Footer />
    </Page>
  );
}
