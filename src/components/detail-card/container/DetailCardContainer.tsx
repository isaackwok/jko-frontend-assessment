import React from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps } from "class-variance-authority";

import { DetailCardVariants } from "./variants";

export type DetailCardProps = {
  variants?: VariantProps<typeof DetailCardVariants>;
  intent?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DetailCardComponent = React.FC<DetailCardProps>;

const Divider = ({ intent }: { intent?: boolean }) => (
  <div
    className={`my-2 border-b border-gray-200 ${intent ? "mx-3" : "mx-0"}`}
  />
);

export const DetailCard: DetailCardComponent = ({
  intent = true,
  ...props
}) => {
  const contents = React.Children.toArray(props.children);
  return (
    <div {...props} className={twMerge(DetailCardVariants(), props.className)}>
      {contents.map((content, idx) => (
        <>
          {content}

          {/* Show divider below if it's not the last child */}
          {idx !== contents.length - 1 && <Divider intent={intent} />}
        </>
      ))}
    </div>
  );
};
