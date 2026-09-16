import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Action, Frame } from "@/components/layout/editorial";
import { SitePage } from "@/components/layout/site-page";
import { PageSeo } from "@/components/seo/page-seo";
import { SITE_NAME } from "@/constants";
import type { RecentInsight } from "@/constants/recent-insights";

export function InsightArticle({ post }: { post: RecentInsight }) {
  return (
    <SitePage>
      <PageSeo
        name={post.seoTitle}
        path={`/insights/${post.slug}`}
        parents={[{ name: "Insights", item: "/insights" }]}
        article={post}
      />
      <Box as="article" py={{ base: 10, md: 16 }}>
        <Frame>
          <Box maxW="900px" mx="auto">
            <Stack as="header" gap={6}>
              <Text fontFamily="mono" fontSize="sm" color="blue.solid">
                {post.tags.join(" / ")}
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight={500}
                lineHeight={1.15}
                letterSpacing="-0.035em"
              >
                {post.title}
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight={1.8}
                color="blackAlpha.700"
              >
                {post.description}
              </Text>
              <Flex gap={4} wrap="wrap" fontSize="sm" color="blackAlpha.700">
                <Link href="/sobre">Por {SITE_NAME}</Link>
                <time dateTime={post.datePublished}>{post.publishedAt}</time>
                <span>{post.readTime} de leitura</span>
              </Flex>
              <Box as="figure" m={0}>
                <Box position="relative" aspectRatio="16/9" bg="off">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 900px, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Text
                  as="figcaption"
                  mt={3}
                  fontSize="xs"
                  color="blackAlpha.700"
                >
                  Ilustração editorial. Não representa instalações ou pessoas
                  dos clientes.
                </Text>
              </Box>
            </Stack>
            <Stack
              mt={10}
              gap={6}
              fontSize="lg"
              lineHeight={1.9}
              color="blackAlpha.800"
            >
              {post.introduction.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
            </Stack>
            <Box
              as="nav"
              aria-label="Neste artigo"
              mt={10}
              p={{ base: 6, md: 8 }}
              bg="off"
              borderTop="2px solid"
              borderColor="blue.solid"
            >
              <Text fontFamily="mono" fontSize="sm" mb={5}>
                NESTE ARTIGO
              </Text>
              <Stack as="ul" gap={3} pl={5}>
                {post.sections.map((section) => (
                  <Box as="li" key={section.id}>
                    <Box asChild color="blue.solid" textDecoration="underline">
                      <Link href={`#${section.id}`}>{section.title}</Link>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
            {post.sections.map((section) => (
              <Stack
                as="section"
                key={section.id}
                id={section.id}
                scrollMarginTop="120px"
                mt={12}
                gap={6}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight={500}
                  lineHeight={1.3}
                >
                  {section.title}
                </Heading>
                {section.paragraphs.map((paragraph) => (
                  <Text
                    key={paragraph}
                    fontSize="lg"
                    lineHeight={1.9}
                    color="blackAlpha.800"
                  >
                    {paragraph}
                  </Text>
                ))}
                {section.points && (
                  <Stack as="ul" gap={3} pl={6} fontSize="lg" lineHeight={1.8}>
                    {section.points.map((point) => (
                      <Box as="li" key={point}>
                        {point}
                      </Box>
                    ))}
                  </Stack>
                )}
                {section.source && (
                  <Text fontSize="sm" color="blackAlpha.700">
                    Referência:{" "}
                    <Box asChild color="blue.solid" textDecoration="underline">
                      <a href={section.source.href}>{section.source.label}</a>
                    </Box>
                    .
                  </Text>
                )}
              </Stack>
            ))}
            <Box as="aside" mt={12} p={{ base: 6, md: 8 }} bg="off">
              <Heading as="h2" fontSize="2xl" fontWeight={500} mb={6}>
                Continue explorando
              </Heading>
              <Stack as="ul" gap={4} pl={5}>
                {post.related.map((item) => (
                  <Box as="li" key={item.href}>
                    <Box asChild color="blue.solid" textDecoration="underline">
                      <Link href={item.href}>{item.title}</Link>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box
              mt={12}
              borderTop="1px solid"
              borderColor="blackAlpha.300"
              pt={8}
            >
              <Heading as="h2" fontSize="2xl" fontWeight={500}>
                {post.cta}
              </Heading>
              <Text my={6} lineHeight={1.8}>
                Atendimento em União da Vitória, Porto União, São Mateus do Sul,
                Curitiba e região. Vamos entender o contexto da sua empresa e
                definir o próximo passo.
              </Text>
              <Flex gap={6} wrap="wrap">
                <Action>Agendar uma conversa</Action>
                <Action secondary href="/atendimento">
                  Conheça o atendimento regional
                </Action>
              </Flex>
            </Box>
          </Box>
        </Frame>
      </Box>
    </SitePage>
  );
}
