import { defineTokens } from "@chakra-ui/react";

const fallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export const fonts = defineTokens.fonts({
  heading: {
    value: `"Rubik", ${fallback}`,
  },

  body: {
    value: `"DM Sans", ${fallback}`,
  },

  mono: {
    value: fallback,
  },
});
