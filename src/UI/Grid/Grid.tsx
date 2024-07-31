import { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";
import "./Grid.css";

interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
  elementPerRow?: number;
  rowGap?: number;
  colGap?: number;
  elementPerRowMobile?: number;
  elementPerRowTablet?: number;
  columnWidthMobile?: string;
  columnWidthDestop?: string;
  columnWidthTablet?: string;
}

function Grid({
  children,
  className,
  elementPerRow = 4,
  elementPerRowMobile,
  elementPerRowTablet,
  rowGap = 2,
  colGap = 2,
  columnWidthDestop = "1fr",
  columnWidthTablet = "1fr",
  columnWidthMobile = "1fr",
  ...rest
}: IGrid) {
  return (
    <div
      style={
        {
          "--row-gap": `${rowGap?.toString()}rem`,
          "--col-gap": `${colGap?.toString()}rem`,
          "--element-per-row": `${elementPerRow?.toString()}`,
          "--tablet-element-per-row": `${elementPerRowTablet?.toString()}`,
          "--mobile-element-per-row": `${elementPerRowMobile?.toString()}`,
          "--column-width-desktop": `${columnWidthDestop?.toString()}`,
          "--column-width-tablet": `${columnWidthTablet?.toString()}`,
          "--column-width-mobile": `${columnWidthMobile?.toString()}`,
        } as CSSProperties
      }
      {...rest}
      className={twMerge(`grid-container | `, className)}
    >
      {children}
    </div>
  );
}

export default Grid;
