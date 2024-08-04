import ComponentListRender from "UI/ComponentListRender";
import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import MenuItem from "UI/MenuItem";
import NavigationButton from "UI/NavigationButton";
import { fadeInVariant } from "animations/variants";
import { motion } from "framer-motion";
import { COLLECTIONS_CATEGORY } from "helpers/utils";
import { Link, Outlet } from "react-router-dom";

function CollectionsSection() {
  return (
    <Container className="border-l-[1px] border-[#E8E9EA] pt-[9.6rem] ">
      <div className="space-y-[3.6rem]">
        <motion.h2
          variants={fadeInVariant}
          transition={{
            duration: 0.6,
          }}
          initial="initial"
          whileInView="fadeIn"
          className=" text-[3rem] font-[700]"
        >
          Our Collections
        </motion.h2>
        <Flex
          row
          className=" flex-col space-y-[1rem] md:space-y-0 md:flex-row md:justify-between md:items-center "
        >
          <div className=" flex space-x-[0.8rem] md:w-auto overflow-x-scroll no-scrollbar">
            <ComponentListRender
              data={COLLECTIONS_CATEGORY}
              Component={(item: any) => (
                <NavigationButton
                  {...item}
                  activeStyle="items-center !h-max whitespace-nowrap font-[500] flex items-center justify-center  px-[2.6rem] text-[1.6rem] text-white py-[1rem] bg-[#0E1218] rounded-[12px]"
                />
              )}
            />
          </div>
          <Link to="#" className=" underline text-[#0E1218]">
            View more
          </Link>
        </Flex>
        <Outlet />
      </div>
    </Container>
  );
}

export default CollectionsSection;
