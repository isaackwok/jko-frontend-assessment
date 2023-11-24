import { cva } from "class-variance-authority";

export const numberSelectorButtonVariants = cva([], {
  variants: {
    status: {
      default: ["text-white"],
      disabled: ["text-white/10", "cursor-not-allowed"],
    },
  },
  defaultVariants: {
    status: "default",
  },
});
