import { cva } from "class-variance-authority";

export const radioChipVariants = cva(
  ["rounded-lg", "px-2", "py-1", "border", "text-white", "min-w-[2rem]", "text-p2"],
  {
    variants: {
      status: {
        default: ["bg-transparent", "border-gray-700"],
        selected: ["bg-brand", "border-brand"],
        disabled: ["bg-transparent", "border-gray-600", "text-gray-600", "cursor-not-allowed"],
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
);
