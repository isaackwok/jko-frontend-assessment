import React from "react";
import { z } from "zod";

import {
  DetailCard,
  DetailCardContent,
  DetailCardProps,
} from "../../detail-card";
import { ShopItemTransformed } from "../../../schemas/shop-item";
import { Label } from "../../label";
import { PriceDisplay } from "./PriceDisplay";

type ItemInfoCardProps = {
  data: z.infer<typeof ShopItemTransformed>;
} & DetailCardProps;

const ItemInfoCard: React.FC<ItemInfoCardProps> = ({ data, ...props }) => {
  return (
    <DetailCard {...props}>
      <DetailCardContent className="px-3 text-white/90">
        <h1 className="text-h5 mb-1">{data.name}</h1>
        <PriceDisplay {...data.prices} className="mb-2" />
        <div className="flex flex-row gap-2 items-center">
          {data.tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </div>
      </DetailCardContent>
      <DetailCardContent className="px-3 text-p2 text-white/90">
        <ul className="list-disc list-inside pl-2">
          {data.remarks.map((remark) => (
            <li key={remark}>{remark}</li>
          ))}
        </ul>
      </DetailCardContent>
    </DetailCard>
  );
};

export { ItemInfoCard };
