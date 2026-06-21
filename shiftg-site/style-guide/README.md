# SHIFT+G — Design System & Style Guide

> **Versão**: 2.0 · **Atualizado em**: Junho 2026  
> **Framework UI**: Chakra UI v3 · **Framework Web**: Next.js 15 (App Router) · **Linguagem**: TypeScript  
> **Propósito**: Guia exaustivo de identidade visual e padrões de implementação para consumo por IAs e desenvolvedores.

---

## 📁 Índice

| Arquivo | Conteúdo |
|---|---|
| [01-BRAND.md](./01-BRAND.md) | Marca, logo, nome, posicionamento, arquétipos |
| [02-COLORS.md](./02-COLORS.md) | Paleta de cores, tokens, semânticos, gradientes |
| [03-TYPOGRAPHY.md](./03-TYPOGRAPHY.md) | Fontes, tamanhos, pesos, estilos de texto |
| [04-SPACING-LAYOUT.md](./04-SPACING-LAYOUT.md) | Grid, breakpoints, espaçamento, containers |
| [05-COMPONENTS.md](./05-COMPONENTS.md) | Componentes reutilizáveis, recipes, slots |
| [06-PATTERNS.md](./06-PATTERNS.md) | Padrões de seção, cards, hero, CTA, footer |
| [07-MOTION.md](./07-MOTION.md) | Animações, transições, keyframes |
| [08-VOICE-TONE.md](./08-VOICE-TONE.md) | Tom de voz, linguagem, arquétipos de marca |
| [09-ANTI-PATTERNS.md](./09-ANTI-PATTERNS.md) | O que NUNCA fazer |
| [10-LOGO-ASSETS.md](./10-LOGO-ASSETS.md) | Logos SVG, regras de uso, variantes |

---

## 🎯 Resumo Executivo

O design system da SHIFT+G é **neo-brutalist editorial** — minimalista, sem sombras, com tipografia forte, alto contraste e espaçamento generoso. Inspirado em interfaces de IA/tech de ponta: limpeza radical, precisão cirúrgica e conteúdo como protagonista.

### Palavras-chave do estilo visual
- **Neo-brutalist editorial** — bordas retas (`rounded="none"`), grids rígidos com `gap="1px"`
- **Sem sombras** — separação por bordas sutis (`blackAlpha.200`) e variação de `bg`
- **Tipografia como design** — DM Sans (body/heading), DM Serif Display (destaque itálico), Geist Mono (labels técnicos)
- **Alto contraste** — fundo branco (`#FFFFFF`) com texto preto (`#09090B`), azul primário (`#0051FF`)
- **Micro-detalhes** — quadrados de 6×6px coloridos, linhas de 1px, badges monospace

### Stack Técnica
- **React 19** + **Next.js 15** (App Router, Server Components por padrão)
- **Chakra UI v3** com sistema de tokens e recipes customizados
- **TypeScript** estrito
- **Motion** (Framer Motion fork) para animações pontuais
- **Lucide React** para ícones (18-20px)
- **Fontsource** para fontes self-hosted
