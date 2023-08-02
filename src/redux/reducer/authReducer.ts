import {ActionsAuthType} from "../actionsCreator/actionsForAuth";


const initialState = {
   userData: {
      id: null,
      login: null,
      email: null,
   } as UserDataType,
   isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsAuthType): InitialStateType => {
   switch (action.type) {
      case 'SET_USER_DATA': {
         return {
            ...state,
            userData: {
               ...action.payload.userDate
            },
            isAuth: action.payload.isAuth
         };
      }
      default: {
         return state;
      }
   }
}


export type UserDataType = {
   id: null | number,
   login: null | string,
   email: null | string,
}

export type InitialStateType = typeof initialState;
