import {UserDataType} from "../reducer/authReducer";

type SetUserDateType = ReturnType<typeof setUserDate>;

export const setUserDate = (userDate: UserDataType) => {
   return {
      type: 'SET_USER_DATA',
      payload: userDate
   }
};

export type ActionsAuthType = SetUserDateType;