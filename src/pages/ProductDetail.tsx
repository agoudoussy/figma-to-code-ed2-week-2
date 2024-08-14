import Button from "UI/Button";
import ComponentListRender from "UI/ComponentListRender";
import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import ProductCard from "UI/ProductCard";
import { splitString } from "helpers/utils";
import { useApiService } from "hooks/useApiService";
import { useNavigationParams } from "hooks/useNavigationParams";
import { ProductNode } from "model/Product";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [variantIndex, setVariantsIndex] = useState(0);
  const {
    performWriteQueriesAndNavigate,
    queryParamsEquals,
    getSearchQueries,
    navigate,
  } = useNavigationParams();
  const { color, variantIndexs } = getSearchQueries() || {};
  const { getAnProduct, getCollectionProductsList, addCart } = useApiService([
    "getOneproduct",
    "getCollectionProductList",
  ]);
  const { cartMutation, isLoadingCartMutation } = addCart();
  const { collectionProducts } = getCollectionProductsList("429512622102"!!, 5);

  const getVariantsBySelectedCollection = (size: string) =>
    queryParamsEquals(selectedSize!!, size) ? "primary" : "outline";
  const { product, isLoadingProduct, productError } = getAnProduct(id!!);

  const variantHasColor = product?.variants.edges[0].node.title.includes("/");
  const getFirstVariantsId = product?.variants.edges[0].node.id!!;

  return (
    <Container className=" mt-[7.6rem]">
      <div className="flex flex-col lg:flex-row space-y-[3.2rem] lg:space-x-[4.2rem]">
        <img
          src={product?.variants.edges[variantIndexs ?? 0]?.node.image.url}
          alt="jersey"
          className="object-cover lg:w-[579px] lg:!h-[600px] rounded-[20px]"
        />
        <Flex>
          <Flex className=" space-y-[1.8rem]">
            <h3 className="text-[4.2rem]">{product?.title}</h3>
            <p className="text-[3.6rem]">
              {" "}
              {
                product?.variants.edges[variantIndex]?.node.price.currencyCode
              } $ {product?.variants.edges[variantIndex]?.node.price.amount}
            </p>

            {variantHasColor && (
              <div className=" space-y-[1.4rem]">
                <p>Color:{color}</p>
                <div className="flex flex-row  space-x-[1.1rem]">
                  <ComponentListRender
                    data={product?.variants.edges!!}
                    Component={({ element, index }: any) => (
                      <button
                        style={{
                          background: `${splitString(
                            "/",
                            element.node.title
                          )[1].toLowerCase()}`,
                        }}
                        className={`bg-green-300   w-[28px] aspect-square rounded-full ${
                          element.node.title.split("/")[1].toLowerCase() ===
                            color &&
                          "border-white outline outline-[2px] w outline-[#E5E5E5]"
                        }`}
                        onClick={() => {
                          setVariantsIndex(index);
                          performWriteQueriesAndNavigate({
                            variantIndexs: index,
                            color: splitString(
                              "/",
                              element.node.title
                            )[1].toLowerCase(),
                          });
                        }}
                      />
                    )}
                  />
                </div>
              </div>
            )}

            <div className=" space-y-[1.4rem]">
              <p>Size:</p>
              <Flex row className=" md:space-x-[1.2rem] flex-wrap gap-[5px] ">
                {product?.variants.edges.map((variant) => (
                  <Button
                    text={variant.node.title}
                    variant={getVariantsBySelectedCollection(
                      variant.node.title
                    )}
                    className="!text-[2rem] md:text-[2.4rem]"
                    onClick={() => {
                      setSelectedSize(variant.node.title);
                      performWriteQueriesAndNavigate({
                        size: variant.node.title,
                      });
                    }}
                  />
                ))}
              </Flex>
            </div>
          </Flex>

          <Flex row className="mt-[2.2rem] space-x-[1rem] ">
            <Button
              text="BUY NOW"
              variant="primary"
              fullWidth={true}
              onClick={() => navigate("/checkout")}
            />
            <Button
              text="ADD CART"
              variant="outline"
              fullWidth={true}
              onClick={() =>
                cartMutation(
                  {
                    quantity: 1,
                    marchandiseId: splitString("/", getFirstVariantsId)[4],
                  },
                  {
                    onSuccess: () => {
                      navigate("/cart");
                    },
                  }
                )
              }
            />
          </Flex>

          <Flex className="mt-[2.8rem] space-y-[1.4rem]">
            <h3 className="text-[3rem]">Description</h3>
            <p className="text-[1.8rem] text-[#7E7E7E]">
              {product?.description}
            </p>
          </Flex>
        </Flex>
      </div>

      <div className=" mt-[7.2rem] space-y-[3.2rem] mb-[9.6rem]">
        <h3 className="text-[3rem]">You also like</h3>
        <div className=" md:w-auto md:overflow-x-scroll md:no-scrollbar flex flex-col md:flex-row md:space-x-[2rem]">
          <ComponentListRender
            data={collectionProducts!!}
            Component={(product: ProductNode) => (
              <ProductCard
                libelle={product.title}
                img={product.featuredImage.url}
                price={product.variants.edges[0].node.price.amount}
                productId={product.id}
              />
            )}
          />
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;
