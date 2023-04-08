import {ProfileUserType} from "../reducer/profile-reducer";

export const addPost = () => {
   return {
      type: "ADD-POST",
   } as const
};

export const updatePostText = (postText: string) => {
   return {
      type: "UPDATE-POST-TEXT",
      payload: postText
   } as const
};

export const setUserProfile = (userProfile: ProfileUserType) => {
   return {
      type: 'SET_USER-PROFILE',
      payload: userProfile
   } as const;
}


export type actionsProfileType = ReturnType<typeof addPost>
| ReturnType<typeof updatePostText> | ReturnType<typeof setUserProfile>;