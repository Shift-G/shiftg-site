# 04 — Espaçamento, Layout & Grid

## Breakpoints

| Token | Valor | Uso |
|---|---|---|
| `sm` | 480px | Mobile grande |
| `md` | 768px | Tablet |
| `lg` | 1280px | Desktop |
| `xl` | 1536px | Desktop largo |

---

## Escala de Espaçamento

Baseada em múltiplos de 0.25rem (4px).

| Token | Rem | Px | Uso comum |
|---|---|---|---|
| `0.5` | 0.125rem | 2px | Micro gaps |
| `1` | 0.25rem | 4px | — |
| `1.5` | 0.375rem | 6px | — |
| `2` | 0.5rem | 8px | Gap mínimo entre ícones/texto |
| `2.5` | 0.625rem | 10px | — |
| `3` | 0.75rem | 12px | Padding interno mínimo |
| `3.5` | 0.875rem | 14px | — |
| `4` | 1rem | 16px | ⭐ Padding interno padrão (mobile) |
| `4.5` | 1.125rem | 18px | — |
| `5` | 1.25rem | 20px | — |
| `6` | 1.5rem | 24px | ⭐ Padding interno padrão (cards) |
| `7` | 1.75rem | 28px | — |
| `8` | 2rem | 32px | ⭐ Padding de seção (mobile) |
| `10` | 2.5rem | 40px | ⭐ Padding de seção (desktop) |
| `12` | 3rem | 48px | Padding grande de seção |
| `14` | 3.5rem | 56px | — |
| `16` | 4rem | 64px | ⭐ py de seção (mobile) |
| `20` | 5rem | 80px | ⭐ py de seção (desktop) |
| `24` | 6rem | 96px | Padding extra grande |
| `28` | 7rem | 112px | — |
| `32` | 8rem | 128px | — |

---

## Container

```tsx
<Container maxW="7xl"> {/* = 80rem = 1280px */}
  {children}
</Container>
```

- **Largura máxima**: `7xl` (1280px) para a maioria das seções
- **Padding horizontal**: Gerenciado via `px` nas seções, **NÃO** no container
  - Mobile: `px={{ base: 6 }}` (24px)
  - Desktop: `px={{ md: "60px" }}` ou `px={{ lg: "112px" }}`

---

## Grid Patterns

### 1. Grid de 1px gap (Neo-brutalist)
O padrão mais característico do site. Elementos separados por 1px usando `bg` de background.

```tsx
<VStack align="stretch" gap={0} border="1px solid" borderColor="blackAlpha.200" bg="blackAlpha.200">
  <SimpleGrid columns={{ base: 1, md: 2 }} gap="1px">
    {items.map(item => (
      <Box bg="white" p={6}>{/* conteúdo */}</Box>
    ))}
  </SimpleGrid>
</VStack>
```

### 2. Grid de seção padrão
```tsx
<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="2px">
  {items.map(item => <Card />)}
</Grid>
```

### 3. Footer Grid
```tsx
<Grid templateColumns={{ base: "1fr", lg: "2fr 1fr 1fr 1.5fr" }}>
  <Box borderRight={{ lg: "1px solid" }} borderColor="blackAlpha.200">Col 1</Box>
  <Box borderRight={{ lg: "1px solid" }} borderColor="blackAlpha.200">Col 2</Box>
  <Box borderRight={{ lg: "1px solid" }} borderColor="blackAlpha.200">Col 3</Box>
  <Box>Col 4</Box>
</Grid>
```

### 4. Layout Flex 2 colunas
```tsx
<Flex
  direction={{ base: "column", lg: "row" }}
  gap={{ base: 7, lg: "80px" }}
  align={{ base: "flex-start", lg: "flex-end" }}
>
  <Box flex={1}>{/* Título */}</Box>
  <Text flex={1}>{/* Descrição */}</Text>
</Flex>
```

---

## Section Spacing Patterns

### Seção padrão
```tsx
<Box as="section" py={{ base: 16, md: "90px" }} px={{ base: 6, md: "60px" }}>
  {children}
</Box>
```

### Seção com Container
```tsx
<Box as="section" py={{ base: 12, md: 16 }}>
  <Container maxW="7xl">
    {children}
  </Container>
</Box>
```

### Hero (full viewport)
```tsx
<Box
  as="section"
  minH="calc(100vh - 80px)"
  display="flex"
  flexDirection="column"
  justifyContent="flex-end"
  px={{ base: 6, md: "60px", lg: "112px" }}
>
  {children}
</Box>
```

### CTA Final
```tsx
<Box
  as="section"
  py={{ base: 20, md: "120px" }}
  px={{ base: 6, md: "60px" }}
  textAlign="center"
>
  {children}
</Box>
```

---

## Separadores

### Borda padrão
```tsx
borderBottom="1px solid" borderColor="blackAlpha.200"
```

### Borda interna (entre colunas de grid)
```tsx
borderRight={{ lg: "1px solid" }} borderColor="blackAlpha.200"
```

### Separador de conteúdo (Plumb)
Componente `<Plumb />` — uma linha horizontal de 1px com triângulo dourado centralizado.
```tsx
<Box h="1px" bg="blackAlpha.100" mx={{ base: 6, md: "60px" }} position="relative">
  <Text position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)"
    fontSize="8px" color="gold.500" opacity={0.5} bg="off" px={2}>
    ▼
  </Text>
</Box>
```

---

## Navbar

| Propriedade | Valor |
|---|---|
| Position | `sticky`, top: 0 |
| Z-index | 1100 |
| Background | `white` |
| Altura | `64px` (mobile) / `80px` (desktop) |
| Border | `borderBottom="1px solid" borderColor="blackAlpha.200"` |
| Container | `maxW="7xl"` |

---

## Border Radius

O SHIFT+G usa predominantemente `rounded="none"` (cantos retos) no estilo neo-brutalist.

| Token | Rem | Uso |
|---|---|---|
| `none` | 0 | ⭐ **Padrão para botões, badges, cards, inputs** |
| `2xs` | 0.0625rem | — |
| `xs` | 0.125rem | Micro-detalhes |
| `sm` | 0.25rem | — |
| `md` | 0.375rem | — |
| `lg` | 0.5rem | Exceção para ícone containers |
| `xl` | 0.75rem | — |
| `2xl` | 1rem | Cards de legacy components |
| `3xl` | 1.5rem | — |
| `4xl` | 2rem | — |
| `full` | 9999px | Dots, avatares circulares |

**Regra**: Na estética atual do site, a maioria dos componentes usa `rounded="none"`. Cantos arredondados são exceção.

---

## Z-Index Scale

| Token | Valor | Uso |
|---|---|---|
| `hide` | -1 | Elementos escondidos |
| `base` | 0 | — |
| `docked` | 10 | Sidebars fixas |
| `dropdown` | 1000 | Dropdowns |
| `sticky` | 1100 | ⭐ Navbar sticky |
| `banner` | 1200 | ⭐ Mega menu |
| `overlay` | 1300 | Overlays |
| `modal` | 1400 | Modais |
| `popover` | 1500 | Popovers |
| `toast` | 1700 | Toasts |
| `tooltip` | 1800 | Tooltips |
