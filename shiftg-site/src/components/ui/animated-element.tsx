"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  animation?: string;
  fallback?: ReactNode;
  [key: string]: any;
}

export function AnimatedElement({ 
  children, 
  animation, 
  fallback, 
  ...props 
}: AnimatedElementProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback ? <>{fallback}</> : <Box {...props}>{children}</Box>;
  }

  return (
    <Box animation={animation} {...props}>
      {children}
    </Box>
  );
}
