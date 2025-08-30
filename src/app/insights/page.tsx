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
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Artigos e insights sobre transformação digital, inteligência artificial, análise de dados e estratégias de negócio para empresas modernas.",
  keywords: [
    "insights",
    "transformação digital",
    "inteligência artificial",
    "análise de dados",
    "estratégia empresarial",
    "inovação",
    "business intelligence",
  ],
  openGraph: {
    title: "Insights | SHIFT+G",
    description:
      "Artigos e insights sobre transformação digital, inteligência artificial, análise de dados e estratégias de negócio para empresas modernas.",
    url: `${SITE_URL}/insights`,
    type: "website",
  },
};

const blogPosts = [
  {
    title: "RH Estratégico: Como Deixar as Planilhas para Trás e Liderar a Gestão de Talentos com Dados",
    description:
      "Descubra como transformar o RH operacional em estratégico através de automação inteligente, people analytics e foco na experiência do colaborador. Entenda os 3 pilares da transformação digital no RH.",
    slug: "rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados",
    image:"/insights/rh-estrategico-como-deixar-planilhas-para-tras-e-liderar-gestao-de-talentos-com-dados.webp",
    tags: ["Recursos Humanos", "People Analytics", "Employee Experience"],
    readTime: "8 min",
    publishedAt: "Julho 2025",
  },
  {
    title: "RPA: Liberte sua Equipe das Tarefas Repetitivas e Foque no que Realmente Importa",
    description:
      "Descubra como o RPA (Robotic Process Automation) pode transformar sua operação, eliminando tarefas repetitivas e liberando sua equipe para atividades estratégicas. Entenda os benefícios, casos de uso e como combinar RPA com IA.",
    slug: "rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa",
    image:"/insights/rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa.webp",
    tags: ["RPA", "Automação", "Eficiência Operacional"],
    readTime: "6 min",
    publishedAt: "Abril 2025",
  },
  {
    title: "O ROI da Inteligência Artificial: Como Calcular o Impacto da IA no Balanço da sua Empresa",
    description:
      "Descubra como calcular o retorno sobre investimento da Inteligência Artificial em sua empresa. Entenda os 4 vetores de retorno e a fórmula prática para medir o impacto financeiro da IA no seu negócio.",
    slug: "o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa",
    image:"/insights/o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa.webp",
    tags: ["Inteligência Artificial", "ROI", "Estratégia de Negócios"],
    readTime: "7 min",
    publishedAt: "Fevereiro 2025",
  },
  {
    title: "Transformação Digital: Mais do que Tecnologia, uma Estratégia de Sobrevivência",
    description:
      "Descubra como a transformação digital vai além da tecnologia e se torna uma estratégia essencial de sobrevivência para empresas modernas. Entenda os 4 pilares fundamentais e o roteiro prático em 3 passos.",
    slug: "transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia",
    image:"/insights/transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia.webp",
    tags: ["Transformação Digital", "Estratégia", "Inovação"],
    readTime: "8 min",
    publishedAt: "Janeiro 2025",
  },
];

