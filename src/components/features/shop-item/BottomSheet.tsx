import React from "react";
import { z } from "zod";

import { ShopItemApiResponse } from "../../../schemas/shop-item";
import { DetailCard, DetailCardContent } from "../../detail-card";
import { Button } from "../../button";
import { PriceDisplay } from "./PriceDisplay";
import { IconButton } from "../../icon";
import { RadioChip, RadioGroup } from "../../radio-group";
import { NumberSelector } from "../../number-selector";
import { useShopping } from "../../../features/shop-item";

export type BottomSheetProps = {
  open: boolean;
  data: z.infer<typeof ShopItemApiResponse>;
  onClose: () => void;
  onComplete: () => void;
};

export type BottomSheetComponent = React.FC<BottomSheetProps>;

export const BottomSheet: BottomSheetComponent = ({
  open,
  data,
  onClose,
  onComplete,
}) => {
  const {
    shoppingOptions,
    selectedVariationIds,
    setSelectedVariationIds,
    setNumOfPurchase,
  } = useShopping({
    data,
  });

  const selectedVariation =
    shoppingOptions.variations.find((v) =>
      v.variationIds.every((vid) =>
        selectedVariationIds.find((selectedVid) => selectedVid === vid)
      )
    ) ?? shoppingOptions.variations[0];

  if (!open) return null;

  return (
    <div className="fixed flex flex-col inset-0 z-50 bg-black/80">
      <div className="flex-grow" />
      <DetailCard className={`transition rounded-none`}>
        <DetailCardContent>
          <div className="flex flex-row gap-2.5 items-stretch">
            <img
              src={selectedVariation.imageUrls[0]}
              alt={selectedVariation.name}
              className="w-16 h-16 rounded-lg"
            />
            <div className="flex flex-col flex-grow justify-around">
              <h2 className="text-sm">{selectedVariation.name}</h2>
              <PriceDisplay
                originalMin={selectedVariation.price}
                originalMax={selectedVariation.price}
                discountMin={selectedVariation.priceAfterDiscount}
                discountMax={selectedVariation.priceAfterDiscount}
              />
            </div>
            <IconButton icon="Close" onClick={onClose} />
          </div>
        </DetailCardContent>
        <DetailCardContent>
          <div className="flex flex-col gap-3">
            {shoppingOptions.variationTypes.map((vType, typeIdx) => (
              <div key={vType.id}>
                <h3 className="text-base mb-1">{vType.name}</h3>
                <RadioGroup
                  value={
                    selectedVariation.variationIds.find((vid) =>
                      vType.tags.find((tag) => vid === tag.id)
                    ) ?? ""
                  }
                  onChange={(variationId) => {
                    // TODO: update selected variation
                    const newArr = selectedVariationIds.slice();
                    newArr[typeIdx] = variationId;
                    setSelectedVariationIds(newArr);
                  }}
                >
                  <div className="flex flex-row gap-2.5">
                    {vType.tags.map((tag) => (
                      <RadioChip
                        key={tag.id}
                        value={tag.id}
                        disabled={tag.disabled}
                      >
                        {tag.name}
                      </RadioChip>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            ))}
          </div>
        </DetailCardContent>
        <DetailCardContent>
          <div className="flex flex-col items-stretch gap-2">
            <div className="flex flex-row justify-between items-center gap-2 mb-4">
              <span className="text-base font-medium leading-6">購買數量</span>
              <NumberSelector onChange={setNumOfPurchase} />
            </div>
            <Button className="flex-grow" onClick={onComplete}>
              直接購買
            </Button>
          </div>
        </DetailCardContent>
      </DetailCard>
    </div>
  );
};
