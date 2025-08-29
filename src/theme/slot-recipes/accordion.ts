import { defineSlotRecipe } from "@chakra-ui/react";

export const accordionSlotRecipe = defineSlotRecipe({
  className: "chakra-accordion",
  slots: [
    "root",
    "item",
    "itemTrigger",
    "itemContent",
    "itemIndicator",
    "itemBody",
  ],
  base: {
    root: {
      width: "full",
      "--accordion-radius": "radii.l2",
    },
    item: {
      overflowAnchor: "none",
      borderTopWidth: "1px",
      _first: {
        borderTopWidth: "0",
      },
      _dark: {
        borderColor: "whiteAlpha.100",
      },
    },
    itemTrigger: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      width: "full",
      outline: "0",
      gap: "4",
      fontWeight: "medium",
      borderRadius: "xl",
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "colorPalette.focusRing",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    itemBody: {
      pt: "var(--accordion-padding-y)",
      pb: "calc(var(--accordion-padding-y) * 2)",
    },
    itemContent: {
      overflow: "hidden",
      borderRadius: "xl",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate",
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate",
      },
    },
    itemIndicator: {
      transition: "rotate 0.2s",
      transformOrigin: "center",
      color: "fg.subtle",
      _open: {
        rotate: "180deg",
      },
      _icon: {
        width: "1.2em",
        height: "1.2em",
      },
    },
  },
  variants: {
    variant: {
      outline: {
        item: {
          borderBottomWidth: "1px",
        },
      },
      subtle: {
        itemTrigger: {
          px: "var(--accordion-padding-x)",
        },
        itemContent: {
          px: "var(--accordion-padding-x)",
        },
        item: {
          borderRadius: "var(--accordion-radius)",
          _open: {
            bg: "colorPalette.subtle",
          },
        },
      },
      enclosed: {
        root: {
          borderWidth: "2px",
          borderRadius: "md",
          divideY: "1px",
          overflow: "hidden",
        },
        itemTrigger: {
          px: "var(--accordion-padding-x)",
        },
        itemContent: {
          px: "var(--accordion-padding-x)",
        },
      },
      plain: {},
    },
    size: {
      sm: {
        root: {
          "--accordion-padding-x": "spacing.3",
          "--accordion-padding-y": "spacing.2",
        },
        itemTrigger: {
          textStyle: "sm",
          py: "var(--accordion-padding-y)",
        },
      },
      md: {
        root: {
          "--accordion-padding-x": "spacing.6",
          "--accordion-padding-y": "spacing.3",
        },
        itemTrigger: {
          textStyle: "md",
          py: "var(--accordion-padding-y)",
        },
      },
      lg: {
        root: {
          "--accordion-padding-x": "spacing.8",
          "--accordion-padding-y": "spacing.4",
        },
        itemTrigger: {
          textStyle: "lg",
          py: 5,
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});
