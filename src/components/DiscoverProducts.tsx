import Button from "UI/Button";
import ComponentListRender from "UI/ComponentListRender";
import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import Grid from "UI/Grid";
import ProcessCardSekelton from "UI/ProcessCardSekelton";
import ProductCard from "UI/ProductCard";
import SkeletonListRender from "UI/SkeletonListRender";
import { useApiService } from "hooks/useApiService";
import { useNavigationParams } from "hooks/useNavigationParams";
import { ProductNode } from "model/Product";
import { useState } from "react";

function DiscoverProducts() {
  const initialSelectedCollection = {
    id: "all",
    name: "all",
  };
  const [selectedCollection, setSelectedCollection] = useState<{
    id: string;
    name: string;
  }>(initialSelectedCollection);

  const {
    queryParamsEquals,
    performWriteQueriesAndNavigate,
    getSearchQueries,
  } = useNavigationParams();
  const { id } = getSearchQueries() || {};
  const {
    getAllProduct,
    getPopularCollectionsList,
    getCollectionProductsList,
  } = useApiService([
    "getAllproduct",
    "getCollection",
    "getCollectionProductList",
  ]);
  const { products, isLoadingProducts } = getAllProduct;
  const { collections, getCollectionIsLoading } = getPopularCollectionsList();
  const { collectionProducts, getCollectionProductListIsLoading } =
    getCollectionProductsList(id, 10);

  const getVariantsBySelectedCollection = (id: string) =>
    queryParamsEquals(selectedCollection.id, id) ? "primary" : "outline";

  const filterProductByCollectionData = () =>
    selectedCollection.id === "all" ? products : collectionProducts;

  return (
    <Container className=" ">
      <h2 className=" font-chillax font-[700] text-[2rem] md:text-[2.4rem] lg:text-[3rem] text-center">
        Discover the latest trends in summer fashion. Shop now and refresh your
        wardrobe with our stylish summer shirts.
      </h2>

      <Flex className="mt-[5.2rem] md:mt-[6.2rem] lg:mt-[7.2rem] space-y-[3.6rem] items-center">
        <Flex
          row
          className=" md:space-x-[1rem] gap-[1rem] flex-wrap w-full md:justify-center "
        >
          <Button
            text="All "
            onClick={() => {
              setSelectedCollection(initialSelectedCollection);
              performWriteQueriesAndNavigate({
                id: "all",
              });
            }}
            variant={getVariantsBySelectedCollection("all")}
          />
          <ComponentListRender
            data={collections!!}
            Component={({ element: collection }, index) => (
              <Button
                key={`${index}-${collection.name}`}
                onClick={() => {
                  setSelectedCollection(collection);
                  performWriteQueriesAndNavigate({
                    id: collection.id,
                  });
                }}
                text={collection.name}
                variant={getVariantsBySelectedCollection(collection.id)}
              />
            )}
          />
        </Flex>

        {(isLoadingProducts || getCollectionProductListIsLoading) && (
          <SkeletonListRender number={6} Component={ProcessCardSekelton} />
        )}

        <Grid
          elementPerRow={3}
          elementPerRowTablet={2}
          elementPerRowMobile={1}
          rowGap={1}
          className=" place-items-center"
          colGap={1}
        >
          {filterProductByCollectionData() && (
            <ComponentListRender
              data={filterProductByCollectionData()!!}
              Component={(product: ProductNode) => (
                <ProductCard
                  libelle={product.title}
                  img={product.featuredImage.url}
                  price={product.variants.edges[0].node.price.amount}
                  productId={product.id}
                />
              )}
            />
          )}
        </Grid>
        <Button variant="outline" text="View More" />
      </Flex>
    </Container>
  );
}

export default DiscoverProducts;
