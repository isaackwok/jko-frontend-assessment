import React, { ComponentProps } from "react";

type RadioGroupValue = string;

export const RadioContext = React.createContext<{
  value: RadioGroupValue;
  onChange: (value: RadioGroupValue) => void;
}>({
  value: "",
  onChange: () => {},
});

export type RadioGroupProps = {
  value: ComponentProps<typeof RadioContext.Provider>["value"]["value"];
  onChange: ComponentProps<typeof RadioContext.Provider>["value"]["onChange"];
  children: React.ReactNode;
};

export type RadioGroupComponent = React.FC<RadioGroupProps>;

export const RadioGroup: RadioGroupComponent = ({
  value,
  onChange,
  children,
}) => {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  );
};
