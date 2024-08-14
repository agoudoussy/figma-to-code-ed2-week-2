import { Skeleton } from "@mui/material";
import Grid from "./Grid";
import Flex from "./Flex";

function ProcessCardSekelton() {
  return (
    <Flex>
      <Skeleton
        variant="rectangular"
        width="323px"
        height="405px"
        className=" !rounded-[12px]"
      />
      <Flex className="w-[200px]">
        <Skeleton />
        <Skeleton />
      </Flex>
    </Flex>
  );
}

export default ProcessCardSekelton;
