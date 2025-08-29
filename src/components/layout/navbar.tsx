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
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Para Quem", href: "#publico" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Casos de Uso", href: "#casos" },
];

export function Navbar() {
  const { open, onOpen, onClose } = useDisclosure();

  return (
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
            >
              <Text
                fontSize="2xl"
                fontWeight="800"
                bgGradient="linear-gradient(0deg, {colors.blue.500}, {colors.blue.600})"
                bgClip="text"
              >
                SHIFT+G
              </Text>
              <Text
                fontSize="sm"
                fontWeight="600"
                color="fg.muted"
                display={{ base: "none", sm: "block" }}
              >
                AI & Data
              </Text>
            </ChakraLink>
          </Link>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            gap={1}
            align="center"
            display={{ base: "none", lg: "flex" }}
          >
            {menuItems.map((item) => (
              <ChakraLink
                key={item.label}
                as={Link}
                href={item.href}
                px={4}
                py={2}
                rounded="md"
                fontSize="sm"
                fontWeight="500"
                color="fg.muted"
                                 _hover={{
                   color: "fg",
                   bg: "bg.muted",
                 }}
                transition="all 0.2s"
              >
                {item.label}
              </ChakraLink>
            ))}
                         <Link href="#contato" passHref>
               <Button
                 size="sm"
                 colorPalette="blue"
                 ml={2}
                 fontWeight="600"
               >
                 Fale com um especialista
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

      {/* Mobile Drawer */}
      <Drawer.Root open={open} onOpenChange={onClose}>
        <Drawer.Positioner>
          <Drawer.Backdrop />
          <Drawer.Content>
            <Drawer.CloseTrigger />
          <Drawer.Header borderBottomWidth="1px">Menu</Drawer.Header>
          <Drawer.Body>
            <Stack gap={2} mt={4}>
              {menuItems.map((item) => (
                <ChakraLink
                  key={item.label}
                  as={Link}
                  href={item.href}
                  px={4}
                  py={3}
                  rounded="md"
                  fontSize="md"
                  fontWeight="500"
                  color="fg.muted"
                  onClick={onClose}
                                   _hover={{
                   color: "fg",
                   bg: "bg.muted",
                 }}
                  transition="all 0.2s"
                >
                  {item.label}
                </ChakraLink>
              ))}
                             <Link href="#contato" passHref>
                 <Button
                   colorPalette="blue"
                   size="md"
                   mt={4}
                   width="full"
                   onClick={onClose}
                   fontWeight="600"
                 >
                   Fale com um especialista
                 </Button>
               </Link>
            </Stack>
          </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  );
}
