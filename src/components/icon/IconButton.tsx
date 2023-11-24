import React from "react";
import { twMerge } from "../../libs/tailwind-merge";

import { IconButtonVariants } from "./variants";

import * as icons from "./icons";

export type IconButtonProps = {
  icon: keyof typeof icons;
  label?: string;
  badge?: string | number;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type IconButtonComponent = React.FC<IconButtonProps>;

export const IconButton: IconButtonComponent = ({ icon, ...props }) => {
  const Icon = icons[icon];
  return (
    <button
      {...props}
      className={twMerge(IconButtonVariants(), props.className)}
    >
      <Icon />
      <span className="text-xs text-white">{props.label}</span>
      {props.badge ? (
        <span className="absolute text-xs -top-1.5 right-1.5 px-2 py-1 rounded-full bg-brand-700 text-white">
          {props.badge}
        </span>
      ) : null}
    </button>
  );
};
