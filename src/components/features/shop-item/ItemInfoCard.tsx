import React from "react";
import { z } from "zod";
// import { twMerge } from "tailwind-merge";

import {
  DetailCard,
  DetailCardContent,
  DetailCardProps,
} from "../../detail-card";
import { ShopItem } from "../../../schemas/shop-item";
import { Label } from "../../label";

type ItemInfoCardProps = {
  data: z.infer<typeof ShopItem>;
} & DetailCardProps;

const ItemInfoCard: React.FC<ItemInfoCardProps> = ({ data, ...props }) => {
  return (
    <DetailCard {...props}>
      <DetailCardContent className="text-white/90">
        <h1 className="font-semibold leading-6">{data.name}</h1>
        <div className="flex flex-row gap-2 items-center">
          {data.tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </div>
      </DetailCardContent>
      <DetailCardContent className="leading-[1.375rem] text-sm text-white/90">
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
