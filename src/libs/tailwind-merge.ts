import { createTailwindMerge,getDefaultConfig } from "tailwind-merge"

export const twMerge = createTailwindMerge(getDefaultConfig, (config) => ({
  ...config,
  theme: {
    fontSize: ["p2", "p3", "h4", "h5", "button-large"],
    colors: ["brand", "gray"],
  }
}))