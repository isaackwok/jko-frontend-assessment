import { createTailwindMerge, getDefaultConfig } from "tailwind-merge";

export const twMerge = createTailwindMerge(getDefaultConfig, (config) => ({
  ...config,
  theme: {
    fontSize: ["p2", "p3", "h4", "h5", "button-large"],
    colors: [
      "brand",
      "brand-400",
      "brand-600",
      "brand-700",
      "gray",
      "gray-100",
      "gray-200",
      "gray-300",
      "gray-400",
      "gray-600",
      "gray-700",
    ],
  },
}));
