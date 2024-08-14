import Button from "UI/Button";
import ComponentListRender from "UI/ComponentListRender";
import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import Trash from "assets/trash.svg?react";
import CartItem from "components/CartItem";
import { useNavigate } from "react-router-dom";

function Cartpage() {
  const navigate = useNavigate();
  return (
    <Container className="mt-[4.2rem] md:mt-[5.4rem] mb-[6.2rem] lg:mb-[10.4rem] lg:mt-[6.4rem] flex flex-col space-y-[4.2rem]  md:space-y-[5.6rem] lg:space-y-0 justify-center items-center lg:flex-row lg:items-start lg:space-x-[4.2rem]">
      <Flex className=" w-full">
        <Flex row className=" justify-between items-start w-full">
          <h2 className="font-[600] text-[1.8rem] md:text-[2.4rem]">
            Cart (03)
          </h2>
          <Button
            text="Clear cart"
            variant="neutral"
            Icon={() => <Trash />}
            iconPosition="left"
          />
        </Flex>

        <Flex
          row
          className="w-full border-b-[1px] border-[#E5E5E5] justify-between text-[#7E7E7E] py-[1.2rem] mt-[2rem]"
        >
          <p>Product</p>
          <Flex row className="space-x-[103.5rem] md:space-x-[18.5rem]">
            <p>Quantity</p>
            <p>Price</p>
          </Flex>
        </Flex>

        <Flex className=" w-full">
          <ComponentListRender data={[1, 2, 3]} Component={CartItem} />
        </Flex>
      </Flex>

      <Flex className=" md:min-w-[374px] space-y-[1.4rem] py-[1.6rem] px-[2.4rem] rounded-[12px] border-[1px] border-[#E5E5E5] md:w-auto w-full">
        <h3 className=" whitespace-nowrap text-[#1D1D1D] text-[1.6rem]">
          Order summary
        </h3>
        <Flex className="border-b-[1px] border-[#E5E5E5] text-[#7E7E7E] text-[1.4rem] space-y-[0.4rem] pb-[1.2rem] mb-[1.2rem]">
          <Flex row className=" justify-between items-center">
            <h4>Subtotal</h4>
            <p>$524.00</p>
          </Flex>
          <Flex row className=" justify-between items-center">
            <h4>Discount</h4>
            <p>$524.00</p>
          </Flex>
        </Flex>
        <Flex row className=" justify-between items-center">
          <h4 className="text-[1.4rem]">Discount</h4>
          <p>$524.00</p>
        </Flex>
        <Button
          text="Checkout now"
          fullWidth={true}
          onClick={() => navigate("/checkout")}
        />
      </Flex>
    </Container>
  );
}

export default Cartpage;
