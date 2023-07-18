import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "../reducer/profile-reducer";
import {dialogsReducer} from "../reducer/dialogs-reducer";
import {usersReducer} from "../reducer/users-reducer";
import {authReducer} from "../reducer/authReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk, {ThunkAction} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import {appReducer} from "../reducer/app-reducer";


const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer,
   form: formReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// type for main state
export type AppStateType = ReturnType<typeof rootReducer>;
// type for store
export type StoreType = typeof store;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>;



// @ts-ignore
window.store = store;



