import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer/ProfileReducer";
import {DialogsReducer} from "./DialogsReducer/DialogsReducer";

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);