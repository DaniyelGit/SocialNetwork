import {actionsProfileType} from "../actionsCreator/actionsForProfile";


export type PostsType = {
   id: number,
   message: string,
   likeCount: number
}
export type ProfileStateType = {
   posts: PostsType[]
   newPostText: string
}

const initialState: ProfileStateType = {
   posts: [
      {id: 1, message: 'Hi! How are you ?', likeCount: 23},
      {id: 2, message: "It's my first post", likeCount: 3},
   ],
   newPostText: '',
}

export const profileReducer = (state = initialState, action: actionsProfileType): ProfileStateType => {
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