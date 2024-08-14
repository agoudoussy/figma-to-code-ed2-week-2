import Button from "UI/Button";
import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import menAfro from "assets/menAfro.jpg";
import ArroTop from "assets/arrow.svg?react";

function OurCollection() {
  return (
    <Container className="mt-[5.2rem] flex flex-col justify-center items-center">
      <Flex className=" space-y-[0.4rem] text-center">
        <h2 className="font-chillax font-[700] text-[2.4rem] md:text-[3rem] lg:text-[] lg:text-[3.6rem]">
          OUR COLLECTION
        </h2>
        <p className="text-[#7E7E7E] text-[1.6rem] md:text-[1.8rem]">
          Our latest collection, where classic and contemporary styles converge
          in perfect harmony.
        </p>
      </Flex>

      <Flex
        row
        className=" flex  flex-col-reverse md:flex-row justify-center gap-[1.6rem] md:space-y-0 md:space-x-[1.4rem] mt-[3.6rem] mb-[9.6rem]"
      >
        <Flex className="relative">
          <img
            src={menAfro}
            alt="afro men"
            className="object-cover w-[305px] !h-[446px] rounded-[20px]"
          />
          <Button
            text="LEARN MORE"
            iconPosition="right"
            variant="secondary"
            Icon={() => <ArroTop />}
            fullWidth={false}
            className=" absolute flex translate-x-[45%] -translate-y-[24%]  inset-0  mt-auto h-max"
          />
        </Flex>

        <Flex className="classic-main-conatiner relative rounded-[20px] justify-center items-center lg:px-[18rem] md:px-[2rem] md:py-0 py-[19.6rem]">
          <div className=" space-y-[0.4rem] text-white  text-center ">
            <h3 className="lg:text-[4.8rem] -tracking-[4px] text-[3rem] font-[900] outlined-text font-chillax ">
              CLASSIC MEN
            </h3>
            <p className="text-[1.4rem] md:text-[1.8rem]">
              We’re changing the way things get made
            </p>
          </div>
        </Flex>
      </Flex>
    </Container>
  );
}

export default OurCollection;
