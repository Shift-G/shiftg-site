"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Badge,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Product {
  title: string;
  description: string;
  badge?: string;
  image?: string;
  url?: string;
}

const products: Product[] = [

  {
    title: "SaaS para Sindicatos com IA Integrada",
    description:
      "Atendimento inteligente, automação e eficiência operacional — tudo em um único ambiente.",
    badge: "SAAS",
    image: "/images/products/somos-aliados-cover.png",
    url: "https://somosaliados.com.br/"
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <VStack
      asChild
      bg={{ base: "{colors.whiteAlpha.50}", _dark: "{colors.whiteAlpha.50}" }}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={{ base: "{colors.whiteAlpha.200}", _dark: "{colors.whiteAlpha.200}" }}
      rounded="xl"
      overflow="hidden"
      h="full"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        borderColor: "{colors.blue.500/30}",
        bg: { base: "{colors.whiteAlpha.100}", _dark: "{colors.whiteAlpha.100}" },
      }}
    >
      <Link href={product.url} target="_blank" rel="noopener noreferrer">
        {/* Image area */}
        <AspectRatio ratio={4 / 5} w="full">
          <Box
            bg="{colors.blue.500/10}"
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="lg"
          >
            {product.image ? (
              <Box
                as="img"
                // @ts-ignore
                src={product.image}
                alt={product.title}
                w="full"
                h="full"
                objectFit="cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <Text color="fg.muted" fontSize="xs">
                Imagem do produto
              </Text>
            )}
          </Box>
        </AspectRatio>

        {/* Content */}
        <VStack align="start" gap={3} p={{ base: 5, md: 6 }}>
          {product.badge && (
            <Badge
              colorPalette="blue"
              variant="subtle"
              fontSize="xs"
              px={2}
              py={1}
              rounded="md"
            >
              {product.badge}
            </Badge>
          )}

          <VStack align="start" gap={2}>
            <Heading as="h3" size="sm" color="fg" lineHeight="tight">
              {product.title}
            </Heading>
            <Text color="fg.muted" fontSize="sm" lineHeight="tall">
              {product.description}
            </Text>
          </VStack>
        </VStack>
      </Link>
    </VStack>
  );
}

export function ProductSlider() {
  return (
    <Box as="section" py={{ base: 12, md: 16 }}>
      <Container maxW="7xl">
        <VStack gap={{ base: 8, md: 10 }}>
          {/* Section header */}
          <VStack gap={3} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="fg"
            >
              Produtos
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }}>
              Soluções que entregam eficiência imediata.
            </Text>
          </VStack>

          {/* Slider */}
          <Box
            w="full"
            css={{
              "& .swiper": {
                paddingBottom: "3rem",
                overflow: "hidden",
              },
              "& .swiper-slide": {
                height: "auto",
              },
              "& .swiper-pagination": {
                bottom: "0",
              },
              "& .swiper-pagination-bullet": {
                background: "var(--chakra-colors-gray-200)",
                opacity: 1,
              },
              "& .swiper-pagination-bullet-active": {
                background: "var(--chakra-colors-blue-solid)",
              },
            }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 4,
                },
                768: {
                  slidesPerView: 1.2,
                  spaceBetween: 8,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
