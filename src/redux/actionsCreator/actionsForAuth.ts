import {UserDataType} from "../reducer/authReducer";
import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {AppThunkType} from "../store/store";
import {FormDataType} from "../../components/Login/Login";

type SetUserDateType = ReturnType<typeof setUserDate>;

export const setUserDate = (userDate: UserDataType, isAuth: boolean) => {
   return {
      type: 'SET_USER_DATA',
      payload: {
         userDate,
         isAuth
      }
   };
};


// thunks
export const getAuthUserData = () => {
   return (dispatch: Dispatch) => {
     authAPI.isRegistered()
        .then(response => {
           if (response.resultCode === 0) {
             dispatch(setUserDate(response.data, true));
           }
        });
   };
};


export const logIn = (formData: FormDataType): AppThunkType => (dispatch) => {
   authAPI.logIn(formData)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
         }
      })
};

export const logOut = (): AppThunkType => (dispatch => {
   authAPI.logOut()
      .then(response => {
         if (response.data.resultCode === 0) {
            const emptyUser: UserDataType = {
               id: null,
               login: null,
               email: null,
            };
            dispatch(setUserDate(emptyUser, false))
         }
      })
}) ;

export type ActionsAuthType = SetUserDateType;