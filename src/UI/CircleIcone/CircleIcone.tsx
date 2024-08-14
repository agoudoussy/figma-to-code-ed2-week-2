import "./CircleIcone.css";

export type background =
  | "bg-orange"
  | "bg-white"
  | "bg-accent-600"
  | "bg-accent-400"
  | "bg-accent-250";

interface circleIcone {
  icone: string;
  backgroundColor: string;
  onClick?: (e: any) => void;
  label?: string;
  className?: string;
}

function CircleIcone({
  icone,
  backgroundColor,
  onClick,
  label,
  className,
}: circleIcone) {
  return (
    <div
      onClick={onClick}
      className={` ${className} notification | flex items-center justify-center ${backgroundColor} `}
    >
      <img src={icone} />
      {label && <span>{label}</span>}
    </div>
  );
}

export default CircleIcone;
