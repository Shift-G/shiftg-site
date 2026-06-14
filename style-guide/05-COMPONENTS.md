# 05 — Componentes

## Hierarquia de Componentes

```
src/components/
├── layout/
│   ├── page.tsx          # Wrapper mínimo (Box minH="100vh" bg="bg")
│   ├── navbar.tsx        # Navbar sticky + MegaMenu + Mobile Drawer
│   ├── footer.tsx        # Footer 4 colunas + rodapé compliance
│   └── section.tsx       # Wrapper de seção com título/subtítulo
├── sections/
│   ├── hero-home.tsx     # Hero principal da home
│   ├── hero.tsx          # Hero genérico para subpáginas
│   ├── ecosystem-section.tsx
│   ├── products-section.tsx
│   ├── pillars-section.tsx
│   ├── method-section.tsx
│   ├── identity-section.tsx
│   ├── team-section.tsx
│   ├── cta-final-section.tsx
│   ├── cta-section.tsx
│   ├── about-section.tsx
│   ├── faq-section.tsx
│   ├── philosophy-section.tsx
│   ├── process-section.tsx
│   ├── product-slider.tsx
│   ├── services-section.tsx
│   └── transformation-section.tsx
├── cards/
│   ├── feature-card.tsx
│   ├── service-card.tsx
│   ├── solution-card.tsx
│   ├── use-case-card.tsx
│   ├── job-card.tsx
│   ├── leader-card.tsx
│   └── process-step.tsx
├── forms/
│   └── (formulários de contato)
├── ui/
│   ├── animated-element.tsx
│   ├── client-only.tsx
│   ├── color-mode.tsx
│   ├── gradient-bars.tsx
│   ├── plumb.tsx
│   ├── provider.tsx
│   └── toaster.tsx
└── animated-beam.tsx
```

---

## Botão

### Recipe base
```tsx
// Todas as instâncias:
borderRadius: "none"     // ⭐ Cantos retos SEMPRE
fontFamily: "heading"    // DM Sans
fontWeight: "medium"

// Sizes disponíveis: 2xs, xs, sm, md (padrão), lg, xl, 2xl
// Variants: solid (padrão), subtle, surface, outline, ghost, plain
```

### Botão CTA primário (padrão do site)
```tsx
<Button
  bg="fg"                 // Fundo preto (ou "blue.solid" para variante azul)
  color="white"
  rounded="none"          // Sempre cantos retos
  px={8}
  h="48px"
  fontWeight={700}
  fontSize="sm"
  fontFamily="mono"       // Monospace nos botões da navbar/CTA
  textTransform="uppercase"
  _hover={{ bg: "blue.solid" }}  // Hover muda para azul
>
  Fale Conosco
</Button>
```

### Botão CTA azul (hero, CTA sections)
```tsx
<Box
  asChild                 // ⭐ Padrão: usa asChild com Link do Next.js
  display="inline-flex"
  alignItems="center"
  gap="9px"
  bg="blue.solid"
  color="white"
  px={{ base: 6, md: "30px" }}
  py={{ base: 4, md: "15px" }}
  fontWeight={600}
  fontSize="sm"
  textDecoration="none"
  transition="all 0.22s"
  _hover={{ opacity: 0.88, transform: "translateY(-2px)" }}
>
  <Link href="/contato">
    Iniciar a transformação
    <ArrowRight size={14} />
  </Link>
</Box>
```

### Botão Mobile (full width)
```tsx
<Button
  bg="fg"
  color="white"
  size="lg"
  width="full"
  rounded="none"
  fontWeight={700}
  fontFamily="mono"
  textTransform="uppercase"
  _hover={{ bg: "blue.solid" }}
>
  Fale Conosco
</Button>
```

---

## Navbar

### Estrutura
```
[Logo SVG] [OPERAÇÕES ▼] [INTELIGÊNCIA ▼] [MATRIZ ▼] | [FALE CONOSCO]
```

### Propriedades
- **Position**: sticky, top: 0, z-index: 1100
- **Background**: white
- **Altura**: 64px (mobile) / 80px (desktop)
- **Borda inferior**: 1px solid blackAlpha.200
- **Container**: maxW="7xl"

### Items de menu desktop
```tsx
<Button
  variant="ghost"
  h="full"              // Preenche toda a altura da navbar
  rounded="none"
  px={6}
  fontSize="sm"
  fontWeight={700}
  fontFamily="mono"
  textTransform="uppercase"
  // Estado normal: color="fg", bg="transparent"
  // Hover: color="blue.solid", bg="stone"
  // Ativo: color="white", bg="blue.solid"
/>
```

### MegaMenu
- **Position**: fixed, top: 64/80px, left: 0, right: 0
- **Background**: white
- **Borda**: borderBottom 1px solid blackAlpha.200
- **Padding**: py 6 (mobile) / 12 (desktop)
- **Layout**: 3 colunas (contexto esquerdo + grid items + items secundários)
- **Trigger**: `onMouseEnter` / `onMouseLeave`

