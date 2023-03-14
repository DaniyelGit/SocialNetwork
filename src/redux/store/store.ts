import {
   addPostAC,
   updatePostTextAC
} from "../actionsCreator/actionsForProfile";
import {
   addMessageAC,
   updateMessageTextAC
} from "../actionsCreator/actionsForDialogs";
import {profileReducer} from "../reducer/profile-reducer";
import {dialogsReducer} from "../reducer/dialogs-reducer";


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
      console.log('store changed')
   },
   getState() {
      return this._state;
   },
   subscribe(observer: () => void) {
      this._callSubscriber = observer;
   },
   dispatch(action: ActionsType) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

      this._callSubscriber();
   }
}


// mini types for store
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
// main type for store
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

// main type for action
export type ActionsType = ReturnType<typeof addPostAC>
   | ReturnType<typeof updatePostTextAC>
   | ReturnType<typeof updateMessageTextAC>
   | ReturnType<typeof addMessageAC>;

