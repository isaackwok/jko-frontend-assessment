import { z } from "zod"
import { ShopItemTransformed } from "../../../schemas/shop-item"
import { twMerge } from "tailwind-merge"

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
      <span className="text-white/90 text-xl font-medium">
        {discountMin === discountMax
          ? `$${discountMin}`
          : `$${discountMin} ~ $${discountMax}`}
      </span>
      {discountMin !== originalMin && (
        <span className="text-white/30 text-sm line-through">
          {originalMin === originalMax
            ? `$${originalMin}`
            : `$${originalMin} ~ $${originalMax}`}
        </span>
      )}
    </div>
  )
}