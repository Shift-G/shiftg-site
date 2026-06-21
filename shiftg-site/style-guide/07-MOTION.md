# 07 — Motion & Animações

## Filosofia de Animação

O SHIFT+G usa animações com **extrema moderação**. A filosofia é:

> Prefira ausência de animação a animação que distraia. O conteúdo é o protagonista.

### Regras
```
✅ Transições de propriedade (color, bg, opacity, transform) — curtas e sutis
✅ Hover effects sutis (translateY, opacity, bg change)
✅ Scroll-based fade-in (muito discreto)
✅ Animações de dados/progresso (barras, dots)

❌ NUNCA animações pesadas ou extravagantes
❌ NUNCA animações que bloqueiem interação
❌ NUNCA parallax complexo
❌ NUNCA bouncing ou efeitos de elasticidade exagerados
```

---

## Transições (inline)

### Padrão de transição CSS
```tsx
transition="all 0.2s"          // Genérico, curto
transition="all 0.22s"         // Padrão CTA
transition="background 0.2s"   // Cards hover
transition="color 0.2s"        // Links hover
transition="none"              // Navbar items (sem transição = neo-brutalist)
```

### Hover patterns
```tsx
// CTA Button
_hover={{ opacity: 0.88, transform: "translateY(-2px)" }}

// Card
_hover={{ bg: "stone" }}            // Mudança de background sutil
_hover={{ bg: "#fafaf8" }}          // Background quase imperceptível

// Link
_hover={{ color: "blue.solid" }}    // Mudança de cor

// Navbar button (sem transição!)
_hover={{ color: "blue.solid", bg: "stone" }}

// Logo
_hover={{ textDecoration: "none", opacity: 0.8 }}
```

---

## Duration Tokens

| Token | Valor | Uso |
|---|---|---|
| `fastest` | 50ms | Feedback instantâneo |
| `faster` | 100ms | Hover rápido |
| `fast` | 150ms | Transições curtas |
| `moderate` | 200ms | ⭐ **Transição padrão** |
| `slow` | 300ms | Transições de expansão |
| `slower` | 400ms | Animações suaves |
| `slowest` | 500ms | Animações longas |

---

## Easing Tokens

| Token | Valor | Uso |
|---|---|---|
| `ease-in` | cubic-bezier(0.42, 0, 1, 1) | Entrada suave |
| `ease-out` | cubic-bezier(0, 0, 0.58, 1) | Saída suave |
| `ease-in-out` | cubic-bezier(0.42, 0, 0.58, 1) | Transição bidirecional |
| `ease-in-smooth` | cubic-bezier(0.32, 0.72, 0, 1) | Entrada ultra-suave |

---

## Keyframes Disponíveis

### Utilitários básicos
| Nome | Descrição |
|---|---|
| `spin` | Rotação 360° contínua |
| `pulse` | Opacity pulsa a 50% |
| `ping` | Scale 2x com opacity 0 |
| `pop` | Scale 1→1.05→1 |
| `bounce` | TranslateY com bounce |

### Fade
| Nome | Descrição |
|---|---|
| `fade-in` | Opacity 0→1 |
| `fade-out` | Opacity 1→0 |

### Slide
| Nome | De | Para |
|---|---|---|
| `slide-from-top` | -0.5rem | 0 |
| `slide-from-bottom` | 0.5rem | 0 |
| `slide-from-left` | -0.5rem | 0 |
| `slide-from-right` | 0.5rem | 0 |
| `slide-to-*` | Inverso dos from | — |
| `slide-from-*-full` | -100%/100% | 0 |
| `slide-to-*-full` | 0 | -100%/100% |

### Scale
| Nome | Descrição |
|---|---|
| `scale-in` | Scale 0.95→1 |
| `scale-out` | Scale 1→0.95 |

### UI Components
| Nome | Descrição |
|---|---|
| `expand-height` | Height 0→var(--height) |
| `collapse-height` | Height var(--height)→0 |
| `circular-progress` | Stroke dash animation |
| `bg-position` | Background position shift |

---

## Animation Styles (Compostos)

| Nome | Combinação |
|---|---|
| `slide-fade-in` | slide-from-* + fade-in (direcional) |
| `slide-fade-out` | slide-to-* + fade-out (direcional) |
| `scale-fade-in` | scale-in + fade-in |
| `scale-fade-out` | scale-out + fade-out |

---

## Blur Tokens

| Token | Valor | Uso |
|---|---|---|
| `none` | " " | Sem blur |
| `sm` | 4px | Blur sutil |
| `md` | 8px | Blur moderado |
| `lg` | 12px | Blur padrão |
| `xl` | 16px | Blur forte |
| `2xl` | 24px | — |
| `3xl` | 40px | — |
| `4xl` | 64px | Blur máximo |

---

## Componente GradientBars (motion)

Barras animadas no background de seções. Usa `motion/react` (Framer Motion).

```tsx
// Uso restrito a fundos decorativos
<GradientBars bars={20} colors={["colors.blue.500", "transparent"]} />
```

Anima `scaleY` e `opacity` com `repeat: Infinity` e `repeatType: "mirror"`.

---

## Regras para IAs ao implementar animações

```
1. NÃO adicionar animações por padrão. O site é estático-first.
2. Transições de hover são OK (0.2s, propriedade específica).
3. Fade-in no scroll é OK se muito sutil (opacity 0→1, 0.4s).
4. NUNCA usar motion/framer-motion em componentes novos sem aprovação.
5. NUNCA animar layout shifts (width, height, margin, padding).
6. NUNCA usar animações de entrada em texto/headings.
7. O Plumb (▼) pode pulsar mas não é obrigatório.
```
