import React from "react"
import { z } from "zod"

import { ShopItemTransformed } from "../../../schemas/shop-item"
import { DetailCard, DetailCardContent } from "../../detail-card"
import { Button } from "../../button"
import { PriceDisplay } from "./PriceDisplay"
import { IconButton } from "../../icon"

export type BottomSheetProps = {
  open: boolean
  onClose: () => void
  data: z.infer<typeof ShopItemTransformed>
}

export type BottomSheetComponent = React.FC<BottomSheetProps>

export const BottomSheet: BottomSheetComponent = ({ open, onClose, data }) => {
  const [selectedVariation] = React.useState(
    () => data.variations.find(v => v.stock > 0) ?? data.variations[0]
  )

  if (!open) return null

  return (
    <div
      className="fixed flex flex-col inset-0 z-50 bg-black/80"
    >
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
          <div className="flex flex-col items-stretch gap-2">
            <div className="flex flex-row justify-between items-center gap-2">
              <span className="text-base font-medium leading-6">購買數量</span>
            </div>
            <Button className="flex-grow">直接購買</Button>
          </div>
        </DetailCardContent>
      </DetailCard>
    </div>
  )
}