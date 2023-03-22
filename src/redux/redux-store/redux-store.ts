import {combineReducers, createStore} from "redux";
import {profileReducer} from "../reducer/profile-reducer";
import {dialogsReducer} from "../reducer/dialogs-reducer";


const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
})


export const store = createStore(rootReducer)

// type for main state
export type AppStateType = ReturnType<typeof rootReducer>;
// type for store
export type StoreType = typeof store;



