import {combineReducers, createStore} from "redux";
import {profileReducer} from "../reducer/profile-reducer";
import {dialogsReducer} from "../reducer/dialogs-reducer";


const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
})


export const store = createStore(reducers)


export type RootStoreType = ReturnType<typeof reducers>;
export type StoreType = typeof store;