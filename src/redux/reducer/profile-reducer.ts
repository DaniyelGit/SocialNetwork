import {actionsProfileType} from "../actionsCreator/actionsForProfile";


export type PostsType = {
   id: number,
   message: string,
   likeCount: number
}

export type ProfileUserLinks = {
   facebook: string | null
   website: string | null
   vk: string | null
   twitter: string | null
   instagram: string | null
   youtube: string | null
   github: string | null
   mainLink: string | null
}
export type ProfileUserPhotos = {
   small: string | null
   large: string | null
}
export type ProfileUserType = {
   aboutMe: string
   contacts: ProfileUserLinks
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   userId: number
   photos: ProfileUserPhotos
}


// main type for state ProfilePage
export type InitialStateProfileType = typeof initialState;

const initialState = {
   posts: [
      {id: 1, message: 'Hi! How are you ?', likeCount: 23},
      {id: 2, message: "It's my first post", likeCount: 3},
   ] as PostsType[],
   profileUser: null as ProfileUserType | null,
   newPostText: '',
}


export const profileReducer = (state: InitialStateProfileType = initialState, action: actionsProfileType): InitialStateProfileType => {
   switch (action.type) {
      case "ADD-POST": {
         const newPost: PostsType = {
            id: state.posts.length + 1,
            message: state.newPostText,
            likeCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         };
      }
      case "UPDATE-POST-TEXT": {
         return {...state, newPostText: action.payload};
      }
      case "SET_USER-PROFILE": {
         return {
            ...state,
            profileUser: {...action.payload}
         }
      }
      default: {
         return state;
      }
   }
}