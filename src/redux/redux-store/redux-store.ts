import {combineReducers, createStore} from "redux";
import {profileReducer} from "../reducer/profile-reducer";
import {dialogsReducer} from "../reducer/dialogs-reducer";


const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
})

export type rootStoreType = ReturnType<typeof reducers>;

export const store = createStore(reducers)

