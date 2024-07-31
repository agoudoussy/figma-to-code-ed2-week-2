import { CSSProperties } from "react";
import "./Container.css";

type containerProps = {
  children: React.ReactNode;
  className?: String;
  maxWidth?: number;
};

function Container({ children, className, maxWidth }: containerProps) {
  const applyMaxWith = maxWidth && `max-width:${maxWidth}px`;
  return (
    <div
      className={`containers ${className}`}
      style={{ applyMaxWith } as CSSProperties}
    >
      {children}
    </div>
  );
}

export default Container;
