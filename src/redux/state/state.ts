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
      messagePage: {
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
      },
   },
   _callSubscriber() {
      console.log('state changed')
   },
   getState() {
      return this._state;
   },
   /*addPost() {
      const newPost: postsType = {
         id: 3,
         message: this._state.profilePage.newPostText,
         likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber();
   },*/
   /*updatePostText(valueText: string) {
      this._state.profilePage.newPostText = valueText;
      this._callSubscriber();
   },*/
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
            this._state.profilePage.newPostText = action.payload.newPostText;
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
export type messagePageType = {
   dialogs: dialogsType[]
   messages: messagesType[]
}
// main type for state
export type stateType = {
   profilePage: profilePageType
   messagePage: messagePageType
};
// main type for store
export type storeType = {
   _state: stateType
   _callSubscriber: () => void
   getState: () => stateType
   // addPost: () => void
   // updatePostText: (valueText: string) => void
   subscribe: (observer: () => void) => void
   dispatch: (action: ActionsType) => void
};
// main actions type
export type ActionsType = addPostActionType
   | updatePostTextActionType;

// action type
type addPostActionType = {
   type: 'ADD-POST',
};
type updatePostTextActionType = {
   type: 'UPDATE-POST-TEXT',
   payload: {
      newPostText: string
   }
};



