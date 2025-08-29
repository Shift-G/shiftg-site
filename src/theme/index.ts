import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { globalCss } from "./global-css";
import { layerStyles } from "./layer-styles";
import { animationStyles } from "./motion-styles";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { slotRecipes } from "./slot-recipes";
import { textStyles } from "./text-styles";
import { keyframes } from "./tokens/keyframes";
import { tokens } from "./tokens";

export const defaultThemeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: "acp",
  cssVarsRoot: ":where(html, .chakra-theme)",
  globalCss: globalCss,
  theme: {
    breakpoints: breakpoints,
    keyframes: keyframes,
    tokens,
    semanticTokens,
    recipes: recipes,
    slotRecipes: slotRecipes,
    textStyles: textStyles,
    layerStyles: layerStyles,
    animationStyles: animationStyles,
  },
});

export const system = createSystem(defaultBaseConfig, defaultThemeConfig);
