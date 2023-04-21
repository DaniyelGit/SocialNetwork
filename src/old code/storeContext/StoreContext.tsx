import {createContext, ReactNode} from "react";
import {StoreType} from "../../redux/store/store";

export const StoreContext = createContext({} as StoreType);

// !!! type for Provider !!!
type ProviderType = {
   store: StoreType
   children: ReactNode
}

export const Provider = (props: ProviderType) => {
   return (
      <StoreContext.Provider value={props.store}>
         {props.children}
      </StoreContext.Provider>
   );
}
