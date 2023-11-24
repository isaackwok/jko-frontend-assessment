import { twMerge } from "../../libs/tailwind-merge"
import { VariantProps } from "class-variance-authority"

import { ButtonVariant } from "./variants"

export type ButtonProps = {
  variants?: VariantProps<typeof ButtonVariant>
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonComponent = React.FC<ButtonProps>

export const Button: ButtonComponent = ({ variants, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(ButtonVariant(variants), props.className)}
    />
  )
}
