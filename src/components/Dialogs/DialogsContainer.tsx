import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsTypesForDialogs,
    MessagesPageType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/DialogsReducer/DialogsReducer";
import {Dialogs} from "./Dialogs";


export type DialogsContainerPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: ActionsTypesForDialogs) => void
}


export const DialogsContainer = (props: DialogsContainerPropsType) => {

    let dialogsData = props.messagesPage;

    const onChangeMessageText = (newMessageText: string) => {
        let textMessage = newMessageText;
        props.dispatch(updateNewMessageTextAC(textMessage));
    }
    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC());
    }

    return (
        <Dialogs state={dialogsData}
                 onChangeMessageText={onChangeMessageText}
                 onSendMessageClick={onSendMessageClick}
        />
    );
}