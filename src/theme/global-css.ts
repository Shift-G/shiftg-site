import { defineGlobalStyles } from "@chakra-ui/react";

const empty = "var(--acp-empty,/*!*/ /*!*/)";
export const globalCss = defineGlobalStyles({
  "*": {
    fontFeatureSettings: '"cv11"',
    "--ring-inset": empty,
    "--ring-offset-width": "0px",
    "--ring-offset-color": "white",
    "--ring-color": "blue.500/60",
    "--ring-offset-shadow": "0 0 #0000",
    "--ring-shadow": "0 0 #0000",
    ...Object.fromEntries(
      [
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        "saturate",
        "sepia",
        "drop-shadow",
      ].map((prop) => [`--${prop}`, empty])
    ),
    ...Object.fromEntries(
      [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        "opacity",
        "saturate",
        "sepia",
      ].map((prop) => [`--backdrop-${prop}`, empty])
    ),
    "--global-font-mono": "fonts.mono",
    "--global-font-body": "fonts.body",
    "--global-color-border": "colors.border",
  },
  html: {
    color: "fg",
    bg: "bg",
    lineHeight: "1.5",
    colorPalette: "gray",
  },
  "*::placeholder": {
    color: "fg.muted/80",
  },
  "*::selection": {
    bg: "blue/10",
  },
  ".clickable": {
    cursor: "pointer",
  },
  
  // Modern floating animations
  "@keyframes float": {
    "0%, 100%": {
      transform: "translateY(0px) rotate(0deg)",
    },
    "50%": {
      transform: "translateY(-20px) rotate(180deg)",
    },
  },
  
  "@keyframes pulse": {
    "0%, 100%": {
      opacity: "0.4",
    },
    "50%": {
      opacity: "1",
    },
  },
  
  "@keyframes slideInUp": {
    "0%": {
      transform: "translateY(100px)",
      opacity: "0",
    },
    "100%": {
      transform: "translateY(0)",
      opacity: "1",
    },
  },
  
  "@keyframes fadeInScale": {
    "0%": {
      transform: "scale(0.8)",
      opacity: "0",
    },
    "100%": {
      transform: "scale(1)",
      opacity: "1",
    },
  },

  "@keyframes fadeInUp": {
    "0%": {
      transform: "translateY(30px)",
      opacity: "0",
    },
    "100%": {
      transform: "translateY(0)",
      opacity: "1",
    },
  },

  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  
  // Smooth scrolling
  "html": {
    scrollBehavior: "smooth",
  },
  
  // Custom scrollbar
  "::-webkit-scrollbar": {
    width: "8px",
  },
  
  "::-webkit-scrollbar-track": {
    background: "{colors.blackAlpha.200}",
  },
  
  "::-webkit-scrollbar-thumb": {
    background: "{colors.blue.500/30}",
    borderRadius: "4px",
  },
  
  "::-webkit-scrollbar-thumb:hover": {
    background: "{colors.blue.500/50}",
  },
});
