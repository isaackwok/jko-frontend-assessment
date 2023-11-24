import { twMerge } from "../../libs/tailwind-merge"
import { VariantProps } from "class-variance-authority"

import { LabelVariants } from "./variants"

export type LabelProps = {
  variants?: VariantProps<typeof LabelVariants>
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>
export type LabelComponent = React.FC<LabelProps>

export const Label: LabelComponent = (props) => {
  return (
    <span {...props} className={twMerge(LabelVariants(), props.className)} />
  )
}
