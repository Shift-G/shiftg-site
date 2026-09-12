import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
export function SitePage({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Box as="main" id="conteudo" bg="white" color="black">
        {children}
      </Box>
      <Footer />
    </>
  );
}
