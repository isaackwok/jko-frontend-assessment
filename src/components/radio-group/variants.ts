import { cva } from "class-variance-authority";

export const radioChipVariants = cva(
  ["rounded-lg", "px-2", "py-1", "border", "min-w-[2rem]", "text-p2"],
  {
    variants: {
      status: {
        default: ["bg-transparent", "border-gray-700", "text-white"],
        selected: ["bg-brand", "border-brand", "text-white"],
        disabled: [
          "bg-transparent",
          "border-gray-600",
          "text-gray-600",
          "cursor-not-allowed",
        ],
      },
    },
    defaultVariants: {
      status: "default",
    },
  },
);
