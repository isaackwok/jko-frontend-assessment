import { twMerge } from "tailwind-merge";
import { LabelComponent } from "./type";
import { LabelVariants } from "./variants";

const Label: LabelComponent = (props) => {
  return (
    <span {...props} className={twMerge(LabelVariants(), props.className)} />
  );
};

export { Label };
