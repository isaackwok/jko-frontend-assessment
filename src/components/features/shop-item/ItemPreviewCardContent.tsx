import { z } from "zod"

import { DetailCardContent } from "../../detail-card"
import { PriceDisplay } from "./PriceDisplay"
import { ItemVariation } from "../../../schemas/shop-item"
import { IconButton } from "../../icon"

export type ItemPreviewCardContentProps = {
  item: z.infer<typeof ItemVariation>
  onCloseButtonClicked: () => void
  renderTitle?: () => React.ReactNode
}

export type ItemPreviewCardContentComponent = React.FC<ItemPreviewCardContentProps>

export const ItemPreviewCardContent: ItemPreviewCardContentComponent = ({ renderTitle, onCloseButtonClicked, item }) => (
  <DetailCardContent>
    <div className="flex flex-row gap-2.5 items-stretch px-3">
      <img
        src={item.imageUrls[0]}
        alt={item.name}
        className="w-16 h-16 rounded-lg"
      />
      <div className="flex flex-col flex-grow justify-around">
        {renderTitle?.() ?? <h2 className="text-p2">{item.name}</h2>}
        <PriceDisplay
          originalMin={item.price}
          originalMax={item.price}
          discountMin={item.priceAfterDiscount}
          discountMax={item.priceAfterDiscount}
        />
      </div>
      <IconButton icon="Close" onClick={onCloseButtonClicked} />
    </div>
  </DetailCardContent>)