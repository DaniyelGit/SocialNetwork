import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {
    InitialStateType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/DialogsReducer/MessagesReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType


type MapStateToPropsType = {
    messagePage: InitialStateType
}
let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        messagePage: state.messagesPage,
    };
}

type MapDispatchPropsType = {
    onChangeMessageText: (newMessageText: string) => void
    onSendMessageClick: () => void
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onChangeMessageText: (newMessageText: string) => {
            dispatch(updateNewMessageTextAC(newMessageText));
        },
        onSendMessageClick: () => {
            dispatch(sendMessageAC());
        }
    };
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
