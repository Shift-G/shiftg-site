export interface Project {
  slug: string;
  name: string;
  category: string;
  ownership: string;
  partner?: string;
  stage?: string;
  logo: string;
  url: string;
  instagram?: string;
  headline: string;
  summary: string;
  audience: string;
  challenge: string;
  approach: string;
  pillars: { title: string; text: string }[];
  caseId?: string;
}

export const projects: Project[] = [
  {
    slug: "nearone",
    name: "NearOne",
    category: "Saúde no trabalho",
    ownership: "Produto próprio",
    logo: "logo-nearone.png",
    url: "https://nearone.com.br",
    instagram: "https://www.instagram.com/nearonecombr/",
    headline: "O cuidado com as pessoas faz parte da gestão.",
    summary:
      "IA e um ecossistema para a gestão de riscos psicossociais no contexto da NR-1. Da avaliação ao acompanhamento das ações.",
    audience:
      "Empresas, consultorias e profissionais de saúde e segurança do trabalho.",
    challenge:
      "Identificar riscos é uma etapa. Dar continuidade ao cuidado, organizar as informações e acompanhar o que foi feito exige uma gestão conectada à rotina da empresa.",
    approach:
      "A NearOne está presente na Dissenha, na Abbaspel e na MEDCuritiba, com sua base de mais de 1.500 empresas clientes. A plataforma reúne avaliação, planos de ação e acompanhamento em um ecossistema digital. A IA apoia a leitura das informações para que a equipe responsável possa definir prioridades e conduzir as ações.",
    pillars: [
      {
        title: "Mapear",
        text: "Avaliações para compreender os fatores psicossociais presentes no trabalho.",
      },
      {
        title: "Agir",
        text: "Planos de ação que conectam o diagnóstico à atuação da empresa e dos especialistas.",
      },
      {
        title: "Acompanhar",
        text: "Monitoramento e registros para dar continuidade à gestão ao longo do tempo.",
      },
    ],
    caseId: "abbaspel",
  },
  {
    slug: "somosaliados",
    name: "SomosAliados",
    category: "Gestão sindical",
    ownership: "Produto próprio",
    logo: "logo-somosaliados.png",
    url: "https://somosaliados.com.br",
    instagram: "https://www.instagram.com/somosaliados.shiftg/",
    headline: "Um sindicato mais próximo da sua base.",
    summary:
      "Inteligência artificial para sindicatos, conectando conhecimento institucional, gestão e relacionamento com os associados.",
    audience:
      "Sindicatos, suas diretorias, equipes administrativas e associados.",
    challenge:
      "Documentos dispersos e demandas recorrentes consomem o tempo da equipe. Ao mesmo tempo, a base precisa encontrar informações e perceber o valor da sua entidade.",
    approach:
      "O SomosAliados já está presente em dois sindicatos: o SINDESPOL, de Londrina, e o SEEB (Sindicato dos Bancários), de União da Vitória. A plataforma reúne a gestão documental e uma IA apoiada nos documentos do sindicato. O aplicativo do associado aproxima a entidade da base com acesso a benefícios, informações e comunidade.",
    pillars: [
      {
        title: "Conhecimento institucional",
        text: "Estatutos, atas e documentos organizados para consulta com apoio de IA.",
      },
      {
        title: "Relacionamento com a base",
        text: "Aplicativo com documentos, carteirinha digital, comunidade e benefícios.",
      },
      {
        title: "Implantação acompanhada",
        text: "Configuração, preparação dos documentos e orientação para a equipe do sindicato.",
      },
    ],
  },
  {
    slug: "thiago",
    name: "Thiago",
    category: "Política",
    ownership: "Em colaboração",
    partner: "TPC & Co",
    logo: "logo-thiago.png",
    url: "https://thiago.tpcco.com.br/",
    headline: "Inteligência artificial no contexto da política.",
    summary:
      "Agente de IA para política, desenvolvido em colaboração com a TPC & Co.",
    audience: "Lideranças e equipes que atuam no ambiente político.",
    challenge:
      "O trabalho político reúne informação, planejamento e uma rotina intensa de demandas. Aplicar IA nesse cenário exige conhecer o contexto em que as equipes trabalham.",
    approach:
      "Thiago é o encontro da capacidade tecnológica da SHIFT+G com a atuação da TPC & Co no setor. Um agente de IA desenvolvido para esse universo, com foco nas necessidades das equipes políticas.",
    pillars: [
      {
        title: "Foco no setor",
        text: "Uma aplicação de IA dedicada ao contexto da política.",
      },
      {
        title: "Conhecimento complementar",
        text: "Colaboração que aproxima tecnologia e experiência no segmento.",
      },
      {
        title: "Produto digital",
        text: "A parceria se materializa em um agente de IA com identidade e aplicação próprias.",
      },
    ],
  },
  {
    slug: "aderis",
    name: "Aderis",
    category: "Privacidade e dados",
    ownership: "Em colaboração",
    logo: "logo-aderis.png",
    url: "https://aderis.shiftg.com.br/",
    instagram: "https://www.instagram.com/aderis.shiftg/",
    headline: "Privacidade como parte da operação.",
    summary:
      "Sistema de inteligência artificial voltado à LGPD, desenvolvido em colaboração.",
    audience:
      "Organizações e equipes responsáveis pela gestão da privacidade e dos dados.",
    challenge:
      "A gestão de dados atravessa áreas, pessoas e processos. Incorporar privacidade à operação exige conectar o trabalho de quem orienta com a rotina de quem executa.",
    approach:
      "O Aderis aplica IA ao universo da LGPD. O projeto integra o ecossistema da SHIFT+G como uma colaboração orientada à gestão de dados e à privacidade nas organizações.",
    pillars: [
      {
        title: "Privacidade",
        text: "O tratamento de dados como tema de gestão dentro das organizações.",
      },
      {
        title: "IA aplicada",
        text: "Inteligência artificial direcionada ao contexto de trabalho com a LGPD.",
      },
      {
        title: "Colaboração",
        text: "Desenvolvimento que reúne competências para uma aplicação especializada.",
      },
    ],
  },
  {
    slug: "cobres",
    name: "Cobres",
    category: "Gestão de cobrança",
    ownership: "Ecossistema SHIFT+G",
    stage: "Piloto com a TKV",
    logo: "logo-cobres.png",
    url: "https://cobres.shiftg.com.br",
    instagram: "https://www.instagram.com/cobres.shiftg/",
    headline: "IA aplicada a um desafio concreto: a cobrança.",
    summary:
      "Sistema de cobrança com inteligência artificial, com piloto em andamento na TKV Advogados Associados.",
    audience: "Empresas e escritórios que atuam com operações de cobrança.",
    challenge:
      "A cobrança é uma operação que exige acompanhamento e atenção contínua. É nesse trabalho, próximo de quem executa, que surgem as oportunidades para aplicar inteligência artificial.",
    approach:
      "O Cobres nasce dessa aplicação prática. Seu piloto na TKV integra um trabalho mais amplo de transformação digital e implementação de IA conduzido pela SHIFT+G no escritório.",
    pillars: [
      {
        title: "Problema definido",
        text: "A cobrança como foco de aplicação da inteligência artificial.",
      },
      {
        title: "Piloto na operação",
        text: "Validação junto à TKV Advogados Associados, em União da Vitória, PR.",
      },
      {
        title: "Transformação conectada",
        text: "Um produto inserido no trabalho de adoção de IA dentro do cliente.",
      },
    ],
    caseId: "tkv",
  },
  {
    slug: "pontes",
    name: "Pontes",
    category: "Saúde pública",
    ownership: "Ecossistema SHIFT+G",
    stage: "Em validação",
    logo: "logo-pontes.png",
    url: "https://www.pontes.digital",
    instagram: "https://www.instagram.com/sistemapontes/",
    headline: "Conectar a saúde. Aproximar o atendimento.",
    summary:
      "Projeto para conectar consórcios de saúde e apoiar a redução do absenteísmo com IA. Selecionado no programa Centelha PR 2026.",
    audience:
      "Consórcios de saúde e equipes que coordenam o acesso ao atendimento.",
    challenge:
      "Quando uma pessoa falta ao atendimento, a rede perde uma oportunidade de cuidar. A conexão entre os envolvidos na jornada é central para enfrentar esse desafio.",
    approach:
      "O Pontes está em validação e tem como proposta conectar consórcios de saúde, usando inteligência artificial para apoiar a redução das faltas. A seleção no Centelha PR 2026 marca uma etapa do desenvolvimento do projeto.",
    pillars: [
      {
        title: "Conexão entre consórcios",
        text: "Aproximar os participantes da rede e da jornada de atendimento.",
      },
      {
        title: "Foco no absenteísmo",
        text: "Investigar e validar a aplicação de IA para apoiar a redução das faltas.",
      },
      {
        title: "Centelha PR 2026",
        text: "Projeto selecionado no programa, atualmente em fase de validação.",
      },
    ],
  },
  {
    slug: "somabem",
    name: "SOMABEM",
    category: "Benefícios corporativos",
    ownership: "Em colaboração",
    partner: "MEDCuritiba",
    logo: "logo-somabem.png",
    url: "https://www.somabem.app",
    instagram: "https://www.instagram.com/somabem.app/",
    headline: "Benefícios que aproximam empresas e pessoas.",
    summary:
      "Rede de benefícios corporativos desenvolvida em colaboração com a MEDCuritiba.",
    audience:
      "Empresas, suas equipes e parceiros de uma rede de benefícios corporativos.",
    challenge:
      "Criar valor para as pessoas também passa pelo acesso a benefícios. Transformar essa oportunidade em um produto digital exige unir conhecimento do setor e capacidade de execução.",
    approach:
      "O SOMABEM faz parte da colaboração entre SHIFT+G e MEDCuritiba. Uma rede de benefícios corporativos que materializa a criação de novos produtos digitais a partir da atuação conjunta das empresas.",
    pillars: [
      {
        title: "Benefícios corporativos",
        text: "Uma rede voltada à relação entre empresas e suas equipes.",
      },
      {
        title: "Parceria com a MEDCuritiba",
        text: "Tecnologia e experiência no setor conectadas em um produto digital.",
      },
      {
        title: "Novas frentes de negócio",
        text: "A transformação digital como caminho para criar produtos e oportunidades.",
      },
    ],
    caseId: "medcuritiba",
  },
  {
    slug: "medicos-on",
    name: "Médicos ON",
    category: "Telemedicina",
    ownership: "Ecossistema SHIFT+G",
    logo: "logo-medicos-on.png",
    url: "https://medicoson.app",
    headline: "Telemedicina mais simples. Cuidado mais próximo.",
    summary:
      "Plataforma de telemedicina lançada oficialmente, desenvolvida integralmente pela SHIFT+G em colaboração. Tecnologia e IA para simplificar o acesso ao cuidado no Brasil.",
    audience:
      "Médicos que buscam uma prática digital mais integrada e pessoas que precisam de acesso mais fácil à telemedicina no Brasil.",
    challenge:
      "A telemedicina precisa ser simples para quem atende e para quem busca cuidado. Conectar profissionais, organizar serviços e facilitar a jornada de atendimento são partes desse desafio.",
    approach:
      "Desenvolvido integralmente pela SHIFT+G, o Médicos ON é um projeto em colaboração que reúne tecnologia e IA para saúde na proposta de uma telemedicina abrangente e simplificada. A plataforma foi concebida para conectar perfil profissional, agenda, teleconsulta e prontuário em uma mesma experiência. Já lançado oficialmente, o Médicos ON conecta tecnologia e cuidado para facilitar o acesso à telemedicina no Brasil.",
    pillars: [
      {
        title: "Acesso ao cuidado",
        text: "Uma proposta para aproximar médicos e pacientes e tornar a telemedicina mais fácil e acessível no Brasil.",
      },
      {
        title: "Serviços conectados",
        text: "Perfil profissional, agenda, teleconsulta e prontuário pensados como partes de uma jornada integrada.",
      },
      {
        title: "Tecnologia e IA para saúde",
        text: "Desenvolvimento integral pela SHIFT+G, com tecnologia e inteligência artificial voltadas à simplificação dos serviços de saúde.",
      },
    ],
  },
  {
    slug: "alegra-conecta",
    name: "AlegraConecta",
    category: "Descontos e comunidade",
    ownership: "Em colaboração",
    logo: "logo-alegra-conecta.png",
    url: "https://alegraconecta.com.br",
    headline: "Mais benefícios. Mais força para a comunidade.",
    summary:
      "Clube de Descontos ALEGRA: benefícios para assinantes em estabelecimentos credenciados, apoio à comunidade e incentivo ao comércio local. Um projeto em colaboração com a SHIFT+G.",
    audience:
      "Pessoas que buscam descontos e benefícios, comunidades que querem fortalecer seus vínculos e estabelecimentos que fazem parte do comércio local.",
    challenge:
      "Aproximar pessoas, comunidades e negócios locais exige criar valor para todos. Os descontos incentivam novas descobertas, enquanto o apoio à comunidade fortalece as relações que fazem parte do dia a dia.",
    approach:
      "O AlegraConecta conecta pessoas a oportunidades e benefícios por meio do Clube de Descontos ALEGRA. Assinantes têm acesso a descontos em estabelecimentos credenciados e podem apoiar suas comunidades. Desenvolvido em colaboração com a SHIFT+G, o projeto reúne economia no dia a dia, proximidade com a comunidade e valorização dos negócios locais.",
    pillars: [
      {
        title: "Descontos e benefícios",
        text: "Assinantes acessam descontos na rede credenciada, conforme as condições de cada estabelecimento.",
      },
      {
        title: "Apoio à comunidade",
        text: "Uma conexão que aproxima as pessoas das comunidades das quais fazem parte e facilita o apoio às suas iniciativas.",
      },
      {
        title: "Comércio local",
        text: "Uma rede que incentiva a descoberta de estabelecimentos e valoriza os negócios que movimentam a comunidade.",
      },
    ],
  },
];

