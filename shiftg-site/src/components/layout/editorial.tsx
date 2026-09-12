import type { ReactNode } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Frame({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <Container maxW={wide ? "full" : "7xl"} px={{ base: 6, md: 10, xl: 16 }}>
      {children}
    </Container>
  );
}

export function EditorialSection({
  children,
  id,
  dark = false,
  muted = false,
}: {
  children: ReactNode;
  id?: string;
  dark?: boolean;
  muted?: boolean;
}) {
  return (
    <Box
      as="section"
      id={id}
      bg={dark ? "black" : muted ? "off" : "white"}
      color={dark ? "white" : "black"}
      py={{ base: 16, md: 24 }}
      borderTop="1px solid"
      borderColor={dark ? "whiteAlpha.300" : "blackAlpha.200"}
      scrollMarginTop="100px"
    >
      <Frame>{children}</Frame>
    </Box>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <HStack gap={3} mb={6} color={light ? "whiteAlpha.800" : "blue.solid"}>
      <Box w={2} h={2} bg="currentColor" flexShrink={0} />
      <Text
        fontFamily="mono"
        fontSize="sm"
        letterSpacing="0.08em"
        textTransform="uppercase"
      >
        {children}
      </Text>
    </HStack>
  );
}

export function Title({
  children,
  as = "h2",
}: {
  children: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <Heading
      as={as}
      fontSize={
        as === "h1"
          ? { base: "3rem", md: "4.5rem", xl: "6rem" }
          : { base: "2.25rem", md: "3.5rem" }
      }
      fontWeight={500}
      letterSpacing="-0.045em"
      lineHeight={1.06}
    >
      {children}
    </Heading>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return (
    <Text
      as="span"
      fontFamily="serif"
      fontStyle="italic"
      fontWeight={400}
      color="blue.solid"
    >
      {children}
    </Text>
  );
}

export function Action({
  children,
  href = "/contato",
  secondary = false,
  light = false,
  external = false,
}: {
  children: ReactNode;
  href?: string;
  secondary?: boolean;
  light?: boolean;
  external?: boolean;
}) {
  return (
    <Button
      asChild
      variant={secondary ? "plain" : "solid"}
      bg={secondary ? "transparent" : light ? "white" : "blue.solid"}
      color={
        secondary ? (light ? "white" : "black") : light ? "black" : "white"
      }
      rounded="none"
      h="auto"
      minH={14}
      maxW="full"
      minW={0}
      px={secondary ? 0 : 6}
      py={4}
      fontSize="md"
      fontWeight={500}
      whiteSpace="normal"
      textAlign="left"
      justifyContent="space-between"
      gap={5}
      _hover={{ opacity: 0.8 }}
      _focusVisible={{
        outline: "2px solid",
        outlineColor: light ? "white" : "blue.solid",
        outlineOffset: "4px",
      }}
    >
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <Box as="span" minW={0}>
          {children}
        </Box>
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </Button>
  );
}
