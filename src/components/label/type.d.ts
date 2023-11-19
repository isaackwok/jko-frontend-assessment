import { VariantProps } from "class-variance-authority";
import { LabelVariants } from "./variants";

export type LabelProps = {
  variants?: VariantProps<typeof LabelVariants>;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;
export type LabelComponent = React.FC<LabelProps>;
