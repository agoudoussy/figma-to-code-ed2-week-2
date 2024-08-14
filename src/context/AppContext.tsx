import { CreateCart } from "model/Cart";
import { ReactNode, createContext, useReducer, useState } from "react";

type TAppContext = {
  show: boolean;
  createCart: CreateCart | undefined;
  setCreateCart: any;
  toogleShow: () => void;
};

export const Context = createContext<TAppContext | null>(null);

function AppContext({ children }: { children: ReactNode }) {
  const [show, toogleShow] = useReducer((s) => !s, false);
  const [createCart, setCreateCart] = useState<CreateCart>();

  return (
    <Context.Provider value={{ show, toogleShow, createCart, setCreateCart }}>
      {children}
    </Context.Provider>
  );
}

export default AppContext;
