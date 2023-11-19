import { VariantProps } from "class-variance-authority";
import { DetailCardContentVariants } from "./variants";

export type DetailCardContentProps = {
  variants?: VariantProps<typeof DetailCardContentVariants>;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DetailCardContentComponent = React.FC<DetailCardContentProps>;
