import { InputHTMLAttributes, ComponentType } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import "./Input.css";

export const inputVariants = cva(
  "flex items-center space-x-[1rem] px-[1.5rem] border-[#999] fill-black focus:outline-none border-2 border-solid  font-bold  w-full",
  {
    variants: {
      variant: {
        filled: "bg-[#F6F6F6] border-transparent",
        dashed: "border-dashed border-[#999]",
        outline: "border-[#999]",
        whited: "bg-white border-transparent",
      },
      disabled: {
        true: "text-[#999] outline-2 border-[#999] bg-[#CCC]",
      },
      inputwidth: {
        full: "w-full",
        medium: "w-[245px]",
        large: "w-[335px]",
      },
    },
  }
);

export interface inputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "disabled">,
    VariantProps<typeof inputVariants> {
  label?: string;
  field?: any;
  form?: any;
  errorStyle?: any;
  Icone?: ComponentType<{}>;
  required?: boolean;
  props?: any;
  containerStyle?: string;
  showLoadingIndicator?: boolean;
}

function Input({
  label,
  field,
  form,
  disabled,
  Icone,
  errorStyle,
  type,
  placeholder,
  variant = null,
  required,
  inputwidth,
  containerStyle,
  name,
  value,
  onChange,
  onBlur,
  onKeyDown,
  showLoadingIndicator = false,
}: inputProps) {
  return (
    <div className={`flex-col space-y-[0.8rem] text-left w-full`}>
      <label
        className={` text-[1.2rem] font-[600] md:text-[1.2rem] text-left text-black  ${
          disabled && "text-[#999]"
        }`}
      >
        {label ?? label}
        {required && <span className=" text-orange-500 ml-[0.5rem]">*</span>}
      </label>

      <div
        className={`flex items-center p-[1.4rem] h-max border-[1px] border-[#7E7E7E] text-black w-full lg:w-[238px] rounded-full ${containerStyle}`}
      >
        <input
          name={name}
          placeholder={
            placeholder ?? `Enter your ${label?.toLocaleLowerCase()}`
          }
          disabled={disabled}
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          {...field}
          {...form}
          className="text-[1.2rem]  bg-transparent placeholder:text-black w-full"
        />
        {Icone && <Icone />}
      </div>
    </div>
  );
}

export default Input;
