import { VariantProps } from "class-variance-authority";
import React from "react";
import { ButtonVariant } from "./variants";

export type ButtonProps = {
  variants?: VariantProps<typeof ButtonVariant>;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonComponent = React.FC<ButtonProps>;
