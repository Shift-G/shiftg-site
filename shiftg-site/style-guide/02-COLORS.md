# 02 — Paleta de Cores

## Cor Primária: Azul SHIFT+G

O azul é a cor dominante da marca. Usado para CTAs, links, ícones, destaques e elementos de interação.

### Escala Blue

| Token | HEX | Uso |
|---|---|---|
| `blue.50` | `#ebedff` | Backgrounds muito sutis, seleções |
| `blue.100` | `#dadeff` | Hover backgrounds |
| `blue.200` | `#b1baff` | Bordas muted |
| `blue.300` | `#8a99ff` | Textos decorativos claros |
| `blue.400` | `#5a74ff` | Interações hover |
| `blue.500` | `#0051FF` | ⭐ **Azul primário de marca** |
| `blue.600` | `#003fcd` | ⭐ **Usado em SVG logo, `blue.solid` semântico** |
| `blue.700` | `#0030a2` | Texto sobre fundo claro |
| `blue.800` | `#002074` | Texto escuro azulado |
| `blue.900` | `#00134e` | Fundo escuro de gradiente |
| `blue.950` | `#000934` | Fundo extremamente escuro |

**Referência rápida para IAs**:
- `blue.solid` = `#003fcd` (light) / `#003fcd` (dark) — **Use para: CTAs, links, ícones, badge accent**
- `blue.fg` = `#0030a2` (light) / `#8a99ff` (dark) — **Use para: textos em contexto azul**
- `blue.subtle` = `#dadeff` (light) / `#00134e` (dark) — **Use para: backgrounds sutis**

---

## Cor Secundária: Gold

Usada para acentos, virtudes, indicadores de progresso e detalhes refinados.

| Token | HEX | Uso |
|---|---|---|
| `gold.50` | `#faf6eb` | Background sutil |
| `gold.100` | `#f2e9cd` | — |
| `gold.200` | `#e5d49e` | — |
| `gold.300` | `#d4b96b` | — |
| `gold.400` | `#c4a04a` | — |
| `gold.500` | `#b8923a` | ⭐ **Acento gold** — usado em "virtudes", plumb, stage dots, indicadores |
| `gold.600` | `#9a7a30` | — |
| `gold.700` | `#7c6227` | — |
| `gold.800` | `#5e4a1d` | — |
| `gold.900` | `#403214` | — |
| `gold.950` | `#201909` | — |

---

## Neutros: Preto & Branco

| Token | HEX | Uso |
|---|---|---|
| `black` | `#09090B` | ⭐ Texto principal (`fg` em light mode) |
| `white` | `#FFFFFF` | ⭐ Background principal (`bg` em light mode) |

---

## Cores de fundo especiais

| Token | HEX | Uso |
|---|---|---|
| `off` | `#f4f4f1` | ⭐ **Background alternativo** — sections alternadas, footer bg |
| `stone` | `#eceae4` | ⭐ **Hover background** — menu items, cards, mega menu |

---

## Escala Gray (tom azulado)

Os grays do SHIFT+G têm uma sutil tonalidade azulada, nunca neutro puro.

| Token | HEX |
|---|---|
| `gray.50` | `#eef1f8` |
| `gray.100` | `#e0e5f3` |
| `gray.200` | `#bdc9e7` |
| `gray.300` | `#9eb0dc` |
| `gray.400` | `#7d98d1` |
| `gray.500` | `#6181bd` |
| `gray.600` | `#4e689a` |
| `gray.700` | `#3d527b` |
| `gray.800` | `#2d3e5d` |
| `gray.900` | `#1c283e` |
| `gray.950` | `#151f32` |

---

## Cores de Status

| Cor | 500 HEX | Uso |
|---|---|---|
| `red` | `#FF0065` | Erros, alerts |
| `orange` | `#ff370a` | Warnings, badges "EM ALTA" |
| `green` | `#00FF9A` | Sucesso, confirmações |
| `yellow` | `#E5FF00` | Atenção (contraste em texto preto) |

---

## Transparências

