# SEO local da Shift+G

Implementação de 13/09/2026. Prioridade: União da Vitória e Porto União; depois São Mateus do Sul, municípios próximos e Curitiba. As alterações estão no código e precisam ser publicadas para chegar ao site público. Não houve acesso ao Perfil da Empresa, ao Search Console ou a dados de posicionamento nesta implementação.

## O que foi implementado

- Títulos e descrições próprios para as 26 páginas públicas, com foco comercial e regional nas páginas relevantes e sem duplicação da marca pelo template do Next.js.
- URL canônica, Open Graph e cartão de compartilhamento em todas as páginas. Imagem de 1200 × 630 alinhada ao novo visual e servida em `/opengraph-image`.
- Identidade única da empresa em JSON-LD (`ProfessionalService`, subtipo de `LocalBusiness`), com endereço, CEP, telefone, contatos, redes oficiais e áreas atendidas. Sede em União da Vitória; as outras cidades não são apresentadas como filiais.
- Dados estruturados de serviços, artigos e navegação. Perguntas frequentes na página regional usam o mesmo conteúdo que aparece ao visitante.
- Página `/atendimento`, com serviços, cidades, funcionamento do atendimento, endereço, perguntas frequentes e acesso ao contato.
- Presença regional na home, nos serviços, na página institucional, no contato, no menu e no rodapé.
- Sitemap com a página regional e todas as URLs públicas. Datas de alteração artificiais foram removidas: só adicionar `lastModified` quando houver data editorial confiável.
- Liberação de `/_next/` no robots.txt para permitir que buscadores carreguem CSS, JavaScript e imagens otimizadas.
- Remoção da declaração `SearchAction`, pois a página de Insights não possui uma busca funcional.
- Redirecionamento permanente de `www.shiftg.com.br` para `shiftg.com.br`, preservando caminho e parâmetros. Correção do destino de `/servicos` para a seção existente `/#prioridades`.
- Remoção das declarações da fonte Rubik, que não é usada pelo tema atual.
- Suporte opcional a `GOOGLE_SITE_VERIFICATION` e `BING_SITE_VERIFICATION`. Nenhum código de verificação foi inventado ou inserido.

## Ampliação editorial: agosto e setembro de 2026

Foram adicionados dois artigos aos Insights, elevando o site a 28 páginas públicas:

- **Agosto:** `/insights/ia-processos-juridicos-tkv-uniao-da-vitoria` — implementação de IA e transformação digital na TKV, com o Cobres apresentado como piloto. Sem métricas de ganho ou funcionalidades atribuídas ao cliente sem comprovação.
- **Setembro:** `/insights/ia-medicina-seguranca-do-trabalho-modernizacao` — integração de processos, IA e governança em saúde ocupacional, com o contexto público da colaboração com a MEDCuritiba, NearOne e SOMABEM.

Datas editoriais adotadas para os meses solicitados: 31/08/2026 e 13/09/2026. A revisão editorial mais recente é de 14/09/2026. As datas constam no HTML e no JSON-LD, e são propagadas ao Open Graph. Elas não significam que o deploy ou a indexação no Google ocorreram nesses dias.

Os seis artigos compartilham um catálogo usado pela listagem e pelo sitemap, em ordem cronológica. Os textos novos têm autoria institucional, sumário, imagens editoriais identificadas e links para serviços, produtos e atendimento regional. Os cards dos clientes também direcionam aos artigos. As informações específicas de clientes se baseiam nas descrições já públicas em `src/constants/projects.ts`.

## Atualização do ecossistema: nove projetos

O site reúne **30 páginas públicas**, incluindo `/projetos/medicos-on` e `/projetos/alegra-conecta`. O cadastro em `src/constants/projects.ts` alimenta as rotas estáticas, o sitemap, a descrição do ecossistema, suas listas JSON-LD e o catálogo de projetos em `/llms.txt`.

As páginas de projeto agora usam títulos com nome e categoria, URLs canônicas próprias e imagens de compartilhamento individuais de **1200 × 630**, geradas em `/projetos/[slug]/opengraph-image`. Cada página descreve o projeto em JSON-LD como `WebPage` com uma `CreativeWork`, incluindo nome, resumo, imagem, site oficial e estágio quando informado. Não são declarados preços, avaliações ou disponibilidade comercial que não constem no conteúdo.

A home e o Ecossistema possuem `ItemList` com todos os projetos. O carrossel mantém os nove links no HTML inicial; o visitante e os buscadores não dependem de executar JavaScript ou avançar as setas para encontrar as URLs. O Ecossistema também se identifica como `CollectionPage`. Essa marcação descreve o conteúdo e não promete um carrossel nos resultados de busca.

