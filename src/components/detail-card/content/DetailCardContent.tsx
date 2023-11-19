import { DetailCardContentComponent } from "./type";
import { DetailCardContentVariants } from "./variants";
import { twMerge } from "tailwind-merge";

const DetailCardContent: DetailCardContentComponent = (props) => {
  return (
    <div
      {...props}
      className={twMerge(DetailCardContentVariants(), props.className)}
    />
  );
};

export { DetailCardContent };
