import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ItemVariation } from "../schemas/shop-item";
import { z } from "zod";

export type ShoppingCartRecord = {
  count: number;
  item: z.infer<typeof ItemVariation>;
};

export type ShoppingCartStore = {
  items: ShoppingCartRecord[];
  addItem: (item: ShoppingCartRecord) => void;
  removeItem: (itemIdx: number) => void;
};
export const useShoppingCartStore = create(
  persist<ShoppingCartStore>(
    (set) => ({
      items: [],
      addItem: (item: ShoppingCartRecord) =>
        set((state) => ({ ...state, items: [...state.items, item] })),
      removeItem: (itemIdx: number) =>
        set((state) => ({
          ...state,
          items: state.items.filter((_, idx) => idx !== itemIdx),
        })),
    }),
    {
      name: "shopping-cart",
    },
  ),
);
