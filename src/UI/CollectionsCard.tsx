import Ether from "assets/ether.svg?react";
import Button from "./Button";
import Flex from "./Flex";
import { motion } from "framer-motion";
import { fadeAndTranslateUpVariants, fadeInVariant } from "animations/variants";

export type TCollectionsCard = {
  img: string;
  libelle: string;
};

function CollectionsCard({ img, libelle }: TCollectionsCard) {
  return (
    <motion.div
      variants={fadeAndTranslateUpVariants}
      transition={{
        duration: 0.5,
        ease: "linear",
      }}
      initial="initial"
      viewport={{ once: true }}
      whileInView="translateUp"
      className=" border-[1px] border-[#B8BABE] rounded-[20px] p-[1.2rem] w-max"
    >
      <div>
        <img
          src={img}
          alt={libelle}
          className="object-cover w-[258px] !h-[213px] rounded-[20px]"
        />

        <Flex row className=" justify-between py-[1.6rem]">
          <p className="text-[#0E1218] font-[700]">{libelle}</p>
          <Flex row className="space-x-[0.2rem] items-center">
            <Ether />
            <span className="font-[700] text-[1.4rem]">86</span>
          </Flex>
        </Flex>
        <Button
          text="Place a bid"
          fullWidth={true}
          variant="outline"
          radius="sm"
        />
      </div>
    </motion.div>
  );
}

export default CollectionsCard;
