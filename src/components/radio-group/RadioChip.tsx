import React from "react"
import { twMerge } from "../../libs/tailwind-merge"

import { radioChipVariants } from "./variants"
import { RadioContext } from "./RadioGroup"

export type RadioChipProps = {
  value: string
  className?: string
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type RadioChipComponent = React.FC<RadioChipProps>

export const RadioChip: RadioChipComponent = ({
  children,
  value,
  className,
  disabled,
  ...props
}) => {
  const { value: contextValue, onChange } = React.useContext(RadioContext)
  const status = disabled
    ? "disabled"
    : contextValue === value
      ? "selected"
      : "default"
  return (
    <button
      {...props}
      onClick={(e) => {
        if (disabled) return
        props.onClick?.(e)
        onChange(value)
      }}
      className={twMerge(radioChipVariants({ status }), className)}
    >
      {children}
    </button>
  )
}
