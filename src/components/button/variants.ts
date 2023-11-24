import { cva } from "class-variance-authority";

export const ButtonVariant = cva(
  ["font-semibold", "text-white", "rounded-xl"],
  {
    variants: {
      hierarchy: {
        primary: ["bg-brand"],
        secondary: ["bg-gray"],
      },
      size: {
        large: ["px-6", "py-3", "text-button-large"],
      },
    },
    defaultVariants: {
      hierarchy: "primary",
      size: "large",
    },
  },
);
