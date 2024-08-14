import { ComponentType, ReactNode } from "react";
import Grid from "./Grid";
import { generateArray } from "helpers/utils";

function SkeletonListRender({
  number,
  Component,
}: {
  number: number;
  Component: ComponentType<{}>;
}) {
  return (
    <Grid
      elementPerRow={3}
      elementPerRowMobile={1}
      elementPerRowTablet={2}
      colGap={2}
      rowGap={2}
    >
      {generateArray(number).map(() => (
        <Component />
      ))}
    </Grid>
  );
}

export default SkeletonListRender;
