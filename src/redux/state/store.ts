import {ActionsType} from "../actionsCreator/actionsCreator";

// global store
export const store: storeType = {
   _state: {
      profilePage: {
         posts: [
            {id: 1, message: 'Hi! How are you ?', likeCount: 23},
            {id: 2, message: "It's my first post", likeCount: 3},
         ],
         newPostText: '',
      },
      dialogsPage: {
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
      },
   },
   _callSubscriber() {
      console.log('state changed')
   },
   getState() {
      return this._state;
   },
   subscribe(observer: () => void) {
      this._callSubscriber = observer;
   },
   dispatch(action: ActionsType) {
      switch (action.type) {
         case 'ADD-POST': {
            const newPost: postsType = {
               id: 3,
               message: this._state.profilePage.newPostText,
               likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
            break;
         }
         case 'UPDATE-POST-TEXT': {
            this._state.profilePage.newPostText = action.payload.postText;
            this._callSubscriber();
            break;
         }
         case 'UPDATE_MESSAGE-TEXT': {
            this._state.dialogsPage.newMessageText = action.payload.messageText;
            this._callSubscriber();
            break;
         }
         case 'ADD-NEW-MESSAGE': {
            const newMessage: messagesType = {id: 4, message: this._state.dialogsPage.newMessageText};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber();
            break;
         }
         default: {
            return this._state;
         }
      }
   }
}


// mini types for state
export type postsType = {
   id: number,
   message: string,
   likeCount: number
};
export type dialogsType = {
   id: number
   name: string
};
export type messagesType = {
   id: number,
   message: string
};
export type profilePageType = {
   posts: postsType[]
   newPostText: string
}
export type dialogsPageType = {
   dialogs: dialogsType[]
   messages: messagesType[]
   newMessageText: string
}
// main type for state
export type stateType = {
   profilePage: profilePageType
   dialogsPage: dialogsPageType
};
// main type for store
export type storeType = {
   _state: stateType
   _callSubscriber: () => void
   getState: () => stateType
   subscribe: (observer: () => void) => void
   dispatch: (action: ActionsType) => void
};



