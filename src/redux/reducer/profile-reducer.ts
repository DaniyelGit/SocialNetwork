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
   photos: ProfileUserPhotos,
}


// main type for state ProfilePage
export type InitialStateProfileType = typeof initialState;

const initialState = {
   posts: [
      {id: 1, message: 'Hi! How are you ?', likeCount: 23},
      {id: 2, message: "It's my first post", likeCount: 3},
   ] as PostsType[],
   profileUser: null as ProfileUserType | null,
   status: '',
}


export const profileReducer = (state: InitialStateProfileType = initialState, action: actionsProfileType): InitialStateProfileType => {
   switch (action.type) {
      case "ADD_POST": {
         const newPost: PostsType = {
            id: state.posts.length + 1,
            message: action.newPostBody,
            likeCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
         };
      }
      case "SET_USER_PROFILE": {
         return {
            ...state,
            profileUser: {...action.payload}
         }
      }
      case "SET_STATUS": {
         return {
            ...state,
            status: action.payload
         }
      }
      default: {
         return state;
      }
   }
}