### whiteAlpha
```
50: rgba(255, 255, 255, 0.04)
100: rgba(255, 255, 255, 0.06)
200: rgba(255, 255, 255, 0.08)
300: rgba(255, 255, 255, 0.16)
400: rgba(255, 255, 255, 0.24)
500: rgba(255, 255, 255, 0.36)
600: rgba(255, 255, 255, 0.48)
700: rgba(255, 255, 255, 0.64)
800: rgba(255, 255, 255, 0.80)
900: rgba(255, 255, 255, 0.92)
950: rgba(255, 255, 255, 0.95)
```

### blackAlpha (usada extensivamente para bordas e separadores)
```
50: rgba(0, 0, 0, 0.04)
100: rgba(0, 0, 0, 0.06)    ← Bordas muito sutis (seções internas)
200: rgba(0, 0, 0, 0.08)    ← ⭐ Bordas padrão (navbar, footer, grids)
300: rgba(0, 0, 0, 0.16)
400: rgba(0, 0, 0, 0.24)
500: rgba(0, 0, 0, 0.36)
600: rgba(0, 0, 0, 0.48)
700: rgba(0, 0, 0, 0.64)
800: rgba(0, 0, 0, 0.80)
900: rgba(0, 0, 0, 0.92)
950: rgba(0, 0, 0, 0.95)
```

---

## Glassmorphism (uso restrito)

| Token | Valor | Uso |
|---|---|---|
| `glass.white` | `rgba(255, 255, 255, 0.1)` | Overlays claros |
| `glass.blue` | `rgba(59, 130, 246, 0.1)` | Decoração geométrica |
| `glass.dark` | `rgba(15, 23, 42, 0.1)` | Overlays escuros |

---

## Tokens Semânticos (Light/Dark mode)

### Background
| Token | Light | Dark | Uso |
|---|---|---|---|
| `bg` | `white` | `#000` | Background principal da página |
| `bg.subtle` | `gray.50` | `gray.950` | Backgrounds alternados |
| `bg.muted` | `gray.100` | `gray.900` | Backgrounds de cards |
| `bg.emphasized` | `gray.200` | `gray.800` | Backgrounds com destaque |
| `bg.inverted` | `black` | `white` | Background invertido |
| `bg.panel` | `white` | `gray.950` | Painéis e modais |

### Foreground (texto)
| Token | Light | Dark | Uso |
|---|---|---|---|
| `fg` | `black (#09090B)` | `gray.50` | ⭐ **Texto principal** |
| `fg.muted` | `gray.600` | `gray.400` | ⭐ **Texto secundário/descrições** |
| `fg.subtle` | `gray.400` | `gray.500` | Labels, metadados, texto terciário |
| `fg.inverted` | `gray.50` | `black` | Texto sobre fundo escuro |

### Bordas
| Token | Light | Dark | Uso |
|---|---|---|---|
| `border` | `gray.200` | `gray.700` | Bordas padrão |
| `border.muted` | `gray.100` | `gray.900` | Bordas sutis |
| `border.subtle` | `gray.50` | `gray.950` | Bordas quase invisíveis |
| `border.emphasized` | `gray.300` | `gray.700` | Bordas com destaque |

---

## Gradiente principal

```css
/* Gradiente Blue (fundo de seções premium) */
linear-gradient(135deg, #0051FF 0%, #00134e 100%)
```

## Uso de cores na prática (Chakra props)

```tsx
// ⭐ Texto principal
<Text color="fg">Conteúdo principal</Text>

// ⭐ Texto secundário
<Text color="fg.muted">Descrição ou contexto</Text>

// ⭐ Labels monospace
<Text color="fg.subtle" fontFamily="mono" fontSize="2xs">LABEL</Text>

// ⭐ Acento azul (links, CTAs, ícones)
<Box color="blue.solid">Ícone ou texto de ação</Box>

// ⭐ Background alternado
<Box bg="off">Seção com fundo alternado</Box>

// ⭐ Hover state
<Box _hover={{ bg: "stone" }}>Card com hover</Box>

// ⭐ Bordas padrão
<Box borderBottom="1px solid" borderColor="blackAlpha.200">Elemento separado</Box>

// ⭐ Seleção de texto
*::selection { bg: "blue/10" }

// ⭐ Scrollbar customizada
::-webkit-scrollbar-thumb { background: "{colors.blue.500/30}" }
```
