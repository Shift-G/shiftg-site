import { Metadata } from "next";
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Stack,
  List,

} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { FeatureCard } from "@/components/cards/feature-card";
import { JobCard } from "@/components/cards/job-card";
import {
  Users,
  MapPin,
  Heart,
  Zap,
  TrendingUp,
  Shield,
  Coffee,
  Award,
  BookOpen,
  Clock,
  Home,
  Globe,
  Database,
  Phone,
  HeadphonesIcon,
  Briefcase,
  ChevronRight,
  Mail,
  Star,
  Rocket,
  Target,
  Brain,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_URL, CAREERS_EMAIL } from "@/constants";

export const metadata: Metadata = {
  title: `Carreiras | ${SITE_NAME}`,
  description:
    "Junte-se ao time da Shift+G! Estamos contratando talentos remotamente para revolucionar o futuro da inteligência artificial e dados. 5 vagas abertas para profissionais que querem fazer a diferença.",
  keywords: [
    "carreiras shift+g",
    "vagas remotas",
    "engenheiro de dados",
    "SDR vendas",
    "analista de suporte",
    "gerente de projetos",
    "trabalho remoto",
    "inteligência artificial",
    "data science",
    "startup tech",
  ],
  openGraph: {
    title: `Carreiras | ${SITE_NAME}`,
    description:
      "Estamos contratando! 5 vagas remotas para profissionais que querem revolucionar o futuro da IA e dados.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/carreiras`,
    siteName: `${SITE_NAME} - Carreiras`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Carreiras | ${SITE_NAME}`,
    description:
      "Estamos contratando! 5 vagas remotas para profissionais que querem revolucionar o futuro da IA e dados.",
  },
};

const benefits = [
  {
    title: "100% Remoto",
    description:
      "Trabalhe de qualquer lugar do Brasil. Liberdade total para organizar seu ambiente e rotina de trabalho.",
    icon: <Home size={24} />,
  },
  {
    title: "Horário Flexível",
    description:
      "Organize seu horário como preferir. O importante são os resultados, não o horário que você bate o ponto.",
    icon: <Clock size={24} />,
  },
  {
    title: "Crescimento Acelerado",
    description:
      "Participe de projetos desafiadores com tecnologias de ponta. Aprenda com profissionais experientes.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Equipamentos",
    description:
      "Fornecemos notebook, monitor, e uma verba para montar seu home office ideal.",
    icon: <Coffee size={24} />,
  },
  {
    title: "Plano de Saúde",
    description:
      "Plano de saúde completo para você e sua família. Seu bem-estar é nossa prioridade.",
    icon: <Heart size={24} />,
  },
  {
    title: "Educação Contínua",
    description:
      "Verba para cursos, certificações e livros. Investimos no seu desenvolvimento profissional.",
    icon: <BookOpen size={24} />,
  },
];

const culture = [
  {
    title: "Inovação Constante",
    description:
      "Trabalhamos com as tecnologias mais modernas do mercado. IA, Machine Learning, Cloud Native - sempre na vanguarda.",
    icon: <Lightbulb size={24} />,
  },
  {
    title: "Impacto Real",
    description:
      "Nossos projetos transformam empresas de verdade. Você verá o resultado direto do seu trabalho nos clientes.",
    icon: <Target size={24} />,
  },
  {
    title: "Time de Experts",
    description:
      "Trabalhe com profissionais que respiram tecnologia. Aprenda, ensine e cresça junto com o time.",
    icon: <Brain size={24} />,
  },
  {
    title: "Autonomia Total",
    description:
      "Confiamos na sua capacidade. Você tem liberdade para propor soluções e implementar suas ideias.",
    icon: <Rocket size={24} />,
  },
];

const jobs = [
  {
    title: "Engenheiro de Dados Sênior",
    department: "Dados & IA",
    type: "Remoto • PJ",
    level: "Sênior",
    salary: "R$ 12.000 - R$ 18.000",
    description:
      "Lidere a arquitetura de dados da Shift+G. Construa pipelines robustos e escaláveis que alimentam nossas soluções de IA.",
    requirements: [
      "5+ anos com engenharia de dados",
      "Python, SQL, Apache Spark/Airflow",
      "AWS/GCP/Azure (certificação é um plus)",
      "Experiência com Data Lakes e Data Warehouses",
      "Conhecimento em MLOps",
    ],
    responsibilities: [
      "Arquitetar e implementar pipelines de dados",
      "Otimizar performance de queries e ETLs",
      "Mentoria técnica para o time",
      "Definir padrões e melhores práticas",
    ],
    icon: <Database size={24} />,
    featured: true,
  },
  {
    title: "Engenheiro de Dados Especialista",
    department: "Dados & IA",
    type: "Remoto • PJ",
    level: "Especialista",
    salary: "R$ 18.000 - R$ 25.000",
    description:
      "Seja o tech lead de dados da Shift+G. Defina a estratégia técnica e lidere projetos complexos de grande escala.",
    requirements: [
      "8+ anos com engenharia de dados",
      "Experiência em arquiteturas distribuídas",
      "Liderança técnica comprovada",
      "Conhecimento profundo em ML Engineering",
      "Experiência com Real-time Processing",
    ],
    responsibilities: [
      "Definir arquitetura de dados da empresa",
      "Liderar projetos estratégicos",
      "Desenvolver soluções inovadoras",
      "Representar tecnicamente a empresa",
    ],
    icon: <Database size={24} />,
    featured: true,
  },
  {
    title: "SDR - Representante Comercial",
    department: "Vendas",
    type: "Remoto • PJ",
    level: "Pleno",
    salary: "R$ 4.000 - R$ 8.000 + comissões",
    description:
      "Seja nossa primeira impressão com potenciais clientes. Prospecte leads qualificados e agende reuniões para o time comercial. Preferência para candidatos de União da Vitória - PR e região.",
    requirements: [
      "2+ anos em vendas B2B ou SDR",
      "Experiência com CRM (HubSpot, Salesforce)",
      "Inglês intermediário",
      "Conhecimento básico em tecnologia",
      "Perfil consultivo e orientado a resultados",
      "Preferência: União da Vitória - PR e região",
    ],
    responsibilities: [
      "Prospecção ativa de leads qualificados",
      "Qualificação de oportunidades comerciais",
      "Agendamento de reuniões para AEs",
      "Nutrição de leads via email e LinkedIn",
    ],
    icon: <Phone size={24} />,
    featured: false,
  },
  {
    title: "Analista de Suporte",
    department: "Customer Success",
    type: "Remoto • PJ",
    level: "Pleno",
    salary: "R$ 4.500 - R$ 6.500",
    description:
      "Garanta o sucesso dos nossos clientes. Ofereça suporte técnico excepcional e ajude na adoção das nossas soluções.",
    requirements: [
      "2+ anos em suporte técnico",
      "Conhecimento em SQL e APIs",
      "Experiência com ferramentas de BI",
      "Inglês intermediário",
      "Excelente comunicação",
    ],
    responsibilities: [
      "Suporte técnico aos clientes",
      "Análise e resolução de problemas",
      "Criação de documentação técnica",
      "Treinamento de usuários",
    ],
    icon: <HeadphonesIcon size={24} />,
    featured: false,
  },
  {
    title: "Gerente de Projetos",
    department: "Operações",
    type: "Remoto • PJ",
    level: "Sênior",
    salary: "R$ 8.000 - R$ 12.000",
    description:
      "Lidere a execução dos nossos projetos de IA. Garanta entregas no prazo e qualidade, coordenando times multidisciplinares.",
    requirements: [
      "5+ anos em gestão de projetos tech",
      "PMP ou certificação similar",
      "Experiência com metodologias ágeis",
      "Conhecimento em projetos de dados/IA",
      "Inglês avançado",
    ],
    responsibilities: [
      "Gestão completa do ciclo de projetos",
      "Coordenação de times multidisciplinares",
      "Interface com stakeholders",
      "Garantia de qualidade e prazos",
    ],
    icon: <Briefcase size={24} />,
    featured: false,
  },
];

export default function CareersPage() {
  return (
    <Page>
      <Navbar />

      {/* Hero Section */}
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        minH="90vh"
        display="flex"
        alignItems="center"
        bg="bg"
      >
        {/* Background Elements */}
        <Box
          position="absolute"
          top="20%"
          right="10%"
          w="150px"
          h="150px"
          borderRadius="full"
          bg="{colors.blue.500/5}"
          backdropFilter="blur(10px)"
          animation="float 10s ease-in-out infinite"
          zIndex={0}
        />
        <Box
          position="absolute"
          bottom="25%"
          left="5%"
          w="100px"
          h="100px"
          borderRadius="lg"
          bg="{colors.blue.500/5}"
          backdropFilter="blur(10px)"
          animation="float 8s ease-in-out infinite reverse"
          zIndex={0}
        />

        <Container maxW="7xl" py={{ base: 16, md: 24 }} position="relative" zIndex={1}>
          <VStack gap={{ base: 8, md: 12 }} maxW="5xl" mx="auto" textAlign="center">
            {/* Badge */}
            <HStack
              px={4}
              py={2}
              rounded="full"
              bg="{colors.blue.500/10}"
              border="1px solid {colors.blue.500/20}"
            >
              <Star size={16} color="{colors.blue.500}" />
              <Text
                fontSize="sm"
                fontWeight="300"
                color="blue.solid"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                5 Vagas Abertas • 100% Remoto
              </Text>
            </HStack>

            {/* Title */}
            <VStack gap={4}>
              <Heading
                as="h1"
                size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="300"
                lineHeight="none"
                letterSpacing="tight"
                color="fg"
              >
                Construa o{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                  bgClip="text"
                >
                  Futuro
                </Text>{" "}
                da IA conosco
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Junte-se ao time que está revolucionando como empresas usam
                dados e inteligência artificial. Trabalho remoto, impacto real,
                crescimento acelerado.
              </Text>
            </VStack>

            {/* Stats */}
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 4, md: 8 }} w="full" maxW="2xl">
              {[
                { value: "100%", label: "Remoto" },
                { value: "5", label: "Vagas Abertas" },
                { value: "24h", label: "Resposta" },
                { value: "Flexível", label: "Horário" },
              ].map((stat) => (
                <Box key={stat.label} textAlign="center">
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="300"
                    color="blue.solid"
                    lineHeight="none"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="fg.muted"
                    fontWeight="300"
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* CTA */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              gap={4}
              w={{ base: "full", sm: "auto" }}
              mt={6}
            >
              <Link href="#vagas" passHref>
                <Button
                  size="xl"
                  px={8}
                  py={6}
                  variant="solid"
                  colorPalette="blue"
                >
                  Ver Vagas Disponíveis
                  <ChevronRight size={20} style={{ marginLeft: "12px" }} />
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* Culture Section */}
      <Section
        title="Nossa Cultura: Onde Tecnologia Encontra Propósito"
        subtitle="Não somos apenas uma empresa de tecnologia. Somos uma comunidade de inovadores que acredita no poder transformador dos dados e da IA."
        centered
        variant="gradient"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {culture.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              highlighted={index === 0}
            />
          ))}
        </SimpleGrid>
      </Section>

      {/* Employment Model Section */}
      <Section
        title="Modelo de Contratação PJ"
        subtitle="Todas as nossas contratações são feitas no modelo Pessoa Jurídica (PJ), oferecendo flexibilidade e benefícios competitivos."
        centered
        variant="glass"
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
          <FeatureCard
            icon={<Award size={24} />}
            title="Flexibilidade Fiscal"
            description="Modelo PJ permite maior flexibilidade na gestão fiscal e possibilita dedução de despesas relacionadas ao trabalho."
          />
          <FeatureCard
            icon={<TrendingUp size={24} />}
            title="Valores Competitivos"
            description="Oferecemos remuneração acima do mercado, considerando os benefícios do modelo PJ para profissionais qualificados."
          />
          <FeatureCard
            icon={<Shield size={24} />}
            title="Segurança Jurídica"
            description="Contratos claros e transparentes, respeitando todas as regulamentações trabalhistas e fiscais brasileiras."
          />
        </SimpleGrid>
      </Section>

      {/* Benefits Section */}
      <Section
        title="Benefícios que Fazem a Diferença"
        subtitle="Cuidamos de quem cuida dos nossos projetos. Estes são os benefícios que oferecemos para nosso time."
        centered
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
          {benefits.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </SimpleGrid>
      </Section>

      {/* Remote Work Section */}
      <Section
        title="Trabalho Remoto de Verdade"
        subtitle="Não é apenas home office. É liberdade para trabalhar de onde você for mais produtivo."
        centered
        variant="glass"
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 8, md: 12 }} alignItems="center">
          <VStack align="flex-start" gap={6}>
            <VStack align="flex-start" gap={4}>
              <HStack>
                <Globe size={24} color="{colors.blue.500}" />
                <Text fontWeight="300" fontSize="xl" color="blue.solid">
                  De Qualquer Lugar do Brasil
                </Text>
              </HStack>
              <Text color="fg.muted" fontSize="lg" lineHeight="tall">
                Nosso time está espalhado por todo o país. Temos pessoas
                trabalhando desde São Paulo até cidades menores do interior.
                O que importa é o seu talento, não seu CEP.
              </Text>
            </VStack>

            <VStack align="flex-start" gap={4}>
              <HStack>
                <Clock size={24} color="{colors.blue.500}" />
                <Text fontWeight="300" fontSize="xl" color="blue.solid">
                  Flexibilidade Real
                </Text>
              </HStack>
              <Text color="fg.muted" fontSize="lg" lineHeight="tall">
                Seja um early bird ou uma coruja noturna, organizamos os
                horários para que todos possam contribuir no seu melhor momento.
                Temos apenas algumas horas de overlap para alinhamentos.
              </Text>
            </VStack>
          </VStack>

          <Box
            p={{ base: 6, md: 8 }}
            rounded="2xl"
            bg="{colors.blue.500/10}"
            border="1px solid {colors.blue.500/20}"
          >
            <VStack gap={6}>
              <Heading
                as="h4"
                size="lg"
                fontWeight="300"
                color="blue.solid"
                textAlign="center"
              >
                Setup Completo para Home Office
              </Heading>
              <List.Root gap={4}>
                {[
                  "💻 MacBook Pro ou notebook de alta performance",
                  "🖥️ Monitor 4K de 27 polegadas",
                  "☕ R$ 500/mês para coffee/coworking",
                  "🪑 Ajuda de custo para mobiliário",
                  "📚 Verba para livros e cursos",
                ].map((item) => (
                  <List.Item key={item} color="fg.muted" fontSize="md">
                    {item}
                  </List.Item>
                ))}
              </List.Root>
            </VStack>
          </Box>
        </SimpleGrid>
      </Section>

      {/* Jobs Section */}
      <Section
        id="vagas"
        title="Vagas Disponíveis"
        subtitle="5 oportunidades para profissionais que querem fazer a diferença. Todas as vagas são 100% remotas."
        centered
        variant="geometric"
      >
        <VStack gap={{ base: 8, md: 12 }}>
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </VStack>
      </Section>

      {/* Final CTA Section */}
      <Box
        as="section"
        py={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        {/* Dynamic Background */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="radial-gradient(ellipse 100% 60% at 50% 0%, {colors.blue.500/50}, transparent)"
          _dark={{
            bgGradient:
              "radial-gradient(ellipse 100% 60% at 50% 0%, {colors.blue.500/20}, transparent)",
          }}
          zIndex={-1}
        />

        <Container maxW="5xl">
          <VStack gap={{ base: 8, md: 12 }} textAlign="center">
            <VStack gap={6}>
              <Heading
                as="h2"
                size={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="300"
                lineHeight="none"
                letterSpacing="tight"
              >
                Não viu a vaga{" "}
                <Text
                  as="span"
                  bgGradient="linear-gradient(135deg, {colors.blue.500}, {colors.blue.700})"
                  bgClip="text"
                >
                  perfeita
                </Text>{" "}
                para você?
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="fg.muted"
                maxW="4xl"
                lineHeight="tall"
                fontWeight="400"
              >
                Estamos sempre em busca de talentos excepcionais. Envie seu
                currículo e conte como você pode contribuir com nossa missão
                de transformar dados em inteligência.
              </Text>
            </VStack>

            <VStack gap={6} w="full" maxW="lg">
              <Link
                href={`mailto:${CAREERS_EMAIL}?subject=Candidatura Espontânea&body=Olá! Gostaria de fazer parte do time da Shift+G. Segue meu currículo em anexo.`}
                passHref
              >
                <Button
                  size="xl"
                  px={{ base: 4, sm: 6 }}
                  py={8}
                  rounded="2xl"
                  fontWeight="300"
                  fontSize="xl"
                  variant="solid"
                  colorPalette="blue"
                  w={{ base: "full", sm: "auto" }}
                >
                  <Mail size={20} style={{ marginRight: "12px" }} />
                  Enviar Candidatura Espontânea
                  <ChevronRight size={20} style={{ marginLeft: "12px" }} />
                </Button>
              </Link>

              <Text fontSize="md" color="fg.muted" fontWeight="500">
                Resposta garantida em até 24 horas
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Page>
  );
}
