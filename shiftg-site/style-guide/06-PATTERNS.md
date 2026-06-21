# 06 — Padrões de Composição

## Estrutura de Página

```tsx
// Padrão obrigatório para todas as páginas
export default function NomeDaPagina() {
  return (
    <Page>
      <Navbar />
      <VStack gap={0} w="full" as="main" align="stretch">
        {/* Hero */}
        <HeroSection />
        {/* Sections */}
        <SectionA />
        <SectionB />
        {/* CTA Final */}
        <CTAFinalSection />
      </VStack>
      <Footer />
    </Page>
  );
}
```

---

## Padrão de Hero

### Hero principal (Home)
- Ocupa quase toda a viewport: `minH="calc(100vh - 80px)"`
- Conteúdo alinhado ao bottom: `justifyContent="flex-end"`
- Fundo branco puro
- Inclui: stage dots, label monospace, heading com serif italic, barra inferior com CTA

### Hero de subpágina
- Menor que o hero home
- Padrão: `py={{ base: 16, md: 24 }}`
- Label monospace + Heading + Subtítulo

---

## Padrão de Heading de Seção

### Estilo 1: Heading + itálico serif (mais usado)
```tsx
<Text
  as="h2"
  fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
  fontWeight={800}
  lineHeight={1.04}
  letterSpacing="-1.5px"
  color="fg"
>
  Parte forte.
  <br />
  <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="gray.emphasized">
    Parte elegante.
  </Text>
</Text>
```

### Estilo 2: Heading com destaque azul
```tsx
<Text as="h2" fontSize={...} fontWeight={800} color="fg">
  Texto normal
  <br />
  <Text as="span" color="blue.solid">
    Texto azul destaque.
  </Text>
</Text>
```

### Estilo 3: Label + Heading + Descrição (3 elementos)
```tsx
{/* 1. Label monospace */}
<HStack fontFamily="mono" fontSize="2xs" fontWeight={600}
  letterSpacing="0.16em" textTransform="uppercase" color="blue.solid" gap={3}>
  <Box w="22px" h="1px" bg="blue.solid" />
  <Text>Próximo passo</Text>
  <Box w="22px" h="1px" bg="blue.solid" />
</HStack>

{/* 2. Heading */}
<Text as="h2" fontSize={{ base: "40px", md: "clamp(44px, 6vw, 88px)" }}
  fontWeight={800} lineHeight={0.93} letterSpacing="-3px" color="fg">
  Título principal
</Text>

{/* 3. Descrição */}
<Text fontSize="md" color="fg.muted" lineHeight={1.82}>
  Subtítulo explicativo.
</Text>
```

---

## Padrão de Seção Header (flex 2 colunas)

Muito usado para introduzir uma seção com título à esquerda e descrição à direita:

```tsx
<Flex
  direction={{ base: "column", lg: "row" }}
  gap={{ base: 7, lg: "80px" }}
  align={{ base: "flex-start", lg: "flex-end" }}
  mb={{ base: 10, md: 14 }}
>
  <Box flex={1}>
    <Text as="h2" ...>Título</Text>
  </Box>
  <Text flex={1} fontSize="md" color="fg.muted" lineHeight={1.9}>
    Descrição da seção.
  </Text>
</Flex>
```

---

## Padrão de Alternância de Background

As seções alternam entre backgrounds para criar ritmo visual:

```
white → off → white → off → white
```

| Seção | Background |
|---|---|
| Hero | `white` |
| Plumb (separador) | — |
| Ecossistema | `white` |
| Produtos | `off` (#f4f4f1) |
| Pilares | `off` (cards brancos dentro) |
| Método | `white` |
| Identidade | `off` |
| Time | `white` |
| CTA Final | `white` |
| Footer | `off` (rodapé `white`) |

---

## Padrão CTA

### CTA Button (inline, sem background)
```tsx
<Box asChild display="inline-flex" alignItems="center" gap="9px"
  bg="blue.solid" color="white"
  px={{ base: 6, md: "30px" }} py={{ base: 4, md: "15px" }}
  fontWeight={600} fontSize="sm" textDecoration="none"
  transition="all 0.22s"
  _hover={{ opacity: 0.88, transform: "translateY(-2px)" }}
>
  <Link href="/contato">
    Call-to-action text
    <ArrowRight size={14} />
  </Link>
</Box>
```

### CTA Section (full-width centered)
```tsx
<Box as="section" py={{ base: 20, md: "120px" }} textAlign="center" bg="white">
  <VStack gap={{ base: 5, md: 6 }}>
    {/* Label monospace centralizado */}
    {/* Heading com serif italic */}
    {/* Descrição */}
    {/* Botão CTA */}
  </VStack>
</Box>
```

---

## Padrão de Grid de Cards

### Grid com separador de 1px (mega menu style)
```tsx
<VStack align="stretch" gap={0} border="1px solid" borderColor="blackAlpha.200" bg="blackAlpha.200">
  <SimpleGrid columns={{ base: 1, md: 2 }} gap="1px">
    {items.map(item => (
      <Box bg="white" p={6} _hover={{ bg: "stone" }} transition="background 0.2s">
        <HStack gap={4} align="flex-start">
          <Box color="blue.solid"><Icon size={20} /></Box>
          <VStack gap={1} align="flex-start">
            <Text fontWeight={700} color="fg">{item.title}</Text>
            <Text color="fg.muted" fontSize="sm">{item.description}</Text>
          </VStack>
        </HStack>
      </Box>
    ))}
  </SimpleGrid>
</VStack>
```

### Grid simples (3 colunas)
```tsx
<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="2px">
  {items.map(item => <Card key={item.id} {...item} />)}
</Grid>
```

---

## Links

### Link no footer/nav
```tsx
<ChakraLink asChild fontSize="sm" fontWeight={500} color="fg"
  display="inline-flex" alignItems="center" gap={2}
  _hover={{ color: "blue.solid" }} transition="all 0.2s"
>
  <Link href="/path">Texto do link</Link>
</ChakraLink>
```

### Link institucional no rodapé
```tsx
<ChakraLink asChild fontFamily="mono" fontSize="2xs" color="fg.muted" textTransform="uppercase"
  _hover={{ color: "blue.solid" }} transition="color 0.2s"
>
  <Link href="/politica-de-privacidade">Data Privacy</Link>
</ChakraLink>
```

---

## SEO & Metadata Pattern

```tsx
export const metadata: Metadata = {
  title: `${SITE_NAME} — Título da Página`,
  description: "Descrição clara e impactante.",
  keywords: ["palavra1", "palavra2"],
  alternates: { canonical: `${SITE_URL}/path` },
  category: "technology",
  openGraph: {
    title: `${SITE_NAME} — Título`,
    description: "Descrição OG.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/path`,
    siteName: SITE_NAME,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Título`,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};
```

---

## Padrão de Imports

```tsx
// 1. Framework/React
import { Metadata } from "next";
import Link from "next/link";

// 2. Chakra UI
import { Box, Container, Flex, Grid, HStack, VStack, Text, Heading, Button, Image } from "@chakra-ui/react";

// 3. Ícones
import { ArrowRight, Cpu, Activity } from "lucide-react";

// 4. Componentes internos
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";

// 5. Constantes
import { SITE_NAME, SITE_URL } from "@/constants";
```
