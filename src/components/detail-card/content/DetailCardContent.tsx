import { twMerge } from "../../../libs/tailwind-merge"
import { VariantProps } from "class-variance-authority"

import { DetailCardContentVariants } from "./variants"

export type DetailCardContentProps = {
  variants?: VariantProps<typeof DetailCardContentVariants>
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type DetailCardContentComponent = React.FC<DetailCardContentProps>

export const DetailCardContent: DetailCardContentComponent = (props) => {
  return (
    <div
      {...props}
      className={twMerge(DetailCardContentVariants(), props.className)}
    />
  )
}