export const clientCases = [
  {
    id: "tkv",
    company: "TKV Advogados Associados",
    person: "Alessandro Koslowski",
    role: "TKV Advogados Associados",
    location: "União da Vitória, PR",
    logo: "logo-tkv.png",
    title: "IA incorporada à rotina de um escritório de advocacia.",
    description:
      "Transformação digital e implementação de inteligência artificial na TKV, incluindo o piloto do Cobres, sistema de cobrança com IA.",
    tags: ["Transformação digital", "IA aplicada", "Piloto Cobres"],
    project: "cobres",
  },
  {
    id: "abbaspel",
    company: "Abbaspel",
    person: "José Valmir",
    role: "Abbaspel · Indústria de papéis",
    location: "Porto União, SC",
    logo: "logo-abbaspel.png",
    title: "Gestão de riscos psicossociais no ambiente industrial.",
    description:
      "A Abbaspel contratou a NearOne para a gestão de riscos psicossociais. Uma aplicação do ecossistema SHIFT+G no contexto de uma indústria de papéis.",
    tags: ["NearOne", "Riscos psicossociais", "Indústria"],
    project: "nearone",
  },
  {
    id: "medcuritiba",
    company: "MEDCuritiba",
    person: "Leonardo Prado",
    role: "Diretor · MEDCuritiba",
    location: "Curitiba, PR",
    logo: "logo-medcuritiba.png",
    title: "Da transformação da operação à criação de novos produtos.",
    description:
      "Além da NearOne, a parceria envolve a transformação digital da MEDCuritiba e o desenvolvimento de novos produtos digitais no setor de saúde do trabalho, incluindo a colaboração no SOMABEM.",
    tags: ["Transformação digital", "NearOne", "Novos produtos"],
    project: "somabem",
  },
];
