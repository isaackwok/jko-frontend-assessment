import { cva } from "class-variance-authority";

export const DetailCardContentVariants = cva([
  "text-white",
  "text-sm",
  "leading-[1.375rem]",
  "py-[0.125rem]",
  "after:content-['']",
  "after:block",
  "last:after:hidden",
  "after:border-b",
  "after:border-gray-200",
  "after:my-2",
]);
