"use client";

import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  IconButton,
  Stack,
  Drawer,
  useDisclosure,
  Link as ChakraLink,
  Image,
  Span,
  SimpleGrid,
  VStack,
  HStack,
  Heading,
  Badge,
  Portal,
} from "@chakra-ui/react";
import {
  Menu,
  X,
  ChevronDown,
  Rocket,
  Globe,
  Lightbulb,
  Users,
  TrendingUp,
  Brain,
  ArrowRight,
  Star,
  Zap,
  Target,
  FileText,
  ChevronRight,
  Shield,
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
    title: "Soluções",
    subtitle: "Transforme seu negócio com tecnologia",
    items: [
      {
        icon: <Brain size={20} />,
        title: "Treinamento IA",
        description: "Capacite sua equipe para usar IA com segurança",
        href: "/treinamento-ia-para-sua-empresa",
        badge: "Popular",
        badgeColor: "blue",
      },
      {
        icon: <Target size={20} />,
        title: "Diagnóstico Inteligente",
        description: "Descubra onde aplicar IA no seu negócio",
        href: "/diagnostico-inteligente",
        badge: "Novo",
        badgeColor: "purple",
      },
      {
        icon: <Shield size={20} />,
        title: "Sentinela",
        description: "Vigilância operacional inteligente para DP",
        href: "/sentinela",
        badge: null,
        badgeColor: null,
      },
      {
        icon: <Rocket size={20} />,
        title: "Fábrica de Software",
        description: "Software sob medida para sua operação",
        href: "/fabrica-de-software",
        badge: null,
        badgeColor: null,
      },
    ],
    secondaryItems: [
      {
        title: "Transformação Digital",
        description: "Estratégia completa de digitalização",
        href: "/transformacao-digital",
      },
      {
        title: "Construa seu SaaS",
        description: "Desenvolvimento de plataformas SaaS escaláveis",
        href: "/fabrica-de-software/construa-seu-saas",
      },
      {
        title: "Seu negócio na Web",
        description: "Sites e e-commerce de alta performance",
        href: "/fabrica-de-software/seu-negocio-na-web",
      },
    ],
  },
  insights: {
    title: "Insights",
    subtitle: "Conteúdo estratégico para líderes",
    items: [
      {
        icon: <Lightbulb size={20} />,
        title: "ROI da Inteligência Artificial",
        description: "Como calcular o impacto da IA no seu negócio",
        href: "/insights/o-roi-da-inteligencia-artificial-como-calcular-o-impacto-da-ia-no-balanco-da-sua-empresa",
        badge: "Trending",
        badgeColor: "orange",
      },
      {
        icon: <Zap size={20} />,
        title: "RPA: Automação Inteligente",
        description: "Liberte sua equipe das tarefas repetitivas",
        href: "/insights/rpa-liberte-sua-equipe-das-tarefas-repetitivas-e-foque-no-que-realmente-importa",
        badge: null,
        badgeColor: null,
      },
      {
        icon: <Target size={20} />,
        title: "Transformação Digital",
        description: "Estratégia de sobrevivência empresarial",
        href: "/insights/transformacao-digital-mais-do-que-tecnologia-uma-estrategia-de-sobrevivencia",
        badge: null,
        badgeColor: null,
      },
      {
        icon: <FileText size={20} />,
        title: "Todos os Insights",
        description: "Explore todo nosso conteúdo estratégico",
        href: "/insights",
        badge: null,
        badgeColor: null,
      },
    ],
  },
  empresa: {
    title: "Empresa",
    subtitle: "Conheça a Shift+G",
    items: [
      {
        icon: <Users size={20} />,
        title: "Carreiras",
        description: "Faça parte do futuro da tecnologia",
        href: "/carreiras",
        badge: "Vagas abertas",
        badgeColor: "blue",
      },
      {
        icon: <Globe size={20} />,
        title: "Sobre Nós",
        description: "Nossa missão e valores",
        href: "/sobre",
        badge: null,
        badgeColor: null,
      },
    ],
  },
};

const mobileMenuItems = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Fábrica de Software", href: "/fabrica-de-software" },
  { label: "Transformação Digital", href: "/transformacao-digital" },
  { label: "Insights", href: "/insights" },
  { label: "Carreiras", href: "/carreiras" },
];

