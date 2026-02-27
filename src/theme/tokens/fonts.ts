import { defineTokens } from "@chakra-ui/react";

const fallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export const fonts = defineTokens.fonts({
  heading: {
    value: `"DM Sans", ${fallback}`,
  },

  body: {
    value: `"DM Sans", ${fallback}`,
  },

  mono: {
    value: `"Geist Mono Variable", "Geist Mono", "Courier New", monospace`,
  },

  serif: {
    value: `"DM Serif Display", Georgia, serif`,
  },
});
