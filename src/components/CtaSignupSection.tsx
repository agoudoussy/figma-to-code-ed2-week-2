import Button from "UI/Button";
import Container from "UI/Container/Container";

function CtaSignupSection() {
  return (
    <Container className="border-l-[1px] border-[#E8E9EA] pt-[9.6rem]">
      <div className="cta-signup-container | rounded-[32px] text-center space-y-[4rem] py-[7.6rem] text-white relative overflow-hidden z-20">
        <h2 className=" text-[2.8rem] md:text-[4.6rem] lg:text-[6.4rem] lg:font-[600] z-30  ">
          Build your NFT profile
        </h2>
        <p className=" text-[1.2rem] md:text-[1.6rem] leading-[28px] font-[600] ">
          Join almost 10k NFT profiles on Digit !
        </p>
        <Button variant="white" text="Sign up now" />
      </div>
    </Container>
  );
}

export default CtaSignupSection;
