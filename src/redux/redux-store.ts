import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer/ProfileReducer";
import {MessagesReducer} from "./DialogsReducer/MessagesReducer";

export let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer
})

export type RootStateType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);
export type RootStoreType = typeof store



