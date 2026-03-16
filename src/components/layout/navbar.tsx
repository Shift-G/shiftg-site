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

                  <svg width="222" height="48" viewBox="0 0 3022 1335" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3022 615.34V720.706C2996.3 1064.98 2708.13 1335 2357.19 1335C1989.25 1335 1691.12 1036.04 1691.12 667.421C1691.12 297.335 1990.74 0 2357.19 0V104.161C2045.4 104.161 1795.19 357.642 1795.19 667.421C1795.19 978.665 2046.88 1230.84 2357.19 1230.84C2650.47 1230.84 2890.29 1006.31 2915.7 719.501H2356.71V615.34H3022Z" fill="#003FCD" />
                    <path d="M146.645 904.41C104.236 904.41 69.8628 894.588 43.5247 874.946C17.6331 854.857 3.12485 827.403 0 792.582H58.2562C60.9346 810.885 69.8628 825.84 85.0407 837.447C100.665 849.054 121.646 854.857 147.984 854.857C172.983 854.857 191.509 849.5 203.562 838.786C216.061 828.072 222.311 815.796 222.311 801.957C222.311 783.207 214.945 770.484 200.214 763.788C185.482 756.645 163.385 751.288 133.922 747.717C98.6561 743.699 69.4164 734.101 46.2032 718.923C22.99 703.745 11.3834 680.978 11.3834 650.621C11.3834 623.39 22.7668 600.846 45.5336 582.989C68.3004 565.132 99.3257 556.204 138.61 556.204C177.447 556.204 208.026 565.132 230.346 582.989C252.667 600.399 265.389 625.399 268.514 657.987H212.936C211.597 641.916 203.785 629.193 189.5 619.819C175.661 609.997 158.252 605.087 137.27 605.087C115.396 605.087 98.4329 609.328 86.3799 617.81C74.3269 625.845 68.3004 636.559 68.3004 649.952C68.3004 663.344 74.9965 674.505 88.3887 683.433C102.227 691.915 123.878 697.495 153.341 700.174C176.554 702.852 197.759 707.316 216.954 713.566C236.15 719.816 251.328 729.637 262.488 743.03C274.094 756.422 279.898 775.172 279.898 799.278C280.344 819.367 274.764 837.447 263.157 853.518C251.997 869.143 236.373 881.642 216.285 891.017C196.196 899.945 172.983 904.41 146.645 904.41Z" fill="black" />
                    <path d="M319.143 896.374V414.243H375.39V614.462C384.319 597.498 399.05 583.659 419.585 572.945C440.12 561.784 462.663 556.204 487.216 556.204C527.839 556.204 558.641 568.48 579.622 593.033C601.05 617.586 611.763 651.961 611.763 696.156V896.374H555.516V703.522C555.516 673.612 548.15 650.398 533.419 633.881C519.134 617.363 499.045 609.105 473.154 609.105C455.297 609.105 439.004 613.122 424.272 621.158C409.541 629.193 397.711 641.023 388.783 656.648C379.855 672.273 375.39 691.469 375.39 714.236V896.374H319.143Z" fill="black" />
                    <path d="M781.583 505.312C768.191 505.312 757.031 500.848 748.103 491.92C739.174 482.992 734.71 472.278 734.71 459.778C734.71 446.832 739.174 436.118 748.103 427.636C757.031 418.707 768.191 414.243 781.583 414.243C794.529 414.243 805.466 418.707 814.394 427.636C823.769 436.118 828.456 446.832 828.456 459.778C828.456 472.278 823.769 482.992 814.394 491.92C805.466 500.848 794.529 505.312 781.583 505.312ZM651.678 896.374V848.161H757.477V629.193C757.477 618.033 751.897 612.453 740.737 612.453H663.062V564.24H754.129C793.859 564.24 813.724 584.105 813.724 623.836V848.161H919.523V896.374H651.678Z" fill="black" />
                    <path d="M967.473 1043.69V992.131H1008.32C1025.28 992.131 1037.34 988.783 1044.48 982.086C1051.62 975.39 1055.19 963.56 1055.19 946.596V612.453H972.83V564.24H1055.19V511.339C1055.19 476.965 1063.45 452.189 1079.97 437.011C1096.49 421.832 1121.48 414.243 1154.96 414.243H1234.65V465.135H1158.31C1141.8 465.135 1129.74 468.706 1122.15 475.849C1115.01 482.545 1111.44 494.375 1111.44 511.339V564.24H1234.65V612.453H1111.44V946.596C1111.44 980.97 1103.18 1005.75 1086.66 1020.92C1070.15 1036.1 1045.37 1043.69 1012.34 1043.69H967.473Z" fill="black" />
                    <path d="M1462.72 896.374C1432.37 896.374 1408.49 889.008 1391.08 874.276C1373.67 859.545 1364.96 832.983 1364.96 794.591V612.453H1280.59V564.24H1330.81C1353.58 564.24 1366.75 553.079 1370.32 530.758L1379.69 479.197H1421.21V564.24H1553.79V612.453H1421.21V794.591C1421.21 813.34 1425.45 826.51 1433.93 834.099C1442.86 841.688 1458.04 845.483 1479.46 845.483H1553.79V896.374H1462.72Z" fill="black" />
                    <path d="M1613.83 714.791V677.79H1576.83V658.486H1613.83V621.486H1633.13V658.486H1670.13V677.79H1633.13V714.791H1613.83Z" fill="#003FCD" />
                  </svg>

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
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
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
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}
