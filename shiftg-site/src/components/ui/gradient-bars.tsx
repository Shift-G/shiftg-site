"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "motion/react";

interface GradientBarsProps {
  bars?: number;
  colors?: string[];
}

const MotionBox = motion.create(Box);

export const GradientBars = ({
  bars = 20,
  colors = ["colors.blue.500", "transparent"],
}: GradientBarsProps) => {
  const gradientStyle = `linear-gradient(0deg, ${colors.join(", ")})`;

  return (
    <Box
      position="absolute"
      inset={0}
      zIndex={0}
      overflow="hidden"
      bgGradient="linear-gradient(0deg, {colors.blue.100}, transparent)"
    >
      <Box display="flex" h="full" w="full">
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);

          return (
            <MotionBox
              key={`bg-bar-${index}`}
              flex={1}
              transformOrigin="bottom"
              bgGradient={gradientStyle}
              animate={{
                scaleY: [scale, scale + 0.1, scale],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.5,
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};
