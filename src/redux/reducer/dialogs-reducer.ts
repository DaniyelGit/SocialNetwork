import {actionsDialogsType} from "../actionsCreator/actionsForDialogs";

type messagesType = {
   id: number,
   message: string
}
type dialogsType= {
   id: number,
   name: string
}
export type DialogsStateType = {
   dialogs: dialogsType[]
   messages: messagesType[]
   newMessageText: string
}

const initialState: DialogsStateType = {
   dialogs: [
      {id: 1, name: 'Даниель'},
      {id: 2, name: 'Виктория'},
      {id: 3, name: 'Евгений'},
      {id: 4, name: 'Артур'},
      {id: 5, name: 'Захар'},
   ],
   messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra'},
      {id: 3, message: 'Yo'},
   ],
   newMessageText: '',
}

export const dialogsReducer = (state = initialState, action: actionsDialogsType): DialogsStateType => {
   switch (action.type) {
      case 'UPDATE_MESSAGE-TEXT': {
         state.newMessageText = action.payload.messageText;
         return state
      }
      case 'ADD-NEW-MESSAGE': {
         const newMessage: messagesType = {
            id: 4,
            message:
            state.newMessageText
         };
         state.messages.push(newMessage);
         state.newMessageText = '';
         return state
      }
      default: {
         return state;
      }
   }
}