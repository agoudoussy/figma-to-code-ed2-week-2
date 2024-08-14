import Flex from "UI/Flex";
import Search from "assets/search.svg?react";
import Basket from "assets/basket.svg?react";
import Account from "assets/account.svg?react";
import MenuItem from "UI/MenuItem";
import { useContext } from "react";
import { Context } from "context/AppContext";
import { AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function MobileNavbar() {
  const context = useContext(Context);

  return (
    <div>
      <Flex row className=" lg:hidden justify-between items-center">
        <div
          className="space-y-[0.7rem]"
          role="button"
          tabIndex={0}
          onClick={context?.toogleShow}
        >
          <div
            className={`hamburger_menu-item-1 ${
              context?.show && "open"
            } | bg-black w-[28px] h-[1px] `}
          />
          <div
            className={`hamburger_menu-item-2 ${
              context?.show && "open"
            } | bg-black w-[28px] h-[1px] `}
          />
        </div>

        <Link
          to="/"
          className="lg:hidden text-[3rem] font-[700] font-chillax outlined-text"
        >
          BALLAMAS
        </Link>

        <Flex row className="space-x-[1.2rem]">
          <Search />
          <NavLink to="/cart">
            <Basket />
          </NavLink>
        </Flex>
      </Flex>
      <AnimatePresence>
        {context?.show && (
          <Flex
            tag="motion"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              ease: "ease",
            }}
            exit={{
              opacity: 0,
            }}
            className="absolute lg:hidden w-full h-max left-0 top-[115px] bg-white text-center justify-center items-center space-y-[4.2rem] pt-[2.6rem] pb-[34.8rem]"
          >
            <Flex className="text-center space-y-[1.8rem]">
              <MenuItem libelle="Men" path="#" />
              <MenuItem libelle="Women" path="#" />
              <MenuItem libelle="Kids" path="#" />
              <MenuItem libelle="Collection" path="#" />
              <MenuItem libelle="Shop" path="#" />
              <MenuItem libelle="About us" path="#" />
              <Flex row className=" items-center space-x-[0.3rem]">
                <Account />
                <MenuItem libelle="Account" path="#" />
              </Flex>
            </Flex>
            <Flex className="space-y-[1.8rem]">
              <MenuItem libelle="FAQ" path="#" />
              <MenuItem libelle="Contact us" path="#" />
            </Flex>
          </Flex>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavbar;
