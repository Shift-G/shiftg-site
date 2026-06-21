# Proposta de Nova Home Page - Shift+G

Esta proposta alinha o conteúdo de `DOCS/HOME.md` com as diretrizes visuais de `.claude_instructions` e o tom de voz de `DOCS/DIRETRIZES_COMUNICACAO.md`.

## Conceito Visual
**"Clareza Executiva e Precisão Técnica"**

*   **Estilo**: Minimalista, científico, sem sombras.
*   **Cores**: Baseado em tokens semânticos (Fundo `surface`, Bordas `border`, Texto `foreground` e `subtle`).
*   **Tipografia**: Geométrica, limpa, alto contraste.
*   **Estrutura**: Blocos de conteúdo bem definidos por espaçamento e linhas sutis, sem cartões flutuantes ou excesso de decoração.

---

## Estrutura da Página

### 1. Hero Section
*   **Componente**: `Hero` (Customizado)
*   **Estilo**: Fundo limpo, texto centralizado ou alinhado à esquerda com muito ar.
*   **Conteúdo**:
    *   **H1**: "Inteligência, eficiência e visão — aplicadas ao que realmente importa."
    *   **Subtítulo**: "Estratégia, IA e arquitetura para elevar eficiência, escala e competitividade."
    *   **CTA**: Botão `outline` ou `solid` (sem sombra) "Agendar uma consulta executiva".
*   **Nota**: Foco total na mensagem. Sem imagens de fundo pesadas que distraiam.

### 2. O Que Fazemos (Value Proposition)
*   **Componente**: `Section`
*   **Layout**: Texto grande e impactante (Tipografia de destaque).
*   **Conteúdo**:
    *   "Transformamos operações, processos e decisões com inteligência aplicada."
    *   Texto de apoio sobre ajudar líderes a operar com clareza.

### 3. Serviços (Grid)
*   **Componente**: `SimpleGrid` (2 ou 4 colunas) com `FeatureItem`.
*   **Estilo dos Itens**: Apenas borda sutil (`1px solid border`), sem background ou com `bg="subtle"`. Ícones minimalistas (Lucide).
*   **Itens**:
    1.  **Consultoria Estratégica**: Diagnóstico e arquitetura.
    2.  **IA Aplicada**: Automação e modelos preditivos.
    3.  **Soluções Sob Medida**: Implementação corporativa.
    4.  **Treinamentos In Company**: Capacitação de líderes.
    5.  **Produtos de Alta Performance**: Ferramentas aceleradoras.

### 4. Produtos (Showcase)
*   **Componente**: `Carousel` ou `Grid` destacado.
*   **Estilo**: Diferenciação visual para mostrar que são produtos tangíveis. Talvez uso de `Card` com borda mais forte ou cor de fundo levemente contrastante.
*   **Itens**:
    *   **ACP**: People Analytics.
    *   **SaaS Sindicatos**: Gestão completa.
    *   **Sentinela**: RHaaS.

### 5. Filosofia (Nova Seção)
*   **Componente**: `Section` com fundo invertido (Dark mode ou cor de destaque sóbria) para quebrar o ritmo.
*   **Conteúdo**: "Como a Shift+G pensa tecnologia".
*   **Destaque**: "Tecnologia não é ferramenta. É arquitetura de futuro."
*   **Lista**: Pontos chave (Compreender negócio, Transformar dados, etc.) formatados como checklist limpo.

### 6. Como Trabalhamos (Método)
*   **Componente**: `ProcessSteps` ou Lista vertical conectada.
*   **Estilo**: Linha do tempo minimalista ou lista numerada grande.
*   **Passos**: Imersão -> Análise -> Arquitetura -> IA -> Automação -> Entrega.

### 7. Sobre & Liderança
*   **Componente**: `Section` dividida.
*   **Lado A (Sobre)**: Texto institucional.
*   **Lado B (Liderança)**: Dois perfis (William e Fabio) com fotos em P&B ou desaturadas, nome e cargo. Sem "cards" elevados, apenas layout.

### 8. Chamado Final (Footer CTA)
*   **Componente**: `Callout`
*   **Conteúdo**: "Quando sua empresa estiver pronta para operar em outro nível..."
*   **CTA**: "Agendar uma consulta executiva".

### 9. Footer
*   **Estilo**: Minimalista, apenas links essenciais e copyright.

---

## Detalhes de Implementação (Tech)

*   **Framework**: Next.js App Router.
*   **UI Lib**: Chakra UI v3.
*   **Ícones**: Lucide React.
*   **Responsividade**: Mobile-first (Stack no mobile, Grid no desktop).
*   **Animações**: Nenhuma ou micro-interações de `opacity` no hover.

## Próximos Passos
1.  Aprovar esta estrutura.
2.  Criar os componentes base (`Section`, `Hero`, `FeatureItem`) se não existirem.
3.  Montar a página `page.tsx`.
