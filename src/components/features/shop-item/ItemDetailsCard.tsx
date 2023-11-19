import React from 'react'
import {z} from 'zod'
import {twMerge} from 'tailwind-merge'

import { DetailCard, DetailCardContent, DetailCardProps } from "../../detail-card";
import {ShopItem} from '../../../schemas/shop-item'

type ItemDetailsCardProps = {
    data: z.infer<typeof ShopItem>['details']
} & DetailCardProps

const ItemDetailsCard: React.FC<ItemDetailsCardProps> = ({data, ...props}) => {
  return (
    <DetailCard {...props} className={twMerge("leading-[1.375rem] text-sm", props.className)}>
      {
        data.map(({title, content}) => (
          <DetailCardContent key={title}>
            <h3 className="text-white/60 mb-1">{title}</h3>
            <p className="text-white/80">{content}</p>
          </DetailCardContent>
        ))
      }
    </DetailCard>
  );
};

export { ItemDetailsCard };