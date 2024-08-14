import Button from "UI/Button";
import Flex from "UI/Flex";
import Trash from "assets/trashCart.svg?react";
import Minus from "assets/minus.svg?react";
import Plus from "assets/plus.svg?react";
import shoes from "assets/shoes.jpg";

function CartItem() {
  return (
    <Flex row className=" justify-between border-b-[1px] py-[2rem]">
      <Flex row className=" space-x-[1rem] items-center">
        <img
          src={shoes}
          alt="shoes"
          className=" w-[45px] !h-[45px] md:w-[70px] md:!h-[70px] object-cover rounded-[8px]"
        />
        <Flex>
          <h4 className="text-[1.4rem] font-[600]">T-Shirt</h4>
          <p className="text-[#7E7E7E] text-[1.2rem]">Green-Large</p>
          <p className="text-[1.4rem] font-bold">$87</p>
        </Flex>
      </Flex>

      <Flex
        row
        className=" items-center space-x-[2.4rem] md:space-x-[4.2rem] lg:space-x-[11rem]"
      >
        <Flex row className=" space-x-[0.8rem] items-center">
          <Flex
            row
            className=" bg-[#E5E5E5] p-[0.8rem] items-center md:p-[1.2rem] rounded-full space-x-[1rem] md:space-x-[2.6rem]"
          >
            <button>
              <Plus />
            </button>
            <p>0</p>
            <button>
              <Minus />
            </button>
          </Flex>
          <button className="flex flex-shrink-0 justify-center items-center w-[32px] h-[32px] md:w-[44px] md:h-[44px] rounded-full bg-[#E5E5E5]">
            <Trash />
          </button>
        </Flex>
        <p className="text-[1.2rem] md:text-[1.4rem]">$174.00</p>
      </Flex>
    </Flex>
  );
}

export default CartItem;
