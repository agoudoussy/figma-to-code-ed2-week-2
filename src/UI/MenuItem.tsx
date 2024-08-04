import { NavLink, To } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export type TMenuItem = {
  libelle: String;
  path: To;
  className?: string;
};

function MenuItem({ libelle, path, className }: TMenuItem) {
  return (
    <NavLink
      to={path ?? "#"}
      className={twMerge(
        "font-[500] leading-[2.4rem] lg:leading-[36px] text-[#12171F]",
        className
      )}
    >
      {libelle ?? "menu item"}
    </NavLink>
  );
}

export default MenuItem;
