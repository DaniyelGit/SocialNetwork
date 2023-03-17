import React from 'react';
import {actionsType} from "../../redux/actionsCreator/allActionsType";
import {DialogsStateType} from "../../redux/reducer/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
   state: DialogsStateType
   dispatch: (action: actionsType) => void
}

export const DialogsContainer = (props: DialogsContainerType) => {
   return (
      <Dialogs state={props.state} dispatch={props.dispatch}/>
   );
};