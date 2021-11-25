import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, MessagesPageType, sendMessageAC, updateNewMessageTextAC} from "../../redux/state";

type DialogsPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: ActionsTypes) => void
}



export const Dialogs = (props: DialogsPropsType) => {

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textMessage = e.currentTarget.value;
        props.dispatch(updateNewMessageTextAC(textMessage));
    }
    const onSendMessageClickHandler = () => {
        props.dispatch(sendMessageAC());
    }


    let dialogsData = props.messagesPage.dialogsData;
    let messagesData = props.messagesPage.messagesData;
    let newMessageText = props.messagesPage.newMessageText;

    return(
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              {
                 dialogsData.map(d => {
                      return (
                        <DialogItem name={d.name} id={d.id}/>
                      );
                  })
              }
          </div>
          <div className={s.messages}>
              {
                  messagesData.map(m => {
                      return (
                        <Message message={m.message} id={m.id}/>
                      );
                  })
              }
              <div>
                  <div>
                      <textarea value={newMessageText}
                                placeholder={'Enter your message'}
                                onChange={onChangeMessageTextHandler}
                      ></textarea>
                  </div>
                  <div>
                      <button onClick={onSendMessageClickHandler}>Send</button>
                  </div>
              </div>
          </div>
      </div>
    );
}