import Open from "assets/hamburgerIcone.svg?react";
import Close from "assets/Close.svg?react";
import { useContext } from "react";
import { Context } from "context/AppContext";
import { motion } from "framer-motion";

function HamburgerMenu() {
  const context = useContext(Context);
  return (
    <button
      className=" w-[30px] lg:hidden aspect-square bg-[#E8E9EA] rounded-[8px] flex items-center justify-center z-20"
      role="button"
      onClick={context?.toogleShow}
    >
      <motion.span
        tabIndex={0}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
      >
        {context?.show ? <Close /> : <Open />}
      </motion.span>
    </button>
  );
}

export default HamburgerMenu;
