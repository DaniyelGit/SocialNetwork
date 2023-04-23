import {UserDataType} from "../reducer/authReducer";
import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

type SetUserDateType = ReturnType<typeof setUserDate>;

export const setUserDate = (userDate: UserDataType) => {
   return {
      type: 'SET_USER_DATA',
      payload: userDate
   };
};

export const getAuthUserData = () => {
   return (dispatch: Dispatch) => {
     authAPI.isRegistered()
        .then(response => {
           if (response.resultCode === 0) {
             dispatch(setUserDate(response.data));
           };
        });
   };
};

export type ActionsAuthType = SetUserDateType;