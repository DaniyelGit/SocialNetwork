import {actionsDialogsType} from "../actionsCreator/actionsForDialogs";

type MessagesType = {
   id: number,
   message: string
}
type DialogsType = {
   id: number,
   name: string
}

// main type for state DialogsPage
export type InitialStateDialogsType = typeof initialState;

const initialState = {
   dialogs: [
      {id: 1, name: 'Даниель'},
      {id: 2, name: 'Виктория'},
      {id: 3, name: 'Евгений'},
      {id: 4, name: 'Артур'},
      {id: 5, name: 'Захар'},
   ] as DialogsType[],
   messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra'},
      {id: 3, message: 'Yo'},
   ] as MessagesType[],
}

export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: actionsDialogsType): InitialStateDialogsType => {
   switch (action.type) {
      case 'ADD-NEW-MESSAGE': {
         const newMessage: MessagesType = {
            id: state.messages.length + 1,
            message: action.newMessageBody
         };
         return {...state,
            messages: [...state.messages, newMessage],
         };
      }
      default: {
         return state;
      }
   }
}