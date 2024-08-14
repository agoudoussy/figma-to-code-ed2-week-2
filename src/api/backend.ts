import axios, { AxiosResponse } from "axios";
import {
  GetAllProductResponse,
  GetCollectionProductList,
  GetCollectionResponse,
  GetOneProductResponse,
} from "model/ApiResponse";
import {
  getAllProductQuery,
  getPopularCollectionsQuery,
  getOneProductQuery,
  getCollectionProductListQuery,
  createCartQuery,
} from "./query";
import { CreateCartResponse } from "model/Cart";

const baseUrl = "https://mock.shop/api";

export const getAllProduct = async (signal: any) => {
  const response: AxiosResponse<GetAllProductResponse> = await axios.get(
    baseUrl + `?query=${getAllProductQuery}`,
    { signal }
  );
  return response.data;
};

export const getOneProduct = async (signal: any, productId: string) => {
  const response: AxiosResponse<GetOneProductResponse> = await axios.get(
    baseUrl + `?query=${getOneProductQuery(productId)}`,
    {
      signal,
    }
  );
  return response.data;
};

export const getPopularCollectionsListRequest = async (signal: any) => {
  const response: AxiosResponse<GetCollectionResponse> = await axios.get(
    baseUrl + `?query=${getPopularCollectionsQuery()}`,
    {
      signal,
    }
  );
  return response.data;
};

export const getCollectionProductList = async (
  signal: any,
  collectionId: string,
  listSize: number
) => {
  const response: AxiosResponse<GetCollectionProductList> = await axios.get(
    baseUrl + `?query=${getCollectionProductListQuery(collectionId, listSize)}`,
    {
      signal,
    }
  );
  return response.data;
};

export const createProductCart = async ({
  quantity,
  marchandiseId,
}: {
  quantity: number;
  marchandiseId: string;
}) => {
  const response: AxiosResponse<CreateCartResponse> = await axios.post(
    baseUrl,
    { query: createCartQuery(quantity, marchandiseId) }
  );
  return response.data;
};
