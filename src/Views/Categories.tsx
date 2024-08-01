import CollectionsCard from "UI/CollectionsCard";
import ComponentListRender from "UI/ComponentListRender";
import Grid from "UI/Grid";
import { COLLECTIONS_CARD } from "helpers/utils";

function Categories() {
  return (
    <>
      <Grid
        elementPerRow={4}
        elementPerRowMobile={1}
        elementPerRowTablet={2}
        columnWidthTablet="282px"
        className=" place-items-center place-content-center"
      >
        <ComponentListRender
          data={COLLECTIONS_CARD}
          Component={CollectionsCard}
        />
      </Grid>
    </>
  );
}

export default Categories;
