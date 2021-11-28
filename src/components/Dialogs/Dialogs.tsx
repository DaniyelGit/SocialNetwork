import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redux/DialogsReducer/DialogsReducer";


export type DialogsPropsType = {
    state: MessagesPageType
    onChangeMessageText: (newMessageText: string) => void
    onSendMessageClick: () => void
}


export const Dialogs = (props: DialogsPropsType) => {

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textMessage = e.currentTarget.value;
        props.onChangeMessageText(textMessage);
    }
    const onSendMessageClickHandler = () => {
        props.onSendMessageClick();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.state.dialogsData.map(d => {
                        return (
                            <DialogItem name={d.name} id={d.id}/>
                        );
                    })
                }
            </div>
            <div className={s.messages}>
                {
                    props.state.messagesData.map(m => {
                        return (
                            <Message message={m.message} id={m.id}/>
                        );
                    })
                }
                <div>
                    <div>
                      <textarea
                          value={props.state.newMessageText}
                          placeholder={'Enter your message'}
                          onChange={onChangeMessageTextHandler}
                      />
                    </div>
                    <div>
                        <button onClick={onSendMessageClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}