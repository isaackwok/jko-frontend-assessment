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

export const ShopItemApiResponse = z.object({
  id: z.string(),
  name: z.string(),
  tags: z.array(z.string()),
  remarks: z.array(z.string()),
  details: z.array(ItemDetail),
  variations: z.array(ItemVariation),
  variationTypes: z.array(ItemVariationType),
});

export const ShopItemTransformed = ShopItemApiResponse.transform((item) => ({
  ...item,
  prices: {
    originalMin: Math.min(
      ...Object.values(item.variations).map((v) => v.price)
    ),
    originalMax: Math.max(
      ...Object.values(item.variations).map((v) => v.price)
    ),
    discountMin: Math.min(
      ...Object.values(item.variations).map((v) => v.priceAfterDiscount)
    ),
    discountMax: Math.max(
      ...Object.values(item.variations).map((v) => v.priceAfterDiscount)
    ),
  },
  allImages: Array.from(
    new Set(Object.values(item.variations).flatMap((v) => v.imageUrls))
  ),
  variationTypes: item.variationTypes.map((variationType) => ({
    ...variationType,
    tags: variationType.tags.map((tag) => {
      let disabled = false;
      const relatedVariation = item.variations.filter((v) =>
        v.variationIds.includes(tag.id)
      );
      const relatedZeroStockVariation = item.variations.filter(
        (v) => v.variationIds.includes(tag.id) && v.stock === 0
      );
      if (relatedVariation && relatedZeroStockVariation) {
        if (relatedVariation.length === relatedZeroStockVariation.length) {
          disabled = true;
        }
      }
      return {
        ...tag,
        disabled,
      };
    }),
  })),
}));
