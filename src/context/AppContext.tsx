import { ReactNode, createContext, useReducer } from "react";

type TAppContext = {
  show: boolean;
  toogleShow: () => void;
};

export const Context = createContext<TAppContext | null>(null);

function AppContext({ children }: { children: ReactNode }) {
  const [show, toogleShow] = useReducer((s) => !s, false);

  return (
    <Context.Provider value={{ show, toogleShow }}>{children}</Context.Provider>
  );
}

export default AppContext;
