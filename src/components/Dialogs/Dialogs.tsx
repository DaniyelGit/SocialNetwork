import React from 'react';
import s from './Dialogs.module.css';

import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {messagePageType} from "../../redux/state/state";



type DialogsPropsType = {
   state: messagePageType
};

export const Dialogs = (props: DialogsPropsType) => {

   const dialogsElements = props.state.dialogs.map(item => {
      return <DialogItem key={item.id} id={item.id} name={item.name}/>
   });

   const messagesElements = props.state.messages.map(item => {
      return <MessageItem key={item.id} message={item.message}/>
   });

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {dialogsElements}
         </div>

         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   );
};