import {AppStateType} from "../../redux/store/store";

export const getUsersFromState = (state: AppStateType) => {
   return state.usersPage.users;
};