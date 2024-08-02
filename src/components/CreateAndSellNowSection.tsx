import ComponentListRender from "UI/ComponentListRender";
import Container from "UI/Container/Container";
import Grid from "UI/Grid";
import ProcessCard from "UI/ProcessCard";
import { PROCESS_CARD } from "helpers/utils";

function CreateAndSellNowSection() {
  return (
    <Container className="border-l-[1px] border-[#E8E9EA] pt-[9.6rem] space-y-[3.6rem] overflow-hidden">
      <h2 className=" text-[3rem] font-[700]">Create and sell now</h2>
      <Grid
        elementPerRow={4}
        elementPerRowMobile={1}
        elementPerRowTablet={2}
        colGap={2.4}
        rowGap={2.4}
        columnWidthTablet="282px"
        className=" place-items-center place-content-center px-[2.65rem] md:px-0"
      >
        <ComponentListRender data={PROCESS_CARD} Component={ProcessCard} />
      </Grid>
    </Container>
  );
}

export default CreateAndSellNowSection;
