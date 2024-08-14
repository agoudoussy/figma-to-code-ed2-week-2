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
      className={twMerge("font-[500] text-[#12171F] tracking-[-4%]", className)}
    >
      {libelle ?? "menu item"}
    </NavLink>
  );
}

export default MenuItem;
