# 09 — Anti-Patterns (O que NUNCA fazer)

## Estilo Visual

### ❌ Box Shadows
```tsx
// PROIBIDO em qualquer componente
boxShadow="lg"
shadow="xl"
shadow="md"
// Exceção: shadow "inset" para scrollbar-thumb é OK
```
**Substituir por**: bordas de 1px (`borderColor="blackAlpha.200"`), variação de `bg`, espaçamento.

### ❌ Border Radius em elementos principais
```tsx
// PROIBIDO em botões, cards, badges, inputs
rounded="lg"
rounded="xl"
borderRadius="2xl"
```
**Padrão correto**: `rounded="none"`. Exceções: dots/avatares (`rounded="full"`), ícone containers em legacy components.

### ❌ Gradientes decorativos pesados
```tsx
// PROIBIDO
background: "linear-gradient(rainbow)"
bgGradient="to-r" gradientFrom="purple.500" gradientTo="pink.500"
```
**Permitido**: Gradiente blue sutil para fundos de seções premium, gradiente gold para acentos de 3px.

### ❌ Fundos ruidosos / padrões complexos
```tsx
// PROIBIDO
backgroundImage="url(noise.png)"
background: "repeating-linear-gradient(...)"
```

### ❌ Skeuomorphism
Nada de simulação de materiais reais (madeira, metal, vidro pesado).

---

## Tipografia

### ❌ Fontes não cadastradas
```tsx
// PROIBIDO
fontFamily="Arial"
fontFamily="Comic Sans"
fontFamily="Poppins"
```
**Usar apenas**: `"heading"` (DM Sans), `"serif"` (DM Serif Display), `"mono"` (Geist Mono)

### ❌ DM Serif Display sem italic
```tsx
// PROIBIDO
<Text fontFamily="serif">texto sem italic</Text>
<Text fontFamily="serif" fontWeight={700}>texto bold serif</Text>
```
**Correto**: `fontFamily="serif" fontWeight={400} fontStyle="italic"`

### ❌ Mistura de tipografias no body
```tsx
// PROIBIDO
<Text fontFamily="serif">Corpo de texto longo em serif</Text>
```
Serif é **APENAS** para spans de destaque dentro de headings.

### ❌ Espaçamentos aleatórios
```tsx
// PROIBIDO
<Box mt="17px" p="23px" gap="11px">
```
**Usar tokens**: `mt={4}`, `p={6}`, `gap={3}` (múltiplos de 4px).

---

## Cores

### ❌ Cores hardcoded que não estão nos tokens
```tsx
// PROIBIDO
color="#FF5733"
bg="rgb(100, 200, 50)"
color="purple"
```
**Usar**: tokens semânticos (`fg`, `fg.muted`, `blue.solid`, `gold.500`, etc.)

### ❌ Cores genéricas (plain red, plain green, plain blue)
```tsx
// PROIBIDO
color="red"
bg="green"
```
**Usar**: `color="red.500"` ou melhor, tokens semânticos como `fg.error`.

---

## Componentes

### ❌ Múltiplas variações de botão na mesma página
Manter no máximo 2 estilos de botão por página:
1. CTA primário (bg="fg" ou bg="blue.solid", color="white")
2. Link/ghost (sem background, color="blue.solid")

### ❌ Repetir layout/spacings hardcoded
```tsx
// PROIBIDO - copiar/colar layout em cada página
<Box py={16} px={8}><Container maxW="7xl">{children}</Container></Box>
```
**Usar**: `<Section>`, `<Page>`, tokens.

### ❌ CSS externo ou inline styles
```tsx
// PROIBIDO
<div style={{ color: 'red', padding: '20px' }}>
import './custom.css'
```
**Tudo via Chakra props/tema.**

### ❌ Tailwind ou qualquer outro framework CSS
```tsx
// PROIBIDO
className="bg-blue-500 text-white p-4 rounded-lg"
```

### ❌ Shadcn UI
Projeto usa exclusivamente Chakra UI v3.

---

## Animação

### ❌ Motion/Framer Motion em componentes novos sem aprovação
```tsx
// EVITAR
<motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
```

### ❌ Animações de entrada em texto/headings
```tsx
// PROIBIDO
<motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
```

### ❌ Parallax complexo
### ❌ Animações que bloqueiem interação
### ❌ Bouncing ou efeitos de elasticidade exagerados

---

## Linguagem & Copy

### ❌ Soar como fábrica de software
```
❌ "Desenvolvemos sistemas para sua empresa."
❌ "Criamos aplicativos sob demanda."
❌ "Fazemos software personalizado."
```

### ❌ Sotaque regional ou coloquialismo
```
❌ "Fazemos pra você."
❌ "Damos um jeito."
❌ "A gente resolve."
```

### ❌ Promessas vagas
```
❌ "Transformamos sua empresa." (sem explicar como)
❌ "Soluções modernas e inovadoras." (sem contexto)
```

### ❌ Superlativos vazios
```
❌ "O melhor do mercado"
❌ "O mais avançado"
❌ "O mais moderno"
```

### ❌ Jargão técnico sem contexto
```
❌ "Utilizamos modelos LLM e RAG avançados com pipelines otimizados."
✅ "Aplicamos IA para automatizar decisões de alto volume e reduzir riscos humanos."
```

---

## Código

### ❌ `useColorModeValue` 
```tsx
// PROIBIDO
const bg = useColorModeValue("white", "gray.800");
```
**Usar**: `_dark` props do Chakra UI v3.

### ❌ `use client` desnecessário
Preferir Server Components. Adicionar `"use client"` apenas quando necessário (hooks, interatividade).

### ❌ `useEffect` e `useState` desnecessários
Minimize estado client-side. Prefira SSR/SSG.

### ❌ `any` no TypeScript
```tsx
// PROIBIDO
const data: any = ...
```
**Usar**: interfaces TypeScript.

### ❌ Classes e Enums
```tsx
// PROIBIDO
class MyComponent { ... }
enum Status { ... }
```
**Usar**: componentes funcionais e unions/tipos literais.

---

## Estrutura

### ❌ Componentes fora de `src/components`
### ❌ Nomes de diretório em camelCase
```
❌ myComponent/
✅ my-component/
```

### ❌ Default exports para componentes
```tsx
// PROIBIDO
export default function MyComponent() { ... }
```
**Usar**: named exports — `export function MyComponent() { ... }`

**Exceção**: pages do Next.js (app router) usam `export default`.
