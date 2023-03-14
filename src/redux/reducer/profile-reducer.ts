import {ActionsType, postsType} from "../store/store";


type PostsType = {
   id: number,
   message: string,
   likeCount: number
}
type initialStateType = {
   posts: PostsType[],
   newPostText: string
}

const initialState: initialStateType = {
   posts: [
      {id: 1, message: 'Hi! How are you ?', likeCount: 23},
      {id: 2, message: "It's my first post", likeCount: 3},
   ],
   newPostText: '',
}

export const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
   switch (action.type) {
      case 'ADD-POST': {
         const newPost: postsType = {
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