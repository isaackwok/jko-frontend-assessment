import React from "react";
import { IconButton } from "../icon";
import { numberSelectorButtonVariants } from "./variants";

export type NumberSelectorProps = {
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
};

export type NumberSelectorComponent = React.FC<NumberSelectorProps>;

export const NumberSelector: NumberSelectorComponent = ({
  min = 1,
  max,
  onChange,
}) => {
  const [value, setValue] = React.useState(1);
  const isMin = value === min;
  const isMax = value === max;

  return (
    <div className="flex flex-row gap-1 items-center">
      <IconButton
        icon="NumberMinus"
        className={numberSelectorButtonVariants({
          status: isMin ? "disabled" : "default",
        })}
        onClick={() => setValue((v) => Math.max(min, v - 1))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={({ target: { value } }) => {
          const newValue = parseInt(value || "1");
          setValue(newValue);
          onChange(newValue);
        }}
        className="text-xl font-semibold bg-transparent text-center"
        style={{ width: `calc(2rem + ${value.toString().length} * 0.5rem)` }}
      />
      <IconButton
        icon="NumberAdd"
        className={numberSelectorButtonVariants({
          status: isMax ? "disabled" : "default",
        })}
        onClick={() =>
          setValue((v) => (max === undefined ? v + 1 : Math.min(max, v + 1)))
        }
      />
    </div>
  );
};
