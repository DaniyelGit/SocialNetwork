import React, {ComponentType} from 'react';
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/store/store";
import {connect} from "react-redux";
import {addMessage} from "../../redux/actionsCreator/actionsForDialogs";
import {InitialStateDialogsType} from "../../redux/reducer/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
     dialogsState: state.dialogsPage,
   };
};

export default compose<ComponentType>(
   withAuthRedirect,
   connect(mapStateToProps, {addMessage}),
)(Dialogs);


//types
type MapStateToPropsType = {
   dialogsState: InitialStateDialogsType
};
type MapDispatchToPropsType = {
   addMessage: (newMessageBody: string) => void
};

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;




/*const WithRedirect = withAuthRedirect<DialogsPropsType>(Dialogs);
export const DialogsContainer = connect(mapStateToProps, {
   addMessage,updateMessageText,
})(WithRedirect);*/
