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
}
export type messagePageType = {
   dialogs: dialogsType[]
   messages: messagesType[]
}


export type stateType = {
  profilePage: profilePageType
  messagePage: messagePageType
};

export const state: stateType = {
   profilePage: {
      posts: [
         {id: 1, message: 'Hi! How are you ?', likeCount: 23},
         {id: 2, message: "It's my first post", likeCount: 3},
      ],
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
}