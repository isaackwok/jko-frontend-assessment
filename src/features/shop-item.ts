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

  return {
    shoppingOptions,
    selectedVariationIds,
    setSelectedVariationIds,
    numOfPurchase,
    setNumOfPurchase,
  };
};
