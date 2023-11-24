import React from "react";
import { z } from "zod";
import { twMerge } from "tailwind-merge";

import {
  DetailCard,
  DetailCardContent,
  DetailCardProps,
} from "../../detail-card";
import { ShopItemTransformed } from "../../../schemas/shop-item";

type ItemDetailsCardProps = {
  data: z.infer<typeof ShopItemTransformed>;
} & DetailCardProps;

const ItemDetailsCard: React.FC<ItemDetailsCardProps> = ({
  data,
  ...props
}) => {
  return (
    <DetailCard {...props} className={twMerge("text-p2", props.className)}>
      {data.details.map(({ title, content }) => (
        <DetailCardContent key={title} className="px-3">
          <h3 className="text-white/60 mb-1">{title}</h3>
          <p className="text-white/80">{content}</p>
        </DetailCardContent>
      ))}
    </DetailCard>
  );
};

export { ItemDetailsCard };
