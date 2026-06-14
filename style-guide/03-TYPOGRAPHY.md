# 03 — Tipografia

## Famílias de Fontes

O sistema tipográfico da SHIFT+G usa **3 famílias + 1 monospace** com propósitos muito específicos.

### Fonte principal: DM Sans

```
Token: fonts.heading / fonts.body
Valor: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
Pesos carregados: 100, 200, 300, 400, 500, 600, 700, 800, 900
Pacote: @fontsource/dm-sans
```

**Uso**: Todo texto body, headings, botões, navegação. É a fonte dominante do site.

### Fonte de destaque: DM Serif Display

```
Token: fonts.serif
Valor: "DM Serif Display", Georgia, serif
Pesos carregados: 400, 400-italic
Pacote: @fontsource/dm-serif-display
```

**Uso**: Exclusivamente para **palavras ou frases em itálico** dentro de headings. Cria contraste elegante. Sempre usada com `fontStyle="italic"` e `fontWeight={400}`.

```tsx
// Exemplo de uso em heading
<Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="blue.solid">
  o próximo
</Text>
```

### Fonte monospace: Geist Mono

```
Token: fonts.mono
Valor: "Geist Mono Variable", "Geist Mono", "Courier New", monospace
Pacote: @fontsource-variable/geist-mono
```

**Uso**: Labels técnicos, badges, subtítulos de seções, metadados, footer labels, navbar items, código.

```tsx
// Padrão de label monospace (aparece MUITO no site)
<Text 
  fontFamily="mono" 
  fontSize="2xs" 
  fontWeight={600} 
  letterSpacing="0.16em"
  textTransform="uppercase"
  color="blue.solid"
>
  LABEL DE SEÇÃO
</Text>
```

### Fonte auxiliar: Rubik (carregada mas pouco usada)
```
Pacote: @fontsource/rubik
Nota: Carregada no layout mas DM Sans é a fonte padrão. 
Pode ser usada como fallback ou para projetos secundários.
```

---

## Tamanhos de Fonte

| Token | Rem | Px | Uso |
|---|---|---|---|
| `2xs` | 0.625rem | 10px | Micro-labels, badges monospace, meta |
| `xs` | 0.75rem | 12px | Labels pequenos, footer links, timestamps |
| `sm` | 0.875rem | 14px | Texto body secundário, botões, menu items |
| `md` | 1rem | 16px | ⭐ **Texto body padrão** |
| `lg` | 1.125rem | 18px | Texto body grande, card titles |
| `xl` | 1.25rem | 20px | Subtítulos pequenos |
| `2xl` | 1.5rem | 24px | Subtítulos, card headings |
| `3xl` | 1.875rem | 30px | Section headings mobile |
| `4xl` | 2.25rem | 36px | Section headings |
| `5xl` | 3rem | 48px | Page headings |
| `6xl` | 3.75rem | 60px | Hero headings mobile |
| `7xl` | 4.5rem | 72px | Hero headings desktop |
| `8xl` | 6rem | 96px | Display type |
| `9xl` | 8rem | 128px | Display type extra |

---

## Pesos de Fonte

| Token | Valor | Uso |
|---|---|---|
| `thin` | 100 | — |
| `extralight` | 200 | — |
| `light` | 300 | — |
| `normal` | 400 | ⭐ Body text, serif italic highlights |
| `medium` | 500 | ⭐ Links, textos de destaque sutil |
| `semibold` | 600 | ⭐ Labels monospace, subtítulos |
| `bold` | 700 | ⭐ **Headings, botões, navbar items, card titles** |
| `extrabold` | 800 | ⭐ **Hero headings, section títulos principais** |
| `black` | 900 | Uso excepcional |

---

## Estilos de Texto (text-styles)

