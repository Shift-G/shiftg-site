"use client";

import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Link as ChakraLink,
  Image,
  SimpleGrid,
  VStack,
  HStack,
  Heading,
  Badge,
  Portal,
  Drawer
} from "@chakra-ui/react";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Terminal,
  Cpu,
  ShieldAlert,
  HardDrive,
  Database,
  Network,
  Activity,
  FileCode,
  Fingerprint,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  icon?: React.ReactElement;
  title: string;
  description: string;
  href: string;
  badge?: string | null;
  badgeColor?: string | null;
}

interface SecondaryMenuItem {
  title: string;
  description: string;
  href: string;
}

interface MenuSection {
  title: string;
  subtitle: string;
  items: MenuItem[];
  secondaryItems?: SecondaryMenuItem[];
}

const menuSections: Record<string, MenuSection> = {
  solucoes: {
    title: "OPERAÇÕES",
    subtitle: "Frameworks operacionais sob licença",
    items: [
      {
        icon: <Cpu size={20} />,
        title: "Treinamento de IA para sua Empresa",
        description: "Capacitação estratégica em Inteligência Artificial para equipes corporativas.",
        href: "/treinamento-ia-para-sua-empresa",
        badge: "PRIORIDADE",
        badgeColor: "blue",
      },
      {
        icon: <Activity size={20} />,
        title: "Diagnóstico Inteligente",
        description: "Mapeamento tático de gargalos e oportunidades",
        href: "/diagnostico-inteligente",
        badge: "NOVO MÓDULO",
        badgeColor: "gray",
      },
      {
        icon: <ShieldAlert size={20} />,
        title: "Sentinela",
        description: "Sistema de monitoramento e auditoria em tempo real",
        href: "/sentinela",
      },
      {
        icon: <HardDrive size={20} />,
        title: "Fábrica de Software",
        description: "Desenvolvimento puro de software B2B escalável",
        href: "/fabrica-de-software",
      },
    ],
    secondaryItems: [
      {
        title: "Transformação Digital",
        description: "Transição arquitetural de negócios locais",
        href: "/transformacao-digital",
      },
      {
        title: "SaaS Frameworks",
        description: "Matrizes de infraestrutura para novas startups",
        href: "/fabrica-de-software/construa-seu-saas",
      },
    ],
  },
  insights: {
    title: "INTELIGÊNCIA",
    subtitle: "Dossiês analíticos para C-Levels",
    items: [
      {
        icon: <Database size={20} />,
        title: "R.O.I da Inteligência Artificial",
        description: "Cálculo técnico do impacto de I.A no balanço",
        href: "/insights/o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa",
        badge: "EM ALTA",
        badgeColor: "orange",
      },
      {
        icon: <Network size={20} />,
        title: "R.P.A. Automático",
        description: "Extração de valor via automações programáveis",
        href: "/insights/rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa",
      },
      {
        icon: <Terminal size={20} />,
        title: "Sobrevivência Digital",
        description: "Mais que tecnologia, uma pauta de mitigação de risco",
        href: "/insights/transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia",
      },
      {
        icon: <FileCode size={20} />,
        title: "Menu Root (Todos os Logs)",
        description: "Acesse o diretório completo de relatórios logísticos",
        href: "/insights",
      },
    ],
  },
  empresa: {
    title: "MATRIZ",
    subtitle: "Governança da Shift+G Company",
    items: [
      {
        icon: <Users size={20} />,
        title: "Alocação Tática (Carreiras)",
        description: "Integração a nossa base de engenharia",
        href: "/carreiras",
        badge: "VAGAS",
        badgeColor: "blue",
      },
      {
        icon: <Fingerprint size={20} />,
        title: "Diretrizes Corporativas",
        description: "Manifesto operacional e compliance",
        href: "/sobre",
      },
    ],
  },
};

