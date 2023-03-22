import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';

import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {addMessageAC, updateMessageTextAC} from "../../redux/actionsCreator/actionsForDialogs";

import {ActionsType} from "../../redux/actionsCreator/allActionsType";
import {InitialStateDialogsType} from "../../redux/reducer/dialogs-reducer";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {

   const dataDialogs = props.dialogsState.dialogs;
   const dataMessages = props.dialogsState.messages;
   const newMessageText = props.dialogsState.newMessageText;

   const dialogsElements = dataDialogs.map(item => {
      return <DialogItem key={item.id} id={item.id} name={item.name}/>
   });

   const messagesElements = dataMessages.map(item => {
      return <MessageItem key={item.id} message={item.message}/>
   });

   const addMessageHandler = () => {
      props.addMessage();
   }

   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateMessageText(e.currentTarget.value);
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {dialogsElements}
         </div>

         <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
               <div>
                  <textarea
                     value={newMessageText}
                     placeholder={'Enter your message'}
                     onChange={onChangeHandler}
                  />
               </div>
               <div>
                  <button onClick={addMessageHandler}>Send</button>
               </div>
            </div>
         </div>
      </div>
   );
};