---

## Footer

### Estrutura
```
[Marca/Descrição | Soluções | Institucional | Contato]
─────────────────────────────────────────────────────
[© 2026 SHIFT+G... | Privacy | TOS | LinkedIn | Instagram]
```

### Propriedades
- **Background**: `off` (#f4f4f1)
- **Borda superior**: 1px solid blackAlpha.200
- **Grid**: `templateColumns={{ base: "1fr", lg: "2fr 1fr 1fr 1.5fr" }}`
- **Separadores**: borderRight 1px solid blackAlpha.200 (entre colunas)
- **Rodapé**: bg="white", borderTop 1px solid blackAlpha.200

### Padrão de label de coluna
```tsx
<Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle" mb={6} textTransform="uppercase">
  NOME DA COLUNA
</Text>
```

### Padrão de link de coluna
```tsx
<ChakraLink asChild fontSize="sm" fontWeight={500} color="fg" _hover={{ color: "blue.solid" }} transition="all 0.2s">
  <Link href="/path">Label do link</Link>
</ChakraLink>
```

---

## Section

### Componente wrapper reusável
```tsx
<Box as="section" py={{ base: 12, md: 16 }} id="section-id">
  <Container maxW="7xl" position="relative" zIndex={1}>
    {/* Título + Subtítulo opcionais */}
    <VStack gap={{ base: 4, md: 0 }} mb={{ base: 4, md: 12 }}>
      <Heading as="h2" size={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="400" color="fg">
        Título
      </Heading>
      <Text fontSize={{ base: "xl", md: "2xl" }} color="fg.muted">
        Subtítulo
      </Text>
    </VStack>
    {children}
  </Container>
</Box>
```

### Variantes de Section
| Variant | Background |
|---|---|
| `default` | Customizável via prop bg |
| `gradient` | linear-gradient com blue.500/5 |
| `glass` | whiteAlpha.50 + backdropFilter blur |
| `geometric` | Background + elementos circulares flutuantes |

---

## Cards

### Padrão de Card (Neo-brutalist)
```tsx
<VStack
  align="flex-start"
  bg="white"
  px={{ base: 6, md: 8 }}
  py={{ base: 8, md: 10 }}
  transition="background 0.2s"
  _hover={{ bg: "#fafaf8" }}
  // SEM sombra, SEM border-radius
>
  {/* Acento gold opcional */}
  <Box position="absolute" top={0} left={8} right={8} h="3px"
    bgGradient="to-r" gradientFrom="transparent" gradientVia="gold.500" gradientTo="transparent" opacity={0.35}
  />
  {/* Label monospace */}
  <HStack fontFamily="mono" fontSize="2xs" fontWeight={600} letterSpacing="0.18em" textTransform="uppercase" color="gold.500" gap={2}>
    <Text opacity={0.5}>—</Text>
    <Text>Categoria</Text>
  </HStack>
  {/* Título */}
  <Text fontSize={{ base: "md", md: "lg" }} fontWeight={700} color="fg">Título</Text>
  {/* Descrição */}
  <Text fontSize="sm" color="fg.muted" lineHeight={1.78}>Descrição</Text>
</VStack>
```

---

## Badge

```tsx
<Badge
  variant="solid"
  bg="fg"             // Fundo preto
  color="white"
  rounded="none"      // ⭐ Sempre cantos retos
  px={1}
  fontSize="2xs"
  fontFamily="mono"   // ⭐ Sempre monospace
>
  LABEL
</Badge>
```

---

## Ícones

- **Biblioteca**: `lucide-react`
- **Tamanho padrão**: 18-20px
- **Cor padrão**: `blue.solid` (quando é destaque) ou `fg.muted` (quando é decorativo)
- **Uso em menus/cards**: `size={20}` com `color="blue.solid"`
- **Uso em CTAs**: `size={14}` com `ArrowRight`

```tsx
import { ArrowRight, Cpu, Activity, HardDrive } from "lucide-react";

// Em cards/menus
<Box color="blue.solid"><Cpu size={20} /></Box>

// Em botões CTA
<ArrowRight size={14} />
```

---

## Micro-detalhes visuais

### Quadrado de cor (indicator dot)
```tsx
<Box w="6px" h="6px" bg="blue.solid" />  // ou bg="gold.500"
```

### Linha horizontal decorativa
```tsx
<Box w="22px" h="1px" bg="blue.solid" />
```

### Dash decorativo
```tsx
<Text opacity={0.5}>—</Text>
```

### Stage dots (progress indicator)
```tsx
<HStack gap="5px">
  <Box w="6px" h="6px" bg="gold.500" />     {/* done */}
  <Box w="6px" h="6px" bg="gold.500" />     {/* done */}
  <Box w="6px" h="6px" bg="blue.solid" transform="scale(1.3)" /> {/* active */}
  <Box w="6px" h="6px" bg="fg.subtle" />     {/* default */}
  <Box w="6px" h="6px" bg="fg.subtle" />     {/* default */}
</HStack>
```
