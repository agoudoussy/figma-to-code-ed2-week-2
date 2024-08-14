// GetAllProductsQuery.ts
export const getAllProductQuery = `
{
  products(first: 10) {
    edges {
      node {
        id
        title
        description
        featuredImage {
          id
          url
        }
        variants(first: 3) {
          edges {
            node {
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}`;

export const getOneProductQuery = (productId: string) => `

{
  product(id: "gid://shopify/Product/${productId}") {
    id
    title
    description
    featuredImage {
      id
      url
    }
    variants(first: 3) {
      edges {
        cursor
        node {
          id
          title
          image {
            url
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
}`;

export const getPopularCollectionsQuery = () => `{
    collections(first: 10,query:"(title:Unisex ) OR  (title:Accessories) OR (title:Featured) ") {
      edges {
        cursor
        node {
          id
          handle
          title
          description
          image {
            id
            url
          }
        }
      }
    }
  }
  `;

export const getCollectionProductListQuery = (
  collectionId: string,
  number: number
) => `
{
    collection(id: "gid://shopify/Collection/${collectionId}") {
      id
      handle
      title
      description
      image {
        id
        url
      }
      products(first: ${number}) {
        edges {
          node {
            id
            title
            featuredImage {
              id
              url
            }
            variants(first: 3) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const createCartQuery = (
  quantity: number,
  marchandiseId: string
) => ` mutation CartCreate {
  cartCreate(
    input: {
      lines: [
        {
          quantity: ${quantity}
          merchandiseId: "gid://shopify/ProductVariant/${marchandiseId}"
        }
      ]
    }
  ) {
    cart {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
                title
                image {
                  id
                  url
                }
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
      }
    }
  }
}`;
