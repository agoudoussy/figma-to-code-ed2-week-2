import { motion, HTMLMotionProps } from "framer-motion";

interface IFlexProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  row?: boolean;
  className?: string;
  tag?: keyof JSX.IntrinsicElements | React.ComponentType<"div"> | any;
}
function Flex({ children, row, className, tag, ...rest }: IFlexProps) {
  const Tag = tag || "div";
  const flexStyles = `flex ${!row && "flex-col"} ${className}`;

  if (typeof Tag === "string" && Tag.includes("motion")) {
    return (
      <motion.div className={flexStyles} {...rest}>
        {children}
      </motion.div>
    );
  } else {
    return (
      <Tag className={flexStyles} {...rest}>
        {children}
      </Tag>
    );
  }
}

export default Flex;
