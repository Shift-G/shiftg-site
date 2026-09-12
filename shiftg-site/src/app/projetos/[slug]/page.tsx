import { notFound } from "next/navigation";
import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { SITE_URL } from "@/constants";
import { pageMetadata } from "@/lib/page-metadata";
import { SitePage } from "@/components/layout/site-page";
import {
  Action,
  EditorialSection,
  Eyebrow,
  Frame,
  Title,
} from "@/components/layout/editorial";
import { ClientStories, ProductCard } from "@/components/sections/portfolio";
import { ClosingCTA } from "@/components/sections/business";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return pageMetadata(project.name, project.summary, `/projetos/${slug}`);
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((item) => item.slug === slug);
  if (!p) notFound();
  const related = projects.filter((item) => item.slug !== p.slug).slice(0, 2);
  return (
    <SitePage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "SHIFT+G",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Ecossistema",
                item: `${SITE_URL}/ecossistema`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: p.name,
                item: `${SITE_URL}/projetos/${p.slug}`,
              },
            ],
          }),
        }}
      />
      <Box py={{ base: 10, md: 16 }}>
        <Frame>
          <Flex
            as="nav"
            aria-label="Caminho da página"
            gap={3}
            fontSize="sm"
            color="blackAlpha.700"
            mb={12}
          >
            <Link href="/ecossistema">Ecossistema</Link>
            <Text aria-hidden="true">/</Text>
            <Text aria-current="page">{p.name}</Text>
          </Flex>
          <Grid
            templateColumns={{ base: "1fr", lg: "1.6fr 1fr" }}
            gap={{ base: 10, lg: 16 }}
            alignItems="start"
          >
            <Box>
              <Eyebrow>{p.category}</Eyebrow>
              <Title as="h1">{p.headline}</Title>
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
            </Box>
            <Stack bg="off" p={{ base: 7, md: 9 }} gap={8}>
              <Flex
                minH="120px"
                align="center"
                justify="center"
                bg="white"
                p={6}
              >
                <Image
                  src={`/images/products/${p.logo}`}
                  alt={p.name}
                  maxW="full"
                  maxH="88px"
                  objectFit="contain"
                />
              </Flex>
              <Stack gap={6}>
                <Box>
                  <Text
                    fontFamily="mono"
                    fontSize="sm"
                    color="blackAlpha.700"
                    mb={2}
                  >
                    DESENVOLVIMENTO
                  </Text>
                  <Text>
                    {p.ownership}
                    {p.partner ? ` · ${p.partner}` : ""}
                  </Text>
                </Box>
                {p.stage && (
                  <Box>
                    <Text
                      fontFamily="mono"
                      fontSize="sm"
                      color="blackAlpha.700"
                      mb={2}
                    >
                      ESTÁGIO
                    </Text>
                    <Text color="blue.solid" fontWeight={600}>
                      {p.stage}
                    </Text>
                  </Box>
                )}
                <Box>
                  <Text
                    fontFamily="mono"
                    fontSize="sm"
                    color="blackAlpha.700"
                    mb={2}
                  >
                    PARA QUEM
                  </Text>
                  <Text lineHeight={1.7}>{p.audience}</Text>
                </Box>
                {p.instagram && (
                  <Action secondary href={p.instagram} external>
                    Instagram do projeto
                  </Action>
                )}
              </Stack>
            </Stack>
          </Grid>
        </Frame>
      </Box>
      <EditorialSection>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 10, md: 20 }}
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
        <Grid
          mt={16}
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
        >
          {p.pillars.map((pillar, i) => (
            <Box
              key={pillar.title}
              borderTop="1px solid"
              borderColor="blackAlpha.300"
              pt={6}
            >
              <Text color="blue.solid" fontFamily="mono" fontSize="sm" mb={6}>
                0{i + 1}
              </Text>
              <Heading as="h2" fontSize="2xl" fontWeight={500}>
                {pillar.title}
              </Heading>
              <Text mt={4} color="blackAlpha.700" lineHeight={1.8}>
                {pillar.text}
              </Text>
            </Box>
          ))}
        </Grid>
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
