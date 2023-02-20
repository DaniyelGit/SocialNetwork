import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";


export type dialogsDataType = {
   id: number
   name: string
};
export type messagesDataType = {
   id: number,
   message: string
}

type DialogsPropsType = {};

export const Dialogs = (props: DialogsPropsType) => {

   const dialogsData: dialogsDataType[] = [
      {id: 1, name: 'Даниель'},
      {id: 2, name: 'Виктория'},
      {id: 3, name: 'Евгений'},
      {id: 4, name: 'Артур'},
      {id: 5, name: 'Захар'},
   ];

   const messagesData: messagesDataType[] = [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra'},
      {id: 3, message: 'Yo'},
   ];

   const dialogsElements = dialogsData.map(item => {
      return <DialogItem key={item.id} id={item.id} name={item.name}/>
   });

   const messagesElements = messagesData.map(item => {
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