import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <Box as="main" minH="100vh" bg="bg">
      {children}
    </Box>
  );
}
