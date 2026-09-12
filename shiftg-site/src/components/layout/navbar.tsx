"use client";
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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { Frame } from "./editorial";

const links = [
  ["Transformação digital", "/transformacao-digital"],
  ["Ecossistema", "/ecossistema"],
  ["IA in company", "/treinamento-ia-para-sua-empresa"],
  ["A SHIFT+G", "/sobre"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={100}
        bg="white"
        color="black"
        borderBottom="1px solid"
        borderColor="blackAlpha.200"
      >
        <Frame wide>
          <Flex
            h={{ base: 20, lg: 24 }}
            align="center"
            justify="space-between"
            gap={6}
          >
            <Box
              asChild
              flexShrink={0}
              w={{ base: "140px", xl: "168px" }}
              css={{
                "& svg": { width: "100%", height: "auto", maxHeight: "60px" },
              }}
            >
              <Link href="/" aria-label="SHIFT+G — início">
                <BrandLogo />
              </Link>
            </Box>
            <Flex
              as="nav"
              aria-label="Navegação principal"
              align="center"
              gap={{ lg: 5, xl: 8 }}
              display={{ base: "none", lg: "flex" }}
            >
              {links.map(([label, href]) => (
                <Box
                  asChild
                  key={href}
                  fontSize="sm"
                  fontWeight={500}
                  color={pathname.startsWith(href) ? "blue.solid" : "black"}
                  _hover={{ color: "blue.solid" }}
                >
                  <Link
                    href={href}
                    aria-current={
                      pathname.startsWith(href) ? "page" : undefined
                    }
                  >
                    {label}
                  </Link>
                </Box>
              ))}
              <Button
                asChild
                bg="black"
                color="white"
                rounded="none"
                h={12}
                px={5}
                _hover={{ bg: "blue.solid" }}
              >
                <Link href="/contato">Conversa estratégica</Link>
              </Button>
            </Flex>
            <IconButton
              display={{ base: "flex", lg: "none" }}
              aria-label="Abrir menu"
              variant="ghost"
              rounded="none"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>
          </Flex>
        </Frame>
      </Box>
      <Drawer.Root
        open={open}
        onOpenChange={(details) => setOpen(details.open)}
        size="full"
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="white" color="black" rounded="none">
              <Drawer.Header borderBottomWidth="1px">
                <Drawer.Title>Explore a SHIFT+G</Drawer.Title>
              </Drawer.Header>
              <Drawer.CloseTrigger asChild>
                <IconButton aria-label="Fechar menu" variant="ghost">
                  <X />
                </IconButton>
              </Drawer.CloseTrigger>
              <Drawer.Body>
                <Stack as="nav" aria-label="Navegação móvel" gap={0} py={6}>
                  {links.map(([label, href]) => (
                    <Box
                      asChild
                      key={href}
                      py={6}
                      borderBottom="1px solid"
                      borderColor="blackAlpha.200"
                      fontSize="2xl"
                    >
                      <Link href={href} onClick={() => setOpen(false)}>
                        {label}
                      </Link>
                    </Box>
                  ))}
                  <Button
                    asChild
                    bg="blue.solid"
                    color="white"
                    rounded="none"
                    mt={8}
                    minH={14}
                  >
                    <Link href="/contato" onClick={() => setOpen(false)}>
                      Agendar uma conversa estratégica
                    </Link>
                  </Button>
                  <Text mt={8} fontFamily="mono" fontSize="sm">
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
