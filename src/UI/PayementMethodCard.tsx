import React, { ComponentType } from "react";
import Flex from "./Flex";

type TPayementMethodCard = {
  icone: ComponentType<{}>;
  libelle: string;
};

function PayementMethodCard({ icone: Icone, libelle }: TPayementMethodCard) {
  return (
    <Flex className=" cursor-pointer hover:border-black w-full py-[2.2rem] px-[1.2rem] rounded-[12px] border-[1px] border-[#C3C3C3]">
      <Icone />
      <p className="text-[1.2rem] font-[600]">{libelle}</p>
    </Flex>
  );
}

export default PayementMethodCard;