// Component for megamenu dropdown
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
        top="80px"
        left={0}
        right={0}
        bg="bg.subtle"
        backdropFilter="blur(20px)"
        borderBottom="1px"
        borderColor="border"
        zIndex="dropdown"
        py={8}
        onMouseLeave={onClose}
      >
        <Container maxW="7xl">
          <VStack gap={8} align="stretch">
            {/* Header */}
            <VStack gap={2} align="flex-start">
              <Heading size="lg" fontWeight="600" color="fg">
                {section.title}
              </Heading>
              <Text color="fg.muted" fontSize="md">
                {section.subtitle}
              </Text>
            </VStack>

            {/* Items Grid */}
            <SimpleGrid
              columns={{
                base: 1,
                md: section.items.length >= 4 ? 2 : section.items.length,
              }}
              gap={6}
              w="full"
            >
              {section.items.map((item: MenuItem) => (
                <Link key={item.title} href={item.href} passHref legacyBehavior>
                  <ChakraLink
                    p={4}
                    rounded="0"
                    bg="bg.subtle"
                    border="1px"
                    borderColor="border"
                    _hover={{
                      bg: "bg.muted",
                      borderColor: "blue.200",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                    display="block"
                    textDecoration="none"
                    onClick={onClose}
                  >
                    <HStack gap={4} align="flex-start">
                      <Box
                        p={3}
                        bg="blue.500/10"
                        color="blue.solid"
                        flexShrink={0}
                      >
                        {item.icon}
                      </Box>
                      <VStack gap={2} align="flex-start" flex={1}>
                        <HStack gap={2} align="center">
                          <Text fontWeight="medium" color="fg" fontSize="md">
                            {item.title}
                          </Text>
                          {item.badge && item.badgeColor && (
                            <Badge
                              colorPalette={item.badgeColor}
                              variant="subtle"
                              size="sm"
                              fontSize="xs"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </HStack>
                        <Text color="fg.muted" fontSize="sm" lineHeight="short">
                          {item.description}
                        </Text>
                      </VStack>
                      <Box color="fg.muted" flexShrink={0} mt={1}>
                        <ArrowRight size={16} />
                      </Box>
                    </HStack>
                  </ChakraLink>
                </Link>
              ))}
            </SimpleGrid>

            {/* Secondary Items - Links com menor destaque */}
            {section.secondaryItems && (
              <VStack gap={3} align="stretch" pt={2}>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="fg.subtle"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  Outras Soluções
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
                  {section.secondaryItems.map((item: SecondaryMenuItem) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      passHref
                      legacyBehavior
                    >
                      <ChakraLink
                        p={3}
                        bg="transparent"
                        border="1px"
                        borderColor="border/50"
                        _hover={{
                          bg: "bg.subtle",
                          borderColor: "border",
                        }}
                        transition="all 0.2s"
                        display="block"
                        textDecoration="none"
                        onClick={onClose}
                      >
                        <HStack gap={3} align="center">
                          <VStack gap={1} align="flex-start" flex={1}>
                            <Text fontWeight="500" color="fg" fontSize="sm">
                              {item.title}
                            </Text>
                            <Text
                              color="fg.muted"
                              fontSize="xs"
                              lineHeight="short"
                            >
                              {item.description}
                            </Text>
                          </VStack>
                          <Box color="fg.muted" flexShrink={0}>
                            <ChevronRight size={14} />
                          </Box>
                        </HStack>
                      </ChakraLink>
                    </Link>
                  ))}
                </SimpleGrid>
              </VStack>
            )}

            {/* CTA */}
            <Box
              p={6}
              bg="blue.500/10"
              border="1px"
              borderColor="blue.200"
              w="full"
            >
              <HStack justify="space-between" align="center">
                <VStack gap={1} align="flex-start">
                  <Text fontWeight="300" color="blue.solid" fontSize="md">
                    Pronto para transformar seu negócio?
                  </Text>
                  <Text color="fg.muted" fontSize="sm">
                    Fale com nossos especialistas e descubra como podemos ajudar
                  </Text>
                </VStack>
                <Link href="/contato" passHref>
                  <Button
                    size="sm"
                    colorPalette="blue"
                    variant="solid"
                    onClick={onClose}
                  >
                    Entre em contato
                    <ChevronRight size={16} />
                  </Button>
                </Link>
              </HStack>
            </Box>
          </VStack>
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
        zIndex="sticky"
        bg="bg/80"
        backdropFilter="blur(10px)"
        borderBottom="1px"
        borderColor="border"
      >
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            {/* Logo */}
            <Link href="/" passHref legacyBehavior>
              <ChakraLink
                display="flex"
                alignItems="center"
                gap={2}
                _hover={{ textDecoration: "none", opacity: 0.8 }}
                transition="opacity 0.2s"
                onClick={() => setActiveMenu(null)}
              >
                <Image src="/logo.png" alt="Shift G Logo" h={12} />
              </ChakraLink>
            </Link>

            {/* Desktop Menu */}
            <Stack
              direction="row"
              gap={1}
              align="center"
              display={{ base: "none", lg: "flex" }}
            >
              {/* Megamenu Items */}
              {Object.entries(menuSections).map(([key, section]) => (
                <Box key={key} position="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    px={4}
                    py={2}
                    fontSize="md"
                    fontWeight="400"
                    fontFamily="heading"
                    color={activeMenu === key ? "fg" : "fg.muted"}
                    bg={activeMenu === key ? "bg.muted" : "transparent"}
                    _hover={{
                      color: "fg",
                      bg: "bg.muted",
                    }}
                    transition="all 0.2s"
                    onMouseEnter={() => setActiveMenu(key)}
                  >
                    {section.title}
                    <ChevronDown size={14} style={{ marginLeft: "8px" }} />
                  </Button>
                  <MegaMenu
                    section={section}
                    isOpen={activeMenu === key}
                    onClose={() => setActiveMenu(null)}
                  />
                </Box>
              ))}

              <Link href="/contato" passHref>
                <Button
                  colorPalette="blue"
                  fontWeight="500"
                  size="sm"
                  variant="subtle"
                  onClick={() => setActiveMenu(null)}
                >
                  Entre em contato
                </Button>
              </Link>
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: "flex", lg: "none" }}
              onClick={onOpen}
              variant="ghost"
              aria-label="Abrir menu"
              size="sm"
            >
              <Menu size={20} />
            </IconButton>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer.Root open={open} onOpenChange={onClose}>
        <Drawer.Positioner>
          <Drawer.Backdrop />
          <Drawer.Content>
            <Drawer.CloseTrigger />
            <Drawer.Header borderBottomWidth="1px">
              <Heading size="md" fontWeight="300">
                Menu
              </Heading>
            </Drawer.Header>
            <Drawer.Body py={6}>
              <VStack gap={6} align="stretch">
                {/* Mobile Menu Sections */}
                {Object.entries(menuSections).map(([key, section]) => (
                  <VStack key={key} gap={3} align="stretch">
                    <Text
                      fontSize="sm"
                      fontWeight="300"
                      color="blue.solid"
                      textTransform="uppercase"
                      letterSpacing="wider"
                    >
                      {section.title}
                    </Text>
                    <VStack gap={2} align="stretch">
                      {section.items.map((item: MenuItem) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          passHref
                          legacyBehavior
                        >
                          <ChakraLink
                            p={3}
                            rounded="lg"
                            fontSize="md"
                            fontWeight="500"
                            color="fg.muted"
                            onClick={onClose}
                            _hover={{
                              color: "fg",
                              bg: "bg.muted",
                            }}
                            transition="all 0.2s"
                            display="flex"
                            alignItems="center"
                            gap={3}
                            textDecoration="none"
                          >
                            <Box color="blue.solid">{item.icon}</Box>
                            <VStack gap={1} align="flex-start" flex={1}>
                              <HStack gap={2} align="center">
                                <Text fontSize="md">{item.title}</Text>
                                {item.badge && item.badgeColor && (
                                  <Badge
                                    colorPalette={item.badgeColor}
                                    variant="subtle"
                                    size="sm"
                                    fontSize="xs"
                                  >
                                    {item.badge}
                                  </Badge>
                                )}
                              </HStack>
                              <Text
                                fontSize="xs"
                                color="fg.muted"
                                lineHeight="shorter"
                              >
                                {item.description}
                              </Text>
                            </VStack>
                          </ChakraLink>
                        </Link>
                      ))}

                      {/* Secondary Items no Mobile */}
                      {section.secondaryItems && (
                        <VStack gap={2} align="stretch" mt={2} pl={4}>
                          {section.secondaryItems.map(
                            (item: SecondaryMenuItem) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                passHref
                                legacyBehavior
                              >
                                <ChakraLink
                                  p={2}
                                  pl={3}
                                  rounded="md"
                                  fontSize="sm"
                                  fontWeight="400"
                                  color="fg.muted"
                                  onClick={onClose}
                                  _hover={{
                                    color: "fg",
                                    bg: "bg.subtle",
                                  }}
                                  transition="all 0.2s"
                                  display="flex"
                                  alignItems="center"
                                  gap={2}
                                  textDecoration="none"
                                  borderLeft="2px"
                                  borderColor="border"
                                >
                                  <VStack gap={0} align="flex-start" flex={1}>
                                    <Text fontSize="sm" fontWeight="500">
                                      {item.title}
                                    </Text>
                                    <Text
                                      fontSize="xs"
                                      color="fg.muted"
                                      lineHeight="shorter"
                                    >
                                      {item.description}
                                    </Text>
                                  </VStack>
                                  <Box color="fg.muted">
                                    <ChevronRight size={14} />
                                  </Box>
                                </ChakraLink>
                              </Link>
                            )
                          )}
                        </VStack>
                      )}
                    </VStack>
                  </VStack>
                ))}

                {/* Mobile CTA */}
                <Box mt={4}>
                  <Link href="/contato" passHref>
                    <Button
                      colorPalette="blue"
                      size="lg"
                      width="full"
                      onClick={onClose}
                      fontWeight="medium"
                    >
                      Entre em contato
                      <ChevronRight size={18} />
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
}
