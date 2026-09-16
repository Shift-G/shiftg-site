import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Frame,
  Title,
} from "@/components/layout/editorial";
import { SitePage } from "@/components/layout/site-page";
import { ClosingCTA } from "@/components/sections/business";
import { ClientStories, ProductCard } from "@/components/sections/portfolio";
import {
  ProjectFlow,
  ProjectVisual,
} from "@/components/sections/project-visual";
import { PageSeo } from "@/components/seo/page-seo";
import { projects } from "@/constants/projects";
import { pageMetadata } from "@/lib/page-metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { generateProjectPageSchema } from "@/lib/project-seo";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return pageMetadata(
    `${project.name} — ${project.category}`,
    project.summary,
    `/projetos/${slug}`,
    { image: `/projetos/${slug}/opengraph-image` },
  );
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((item) => item.slug === slug);
  if (!p) notFound();
  const related = projects.filter((item) => item.slug !== p.slug).slice(0, 2);
  return (
    <SitePage>
      <JsonLd data={generateProjectPageSchema(p)} />
      <PageSeo
        name={p.name}
        path={`/projetos/${p.slug}`}
        parents={[{ name: "Ecossistema", item: "/ecossistema" }]}
      />
      <Box py={{ base: 10, md: 16 }}>
        <Frame wide>
          <Grid
            templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
            gap={{ base: 10, lg: 14 }}
            alignItems="center"
          >
            <Box>
              <Eyebrow>{p.category}</Eyebrow>
              <Heading
                as="h1"
                fontSize={{ base: "3rem", md: "4.5rem", xl: "5.5rem" }}
                fontWeight={500}
                letterSpacing="-0.045em"
                lineHeight={1.08}
              >
                {p.headline.split(" ").slice(0, -2).join(" ")}{" "}
                <Accent>{p.headline.split(" ").slice(-2).join(" ")}</Accent>
              </Heading>
              <Text
                fontSize="xl"
                color="blackAlpha.700"
                lineHeight={1.7}
                mt={8}
                maxW="720px"
              >
                {p.summary}
              </Text>
              <Flex gap={6} wrap="wrap" mt={9}>
                <Action href={p.url} external>
                  Visitar {p.name}
                </Action>
                <Action href={`/contato?projeto=${p.slug}`} secondary>
                  Conversar sobre o projeto
                </Action>
              </Flex>
              <Text
                mt={10}
                pt={5}
                borderTop="1px solid"
                borderColor="blackAlpha.200"
                fontFamily="mono"
                fontSize="sm"
                color="blue.solid"
              >
                {p.ownership}
                {p.partner ? ` · ${p.partner}` : ""}
              </Text>
            </Box>
            <ProjectVisual project={p} />
          </Grid>
        </Frame>
      </Box>
      <EditorialSection muted>
        <Grid templateColumns={{ base: "1fr", md: "1.5fr 1fr" }} gap={10}>
          <Box>
            <Eyebrow>Para quem</Eyebrow>
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              lineHeight={1.4}
              letterSpacing="-0.025em"
            >
              {p.audience}
            </Text>
          </Box>
          <Stack align="start" gap={4}>
            <Text fontFamily="mono" fontSize="sm" color="blue.solid">
              {p.name.toUpperCase()} / CONEXÕES
            </Text>
            <Text fontSize="lg" lineHeight={1.7}>
              Conheça o projeto em seu próprio ambiente e acompanhe sua
              evolução.
            </Text>
            {p.instagram && (
              <Action secondary href={p.instagram} external>
                Instagram do projeto
              </Action>
            )}
          </Stack>
        </Grid>
      </EditorialSection>
      <EditorialSection>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 10, md: 16 }}
        >
          <Box>
            <Eyebrow>O desafio</Eyebrow>
            <Text fontSize={{ base: "xl", md: "2xl" }} lineHeight={1.6}>
              {p.challenge}
            </Text>
          </Box>
          <Box>
            <Eyebrow>A aplicação</Eyebrow>
            <Text fontSize="lg" lineHeight={1.8} color="blackAlpha.700">
              {p.approach}
            </Text>
          </Box>
        </Grid>
        <ProjectFlow project={p} />
      </EditorialSection>
      {p.caseId && <ClientStories only={p.caseId} />}
      {p.slug === "pontes" && (
        <EditorialSection dark>
          <Eyebrow light>Centelha PR 2026</Eyebrow>
          <Title>
            Uma nova conexão
            <br />
            para a saúde pública.
          </Title>
          <Text
            maxW="760px"
            fontSize="xl"
            mt={8}
            lineHeight={1.8}
            color="whiteAlpha.800"
          >
            Selecionado no programa Centelha PR 2026, o Pontes está em
            validação. A proposta é apoiar consórcios de saúde no enfrentamento
            do absenteísmo com o uso de inteligência artificial.
          </Text>
        </EditorialSection>
      )}
      <EditorialSection muted>
        <Flex justify="space-between" align="end" gap={6} wrap="wrap" mb={9}>
          <Title>
            Outras aplicações.
            <br />A mesma capacidade de execução.
          </Title>
          <Action secondary href="/ecossistema">
            Ver todos os projetos
          </Action>
        </Flex>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap="1px"
          bg="blackAlpha.200"
        >
          {related.map((item) => (
            <ProductCard
              project={item}
              key={item.slug}
              index={projects.indexOf(item)}
            />
          ))}
        </Grid>
      </EditorialSection>
      <ClosingCTA />
    </SitePage>
  );
}
