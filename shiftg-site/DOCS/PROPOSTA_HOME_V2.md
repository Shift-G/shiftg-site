# Proposta de Home Page V2 - "Static Premium"

**Objetivo**: Elevar o nível visual e profissional da página através de layout, tipografia e estrutura, **sem o uso de animações**. O foco é solidez, confiança e modernidade estática.

## Conceito Visual: "Arquitetura da Informação"
Em vez de movimento, usaremos **estrutura**. Grids assimétricos (Bento Grids), tipografia de alto impacto e contrastes definidos para guiar o olhar.

---

## Novas Seções e Melhorias

### 1. Hero Section (Refinado)
*   **Mudança**: Tornar o Hero mais "denso" e autoritário.
*   **Elemento Visual**: Adicionar um "Badge" de novidade ou status no topo (ex: "Consultoria Especializada em IA").
*   **Layout**: Manter centralizado, mas aumentar o peso da fonte do H1 e usar uma cor de texto secundário com mais contraste para leitura perfeita.
*   **Fundo**: Um padrão geométrico sutil e estático (ex: grid pontilhado muito leve) para não ser um "vazio branco", mas parecer papel milimetrado ou técnico.

### 2. "Bento Grid" de Serviços (Substitui o Grid Simples)
*   **Conceito**: Em vez de cards iguais, um grid onde alguns blocos são maiores que outros, criando dinamismo visual estático.
*   **Estrutura**:
    *   Um bloco grande para o serviço principal ("Consultoria Estratégica").
    *   Blocos menores para os outros.
    *   Uso de cores de fundo sutis (cinza muito claro, azul muito claro) para diferenciar os blocos sem usar sombras.

### 3. Seção de Impacto (Metrics) - **NOVA**
*   **Objetivo**: Prova social numérica.
*   **Conteúdo**: 3 ou 4 números grandes.
    *   "+10 Anos de Experiência"
    *   "Foco em Resultados Reais"
    *   "Metodologia Proprietária"
*   **Design**: Números gigantes (Display Font) com rótulos pequenos. Linhas verticais separando os itens.

### 4. Seção de FAQ (Perguntas Frequentes) - **NOVA**
*   **Objetivo**: Resolver objeções de forma profissional.
*   **Formato**: Accordion (Sanfona) limpo, apenas com linhas divisórias.
*   **Perguntas**:
    *   "A Shift+G atende apenas grandes empresas?"
    *   "Como funciona o diagnóstico inicial?"
    *   "Qual a diferença entre a consultoria e os produtos?"

### 5. Rodapé (Footer) Expandido
*   **Mudança**: Um rodapé mais robusto, com colunas de links, dando a impressão de uma empresa maior e mais estruturada.

---

## Resumo das Mudanças Técnicas

1.  **Remover Motion**: Garantir que nenhum componente dependa de `framer-motion`.
2.  **Chakra UI**: Usar `Grid` e `GridItem` com `colSpan` e `rowSpan` para o Bento Grid.
3.  **Tipografia**: Ajustar `letterSpacing` e `lineHeight` para um visual mais "editorial".
4.  **Backgrounds**: Usar CSS radial gradients estáticos e sutis para profundidade.

## Próximos Passos
1.  Aprovar esta nova direção visual.
2.  Implementar o Bento Grid.
3.  Adicionar a seção de Métricas e FAQ.
