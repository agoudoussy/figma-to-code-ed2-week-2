import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import MenuItem from "UI/MenuItem";
import AppLogo from "assets/appLogo.svg?react";

function BottomNavSection() {
  return (
    <Container className="border-l-[1px] border-[#E8E9EA]  pt-[9.6rem]">
      <AppLogo className="mb-[1.4rem]" />
      <Flex
        row
        className="border-t-[1px] flex-col md:space-y-[1.6rem] lg:space-y-0 lg:flex-row border-[#E8E9EA] py-[3.2rem] justify-between lg:items-center"
      >
        <h2 className=" text-[2rem] md:text-[2.4rem] font-[600]">
          Create Explore & Collect Digital NFTs
        </h2>
        <Flex
          row
          className=" w-full items-center justify-center space-x-[3.4rem] md:w-max text-[1.4rem]"
        >
          <MenuItem libelle="Privacy" className="!font-[500] " path="#" />
          <MenuItem
            libelle="Terms & Conditions"
            className="font-[500] "
            path="#"
          />
          <MenuItem libelle="About Us" className="font-[500] " path="#" />
        </Flex>
      </Flex>
    </Container>
  );
}

export default BottomNavSection;
