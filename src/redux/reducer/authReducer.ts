export type UserDataType = {
   userId: null | number,
   login: null | string,
   email: null | string,
}

export type InitialStateType = typeof initialState;

const initialState = {
   userData: {
      userId: null,
      login: null,
      email: null,
   } as UserDataType,
   isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case '': {
         return state;
      }
      default: {
         return state;
      }
   }
}