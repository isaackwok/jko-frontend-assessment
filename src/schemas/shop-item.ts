import { z } from "zod";

export const Stocks = z.object({
  stockKeyCombination: z.array(z.string()),
  numOfStock: z.number(),
});
export const ItemStocks = z.object({
  stockKey: z.string(),
  label: z.string(),
});
export const StockOption = z.object({
  id: z.string(),
  label: z.string(),
  remark: z.string().optional(),
  stocks: z.array(ItemStocks),
});
export const ItemDetail = z.object({
  title: z.string(),
  content: z.string(),
});
export const ShopItem = z.object({
  id: z.string(),
  name: z.string(),
  tags: z.array(z.string()),
  // imageUrls: z.array(z.string()),
  remarks: z.array(z.string()),
  details: z.array(ItemDetail),
  // stocks: z.record(Stocks),
  // stockOptions: z.record(StockOption),
});
