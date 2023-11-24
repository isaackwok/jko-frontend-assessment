import { z } from "zod"
import { twMerge } from "../../../libs/tailwind-merge"

import { ShopItemTransformed } from "../../../schemas/shop-item"
import { commaize } from "../../../utils/number"

export type PriceDisplayProps = {
  className?: string
} & z.infer<typeof ShopItemTransformed>['prices']

export type PriceDisplayComponent = React.FC<PriceDisplayProps>

export const PriceDisplay: PriceDisplayComponent = ({
  discountMin,
  discountMax,
  originalMax,
  originalMin,
  className
}) => {
  return (
    <div className={twMerge('flex flex-row items-center gap-1.5', className)}>
      <span className="text-white/90 text-h4">
        {discountMin === discountMax
          ? `$${commaize(discountMin)}`
          : `$${commaize(discountMin)} ~ $${commaize(discountMax)}`}
      </span>
      {discountMin !== originalMin && (
        <span className="text-white/30 leading-[1.375rem] text-sm line-through">
          {originalMin === originalMax
            ? `$${commaize(originalMin)}`
            : `$${commaize(originalMin)} ~ $${commaize(originalMax)}`}
        </span>
      )}
    </div>
  )
}