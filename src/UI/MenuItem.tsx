import { Link, NavLink, To } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export type TMenuItem = {
  libelle: String;
  path: To;
  className?: string;
  activeStyle?: string;
};

function MenuItem({ libelle, path, className, activeStyle }: TMenuItem) {
  return (
    <NavLink
      to={path ?? "#"}
      className={({ isActive }) =>
        isActive
          ? activeStyle
          : twMerge(
              "bg-[#E8E9EA] text-[1.6rem] py-[1rem] px-[2.6rem] w-max whitespace-nowrap rounded-[12px] font-[600] leading-[2.4rem] lg:leading-[36px] text-[#12171F] h-max",
              className
            )
      }
    >
      {libelle ?? "menu item"}
    </NavLink>
  );
}

export default MenuItem;
