import {ActionsAuthType} from "../actionsCreator/actionsForAuth";

export type UserDataType = {
   id: null | number,
   login: null | string,
   email: null | string,
}

export type InitialStateType = typeof initialState;

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
            ...action.payload
         };
      }
      default: {
         return state;
      }
   }
}