O teste `check:seo` confere cada projeto do cadastro no sitemap, no HTML do carrossel, nas listas estruturadas e no `/llms.txt`. Também verifica as entidades individuais e as imagens sociais, inclusive suas dimensões. Os testes de rotas mantêm verificações explícitas de Médicos ON e AlegraConecta, além de resposta 404 para projetos inexistentes.

Validação desta atualização: build de produção aprovado; `check:seo` aprovado para 30 páginas, 9 projetos, 30 destinos internos e 25 imagens; verificação de rotas aprovada. As imagens de Médicos ON, AlegraConecta e SomosAliados também foram inspecionadas visualmente. A publicação e a solicitação de indexação continuam sendo etapas separadas.

## Mapa de intenção de busca

Estes termos orientam o conteúdo; não representam uma medição de volume de busca ou de posição atual.

| Página | Intenção principal |
| --- | --- |
| `/` | Empresa de IA e software em União da Vitória; atendimento a Porto União |
| `/atendimento` | Serviços de IA e tecnologia no Vale do Iguaçu, São Mateus do Sul, Curitiba e região |
| `/transformacao-digital` | Consultoria em IA, automação de processos e governança de dados |
| `/fabrica-de-software` | Desenvolvimento de software sob medida em União da Vitória e região |
| `/treinamento-ia-para-sua-empresa` | Treinamento de inteligência artificial para empresas e IA in company |
| `/diagnostico-inteligente` | Diagnóstico e planejamento de oportunidades de IA e automação |
| `/contato` | Contato, localização e contratação da Shift+G |

Foi usada a grafia oficial **São Mateus do Sul**. A página regional reúne a área de atuação em um conteúdo útil. Novas páginas por cidade só devem ser criadas quando houver conteúdo próprio: projeto local autorizado, desafio específico, equipe, fotos reais ou informações de atendimento que justifiquem uma página independente.

## Publicação e indexação

1. Publicar a versão validada no ambiente de produção.
2. Executar `pnpm check:seo https://shiftg.com.br` para verificar o HTML público após o deploy.
3. No Google Search Console, usar a propriedade de domínio já existente, se houver. A verificação por DNS cobre os protocolos e subdomínios. Para uma propriedade por prefixo de URL, é possível configurar `GOOGLE_SITE_VERIFICATION` com o token fornecido pelo Google e publicar novamente.
4. Enviar `https://shiftg.com.br/sitemap.xml` e inspecionar a home, `/atendimento`, `/transformacao-digital`, `/fabrica-de-software` e `/treinamento-ia-para-sua-empresa`. Solicitar indexação após confirmar a versão publicada.
5. Conferir os dados estruturados no Rich Results Test e o carregamento mobile no PageSpeed Insights. As verificações locais não substituem dados reais de Core Web Vitals.
6. Validar o certificado e o roteamento de `www.shiftg.com.br` na hospedagem: o redirecionamento da aplicação só funciona se a requisição chegar ao serviço.

O sitemap facilita a descoberta; não garante indexação. Dados estruturados ajudam a descrever a empresa e o conteúdo; não garantem posição nem resultado destacado. Não foi prometido resultado enriquecido de FAQ.

## Perfil da Empresa no Google

Atualizar o perfil existente, caso exista. Confirmar endereço, possibilidade real de receber clientes, horários e categoria disponível na conta antes de publicar alterações. Manter um único perfil por local elegível; uma cidade atendida não equivale a uma filial.

Dados preparados a partir das constantes do site:

- Nome: **Shift+G**. Manter o nome real usado pela empresa, sem acrescentar serviços ou cidades ao nome do perfil.
- Telefone: **+55 (42) 99981-8852**.
- Endereço cadastrado: **Rua Ipiranga, 31, Sala 208, Centro, União da Vitória – PR, 84600-040**.
- Site: `https://shiftg.com.br/?utm_source=google&utm_medium=organic&utm_campaign=perfil_empresa`.
- Prioridades de atendimento: União da Vitória, Porto União, São Mateus do Sul, Curitiba e os municípios próximos listados em `/atendimento`. Selecionar no perfil somente a área que corresponde à operação real e às regras do Google.
- Categoria: escolher a opção disponível que melhor descreve a atividade principal de consultoria em tecnologia; adicionar categorias de software e treinamento somente se corresponderem ao negócio.
- Serviços: consultoria em IA, transformação digital, desenvolvimento de software sob medida, automação de processos, integração de sistemas, governança de dados e treinamento de IA in company.
- Fotos: sede, equipe e atividades reais com autorização. As ilustrações editoriais do site não devem ser apresentadas como fotografias de instalações ou clientes.

