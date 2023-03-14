import {ActionsType, postsType, profilePageType} from "../state/store";

export const profileReducer = (state: profilePageType, action: ActionsType) => {
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