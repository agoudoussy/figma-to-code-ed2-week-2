import Flex from "UI/Flex";
import ArrowRight from "assets/arrowRight.svg?react";
import Monkey from "assets/monkey.jpg";
import MachineHead from "assets/machineHead.jpg";
import Container from "UI/Container/Container";
import CelesteRing from "assets/celesteRing.svg?react";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "animations/animations";
import {
  fadeAndTranslateDownVariants,
  fadeAndTranslateUpVariants,
} from "animations/variants";

function HeroSection() {
  const [size, setSize] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroStyle = {
    "--height": `${size}px`,
  } as CSSProperties;

  const handleHeroSize = () => {
    if (heroRef.current) {
      const height = heroRef.current?.getBoundingClientRect().width;
      setSize(height);
    }
  };

  useEffect(() => {
    handleHeroSize();
  }, []);

  return (
    <Container className="border-l-[1px] border-[#E8E9EA] pt-[9.6rem] ">
      <motion.div
        className="hero-section-container relative flex flex-col md:flex-col lg:flex-row"
        style={heroStyle}
      >
        <div className="space-y-[5.2rem] w-max">
          <motion.h1
            {...fadeUpAnimation}
            transition={{
              duration: 0.6,
            }}
            className="text-[5.2rem] md:text-[9.6rem] lg:text-[12rem] font-[300] w-[335px] md:w-[676px] lg:w-[689px] leading-[82px] lg:leading-[108px]"
          >
            See the NFT new world
          </motion.h1>

          <Flex className="space-y-[2.6rem]  w-max">
            <motion.p
              {...fadeUpAnimation}
              transition={{
                duration: 0.6,
              }}
              className="w-[335px] md:w-[412px] text-[#484D56] font-[500] leading-[24px] "
            >
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, di
            </motion.p>
            <Flex
              tag="motion"
              row
              className=" w-max items-center justify-center space-x-[1.6rem]"
            >
              <span className="font-[600] leading-[24px]">Discover now</span>
              <motion.button
                whileHover={{
                  translateX: 5,
                }}
                className="w-[48px] flex items-center justify-center aspect-square rounded-full border-[1px] bg-transparent  border-[#181D28]"
              >
                <ArrowRight />
              </motion.button>
            </Flex>
          </Flex>
        </div>

        <div
          ref={heroRef}
          className="hero-section-illustration-container lg:absolute mt-[10rem] md:mt-0 relative top-0 right-0 flex gap-[2rem] md:items-center md:justify-center lg:justify-start lg:items-start "
        >
          <div className="absolute left-[125.82px] top-[32.52px] lg:top-0 lg:left-[151px] md:top-[30px] md:left-[261px]">
            <CelesteRing />
          </div>
          <motion.div
            variants={fadeAndTranslateUpVariants}
            transition={{
              duration: 0.8,
            }}
            initial="initial"
            whileInView="translateUp"
            viewport={{ once: true }}
            className="flex md:flex-row  items-center justify-center w-[287.58px] h-[442.29px] rounded-[164px] bg-[#0f1010] overflow-hidden mt-[14.6rem]"
          >
            <img
              src={MachineHead}
              alt="head moule with butterfly on it "
              className="!w-[130%] "
            />
          </motion.div>
          <motion.div
            variants={fadeAndTranslateDownVariants}
            transition={{
              duration: 0.8,
            }}
            initial="initial"
            whileInView="translateDown"
            viewport={{ once: true }}
            className="flex items-center justify-center w-[287.58px] h-[442.29px] object-fill rounded-[164px] bg-[#0f1010] overflow-hidden "
          >
            <img
              src={Monkey}
              alt="Monkey wearing glass"
              className="!w-[178%]"
            />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}

export default HeroSection;
