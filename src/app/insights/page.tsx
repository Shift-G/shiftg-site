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
    tags: ["Recursos Humanos", "People Analytics", "Employee Experience"],
    readTime: "8 min",
    publishedAt: "Janeiro 2025",
  },
  {
    title: "RPA: Liberte sua Equipe das Tarefas Repetitivas e Foque no que Realmente Importa",
    description:
      "Descubra como o RPA (Robotic Process Automation) pode transformar sua operação, eliminando tarefas repetitivas e liberando sua equipe para atividades estratégicas. Entenda os benefícios, casos de uso e como combinar RPA com IA.",
    slug: "rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa",
    tags: ["RPA", "Automação", "Eficiência Operacional"],
    readTime: "6 min",
    publishedAt: "Janeiro 2025",
  },
  {
    title: "O ROI da Inteligência Artificial: Como Calcular o Impacto da IA no Balanço da sua Empresa",
    description:
      "Descubra como calcular o retorno sobre investimento da Inteligência Artificial em sua empresa. Entenda os 4 vetores de retorno e a fórmula prática para medir o impacto financeiro da IA no seu negócio.",
    slug: "o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa",
    tags: ["Inteligência Artificial", "ROI", "Estratégia de Negócios"],
    readTime: "7 min",
    publishedAt: "Janeiro 2025",
  },
  {
    title: "Transformação Digital: Mais do que Tecnologia, uma Estratégia de Sobrevivência",
    description:
      "Descubra como a transformação digital vai além da tecnologia e se torna uma estratégia essencial de sobrevivência para empresas modernas. Entenda os 4 pilares fundamentais e o roteiro prático em 3 passos.",
    slug: "transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia",
    tags: ["Transformação Digital", "Estratégia", "Inovação"],
    readTime: "8 min",
    publishedAt: "Janeiro 2025",
  },
];

export default function InsightsPage() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Section
        title="Insights"
        subtitle="Artigos e reflexões sobre transformação digital, inteligência artificial e estratégias que fazem a diferença no seu negócio."
        centered
        py={{ base: 16, md: 20 }}
      >
        <></>
      </Section>

      {/* Blog Posts Section */}
      <Section>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
          {blogPosts.map((post) => (
            <Card.Root key={post.slug} variant="outline" _hover={{ borderColor: "blue.200" }}>
              <Card.Body p={8}>
                <VStack gap={6} alignItems="flex-start">
                  <HStack flexWrap="wrap" gap={2}>
                    {post.tags.map((tag) => (
                      <Badge key={tag} colorPalette="blue" variant="surface" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </HStack>

                  <VStack gap={3} alignItems="flex-start">
                    <Heading
                      as="h2"
                      size="lg"
                      color="fg"
                      lineHeight="shorter"
                      fontWeight="700"
                    >
                      {post.title}
                    </Heading>
                    <Text color="fg.muted" lineHeight="tall" fontSize="md">
                      {post.description}
                    </Text>
                  </VStack>

                  <HStack gap={4} color="fg.muted" fontSize="sm">
                    <HStack gap={1}>
                      <Icon size="sm">
                        <Calendar />
                      </Icon>
                      <Text>{post.publishedAt}</Text>
                    </HStack>
                    <HStack gap={1}>
                      <Icon size="sm">
                        <Clock />
                      </Icon>
                      <Text>{post.readTime} de leitura</Text>
                    </HStack>
                  </HStack>

                  <Button
                    asChild
                    variant="outline"
                    colorPalette="blue"
                    alignSelf="flex-start"
                  >
                    <Link href={`/insights/${post.slug}`}>
                      Ler artigo
                      <ArrowRight />
                    </Link>
                  </Button>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>

        {/* Coming Soon */}
        <Box textAlign="center" mt={12}>
          <VStack gap={4}>
            <Text color="fg.muted" fontSize="lg">
              Mais insights em breve
            </Text>
            <Text color="fg.muted" fontSize="sm">
              Acompanhe nossas reflexões sobre tecnologia, dados e estratégias de negócio.
            </Text>
          </VStack>
        </Box>
      </Section>

      <Footer />
    </Page>
  );
}
