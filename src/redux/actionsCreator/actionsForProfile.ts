import {ProfileUserType} from "../reducer/profile-reducer";
import {Dispatch} from "redux";
import {profileAPI, socialNetworkAPI} from "../../api/api";

export const addPost = () => {
   return {
      type: "ADD_POST",
   } as const
};

export const updatePostText = (postText: string) => {
   return {
      type: "UPDATE_POST_TEXT",
      payload: postText
   } as const
};

export const setUserProfile = (userProfile: ProfileUserType) => {
   return {
      type: 'SET_USER_PROFILE',
      payload: userProfile
   } as const;
};

export const setStatusProfile = (statusText: string) => {
   return {
      type: 'SET_STATUS',
      payload: statusText,
   } as const;
};

export const getProfile = (userID: string) => {
   return (dispatch: Dispatch) => {
      profileAPI.getProfile(userID)
         .then(response => {
            dispatch(setUserProfile(response.data));
         });
   };
};

export const getStatusProfile = (userID: string) => {
   return (dispatch: Dispatch) => {
      profileAPI.getStatusProfile(userID)
         .then(response => {
            dispatch(setStatusProfile(response.data))
         });
   };
};

export const updateStatusProfile = (statusText: string) => {
   return (dispatch: Dispatch) => {
      profileAPI.updateStatusProfile(statusText)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setStatusProfile(statusText));
            }
         });
   };
};


export type actionsProfileType = ReturnType<typeof addPost>
   | ReturnType<typeof updatePostText> | ReturnType<typeof setUserProfile>
   | ReturnType<typeof setStatusProfile>;