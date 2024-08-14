interface Price {
  amount: string;
  currencyCode: string;
}

interface VariantNode {
  price: Price;
}

interface VariantEdge {
  node: VariantNode;
}

interface ProductVariants {
  edges: VariantEdge[];
}

interface FeaturedImage {
  id: string;
  url: string;
}

export interface ProductNode {
  id: string;
  title: string;
  description: string;
  featuredImage: FeaturedImage;
  variants: ProductVariants;
}

interface Edge {
  node: ProductNode;
}

interface Products {
  edges: Edge[];
}

interface Data {
  products: Products;
}

// Define the main interface that represents the entire data structure
interface ShopifyProductData {
  data: Data;
}
