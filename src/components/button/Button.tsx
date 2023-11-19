import { ButtonComponent } from "./type";
import { twMerge } from "tailwind-merge";
import { ButtonVariant } from "./variants";

const Button: ButtonComponent = ({ variants, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(ButtonVariant(variants), props.className)}
    />
  );
};

export { Button };
