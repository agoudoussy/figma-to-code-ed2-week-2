/// <reference types="vite-plugin-svgr/client" />
import ComponentListRender from "UI/ComponentListRender";
import Flex from "UI/Flex";
import MenuItem from "UI/MenuItem";
import { MENU_ITEM } from "helpers";
import { useContext } from "react";
import MobileNavbar from "./MobileNavbar";
import Button from "UI/Button";
import { Context } from "context/AppContext";
import AppLogo from "assets/appLogo.svg?react";
import HamburgerMenu from "UI/HamburgerMenu";
import Container from "UI/Container/Container";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const context = useContext(Context);

  return (
    <Container>
      <Flex
        row
        tag="nav"
        className="w-full justify-between items-center h-max  border-l-[1px] border-[#E8E9EA] py-[2rem] lg:py-[2.8rem]"
      >
        <AppLogo />
        <Flex row className="space-x-[2.8rem] items-center hidden lg:flex">
          <ComponentListRender data={MENU_ITEM} Component={MenuItem} />
        </Flex>

        <Flex className="flex items-center h-full">
          <Flex
            row
            className="hidden lg:flex lg:items-center lg:space-x-[2rem]"
          >
            <MenuItem
              libelle="Sign up"
              path="#"
              className="text-[#0E1218] border-r-[2px] border-[#0E1218] pr-[2.6rem]"
            />
            <Button text="Connect Wallet" className=" hover:" />
          </Flex>
          <HamburgerMenu />
        </Flex>
        <AnimatePresence>{context?.show && <MobileNavbar />}</AnimatePresence>
      </Flex>
    </Container>
  );
}

export default Navbar;
