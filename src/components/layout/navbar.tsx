"use client";

import { SITE_EMAIL } from "@/constants";
import {
  Box,
  Button,
  Drawer,
  Flex,
  IconButton,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { BrandLogo } from "./brand-logo";
import { Frame } from "./editorial";
import {
  NavigationContent,
  navigationGroups,
  type NavigationGroup,
} from "./navigation-content";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<NavigationGroup | null>(null);
  const [mobileGroup, setMobileGroup] = useState<NavigationGroup | null>(null);
  const header = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const cancelHover = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };
  const close = () => {
    cancelHover();
    setActive(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        cancelHover();
        setActive(null);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && active) {
        cancelHover();
        setActive(null);
        document.getElementById(`nav-trigger-${active}`)?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [active]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const reset = () => {
      cancelHover();
      setActive(null);
      setMobileOpen(false);
    };
    desktop.addEventListener("change", reset);
    return () => {
      cancelHover();
      desktop.removeEventListener("change", reset);
    };
  }, []);

  return (
    <>
      <Box
        asChild
        position="fixed"
        top={2}
        left={2}
        zIndex={2000}
        bg="blue.solid"
        color="white"
        p={4}
        transform="translateY(-150%)"
        _focus={{ transform: "translateY(0)" }}
      >
        <a href="#conteudo">Pular para o conteúdo</a>
      </Box>
      {active && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.400"
          zIndex={99}
          aria-hidden="true"
          display={{ base: "none", lg: "block" }}
        />
      )}
      <Box
        as="header"
        ref={header}
        position="sticky"
        top={0}
        zIndex={100}
        bg="white"
        color="black"
        borderBottom="1px solid"
        borderColor="blackAlpha.200"
        onMouseEnter={cancelHover}
        onMouseLeave={() => {
          cancelHover();
          hoverTimer.current = setTimeout(() => {
            if (
              !document
                .querySelector("[data-mega-panel]")
                ?.contains(document.activeElement)
            )
              setActive(null);
          }, 180);
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            cancelHover();
            setActive(null);
          }
        }}
      >
        <Frame wide>
          <Flex
            h={{ base: 18, lg: 20 }}
            align="center"
            justify="space-between"
            gap={6}
          >
            <Flex align="center" gap={6}>
              <Box
                asChild
                flexShrink={0}
                w={{ base: "168px", xl: "200px" }}
              >
                <Link href="/" aria-label="SHIFT+G — início" onClick={close}>
                  <BrandLogo />
                </Link>
              </Box>
              <Text
                display={{ base: "none", "2xl": "block" }}
                fontFamily="mono"
                fontSize="xs"
                borderLeft="1px solid"
                borderColor="blackAlpha.200"
                pl={6}
                lineHeight={1.7}
                color="blackAlpha.700"
              >
                ESTRATÉGIA.
                <br />
                INTELIGÊNCIA. EXECUÇÃO.
              </Text>
            </Flex>
            <Flex
              as="nav"
              aria-label="Navegação principal"
              align="center"
              h="full"
              gap={{ lg: 1, xl: 3 }}
              display={{ base: "none", lg: "flex" }}
            >
              {navigationGroups.map((group) => (
                <Fragment key={group.id}>
                  <Button
                    id={`nav-trigger-${group.id}`}
                    variant="ghost"
                    h="full"
                    rounded="none"
                    px={{ lg: 4, xl: 5 }}
                    fontSize="sm"
                    fontWeight={500}
                    bg={active === group.id ? "blue.solid" : "transparent"}
                    color={active === group.id ? "white" : "black"}
                    _hover={{ bg: active === group.id ? "blue.solid" : "off" }}
                    aria-expanded={active === group.id}
                    aria-controls={`nav-panel-${group.id}`}
                    onMouseEnter={() => {
                      cancelHover();
                      hoverTimer.current = setTimeout(
                        () => setActive(group.id),
                        150,
                      );
                    }}
                    onMouseLeave={cancelHover}
                    onClick={() => {
                      cancelHover();
                      setActive(active === group.id ? null : group.id);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown") {
                        event.preventDefault();
                        cancelHover();
                        setActive(group.id);
                        requestAnimationFrame(() =>
                          document
                            .querySelector<HTMLAnchorElement>(
                              `#nav-panel-${group.id} a`,
                            )
                            ?.focus(),
                        );
                      }
                    }}
                  >
                    {group.label}
                    <Box
                      transform={
                        active === group.id ? "rotate(180deg)" : "none"
                      }
                    >
                      <ChevronDown size={14} aria-hidden="true" />
                    </Box>
                  </Button>
                  {active === group.id && (
                    <Box
                      id={`nav-panel-${group.id}`}
                      data-mega-panel
                      aria-label={group.label}
                      position="absolute"
                      top="100%"
                      left={0}
                      right={0}
                      bg="white"
                      borderTop="1px solid"
                      borderBottom="3px solid"
                      borderColor="blue.solid"
                      maxH="calc(100dvh - 81px)"
                      overflowY="auto"
                    >
                      <Box py={8}>
                        <Frame>
                          <NavigationContent
                            group={group.id}
                            onNavigate={close}
                            pathname={pathname}
                          />
                        </Frame>
                      </Box>
                      <Box
                        bg="off"
                        borderTop="1px solid"
                        borderColor="blackAlpha.200"
                        py={4}
                      >
                        <Frame>
                          <Flex justify="space-between" align="center" gap={6}>
                            <Text
                              fontFamily="mono"
                              fontSize="xs"
                              color="blackAlpha.700"
                            >
                              TRANSFORMAÇÃO DIGITAL COM IA E GOVERNANÇA DE
                              DADOS.
                            </Text>
                            <Flex gap={6} fontSize="sm">
                              <Box asChild _hover={{ color: "blue.solid" }}>
                                <Link href="/contato" onClick={close}>
                                  Fale com a SHIFT+G ↗
                                </Link>
                              </Box>
                              <Button
                                variant="plain"
                                size="xs"
                                onClick={() => {
                                  setActive(null);
                                  document
                                    .getElementById(`nav-trigger-${group.id}`)
                                    ?.focus();
                                }}
                                aria-label="Fechar megamenu"
                              >
                                Fechar <X size={14} />
                              </Button>
                            </Flex>
                          </Flex>
                        </Frame>
                      </Box>
                    </Box>
                  )}
                </Fragment>
              ))}
              <Box
                asChild
                fontSize="sm"
                fontWeight={500}
                px={4}
                py={4}
                _hover={{ color: "blue.solid" }}
              >
                <Link
                  href="/treinamento-ia-para-sua-empresa"
                  onClick={close}
                  aria-current={
                    pathname === "/treinamento-ia-para-sua-empresa"
                      ? "page"
                      : undefined
                  }
                >
                  IA in company
                </Link>
              </Box>
              <Button
                asChild
                bg="black"
                color="white"
                rounded="none"
                h={12}
                px={5}
                ml={3}
                _hover={{ bg: "blue.solid" }}
              >
                <Link href="/contato" onClick={close}>
                  Conversa estratégica{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </Button>
            </Flex>
            <Button
              display={{ base: "flex", lg: "none" }}
              id="mobile-menu-trigger"
              aria-label="Abrir menu"
              variant="ghost"
              rounded="none"
              onClick={() => {
                setActive(null);
                setMobileOpen(true);
              }}
              gap={3}
            >
              <Text fontFamily="mono" fontSize="xs">
                MENU
              </Text>
              <Menu size={22} />
            </Button>
          </Flex>
        </Frame>
      </Box>
      <Drawer.Root
        open={mobileOpen}
        finalFocusEl={() => document.getElementById("mobile-menu-trigger")}
        onOpenChange={(details) => setMobileOpen(details.open)}
        size="full"
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="white" color="black" rounded="none">
              <Drawer.Header borderBottomWidth="1px" pr={16}>
                <Drawer.Title fontWeight={500}>Explore a SHIFT+G</Drawer.Title>
              </Drawer.Header>
              <Drawer.CloseTrigger
                asChild
                position="absolute"
                top={3}
                right={4}
              >
                <IconButton
                  aria-label="Fechar menu"
                  variant="ghost"
                  rounded="none"
                >
                  <X />
                </IconButton>
              </Drawer.CloseTrigger>
              <Drawer.Body px={6}>
                <Stack as="nav" aria-label="Navegação móvel" gap={0} py={4}>
                  {navigationGroups.map((group, index) => (
                    <Box
                      key={group.id}
                      borderBottom="1px solid"
                      borderColor="blackAlpha.200"
                    >
                      <Button
                        variant="plain"
                        w="full"
                        justifyContent="space-between"
                        rounded="none"
                        h="auto"
                        py={6}
                        fontSize="2xl"
                        fontWeight={500}
                        aria-expanded={mobileGroup === group.id}
                        aria-controls={`mobile-nav-${group.id}`}
                        onClick={() =>
                          setMobileGroup(
                            mobileGroup === group.id ? null : group.id,
                          )
                        }
                      >
                        <Flex align="center" gap={4}>
                          <Text
                            fontFamily="mono"
                            fontSize="xs"
                            color="blue.solid"
                          >
                            0{index + 1}
                          </Text>
                          {group.label}
                        </Flex>
                        <Box
                          transform={
                            mobileGroup === group.id ? "rotate(180deg)" : "none"
                          }
                        >
                          <ChevronDown size={20} />
                        </Box>
                      </Button>
                      {mobileGroup === group.id && (
                        <Box id={`mobile-nav-${group.id}`} pb={6}>
                          <Text fontSize="sm" color="blackAlpha.700" mb={5}>
                            {group.description}
                          </Text>
                          <NavigationContent
                            group={group.id}
                            onNavigate={close}
                            mobile
                            pathname={pathname}
                          />
                        </Box>
                      )}
                    </Box>
                  ))}
                  <Button
                    asChild
                    bg="blue.solid"
                    color="white"
                    rounded="none"
                    mt={8}
                    minH={14}
                    h="auto"
                    py={4}
                    whiteSpace="normal"
                  >
                    <Link href="/contato" onClick={close}>
                      Agendar uma conversa estratégica{" "}
                      <ArrowUpRight size={18} />
                    </Link>
                  </Button>
                  <Box asChild mt={6} fontSize="sm">
                    <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                  </Box>
                  <Text
                    mt={4}
                    fontFamily="mono"
                    fontSize="xs"
                    color="blackAlpha.700"
                  >
                    IA & DADOS · ATUAÇÃO NACIONAL
                  </Text>
                </Stack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}
