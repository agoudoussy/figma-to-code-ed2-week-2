import { ButtonHTMLAttributes, ComponentType } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "bg-[#0E1218] text-white text-[1.6rem] py-[1rem] px-[2.6rem] font-[600] w-max whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: " bg-black text-white  active:bg-[#4d4d4d] ",
        secondary: "bg-[#E8E9EA] text-black",
        white: "bg-white text-black",
        outline: "bg-transparent border-[1px] border-[#0E1218] text-[#0E1218]",
      },
      radius: {
        full: "rounded-full",
        md: "rounded-[40px]",
        sm: "rounded-[12px]",
      },
      fullWidth: {
        true: "w-full justify-between space-x-[0.3em]",
      },
    },
  }
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
  text?: string;
  Icon?: ComponentType<{}>;
}

function Button({
  text,
  fullWidth,
  radius = "full",
  onClick,
  variant,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        buttonVariants({ variant, radius, fullWidth }),
        className
      )}
    >
      {text ? text : "Button"}
    </button>
  );
}

export default Button;
