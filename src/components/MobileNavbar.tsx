import Button from "UI/Button";
import ComponentListRender from "UI/ComponentListRender";
import Flex from "UI/Flex";
import MenuItem from "UI/MenuItem";
import { MENU_ITEM } from "helpers";

function MobileNavbar() {
  return (
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
      className="absolute inset-0 w-full h-screen bg-white block lg:hidden items-start px-[2.6rem] md:px-[5.2rem] space-y-[2rem] z-10  after:border-r-[1px] after:mr-[3rem] after:w-screen after:h-screen after:absolute after:-right-[15px]"
    >
      <Flex className=" space-y-[6.4rem]">
        <Flex className="space-y-[1.6rem] w-max text-left mt-[12.2rem]">
          <ComponentListRender data={MENU_ITEM} Component={MenuItem} />
        </Flex>
        <Flex row className="items-center space-x-[2rem] ml-[2.6rem]">
          <MenuItem
            libelle="Sign up "
            path="#"
            className="text-[#0E1218] border-r-[2px] border-[#0E1218] pr-[2.6rem]"
          />
          <Button text="Connect Wallet" />
        </Flex>
      </Flex>
      <hr className=" w-full absolute inset-0 top-[750px]  bottom-[800px]" />
      <hr className=" h-screen w-[1px] absolute   block" />
    </Flex>
  );
}

export default MobileNavbar;
