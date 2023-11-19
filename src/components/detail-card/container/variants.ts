import { cva } from "class-variance-authority";

export const DetailCardVariants = cva(
  ["flex", "flex-col", "py-3", "bg-gray-300"],
  {
    variants: {
      rounded: {
        true: ["rounded-xl"],
        false: ["rounded-none"],
      },
    },
    defaultVariants: {
      rounded: true,
    },
  },
);
