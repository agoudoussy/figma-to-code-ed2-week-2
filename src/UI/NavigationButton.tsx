import { NavLink } from "react-router-dom";
import { TMenuItem } from "./MenuItem";
import { twMerge } from "tailwind-merge";

function NavigationButton({
  activeStyle,
  className,
  path,
  libelle,
}: TMenuItem & { activeStyle: string }) {
  return (
    <NavLink
      to={path ?? "#"}
      className={({ isActive }) =>
        isActive
          ? activeStyle
          : twMerge(
              "bg-[#E8E9EA] text-[1.6rem] py-[1rem] px-[2.6rem] w-max whitespace-nowrap rounded-[12px] font-[500] leading-[2.4rem] text-[#12171F] h-max",
              className
            )
      }
    >
      {libelle ?? "menu item"}
    </NavLink>
  );
}

export default NavigationButton;
