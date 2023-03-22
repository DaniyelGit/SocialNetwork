import {actionsProfileType} from "../actionsCreator/actionsForProfile";


export type PostsType = {
   id: number,
   message: string,
   likeCount: number
}

// main type for state ProfilePage
export type InitialStateProfileType = typeof initialState;

const initialState = {
   posts: [
      {id: 1, message: 'Hi! How are you ?', likeCount: 23},
      {id: 2, message: "It's my first post", likeCount: 3},
   ] as PostsType[],
   newPostText: '',
}


export const profileReducer = (state: InitialStateProfileType = initialState, action: actionsProfileType): InitialStateProfileType => {
   switch (action.type) {
      case 'ADD-POST': {
         const newPost: PostsType = {
            id: 3,
            message: state.newPostText,
            likeCount: 0,
         };
         state.posts.push(newPost);
         state.newPostText = '';
         return  state;
      }
      case 'UPDATE-POST-TEXT': {
         state.newPostText = action.payload.postText;
         return state;
      }
      default: {
         return state;
      }
   }
}