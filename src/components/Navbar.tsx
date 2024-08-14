/// <reference types="vite-plugin-svgr/client" />
import ComponentListRender from "UI/ComponentListRender";
import Flex from "UI/Flex";
import MenuItem from "UI/MenuItem";
import { LEFT_MENU_ITEM, RIGH_MENU_ITEM } from "helpers";
import Account from "assets/account.svg?react";
import Search from "assets/search.svg?react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex row tag="nav" className="w-full justify-between items-center h-max">
      <Flex row className="space-x-[1.8rem] items-center hidden lg:flex">
        <ComponentListRender data={LEFT_MENU_ITEM} Component={MenuItem} />
      </Flex>

      <Flex className="lg:flex items-center h-full hidden">
        <Link
          to="/"
          className="outlined-text text-[3rem] font-[700] font-chillax fill-transparent  "
        >
          BALLAMAS
        </Link>
      </Flex>
      <Flex row className="space-x-[1.8rem] items-center hidden lg:flex">
        <ComponentListRender data={RIGH_MENU_ITEM} Component={MenuItem} />
        <Flex row className=" items-center space-x-[0.3rem]">
          <Account />
          <MenuItem libelle="Account" path="#" />
        </Flex>
        <MenuItem libelle={`Cart(0)`} path="/cart" />
        <Search />
      </Flex>
    </Flex>
  );
}

export default Navbar;
