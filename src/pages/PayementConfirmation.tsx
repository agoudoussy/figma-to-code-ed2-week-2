import Flex from "UI/Flex";
import Success from "assets/success.svg?react";

function PayementConfirmationPage() {
  return (
    <Flex className=" text-center items-center w-full mt-[13.2rem] mb-[35.3rem]">
      <Flex className=" justify-center items-center w-max  space-y-[1rem]">
        <Success />
        <div className=" space-y-[0.4rem]">
          <h3 className="text-[1.8rem] font-[700]">Thanks for your order !</h3>
          <p className="text-[1.2rem] text-[#7E7E7E]">
            The order confirmation has been sent to johndoe@gmail.com
          </p>
        </div>
      </Flex>
    </Flex>
  );
}

export default PayementConfirmationPage;
