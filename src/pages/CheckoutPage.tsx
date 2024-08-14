import Button from "UI/Button";
import ComponentListRender from "UI/ComponentListRender";
import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import Grid from "UI/Grid";
import Input from "UI/Input";
import PayementMethodCard from "UI/PayementMethodCard";
import shoes from "assets/shoes.jpg";
import Cart from "assets/creditCard.svg?react";
import Bank from "assets/bank.svg?react";
import Lock from "assets/lock.svg?react";
import ArroRight from "assets/arrow-right.svg?react";
import Card from "UI/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SHIPPING = [
  {
    label: "Free shipping",
    value: "free",
    description: "7-30 business days",
    price: "0",
  },
  {
    label: "Regular shipping",
    value: "regular",
    description: "3-14 business days",
    price: "7,50",
  },
  {
    label: "Express shipping",
    value: "express",
    description: "1-3 business days",
    price: "22,50",
  },
];

function CheckoutPage() {
  const navigate = useNavigate();
  //state
  const [selectCard, setSelectCard] = useState("regular");
  const handleSelectedCard = (value: string) => {
    setSelectCard(value);
  };

  return (
    <Container className="w-full flex-col flex  lg:space-y-0  lg:flex-col py-[4.2rem] md:py-[5.2rem] lg:pt-[6.2rem] lg:pb-[10.4rem]">
      <h2 className="font-[600] text-[1.8rem] md:text-[2.4rem] font-chillax">
        Checkout
      </h2>
      <Flex className="w-full flex  pt-[2rem] lg:space-x-[11.2rem] lg:space-y-0 space-y-[6.2rem] flex-col lg:flex-row py-[4.2rem] md:py-[2rem] lg:pt-[2rem] lg:pb-[10.4rem]">
        <Flex className="w-full">
          <Flex className="space-y-[0.4rem]">
            <h3 className="text-[1.4rem] font-[600]">your order</h3>
            <p className="text-[1.2rem] text-[#7E7E7E]">
              By placing your order, you agree to Ballamas{" "}
              <span className="text-black underline">Privacy</span> and
              <span className=" text-black underline">Policy</span>.
            </p>
          </Flex>

          <Flex>
            <Flex className=" space-y-[1.2rem] mt-[1.6rem]">
              <ComponentListRender
                data={[1, 2, 3]}
                Component={() => (
                  <Flex row className=" justify-between items-center">
                    <Flex row className=" space-x-[1rem] items-center">
                      <img
                        src={shoes}
                        alt="shoes"
                        className=" w-[45px] !h-[45px] md:w-[72px] md:!h-[72px] object-cover rounded-[8px]"
                      />
                      <Flex>
                        <h4 className="text-[1.4rem] font-[600]">T-Shirt</h4>
                        <p className="text-[#7E7E7E] text-[1.2rem]">
                          Color:Green-Size:Large
                        </p>
                      </Flex>
                    </Flex>
                    <p className="text-[1.2rem] md:text-[1.4rem]">$174.00</p>
                  </Flex>
                )}
              />
            </Flex>

            <Flex className=" mt-[2.4rem]">
              <h4 className="text-[1.2rem]">Discount Code</h4>
              <Flex row className="space-x-[0.8rem] mt-[0.4rem] mb-[0.8rem]">
                <div className=" h-max border-[1px] border-[#7E7E7E] text-black w-full lg:w-[316px] rounded-full">
                  <input
                    placeholder="Add discount code"
                    className="text-[1.2rem] p-[1.4rem] bg-transparent placeholder:text-black w-full"
                  />
                </div>
                <Button variant="primary" text="Apply" className="font-[600]" />
              </Flex>
              <p className=" text-[1.2rem]">
                New customer? Signup{" "}
                <span className="text-[#7E7E7E]">to get better offer</span>
              </p>
            </Flex>

            <Flex className="mt-[2.4rem]">
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
            </Flex>

            <Flex className=" mt-[2.4rem] space-y-[1.4rem]">
              <h3 className="text-[1.4rem] font-[600]">Shipping method</h3>
              <div className=" space-y-[1.2rem]">
                {SHIPPING.map((item, index) => (
                  <Card
                    radioOptions={item}
                    selectCard={selectCard}
                    setSelectCard={handleSelectedCard}
                    className="card-container"
                    id={index + 1}
                  />
                ))}
              </div>
            </Flex>
          </Flex>
        </Flex>

        <Flex className="">
          <Flex>
            <h3 className="text-[1.4rem] font-[600]">Payment details</h3>
            <p className="text-[1.2rem] text-[#7E7E7E]">
              Complete your purchase by providing your payment details.
            </p>
          </Flex>

          <Flex className="mt-[1.6rem]">
            <h3 className="text-[1.4rem] font-[600]">Shipping method</h3>
            <Grid
              elementPerRow={2}
              elementPerRowMobile={1}
              elementPerRowTablet={2}
              colGap={1}
            >
              <Input label="Firstname" />
              <Input label="Lastname" />
              <Input label="Email adress" />
              <Input label="Phone number" />
              <Input label="Adress" />
              <Input label="City" />
              <Input label="Region" />
              <Input label="Postal code" />
            </Grid>
          </Flex>

          <Flex className="w-full mt-[2rem] space-y-[1.2rem]">
            <h3 className="text-[1.4rem] font-[600]">Select payment method</h3>
            <Flex className="w-full">
              <Flex row className="w-full space-x-[2rem]">
                <PayementMethodCard
                  icone={() => <Cart />}
                  libelle="Debit / Credit Card"
                />
                <PayementMethodCard
                  icone={() => <Bank />}
                  libelle="Virtual accout"
                />
              </Flex>
              <Flex className=" space-y-[0.8rem]">
                <Input
                  containerStyle="!w-full"
                  placeholder="card number"
                  Icone={() => <Lock />}
                />
                <Grid
                  elementPerRow={2}
                  elementPerRowTablet={2}
                  elementPerRowMobile={1}
                >
                  <Input containerStyle="!w-full" placeholder="card number" />
                  <Input containerStyle="!w-full" placeholder="card number" />
                </Grid>
                <Flex className="w-full flex justify-center items-center pt-[2.2rem] px-[8.6rem]">
                  <Button
                    text="Payer $500 "
                    Icon={() => <ArroRight />}
                    iconPosition="right"
                    fullWidth={true}
                    onClick={() => navigate("/confirmation-payement")}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default CheckoutPage;
