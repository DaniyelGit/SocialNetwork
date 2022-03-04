import React from "react";
import {
    DialogsDataType,
    MessagesDataType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/DialogsReducer/MessagesReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType


type MapStateToPropsType = {
    messageData: Array<MessagesDataType>
    dialogsData: Array<DialogsDataType>
    newMessageText: string
}
let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        messageData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData,
        newMessageText: state.messagesPage.newMessageText,
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
