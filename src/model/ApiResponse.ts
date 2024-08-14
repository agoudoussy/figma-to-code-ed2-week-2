import { ProductNode } from "./Product";
import { CollectionType } from "./Collection";
import { ProductVariant } from "./ProdcutVariant";
import { CreateCart } from "./Cart";

export type GetAllProductResponse = {
  data: {
    products: {
      edges: { node: ProductNode }[];
    };
  };
};

export type GetOneProductResponse = {
  data: {
    product: ProductVariant;
  };
};

export type GetCollectionResponse = {
  data: {
    collections: {
      edges: CollectionType[];
    };
  };
};

export type GetCollectionProductList = {
  data: {
    collection: {
      id: string;
      handle: string;
      title: string;
      description: string;
      image: {
        id: string;
        url: string;
      };
      products: {
        edges: {
          node: ProductNode;
        }[];
      };
    };
  };
};

export type GetCartResponse = {
  cartCreate: {
    cart: CreateCart;
  };
};
