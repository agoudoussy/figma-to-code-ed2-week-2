interface Image {
  id: string;
  url: string;
}

interface Merchandise {
  id: string;
  title: string;
  image: Image;
}

interface CartItem {
  id: string;
  merchandise: Merchandise;
}

interface Cost {
  totalAmount: {
    amount: string;
    currencyCode: string;
  };
  subtotalAmount: {
    amount: string;
    currencyCode: string;
  };
}

interface Lines {
  edges: CartItem[];
}

interface Cart {
  id: string;
  createdAt: string;
  updatedAt: string;
  lines: Lines;
  cost: Cost;
}

export type CreateCartResponse = {
  cartCreate: {
    cart: Cart;
  };
};

interface Image {
  id: string;
  url: string;
}

interface Merchandise {
  id: string;
  title: string;
  image: Image;
}

interface EdgeNode {
  id: string;
  merchandise: Merchandise;
}

interface Lines {
  edges: Array<EdgeNode>;
}

interface Cost {
  totalAmount: {
    amount: string;
    currencyCode: string;
  };
  subtotalAmount: {
    amount: string;
    currencyCode: string;
  };
}

export type CreateCart = {
  id: string;
  createdAt: string;
  updatedAt: string;
  lines: Lines;
  cost: Cost;
};