| Token | Font Size | Line Height | Letter Spacing | Uso |
|---|---|---|---|---|
| `2xs` | 2xs | 0.75rem | — | Micro-labels |
| `xs` | xs | 1rem | — | Labels |
| `sm` | sm | 1.25rem | — | Body small |
| `md` | md | 1.5rem | — | Body padrão |
| `lg` | lg | 1.75rem | — | Body large |
| `xl` | xl | 1.875rem | — | Subtítulos |
| `2xl` | 2xl | 2rem | — | Headings pequenos |
| `3xl` | 3xl | 2.375rem | — | Headings |
| `4xl` | 4xl | 2.75rem | -0.025em | ⭐ Section headings |
| `5xl` | 5xl | 3.75rem | -0.025em | Page headings |
| `6xl` | 6xl | 4.5rem | -0.025em | Hero headings |
| `7xl` | 7xl | 5.75rem | -0.025em | Display |

---

## Line Heights

| Token | Valor | Uso |
|---|---|---|
| `shorter` | 1.25 | Headings display |
| `short` | 1.375 | Headings padrão |
| `moderate` | 1.5 | Body padrão |
| `tall` | 1.625 | Body com respiro |
| `taller` | 2 | Listas, itens espaçados |

---

## Letter Spacings

| Token | Valor | Uso |
|---|---|---|
| `tighter` | -0.05em | Display headings |
| `tight` | -0.025em | Headings 4xl+ |
| `wide` | 0.025em | — |
| `wider` | 0.05em | — |
| `widest` | 0.1em | Labels monospace uppercase |

### Letter spacings customizados (hardcoded em componentes)
- **Labels monospace**: `0.13em` a `0.18em` (mais aberto que `widest`)
- **Hero headings**: `-2px` a `-3px` (tracking muito apertado)
- **Section headings**: `-1px` a `-1.5px`

---

## Padrões Tipográficos Recorrentes

### 1. Hero Heading (maior visibilidade)
```tsx
<Heading
  as="h1"
  fontSize={{ base: "42px", md: "clamp(54px, 7.8vw, 116px)" }}
  lineHeight={0.94}
  letterSpacing="-2px"
  color="fg"
  fontWeight={800}
>
  Texto <Text as="span" fontFamily="serif" fontStyle="italic" color="blue.solid">destaque</Text>
</Heading>
```

### 2. Section Heading
```tsx
<Text
  as="h2"
  fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
  fontWeight={800}
  lineHeight={1.04}
  letterSpacing="-1.5px"
  color="fg"
>
  Título. <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="gray.emphasized">
    Subtítulo elegante.
  </Text>
</Text>
```

### 3. Label Monospace (subtitle de seção)
```tsx
<HStack fontFamily="mono" fontSize="2xs" fontWeight={600} letterSpacing="0.16em" textTransform="uppercase" color="blue.solid" gap={3}>
  <Box w="22px" h="1px" bg="blue.solid" />
  <Text>Nome da seção</Text>
  <Box w="22px" h="1px" bg="blue.solid" />
</HStack>
```

### 4. Label Monospace (footer / nav)
```tsx
<Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle" textTransform="uppercase">
  NOME DO BLOCO
</Text>
```

### 5. Body Text
```tsx
<Text fontSize="md" color="fg.muted" lineHeight={1.85}>
  Descrição com respiro adequado.
</Text>
```

### 6. Badge Monospace
```tsx
<Badge variant="solid" bg="fg" color="white" rounded="none" px={1} fontSize="2xs" fontFamily="mono">
  TEXTO
</Badge>
```

---

## Regras Rígidas de Tipografia

```
✅ DM Sans para body e headings
✅ DM Serif Display APENAS para destaques itálicos em headings
✅ Geist Mono para labels técnicos, metadados, badges
✅ Headings grandes com letterSpacing negativo (-1px a -3px)
✅ Labels monospace SEMPRE em uppercase com letterSpacing 0.13em+

❌ NUNCA misturar serif no body text
❌ NUNCA usar fontes não cadastradas no tema
❌ NUNCA usar DM Serif Display sem italic
❌ NUNCA usar fontWeight > 400 com DM Serif Display
```
