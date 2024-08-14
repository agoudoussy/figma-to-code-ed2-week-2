import { useMutation, useQuery } from "react-query";
import {
  getAllProduct,
  getPopularCollectionsListRequest,
  getOneProduct,
  getCollectionProductList,
  createProductCart,
} from "api/backend";
import { splitString } from "helpers/utils";

export const useApiService = (queryName: string | string[] = "") => {
  const getQueryName = (keyName: any) => {
    if (typeof queryName === "string") {
      return keyName === queryName;
    }
    return queryName?.includes(keyName);
  };

  const {
    data: products,
    isError: productsError,
    isLoading: isLoadingProducts,
  } = useQuery("getAllproduct", ({ signal }) => getAllProduct(signal), {
    enabled: getQueryName("getAllproduct"),
    select: (data) =>
      data.data.products?.edges.map((item) => ({
        ...item.node,
        id: splitString("/", item.node.id)[4],
      })),
  });

  const getAnProduct = (productId: string) => {
    const {
      data: product,
      isError: productError,
      isLoading: isLoadingProduct,
    } = useQuery(
      ["getOneproduct", productId],
      ({ signal }) => getOneProduct(signal, productId),
      {
        enabled: getQueryName("getOneproduct"),
        select: (data) => data.data.product,
      }
    );
    return {
      product,
      productError,
      isLoadingProduct,
    };
  };

  const getPopularCollectionsList = () => {
    const {
      data: collections,
      isError: getCollectionIsError,
      isLoading: getCollectionIsLoading,
    } = useQuery(
      "getCollection",
      ({ signal }) => getPopularCollectionsListRequest(signal),
      {
        enabled: getQueryName("getCollection"),
        select: (data) =>
          data.data.collections.edges.map((collection) => ({
            id: splitString("/", collection.node.id)[4],
            name: collection.node.title,
          })),
      }
    );
    return {
      collections,
      getCollectionIsError,
      getCollectionIsLoading,
    };
  };

  const getCollectionProductsList = (collectionId: string, size: number) => {
    const {
      data: collectionProducts,
      isError: getCollectionProductListIsError,
      isLoading: getCollectionProductListIsLoading,
    } = useQuery(
      ["getCollectionProductList", { collectionId }],
      ({ signal }) => getCollectionProductList(signal, collectionId, size),
      {
        enabled: getQueryName("getCollectionProductList"),
        select: (data) =>
          data.data.collection.products.edges.map((item) => {
            return {
              ...item.node,
              id: splitString("/", item.node.id)[4],
            };
          }),
      }
    );
    return {
      collectionProducts,
      getCollectionProductListIsError,
      getCollectionProductListIsLoading,
    };
  };

  const addCart = () => {
    const {
      data: cart,
      mutate: cartMutation,
      isLoading: isLoadingCartMutation,
    } = useMutation("createCart", createProductCart);

    return { cart, cartMutation, isLoadingCartMutation };
  };                    

  return {
    getAllProduct: {
      products,
      productsError,
      isLoadingProducts,
    },
    getAnProduct,
    getPopularCollectionsList,
    getCollectionProductsList,
    addCart,
  };
};
