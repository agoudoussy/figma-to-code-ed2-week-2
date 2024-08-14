export type ProductVariant = {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    id: string;
    url: string;
  };
  variants: {
    edges: EdgeVariant[];
  };
};

type EdgeVariant = {
  cursor: string;
  node: {
    id: string;
    title: string;
    image: {
      url: string;
    };
    price: {
      amount: string;
      currencyCode: string;
    };
  };
};
