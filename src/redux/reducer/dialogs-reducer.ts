import {dialogsPageType, ActionsType, messagesType} from "../state/store";

export const dialogsReducer = (state: dialogsPageType, action: ActionsType) => {
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