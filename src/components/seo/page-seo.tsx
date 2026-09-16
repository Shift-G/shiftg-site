import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { SITE_URL } from "@/constants";
import { Frame } from "@/components/layout/editorial";
import { JsonLd } from "./json-ld";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  type BreadcrumbItem,
} from "@/lib/seo-utils";

export function PageSeo({
  name,
  path,
  service,
  article,
  parents = [],
}: {
  name: string;
  path: string;
  service?: { name: string; description: string };
  article?: {
    title: string;
    description: string;
    image: string;
    datePublished?: string;
    dateModified?: string;
  };
  parents?: BreadcrumbItem[];
}) {
  const crumbs = [
    { name: "Início", item: "/" },
    ...parents,
    { name, item: path },
  ];
  const schemas: object[] = [generateBreadcrumbSchema(crumbs)];
  if (service)
    schemas.push(
      generateServiceSchema({
        ...service,
        serviceType: service.name,
        url: `${SITE_URL}${path}`,
      }),
    );
  if (article)
    schemas.push(
      generateArticleSchema({ ...article, url: `${SITE_URL}${path}` }),
    );
  return (
    <>
      <JsonLd data={schemas} />
      <Box
        w="full"
        bg="white"
        color="blackAlpha.700"
        py={5}
        borderBottom="1px solid"
        borderColor="blackAlpha.200"
      >
        <Frame wide>
          <Flex
            as="nav"
            aria-label="Caminho da página"
            gap={3}
            wrap="wrap"
            fontSize="sm"
          >
            {crumbs.map((crumb, index) => (
              <Flex key={crumb.item} gap={3} align="center">
                {index > 0 && <span aria-hidden="true">/</span>}
                <Link
                  href={crumb.item}
                  aria-current={
                    index === crumbs.length - 1 ? "page" : undefined
                  }
                >
                  {crumb.name}
                </Link>
              </Flex>
            ))}
          </Flex>
        </Frame>
      </Box>
    </>
  );
}
