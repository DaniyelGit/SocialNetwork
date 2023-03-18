import React from 'react';
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../storeContext/StoreContext";
import {StoreType} from "../../redux/redux-store/redux-store";

type DialogsContainerType = {}

export const DialogsContainer = (props: DialogsContainerType) => {
   return (
      <StoreContext.Consumer>
         {
            (store: StoreType) => {
               return (
                  <Dialogs state={store.getState().dialogsPage} dispatch={store.dispatch}/>
               );
            }
         }
      </StoreContext.Consumer>
   );
};