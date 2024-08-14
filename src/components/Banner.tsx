import Button from "UI/Button";
import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import ArroTop from "assets/arrow.svg?react";
function Banner() {
  return (
    <Container className="banner | flex flex-col items-center justify-center rounded-[5.2rem] py-[4.2rem] md:py-[9.6rem] px-[2.2rem] md:px-[7.2rem] space-y-[1.6rem] md:space-y-[4.2rem] text-white mt-[4rem] mb-[6.2rem]">
      <div className=" flex flex-col justify-center items-center">
        <Flex row className=" items-center">
          <hr className=" block w-[66px]" />
          <p className=" whitespace-nowrap px-[1.2rem] text-[1rem] md:text-[1.4rem]">
            We bring new fashion to the world
          </p>
          <hr className="block  w-[66px]" />
        </Flex>

        <h2 className="font-chillax font-[900] text-[3rem] md:text-[4.2rem] lg:text-[4.8rem] text-center px-[3rem] mt-[1.8rem] ">
          DISCOVER THE LATEST FASHION TRENDS HERE
        </h2>
        <p className="text-[1.2rem] md:tex-[1.4rem] md:w-[520px] lg:  text-center w-[229px] mt-[1.6rem]">
          Discover a world of fashion with our meticulously curated outfits.
          Shop now to update your wardrobe with chic and stylish outfits.
        </p>
      </div>

      <div className="flex items-center">
        <Button variant="secondary" text="Start shopping" />
        <button className="p-[1.2rem] bg-white rounded-full flex justify-center items-center">
          <ArroTop />
        </button>
      </div>
    </Container>
  );
}

export default Banner;