export default function InsightsPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Section
        title="Insights"
        subtitle="Artigos e reflexões sobre transformação digital, inteligência artificial e estratégias que fazem a diferença no seu negócio."
        centered
        py={{ base: 8, md: 12 }}
      >
        <></>
      </Section>

      {/* Featured Post - Full Width */}
      <Section py={{ base: 4, md: 8 }}>
        <Card.Root 
          variant="outline" 
          _hover={{ borderColor: "blue.200" }} 
          overflow="hidden"
          bg="bg.surface"
          borderColor="border"
        >
          <Box
            display={{ base: "block", lg: "grid" }}
            gridTemplateColumns={{ lg: "1fr 1fr" }}
            minH={{ lg: "400px" }}
          >
            {/* Image Section */}
            <Box position="relative" aspectRatio={{ base: "2/1", lg: "auto" }}>
              <Image 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                width={600} 
                height={400} 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <Box
                position="absolute"
                top={4}
                left={4}
                zIndex={1}
              >
                <Badge colorPalette="blue" variant="solid" size="md">
                  Destaque
                </Badge>
              </Box>
            </Box>
            
            {/* Content Section */}
            <Card.Body 
              p={{ base: 6, md: 8 }} 
              display="flex" 
              alignItems="center"
            >
              <VStack gap={6} alignItems="flex-start" maxW="none" w="full">
                <HStack flexWrap="wrap" gap={2}>
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} colorPalette="blue" variant="surface" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </HStack>

                <VStack gap={4} alignItems="flex-start">
                  <Heading
                    as="h2"
                    size={{ base: "xl", md: "2xl" }}
                    color="fg"
                    lineHeight="shorter"
                    fontWeight="700"
                  >
                    {featuredPost.title}
                  </Heading>
                  <Text 
                    color="fg.muted" 
                    lineHeight="tall" 
                    fontSize={{ base: "md", md: "lg" }}
                  >
                    {featuredPost.description}
                  </Text>
                </VStack>

                <HStack gap={6} color="fg.muted" fontSize="sm">
                  <HStack gap={2}>
                    <Icon size="sm">
                      <Calendar />
                    </Icon>
                    <Text>{featuredPost.publishedAt}</Text>
                  </HStack>
                  <HStack gap={2}>
                    <Icon size="sm">
                      <Clock />
                    </Icon>
                    <Text>{featuredPost.readTime} de leitura</Text>
                  </HStack>
                </HStack>

                <Button
                  asChild
                  variant="solid"
                  colorPalette="blue"
                  size="lg"
                  alignSelf="flex-start"
                >
                  <Link href={`/insights/${featuredPost.slug}`}>
                    Ler artigo completo
                    <ArrowRight />
                  </Link>
                </Button>
              </VStack>
            </Card.Body>
          </Box>
        </Card.Root>
      </Section>

      {/* Other Posts Grid */}
      {otherPosts.length > 0 && (
        <Section py={{ base: 4, md: 8 }}>
          <VStack gap={8} alignItems="flex-start">
            <Heading as="h3" size="lg" color="fg">
              Mais insights
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
              {otherPosts.map((post) => (
                <Card.Root 
                  key={post.slug} 
                  variant="outline" 
                  _hover={{ borderColor: "blue.200", transform: "translateY(-2px)" }} 
                  overflow="hidden"
                  transition="all 0.2s"
                >
                  <Box aspectRatio="16/9" overflow="hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={400} 
                      height={225}
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  
                  <Card.Body p={6}>
                    <VStack gap={4} alignItems="flex-start" h="full">
                      <HStack flexWrap="wrap" gap={2}>
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} colorPalette="blue" variant="surface" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </HStack>

                      <VStack gap={3} alignItems="flex-start" flex="1">
                        <Heading
                          as="h4"
                          size="md"
                          color="fg"
                          lineHeight="shorter"
                          fontWeight="600"
                          css={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {post.title}
                        </Heading>
                        <Text 
                          color="fg.muted" 
                          lineHeight="tall" 
                          fontSize="sm"
                          css={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {post.description}
                        </Text>
                      </VStack>

                      <VStack gap={3} alignItems="flex-start" w="full">
                        <HStack gap={4} color="fg.muted" fontSize="xs">
                          <HStack gap={1}>
                            <Icon size="xs">
                              <Calendar />
                            </Icon>
                            <Text>{post.publishedAt}</Text>
                          </HStack>
                          <HStack gap={1}>
                            <Icon size="xs">
                              <Clock />
                            </Icon>
                            <Text>{post.readTime}</Text>
                          </HStack>
                        </HStack>

                        <Button
                          asChild
                          variant="outline"
                          colorPalette="blue"
                          size="sm"
                          w="full"
                        >
                          <Link href={`/insights/${post.slug}`}>
                            Ler artigo
                            <ArrowRight />
                          </Link>
                        </Button>
                      </VStack>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Section>
      )}

      {/* Coming Soon */}
      <Section py={{ base: 8, md: 12 }}>
        <Box textAlign="center">
          <VStack gap={4}>
            <Text color="fg.muted" fontSize="lg" fontWeight="500">
              Mais insights em breve
            </Text>
            <Text color="fg.muted" fontSize="sm" maxW="md">
              Acompanhe nossas reflexões sobre tecnologia, dados e estratégias de negócio que transformam empresas.
            </Text>
          </VStack>
        </Box>
      </Section>

      <Footer />
    </Page>
  );
}
