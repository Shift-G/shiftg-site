export interface InsightSection {
  id: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  source?: { label: string; href: string };
}

export interface RecentInsight {
  clientCase: string;
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  publicationMonth: string;
  datePublished: string;
  dateModified: string;
  introduction: string[];
  sections: InsightSection[];
  related: { title: string; href: string }[];
  cta: string;
}

// Datas editoriais: agosto para TKV; setembro para saúde e segurança do trabalho.
export const recentInsights: RecentInsight[] = [
  {
    "clientCase": "medcuritiba",
    "slug": "ia-medicina-seguranca-do-trabalho-modernizacao",
    "title": "MEDCuritiba: o conhecimento da operação abre novas possibilidades",
    "seoTitle": "MEDCuritiba: evolução da operação e novos produtos",
    "description": "A Shift+G atua junto à MEDCuritiba para evoluir processos e transformar a experiência em saúde do trabalho em novas soluções e serviços.",
    "image": "/images/editorial/insight-medcuritiba-operacao-e-conhecimento.webp",
    "imageAlt": "Cena editorial de profissionais de saúde, gestão e tecnologia planejando juntos melhorias no fluxo de uma clínica",
    "tags": [
      "Saúde ocupacional",
      "Evolução de processos",
      "Curitiba"
    ],
    "readTime": "4 min",
    "publishedAt": "Setembro 2026",
    "publicationMonth": "2026-09",
    "datePublished": "2026-09-13",
    "dateModified": "2026-09-14",
    "introduction": [
      "Uma empresa de saúde do trabalho reúne muito mais do que sistemas e agendas. Ela acumula experiência no atendimento, conhecimento técnico e relações de confiança com seus clientes. É a partir dessa base que a Shift+G atua junto à MEDCuritiba: aproxima-se da operação, entende como o trabalho acontece e desenvolve melhorias com quem conhece a rotina.",
      "A parceria, em Curitiba, reúne a evolução dos processos da empresa e a criação de novos produtos digitais. O conhecimento construído pela MEDCuritiba orienta o desenvolvimento. A Shift+G contribui com a engenharia e a integração necessárias para transformar esse conhecimento em soluções que possam fazer parte do dia a dia."
    ],
    "sections": [
      {
        "id": "integracao-antes-da-ia",
        "title": "A primeira etapa é conhecer o trabalho por dentro",
        "paragraphs": [
          "Para melhorar uma operação, é preciso acompanhar o caminho entre a demanda do cliente e a entrega do serviço. Quem recebe a solicitação? Onde as informações são registradas? O que a próxima pessoa precisa saber para continuar? As respostas mostram tanto o que funciona bem quanto os pontos que exigem esforço desnecessário.",
          "A Shift+G parte das pessoas, dos processos e das ferramentas que a empresa já tem. O trabalho identifica o que pode ser aproveitado, onde uma integração faz diferença e quais etapas precisam ser redesenhadas. Cada melhoria considera a experiência de quem vai usá-la."
        ]
      },
      {
        "id": "aplicacoes-de-ia",
        "title": "Menos esforço entre uma etapa e outra",
        "paragraphs": [
          "Na saúde ocupacional, uma parte importante do trabalho acontece nos intervalos do atendimento: organizar solicitações, acompanhar pendências, atualizar registros e garantir que a informação chegue ao responsável. É nessas passagens que a melhoria dos processos pode liberar tempo da equipe.",
          "Conectar essas etapas permite reduzir a necessidade de buscar a mesma informação em vários lugares ou repetir um registro que já existe. Automação e inteligência artificial entram conforme a necessidade identificada, com uma função clara dentro do fluxo.",
          "O objetivo é dar continuidade ao trabalho. A equipe precisa conseguir entender o que já foi feito, o que está pendente e qual é o próximo passo. Essa clareza cria condições para dedicar mais atenção ao atendimento e ao relacionamento com as empresas."
        ],
        "points": [
          "Aproveitar as informações e ferramentas que já fazem parte da rotina.",
          "Reduzir tarefas duplicadas na passagem entre equipes.",
          "Dar visibilidade às pendências e aos responsáveis por cada etapa.",
          "Reservar a atenção dos profissionais para o que exige análise e cuidado."
        ]
      },
      {
        "id": "governanca-e-cuidado",
        "title": "A experiência dos profissionais orienta a mudança",
        "paragraphs": [
          "Quem acompanha uma operação todos os dias conhece suas particularidades. Sabe quando uma solicitação precisa de atenção, quais informações fazem falta e onde um fluxo aparentemente simples encontra uma exceção. Esse conhecimento participa do desenho da solução.",
          "Na abordagem da Shift+G, a tecnologia organiza e apoia o trabalho, com pontos de validação definidos junto à equipe. O acesso às informações e as responsabilidades de cada pessoa fazem parte desse desenho. Assim, a melhoria se encaixa na rotina e preserva o papel dos especialistas."
        ]
      },
      {
        "id": "medcuritiba-e-ecossistema",
        "title": "Da experiência da MEDCuritiba a novos produtos",
        "paragraphs": [
          "A colaboração também abre espaço para transformar demandas do setor em novos serviços. Além da NearOne, a parceria envolve o SOMABEM, rede de benefícios corporativos desenvolvida em colaboração entre as empresas.",
          "No ecossistema da Shift+G, a NearOne conecta avaliação, planos de ação e acompanhamento de riscos psicossociais. O SOMABEM amplia a atuação para benefícios corporativos. São frentes distintas, ligadas à experiência com as necessidades de empresas e trabalhadores.",
          "Desenvolver um produto a partir desse contexto aproxima a engenharia de problemas reais. A experiência da operação ajuda a definir prioridades, avaliar o que faz sentido e orientar a evolução de cada solução."
        ]
      },
      {
        "id": "como-iniciar",
        "title": "Evoluir a partir do que a empresa já construiu",
        "paragraphs": [
          "A parceria com a MEDCuritiba expressa uma forma de trabalhar: entrar na realidade da empresa, reconhecer o valor do que ela já construiu e atuar junto à equipe para melhorar a operação e desenvolver novas possibilidades.",
          "Esse caminho começa com uma conversa sobre a rotina. Onde a equipe repete trabalho? Que informação demora a chegar? Que demanda dos clientes ainda precisa de uma resposta melhor? A partir dessas questões, a Shift+G define com a empresa uma frente de melhoria e acompanha sua aplicação."
        ]
      }
    ],
    "related": [
      {
        "title": "NearOne: avaliação, planos de ação e acompanhamento",
        "href": "/projetos/nearone"
      },
      {
        "title": "SOMABEM e a colaboração com a MEDCuritiba",
        "href": "/projetos/somabem"
      },
      {
        "title": "Como a Shift+G atua na transformação da operação",
        "href": "/transformacao-digital"
      },
      {
        "title": "TKV: menos esforço repetitivo, mais tempo para o trabalho jurídico",
        "href": "/insights/ia-processos-juridicos-tkv-uniao-da-vitoria"
      }
    ],
    "cta": "Vamos encontrar o próximo avanço da sua operação"
  },
  {
    "clientCase": "tkv",
    "slug": "ia-processos-juridicos-tkv-uniao-da-vitoria",
    "title": "TKV: menos esforço repetitivo, mais tempo para o trabalho jurídico",
    "seoTitle": "TKV: menos retrabalho, mais tempo para a equipe",
    "description": "Na TKV, a Shift+G reduziu esforços repetitivos, transformou conferências manuais em validações humanas e liberou horas para o trabalho jurídico.",
    "image": "/images/editorial/insight-tkv-validacao-humana.webp",
    "imageAlt": "Cena editorial de uma profissional jurídica validando informações no computador com uma consultora ao lado",
    "tags": [
      "Eficiência operacional",
      "Processos jurídicos",
      "União da Vitória"
    ],
    "readTime": "4 min",
    "publishedAt": "Agosto 2026",
    "publicationMonth": "2026-08",
    "datePublished": "2026-08-31",
    "dateModified": "2026-09-14",
    "introduction": [
      "Menos tempo em tarefas repetitivas. Mais espaço para analisar, decidir e atender. Na TKV Advogados Associados, em União da Vitória, o trabalho da Shift+G reduziu esforços da rotina e transformou conferências manuais em validações humanas. Horas antes consumidas pela repetição foram liberadas para o trabalho jurídico.",
      "Essa mudança começa dentro da empresa. A Shift+G entende os processos, as ferramentas em uso e a forma como a equipe trabalha. A partir dessa realidade, conecta informações e melhora etapas da operação, aproveitando o conhecimento que o escritório já construiu."
    ],
    "sections": [
      {
        "id": "processos-antes-das-ferramentas",
        "title": "O ponto de partida é a operação que já existe",
        "paragraphs": [
          "Um escritório reúne experiência, critérios de trabalho e uma rotina própria. Melhorar essa estrutura exige proximidade com quem a sustenta. É preciso entender quais tarefas se repetem, em que momentos as informações precisam ser conferidas e onde a atenção de um profissional faz diferença.",
          "Na TKV, a transformação digital e a aplicação de inteligência artificial fazem parte desse trabalho mais amplo. A tecnologia entra para reduzir o esforço operacional e dar suporte à equipe, conforme as necessidades do escritório.",
          "Essa é a abordagem da Shift+G: trabalhar sobre o que a empresa já tem, preservar o que funciona e desenvolver as melhorias que a rotina pede. O processo orienta a escolha da solução."
        ]
      },
      {
        "id": "oportunidades-na-rotina",
        "title": "Da conferência manual à validação humana",
        "paragraphs": [
          "Conferir repetidamente informações exige tempo e concentração. Quando esse esforço ocupa uma parte relevante do dia, a equipe tem menos disponibilidade para lidar com situações que precisam de interpretação e decisão.",
          "Com as melhorias na TKV, conferências manuais passaram a ser validações humanas. O trabalho repetitivo foi reduzido, enquanto a equipe manteve o papel de avaliar as informações e validar os encaminhamentos.",
          "Essa mudança valoriza a experiência dos profissionais. A atenção passa a se concentrar nos pontos que exigem julgamento, nas exceções e nas decisões sobre como continuar o trabalho."
        ],
        "points": [
          "Menos esforço dedicado a tarefas repetitivas.",
          "Conferências manuais transformadas em validações humanas.",
          "Horas recuperadas na rotina da equipe.",
          "Mais disponibilidade para análise e atuação jurídica."
        ]
      },
      {
        "id": "equipe-e-continuidade",
        "title": "Horas recuperadas fazem diferença no dia a dia",
        "paragraphs": [
          "O ganho de tempo aparece na capacidade de conduzir o trabalho. Horas liberadas da repetição criam espaço para analisar uma demanda com atenção, acompanhar um caso e conversar com um cliente.",
          "Por isso, o valor da melhoria precisa ser percebido por quem executa o processo. Uma solução útil diminui o esforço para dar continuidade a uma tarefa e ajuda a equipe a trabalhar com mais clareza.",
          "A participação dos profissionais também orienta os ajustes. O uso cotidiano mostra o que precisa ser aperfeiçoado e onde existem novas oportunidades de reduzir retrabalho."
        ]
      },
      {
        "id": "cobres-na-tkv",
        "title": "Cobres: uma frente construída junto à rotina de cobrança",
        "paragraphs": [
          "O piloto do Cobres integra essa atuação na TKV. O sistema de cobrança desenvolvido no ecossistema Shift+G aproxima a engenharia das necessidades de quem acompanha contatos, pendências e encaminhamentos no escritório.",
          "A cobrança depende de continuidade: entender o histórico, saber o que está em aberto e conduzir o próximo passo. O piloto permite avaliar a solução junto à equipe e ajustar o produto a partir do uso na operação.",
          "Essa frente faz parte da evolução do escritório. O desenvolvimento acompanha um desafio concreto e a experiência de quem trabalha com ele."
        ]
      },
      {
        "id": "sigilo-e-responsabilidade",
        "title": "O conhecimento da equipe continua no centro",
        "paragraphs": [
          "A automação precisa respeitar a forma como o escritório trabalha e os pontos em que a avaliação profissional é necessária. Na abordagem da Shift+G, responsabilidades, acesso às informações e validações fazem parte do desenho do processo.",
          "O trabalho com a TKV mostra o resultado dessa proximidade: menos esforço repetitivo, validação humana preservada e tempo recuperado. Melhorar uma empresa começa por entender o que ela já construiu e trabalhar junto às pessoas que vão conduzir seu próximo avanço."
        ]
      }
    ],
    "related": [
      {
        "title": "Conheça o Cobres e o piloto com a TKV",
        "href": "/projetos/cobres"
      },
      {
        "title": "Transformação digital a partir da sua operação",
        "href": "/transformacao-digital"
      },
      {
        "title": "Conheça a atuação da Shift+G",
        "href": "/sobre"
      },
      {
        "title": "MEDCuritiba: o conhecimento da operação abre novas possibilidades",
        "href": "/insights/ia-medicina-seguranca-do-trabalho-modernizacao"
      }
    ],
    "cta": "Onde sua equipe pode recuperar tempo?"
  }
];
