import { create } from "zustand"

export type ShoppingCartStore = {
  items: string[],
}

export const useShoppingCartStore = create<ShoppingCartStore>(() => ({
  items: [] as string[],
}))