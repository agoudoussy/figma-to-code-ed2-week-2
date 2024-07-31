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
        className="border-t-[1px] flex-col space-y-[1.6rem] lg:flex-row border-[#E8E9EA] py-[3.2rem] justify-between lg:items-center"
      >
        <h2 className=" text-[2.4rem] font-[700]">
          Create Explore & Collect Digital NFTs
        </h2>
        <Flex
          row
          className=" items-center justify-center space-x-[3.4rem] w-max text-[1.4rem]"
        >
          <MenuItem libelle="Privacy" className="!font-[400] " path="#" />
          <MenuItem
            libelle="Terms & Conditions"
            className="!font-[400] "
            path="#"
          />
          <MenuItem libelle="About Us" className="!font-[400] " path="#" />
        </Flex>
      </Flex>
    </Container>
  );
}

export default BottomNavSection;
