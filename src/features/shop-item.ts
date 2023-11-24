import { z } from "zod";
import { ShopItemApiResponse, ShopItemTransformed } from "../schemas/shop-item";
import React from "react";

export type UseShoppingProps = {
  data: z.infer<typeof ShopItemApiResponse>;
};

export const useShopping = (props: UseShoppingProps) => {
  const shoppingOptions = React.useMemo(
    () => ShopItemTransformed.parse(props.data),
    [props.data]
  );
  const defaultVariation =
    shoppingOptions.variations.find((v) => v.stock > 0) ??
    shoppingOptions.variations[0];
  const [selectedVariationIds, setSelectedVariationIds] = React.useState(
    () => defaultVariation.variationIds
  );
  const [numOfPurchase, setNumOfPurchase] = React.useState(1);

  const disabledVariationIds = React.useMemo(() => {
    const disableIds: string[] = [];
    shoppingOptions.variationTypes.forEach((variationType) => {
      variationType.tags.forEach((tag) => {
        const relatedVariation = shoppingOptions.variations.filter((v) =>
          v.variationIds.includes(tag.id)
        );
        const relatedZeroStockVariation = shoppingOptions.variations.filter(
          (v) => v.variationIds.includes(tag.id) && v.stock === 0
        );
        if (relatedVariation && relatedZeroStockVariation) {
          if (relatedVariation.length === relatedZeroStockVariation.length) {
            disableIds.push(tag.id);
          }
        }
      });
    });
    return new Set(disableIds);
  }, [shoppingOptions.variations]);

  return {
    shoppingOptions,
    selectedVariationIds,
    setSelectedVariationIds,
    numOfPurchase,
    setNumOfPurchase,
    disabledVariationIds,
  };
};
