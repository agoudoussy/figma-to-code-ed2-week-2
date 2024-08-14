import { ButtonHTMLAttributes, ComponentType } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "bg-[#0E1218] text-white flex items-center justify-center space-x-[0.6rem] text-[1.4rem] py-[1rem] px-[2.4rem] font-[600] w-max whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          " bg-black text-white  active:bg-[#4d4d4d] border-[1px] border-[#0E1218]  ",
        secondary: "bg-white text-black",
        white: "bg-white text-black",
        neutral: "!bg-[#E5E5E5] text-[#7E7E7E] text-[1rem] font-[500]",
        outline:
          "bg-transparent border-[1px] border-[#0E1218] text-[#0E1218] hover:bg-[#0E1218] hover:text-white",
        "outline-white":
          "bg-transparent border-[1px] border-white text-white hover:bg-white hover:text-black",
      },
      radius: {
        full: "rounded-full",
        md: "rounded-[40px]",
        sm: "rounded-[12px]",
      },
      fullWidth: {
        true: "w-full justify-center space-x-[0.3em]",
      },
    },
  }
);

type IconPostion = "left" | "right" | "both";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
  text?: string;
  Icon?: ComponentType<{}>;
  iconPosition?: IconPostion;
}

function Button({
  text,
  fullWidth,
  radius = "full",
  onClick,
  variant,
  className,
  iconPosition,
  Icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        buttonVariants({ variant, radius, fullWidth }),
        className
      )}
    >
      {iconPosition && (iconPosition === "left" || iconPosition === "both") && (
        <Icon />
      )}
      <span>{text}</span>
      {iconPosition &&
        (iconPosition === "right" || iconPosition === "both") && <Icon />}
    </button>
  );
}

export default Button;
