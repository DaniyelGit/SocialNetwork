import React from 'react';
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/store/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addMessageAC, updateMessageTextAC} from "../../redux/actionsCreator/actionsForDialogs";
import {InitialStateDialogsType} from "../../redux/reducer/dialogs-reducer";

/*type DialogsContainerType = {}

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
};*/ // самописный контейнер

type MapStateToPropsType = {
   dialogsState: InitialStateDialogsType
};
type MapDispatchToPropsType = {
   updateMessageText: (messageText: string) => void
   addMessage: () => void
};
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
     dialogsState: state.dialogsPage,
   };
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      updateMessageText: (messageText: string) => {
         dispatch(updateMessageTextAC(messageText));
      },
      addMessage: () => {
         dispatch(addMessageAC());
      }
   };
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)