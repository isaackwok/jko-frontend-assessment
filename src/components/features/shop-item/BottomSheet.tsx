import React from "react"
import { z } from "zod"

import { ShopItemApiResponse } from "../../../schemas/shop-item"
import { DetailCard, DetailCardContent } from "../../detail-card"
import { Button } from "../../button"
import { RadioChip, RadioGroup } from "../../radio-group"
import { NumberSelector } from "../../number-selector"
import { useShopping } from "../../../features/shop-item"
import { ShoppingCartRecord } from "../../../stores/shopping-cart"
import { ItemPreviewCardContent } from "./ItemPreviewCardContent"

export type BottomSheetProps = {
  open: boolean
  data: z.infer<typeof ShopItemApiResponse>
  onClose: () => void
  onComplete: (item: ShoppingCartRecord) => void
}

export type BottomSheetComponent = React.FC<BottomSheetProps>

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
    numOfPurchase,
  } = useShopping({
    data,
  })

  const selectedVariation =
    data.variations.find((v) =>
      v.variationIds.every((vid) =>
        selectedVariationIds.find((selectedVid) => selectedVid === vid)
      )
    ) ?? shoppingOptions.variations[0]

  if (!open) return null

  return (
    <div className="fixed flex flex-col inset-0 z-50 bg-black/80">
      <div className="flex-grow" />
      <DetailCard className={`transition rounded-none`}>
        <ItemPreviewCardContent item={selectedVariation} onCloseButtonClicked={onClose} />
        <DetailCardContent>
          <div className="flex flex-col gap-3 px-3">
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
                    const newArr = selectedVariationIds.slice()
                    newArr[typeIdx] = variationId
                    setSelectedVariationIds(newArr)
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
          <div className="flex flex-col items-stretch gap-2 px-3">
            <div className="flex flex-row justify-between items-center gap-2 mb-4">
              <span className="text-base font-medium leading-6">購買數量</span>
              <NumberSelector onChange={setNumOfPurchase} />
            </div>
            <Button
              className="flex-grow"
              onClick={() =>
                onComplete({
                  item: selectedVariation,
                  count: numOfPurchase,
                })
              }
            >
              直接購買
            </Button>
          </div>
        </DetailCardContent>
      </DetailCard>
    </div >
  )
}