// MegaMenu Component brutalist
function MegaMenu({
  section,
  isOpen,
  onClose,
}: {
  section: MenuSection;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <Portal>
      <Box
        position="fixed"
        top={{ base: "64px", lg: "80px" }}
        left={0}
        right={0}
        bg="white"
        borderBottom="1px solid"
        borderColor="blackAlpha.200"
        zIndex={1200}
        py={{ base: 6, lg: 12 }}
        onMouseLeave={onClose}
        boxShadow="0px 10px 30px -10px rgba(0,0,0,0.1)" // Slight shadow for dropdown depth, or keep rigid
      >
        <Container maxW="7xl">
          <HStack align="flex-start" gap={12}>
            {/* Context Left */}
            <VStack gap={4} align="flex-start" w="300px" flexShrink={0} display={{ base: "none", lg: "flex" }}>
              <Box w="8px" h="8px" bg="blue.solid" />
              <Heading size="2xl" fontWeight="800" color="fg" letterSpacing="-1px">
                {section.title}
              </Heading>
              <Text color="fg.muted" fontSize="md" lineHeight="1.6" fontFamily="serif" fontStyle="italic">
                {section.subtitle}
              </Text>

              {/* Call to arm for this section */}
              <Box mt={6} pt={6} borderTop="1px solid" borderColor="blackAlpha.200" w="full">
                <Text fontFamily="mono" fontSize="2xs" color="fg.muted" mb={2} textTransform="uppercase">Ação Imediata</Text>
                <Link href="/contato" passHref>
                  <HStack
                    color="blue.solid"
                    fontWeight={700}
                    fontSize="sm"
                    _hover={{ color: "fg" }}
                    transition="color 0.2s"
                    onClick={onClose}
                  >
                    <Text>Solicitar Briefing</Text>
                    <ChevronRight size={16} />
                  </HStack>
                </Link>
              </Box>
            </VStack>

            {/* Items Grid */}
            <VStack align="stretch" gap={0} flex={1} border="1px solid" borderColor="blackAlpha.200" bg="blackAlpha.200">
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap="1px"
                w="full"
              >
                {section.items.map((item: MenuItem) => (
                  <Link key={item.title} href={item.href} passHref legacyBehavior>
                    <ChakraLink
                      p={6}
                      bg="white"
                      _hover={{
                        bg: "stone",
                      }}
                      transition="background 0.2s"
                      display="block"
                      textDecoration="none"
                      onClick={onClose}
                    >
                      <HStack gap={4} align="flex-start">
                        <Box
                          color="blue.solid"
                          flexShrink={0}
                        >
                          {item.icon}
                        </Box>
                        <VStack gap={1} align="flex-start" flex={1}>
                          <HStack gap={2} align="center">
                            <Text fontWeight="700" color="fg" fontSize="md">
                              {item.title}
                            </Text>
                            {item.badge && (
                              <Badge
                                variant="solid"
                                bg="fg"
                                color="white"
                                rounded="none"
                                px={1}
                                fontSize="2xs"
                                fontFamily="mono"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </HStack>
                          <Text color="fg.muted" fontSize="sm" lineHeight="1.6">
                            {item.description}
                          </Text>
                        </VStack>
                      </HStack>
                    </ChakraLink>
                  </Link>
                ))}
              </SimpleGrid>
            </VStack>

            {/* Secondary Items Column */}
            {section.secondaryItems && (
              <VStack gap={0} align="stretch" w="250px" flexShrink={0} display={{ base: "none", lg: "flex" }} border="1px solid" borderColor="blackAlpha.200" bg="blackAlpha.200">
                <Box bg="stone" p={4} borderBottom="1px solid" borderColor="blackAlpha.200">
                  <Text fontFamily="mono" fontSize="2xs" fontWeight="700" color="fg" textTransform="uppercase">
                    Protocolos Extras
                  </Text>
                </Box>
                <VStack gap="1px" align="stretch">
                  {section.secondaryItems.map((item: SecondaryMenuItem) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      passHref
                      legacyBehavior
                    >
                      <ChakraLink
                        p={4}
                        bg="white"
                        _hover={{
                          bg: "stone",
                        }}
                        transition="background 0.2s"
                        display="block"
                        textDecoration="none"
                        onClick={onClose}
                      >
                        <VStack gap={1} align="flex-start">
                          <Text fontWeight="600" color="fg" fontSize="sm">
                            {item.title}
                          </Text>
                          <Text
                            color="fg.muted"
                            fontSize="xs"
                            lineHeight="1.5"
                          >
                            {item.description}
                          </Text>
                        </VStack>
                      </ChakraLink>
                    </Link>
                  ))}
                </VStack>
              </VStack>
            )}
          </HStack>
        </Container>
      </Box>
    </Portal>
  );
}

export function Navbar() {
  const { open, onOpen, onClose } = useDisclosure();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <Box
        as="nav"
        position="sticky"
        top={0}
        zIndex={1100}
        bg="white"
        borderBottom="1px solid"
        borderColor="blackAlpha.200"
      >
        <Container maxW="7xl" py={0}>
          <Flex justify="space-between" align="stretch" h={{ base: "64px", lg: "80px" }}>
            {/* Logo */}
            <Flex align="center">
              <Link href="/" passHref legacyBehavior>
                <ChakraLink
                  display="flex"
                  alignItems="center"
                  gap={2}
                  _hover={{ textDecoration: "none", opacity: 0.8 }}
                  transition="opacity 0.2s"
                  onClick={() => setActiveMenu(null)}
                >
                  <Image src="/logo-shift-gnosis.png" alt="Shift G Logo" h={12} />
                </ChakraLink>
              </Link>
            </Flex>

            {/* Desktop Menu */}
            <HStack
              gap={0}
              align="stretch"
              display={{ base: "none", lg: "flex" }}
            >
              {Object.entries(menuSections).map(([key, section]) => (
                <Box key={key} position="relative" display="flex">
                  <Button
                    variant="ghost"
                    h="full"
                    rounded="none"
                    px={6}
                    fontSize="sm"
                    fontWeight="700"
                    fontFamily="mono"
                    textTransform="uppercase"
                    color={activeMenu === key ? "white" : "fg"}
                    bg={activeMenu === key ? "blue.solid" : "transparent"}
                    _hover={{
                      color: activeMenu === key ? "white" : "blue.solid",
                      bg: activeMenu === key ? "blue.solid" : "stone",
                    }}
                    transition="none"
                    onMouseEnter={() => setActiveMenu(key)}
                  >
                    {section.title}
                  </Button>
                  <MegaMenu
                    section={section}
                    isOpen={activeMenu === key}
                    onClose={() => setActiveMenu(null)}
                  />
                </Box>
              ))}

              <Flex align="center" pl={6} ml={2} borderLeft="1px solid" borderColor="blackAlpha.200">
                <Link href="/contato" passHref>
                  <Button
                    bg="fg"
                    color="white"
                    rounded="none"
                    px={8}
                    h="48px"
                    fontWeight="700"
                    fontSize="sm"
                    fontFamily="mono"
                    textTransform="uppercase"
                    _hover={{ bg: "blue.solid" }}
                    onClick={() => setActiveMenu(null)}
                  >
                    Fale Conosco
                  </Button>
                </Link>
              </Flex>
            </HStack>

            {/* Mobile Menu Button */}
            <Flex align="center" display={{ base: "flex", lg: "none" }}>
              <IconButton
                onClick={onOpen}
                variant="ghost"
                aria-label="Abrir menu"
                rounded="none"
                color="fg"
              >
                <Menu size={24} />
              </IconButton>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer.Root open={open} onOpenChange={onClose} placement="end" size="full">
        <Drawer.Backdrop />
        <Drawer.Content bg="white" rounded="none">
          <Drawer.CloseTrigger color="fg" />
          <Drawer.Header borderBottom="1px solid" borderColor="blackAlpha.200" py={4}>
            <Heading size="md" fontWeight="800" fontFamily="mono" textTransform="uppercase">
              MENU OVERRIDE
            </Heading>
          </Drawer.Header>
          <Drawer.Body px={0} py={0} overflowY="auto">
            <VStack gap={0} align="stretch" bg="blackAlpha.200">
              {Object.entries(menuSections).map(([key, section]) => (
                <Box key={key} bg="white" borderBottom="1px solid" borderColor="blackAlpha.200" pb={4}>
                  <Box p={4} bg="stone">
                    <Text
                      fontSize="sm"
                      fontWeight="700"
                      fontFamily="mono"
                      color="blue.solid"
                      textTransform="uppercase"
                    >
                      {section.title}
                    </Text>
                  </Box>
                  <VStack gap={0} align="stretch">
                    {section.items.map((item: MenuItem) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        passHref
                        legacyBehavior
                      >
                        <ChakraLink
                          p={4}
                          borderBottom="1px solid"
                          borderColor="blackAlpha.100"
                          _last={{ borderBottom: "none" }}
                          color="fg"
                          onClick={onClose}
                          _hover={{ bg: "stone" }}
                          display="flex"
                          alignItems="flex-start"
                          gap={4}
                          textDecoration="none"
                        >
                          <Box color="blue.solid" mt={1}>{item.icon}</Box>
                          <VStack gap={1} align="flex-start" flex={1}>
                            <HStack gap={2} align="center">
                              <Text fontSize="md" fontWeight="700">{item.title}</Text>
                              {item.badge && (
                                <Badge
                                  bg="fg"
                                  color="white"
                                  variant="solid"
                                  rounded="none"
                                  px={1}
                                  fontSize="2xs"
                                  fontFamily="mono"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                            </HStack>
                            <Text
                              fontSize="sm"
                              color="fg.muted"
                              lineHeight="1.5"
                            >
                              {item.description}
                            </Text>
                          </VStack>
                        </ChakraLink>
                      </Link>
                    ))}
                  </VStack>
                </Box>
              ))}

              {/* Mobile CTA */}
              <Box p={6} bg="white">
                <Link href="/contato" passHref>
                  <Button
                    bg="fg"
                    color="white"
                    size="lg"
                    width="full"
                    rounded="none"
                    onClick={onClose}
                    fontWeight="700"
                    fontFamily="mono"
                    textTransform="uppercase"
                    _hover={{ bg: "blue.solid" }}
                  >
                    Fale Conosco
                  </Button>
                </Link>
              </Box>
            </VStack>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
