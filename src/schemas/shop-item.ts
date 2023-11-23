import { z } from "zod";

const ItemVariationTag = z.object({
  id: z.string(),
  name: z.string(),
});

const ItemVariationType = z.object({
  id: z.string(),
  name: z.string(),
  tags: z.array(ItemVariationTag),
});

const ItemVariation = z.object({
  id: z.string(),
  name: z.string(),
  imageUrls: z.array(z.string()),
  price: z.number(),
  priceAfterDiscount: z.number(),
  variationIds: z.array(z.string()),
  stock: z.number(),
});

export const ItemDetail = z.object({
  title: z.string(),
  content: z.string(),
});
export const ShopItem = z.object({
  id: z.string(),
  name: z.string(),
  tags: z.array(z.string()),
  remarks: z.array(z.string()),
  details: z.array(ItemDetail),
  variations: z.array(ItemVariation),
  variationTypes: z.array(ItemVariationType),
});