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
import { Plumb } from "@/components/ui/plumb";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Insights | ${SITE_NAME}`,
  description:
    "Inteligência aplicada. Artigos sobre transformação digital, IA, e análise de dados para operações de alta escala.",
  alternates: {
    canonical: `${SITE_URL}/insights`,
  },
  openGraph: {
    title: `Insights | ${SITE_NAME}`,
    description:
      "Inteligência aplicada. Artigos sobre transformação digital, IA, e análise de dados para operações de alta escala.",
    url: `${SITE_URL}/insights`,
    type: "website",
    siteName: SITE_NAME,
  },
};

const blogPosts = [
  {
    title: "RH Estratégico: Como Deixar as Planilhas para Trás e Liderar a Gestão de Talentos com Dados",
    description:
      "Descubra como transformar o RH operacional em estratégico através de automação inteligente, people analytics e foco na experiência do colaborador. Entenda os 3 pilares da transformação digital no RH.",
    slug: "rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados",
    image: "/insights/rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados.webp",
    tags: ["Recursos Humanos", "People Analytics", "Employee Experience"],
    readTime: "8 min",
    publishedAt: "Julho 2025",
  },
  {
    title: "RPA: Liberte sua Equipe das Tarefas Repetitivas e Foque no que Realmente Importa",
    description:
      "Descubra como o RPA (Robotic Process Automation) pode transformar sua operação, eliminando tarefas repetitivas e liberando sua equipe para atividades estratégicas. Entenda os benefícios, casos de uso e como combinar RPA com IA.",
    slug: "rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa",
    image: "/insights/rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa.webp",
    tags: ["RPA", "Automação", "Eficiência Operacional"],
    readTime: "6 min",
    publishedAt: "Abril 2025",
  },
  {
    title: "O ROI da Inteligência Artificial: Como Calcular o Impacto da IA no Balanço da sua Empresa",
    description:
      "Descubra como calcular o retorno sobre investimento da Inteligência Artificial em sua empresa. Entenda os 4 vetores de retorno e a fórmula prática para medir o impacto financeiro da IA no seu negócio.",
    slug: "o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa",
    image: "/insights/o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa.webp",
    tags: ["Inteligência Artificial", "ROI", "Estratégia de Negócios"],
    readTime: "7 min",
    publishedAt: "Fevereiro 2025",
  },
  {
    title: "Transformação Digital: Mais do que Tecnologia, uma Estratégia de Sobrevivência",
    description:
      "Descubra como a transformação digital vai além da tecnologia e se torna uma estratégia essencial de sobrevivência para empresas modernas. Entenda os 4 pilares fundamentais e o roteiro prático em 3 passos.",
    slug: "transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia",
    image: "/insights/transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia.webp",
    tags: ["Transformação Digital", "Estratégia", "Inovação"],
    readTime: "8 min",
    publishedAt: "Janeiro 2025",
  },
];

/* ── Tags Component ── */
function ArticleTag({ children }: { children: string }) {
  return (
    <Box bg="stone" border="1px solid" borderColor="blackAlpha.200" px={3} py={1}>
      <Text fontFamily="mono" fontSize="2xs" fontWeight={800} color="fg.subtle">
        {children.toUpperCase()}
      </Text>
    </Box>
  );
}

export default function InsightsPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch">

        {/* ── Hero ── */}
        <Box
          as="section"
          bg="stone"
          position="relative"
          px={{ base: 6, md: "60px", lg: "112px" }}
          pt={{ base: "140px", md: "180px" }}
          pb={{ base: 16, md: "80px" }}
        >
          {/* Subtle math/grid pattern */}
          <Box
            position="absolute"
            inset={0}
            backgroundImage="linear-gradient(#00000004 1px, transparent 1px), linear-gradient(90deg, #00000004 1px, transparent 1px)"
            backgroundSize="40px 40px"
            pointerEvents="none"
          />

          <VStack
            position="relative"
            zIndex={2}
            align="flex-start"
            gap={6}
            maxW="900px"
          >
            <HStack gap={3} mb={{ base: 4, md: 6 }}>
              <Box w="6px" h="6px" bg="blue.solid" />
              <Text
                fontFamily="mono"
                fontSize="2xs"
                fontWeight={600}
                letterSpacing="0.14em"
                textTransform="uppercase"
                color="blue.solid"
              >
                Inteligência Aplicada
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "48px", md: "clamp(60px, 8vw, 110px)" }}
              lineHeight={0.92}
              letterSpacing="-2.5px"
              color="fg"
            >
              <Text as="span" fontWeight={800}>
                Diretrizes &{" "}
              </Text>
              <Text
                as="span"
                fontFamily="serif"
                fontWeight={400}
                fontStyle="italic"
                color="blue.solid"
              >
                Insights.
              </Text>
            </Text>

            <Text fontSize="lg" color="fg.muted" lineHeight={1.8} maxW="600px">
              Arquivo técnico sobre arquiteturas escaláveis, automação inteligente e
              decisões orientadas a dados. Conhecimento destilado para C-Levels e engenheiros.
            </Text>
          </VStack>
        </Box>

        <Plumb />

        {/* ── Featured Post ── */}
        <Box
          as="section"
          px={{ base: 6, md: "60px", lg: "112px" }}
          py={{ base: 12, md: "80px" }}
          bg="white"
        >
          <Text fontFamily="mono" fontSize="sm" fontWeight={700} color="fg.subtle" mb={6} letterSpacing="0.1em">
            [ DESTAQUE ]
          </Text>

          <Grid
            templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
            border="1px solid"
            borderColor="blackAlpha.200"
            bg="off"
            transition="all 0.2s"
            _hover={{ borderColor: "blackAlpha.400" }}
          >
            {/* Image Placeholder / Banner */}
            <Box position="relative" w="full" minH={{ base: "300px", lg: "auto" }} bg="blackAlpha.50" borderRight={{ lg: "1px solid" }} borderBottom={{ base: "1px solid", lg: "none" }} borderColor="blackAlpha.200">
              {/* Se houver imagem válida no futuro, ela entra aqui cobrindo o Box. Por ora, vamos usar um padrão militar/blueprint se a imagem falhar, ou a tag next/image */}
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <Box position="absolute" top={0} left={0} w="full" h="full" bg="blackAlpha.200" pointerEvents="none" />

              {/* Badge Overlay */}
              <Box position="absolute" top={6} left={6}>
                <Box bg="blue.solid" color="white" px={3} py={1}>
                  <Text fontFamily="mono" fontSize="2xs" fontWeight={800}>ESTRATÉGIA B2B</Text>
                </Box>
              </Box>
            </Box>

            {/* Content Sidebar */}
            <VStack align="stretch" p={{ base: 8, md: 12 }} justify="center" gap={8} bg="white">
              <HStack flexWrap="wrap" gap={2}>
                {featuredPost.tags.map((tag) => (
                  <ArticleTag key={tag}>{tag}</ArticleTag>
                ))}
              </HStack>

              <VStack align="flex-start" gap={4}>
                <Text
                  as="h2"
                  fontSize={{ base: "32px", md: "40px" }}
                  fontWeight={800}
                  lineHeight={1.1}
                  letterSpacing="-1px"
                  color="fg"
                >
                  {featuredPost.title}
                </Text>
                <Text color="fg.muted" fontSize="md" lineHeight={1.6}>
                  {featuredPost.description}
                </Text>
              </VStack>

              <HStack justify="space-between" align="center" pt={4} borderTop="1px solid" borderColor="blackAlpha.100" w="full">
                <HStack gap={6} color="fg.subtle" fontFamily="mono" fontSize="xs" fontWeight={600}>
                  <HStack gap={2}>
                    <Calendar size={14} />
                    <Text>{featuredPost.publishedAt.toUpperCase()}</Text>
                  </HStack>
                  <HStack gap={2}>
                    <Clock size={14} />
                    <Text>{featuredPost.readTime.toUpperCase()}</Text>
                  </HStack>
                </HStack>

                <Link href={`/insights/${featuredPost.slug}`}>
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    w="40px"
                    h="40px"
                    bg="stone"
                    color="blue.solid"
                    border="1px solid"
                    borderColor="blackAlpha.200"
                    transition="all 0.2s"
                    _hover={{ bg: "blue.solid", color: "white" }}
                  >
                    <ArrowRight size={16} />
                  </Box>
                </Link>
              </HStack>
            </VStack>
          </Grid>
        </Box>

        {/* ── Other Posts Matrix ── */}
        {otherPosts.length > 0 && (
          <Box
            as="section"
            px={{ base: 6, md: "60px", lg: "112px" }}
            pb={{ base: 20, md: "120px" }}
            bg="white"
          >
            <Text fontFamily="mono" fontSize="sm" fontWeight={700} color="fg.subtle" mb={6} letterSpacing="0.1em">
              [ ARQUIVOS DA OPERAÇÃO ]
            </Text>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap="1px" bg="blackAlpha.200" p="1px">
              {otherPosts.map((post) => (
                <VStack
                  key={post.slug}
                  align="stretch"
                  bg="white"
                  gap={0}
                  transition="all 0.2s"
                  _hover={{ bg: "off" }}
                >
                  <Box position="relative" w="full" aspectRatio="16/9" bg="stone" overflow="hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>

                  <VStack align="stretch" p={8} gap={6} flex={1}>
                    <HStack flexWrap="wrap" gap={2}>
                      {post.tags.slice(0, 2).map((tag) => (
                        <ArticleTag key={tag}>{tag}</ArticleTag>
                      ))}
                    </HStack>

                    <VStack align="flex-start" gap={3} flex={1}>
                      <Text
                        as="h3"
                        fontSize="xl"
                        fontWeight={800}
                        lineHeight={1.2}
                        letterSpacing="-0.5px"
                        color="fg"
                      >
                        {post.title}
                      </Text>
                      <Text color="fg.muted" fontSize="sm" lineHeight={1.6} css={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {post.description}
                      </Text>
                    </VStack>

                    <HStack justify="space-between" align="center" pt={4} borderTop="1px solid" borderColor="blackAlpha.100" w="full">
                      <HStack gap={4} color="fg.subtle" fontFamily="mono" fontSize="2xs" fontWeight={600}>
                        <HStack gap={1.5}>
                          <Calendar size={12} />
                          <Text>{post.publishedAt.toUpperCase()}</Text>
                        </HStack>
                        <HStack gap={1.5}>
                          <Clock size={12} />
                          <Text>{post.readTime.toUpperCase()}</Text>
                        </HStack>
                      </HStack>

                      <Link href={`/insights/${post.slug}`}>
                        <Box color="blue.solid" _hover={{ transform: "translateX(4px)" }} transition="all 0.2s">
                          <ArrowRight size={16} />
                        </Box>
                      </Link>
                    </HStack>
                  </VStack>
                </VStack>
              ))}
            </Grid>
          </Box>
        )}

      </VStack>

      <Footer />
    </Page>
  );
}
