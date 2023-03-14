import {ActionsType} from "../store/store";

type messagesType = {
   id: number,
   message: string
}
type dialogsType= {
   id: number,
   name: string
}
type initialStateType = {
   dialogs: dialogsType[]
   messages: messagesType[]
   newMessageText: string
}

const initialState: initialStateType = {
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

export const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
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