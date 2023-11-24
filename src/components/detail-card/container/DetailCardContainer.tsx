import React from "react"
import { twMerge } from "../../../libs/tailwind-merge"
import { VariantProps } from "class-variance-authority"

import { DetailCardVariants } from "./variants"

export type DetailCardProps = {
  variants?: VariantProps<typeof DetailCardVariants>
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type DetailCardComponent = React.FC<DetailCardProps>

export const DetailCard: DetailCardComponent = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className={twMerge(DetailCardVariants(), props.className)}>
      {children}
    </div>
  )
}