Descrição pronta para revisão no perfil:

> A Shift+G é uma empresa de tecnologia com sede em União da Vitória, no Paraná. Atuamos com consultoria em inteligência artificial, transformação digital, governança de dados, desenvolvimento de software sob medida e treinamento de IA para empresas. Trabalhamos ao lado de líderes e equipes para integrar sistemas, automatizar processos e aplicar tecnologia aos desafios da operação. Atendemos União da Vitória, Porto União, São Mateus do Sul, Curitiba e cidades próximas. O formato de trabalho e as atividades presenciais são definidos conforme cada projeto.

Após entregas reais, solicitar avaliações honestas aos clientes, sem incentivos ou roteiro artificial. Buscar referências e links em parceiros, associações empresariais e instituições com as quais a empresa mantenha relações reais. Publicar estudos de caso com autorização, contexto e resultados comprovados.

## Acompanhamento

Registrar uma linha de base na publicação e comparar períodos equivalentes de 28 dias, observando sazonalidade e volume de dados:

- Search Console: impressões, cliques, CTR e posição por consulta e página. Separar termos com a marca de termos de serviço e cidade; considerar variações sem acento.
- Perfil da Empresa: ligações, cliques no site e solicitações de rota, conforme os dados disponíveis.
- GA4: origem orgânica, páginas de entrada e acesso ao contato. O GA4 existente foi preservado; não foram configurados eventos novos de conversão nesta entrega.
- Comercial: registrar cidade, serviço procurado, origem declarada e qualidade do contato para distinguir visibilidade de oportunidade comercial.

Não há promessa de primeira posição ou prazo fixo. Resultados locais consideram relevância, distância e proeminência; alcançar Curitiba também depende do contexto da busca, da concorrência e da presença da empresa fora do site.

## Verificação técnica local

```sh
pnpm build
pnpm exec next start -p 3107
# Em outro terminal:
node scripts/check-site-routes.mjs http://localhost:3107
pnpm check:seo http://localhost:3107
```

O teste de SEO percorre o sitemap e verifica títulos e descrições únicos, marca sem duplicação, uma URL canônica e um H1 por página, metadados sociais, imagens acessíveis, dados estruturados, links internos, robots.txt, parâmetros de campanha e redirecionamentos.

Limitação preexistente de lint: `pnpm lint` usa `next lint`, indisponível no Next instalado; o config também importa `@eslint/eslintrc` sem dependência direta. A análise desta entrega usou a dependência transitiva já instalada em um config temporário e comparou os erros ao código anterior, sem alterar a árvore de dependências: 25 erros anteriores, 24 nos arquivos modificados e nenhum nos arquivos novos.

## Referências

- [Google: critérios de classificação local](https://support.google.com/business/answer/7091?hl=pt-BR).
- [Google: diretrizes para representar a empresa](https://support.google.com/business/answer/3038177?hl=pt-BR).
- [Google: verificação de propriedade no Search Console](https://support.google.com/webmasters/answer/9008080?hl=pt-BR).
- [Google: dados estruturados de empresas locais](https://developers.google.com/search/docs/appearance/structured-data/local-business).
- [Google: políticas de spam, incluindo páginas de entrada](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse).
- [Google: construção e envio de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- [Google: uso e limitações do robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro).

## Arquivo llms.txt

Em 14/09/2026 foi adicionado `/llms.txt`, servido como texto UTF-8. Na atualização do ecossistema, o arquivo público foi substituído pela rota estática `src/app/llms.txt/route.ts`. As entradas de projetos e Insights são geradas a partir dos mesmos cadastros usados pelas páginas e pelo sitemap. O conteúdo segue a estrutura Markdown da [proposta llms.txt](https://llmstxt.org/): apresentação da empresa, contexto regional e listas de links para serviços, projetos, Insights e informações complementares. Todas as páginas anunciam o arquivo com `rel="describedby"` no HTML.

O arquivo contém somente informações públicas e distingue o piloto do Cobres de um produto plenamente lançado. Novos projetos, estágios e artigos entram automaticamente no próximo build; os textos institucionais e links de serviços continuam sendo mantidos na rota. O teste `check:seo` confere sua disponibilidade, formato, descoberta no HTML e destinos, exigindo a presença de todos os projetos do cadastro. O arquivo complementa o sitemap e o robots.txt; não substitui esses recursos nem garante visibilidade em respostas de IA.
