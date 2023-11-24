import { create } from "zustand";
import { ItemVariation } from "../schemas/shop-item";
import { z } from "zod";

export type ShoppingCartRecord = {
  count: number;
  item: z.infer<typeof ItemVariation>;
};

export type ShoppingCartStore = {
  items: ShoppingCartRecord[];
  addItem: (item: ShoppingCartRecord) => void;
};
export const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  items: [],
  addItem: (item: ShoppingCartRecord) =>
    set((state) => ({ ...state, items: [...state.items, item] })),
}));
