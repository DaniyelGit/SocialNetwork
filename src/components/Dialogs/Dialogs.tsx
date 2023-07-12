import React from 'react';
import s from './Dialogs.module.css';

import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";

import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const Dialogs = (props: DialogsPropsType) => {

   const {
      dialogs: dialogsData,
      messages: messageData,
   } = props.dialogsState

   const mappedDialogsElements = dialogsData.map(item => {
      return <DialogItem key={item.id} id={item.id} name={item.name}/>
   });

   const mappedMessagesElements = messageData.map(item => {
      return <MessageItem key={item.id} message={item.message}/>
   });


   const addNewMessage = (formData: FormDataType) => {
      props.addMessage(formData.newMessageBody);
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {mappedDialogsElements}
         </div>

         <div className={s.messages}>
            <div>{mappedMessagesElements}</div>
         </div>

         <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
   );
};


const AddMessageForm = (props: InjectedFormProps<FormDataType, IProps>) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field type="text" component="textarea" name="newMessageBody" placeholder="Enter your message"/>
         </div>
         <div>
            <button>send</button>
         </div>
      </form>
   )
};

const AddMessageFormRedux = reduxForm<FormDataType, IProps>({
   form: "dialogAddMessageForm"
})(AddMessageForm);

type FormDataType = {
   newMessageBody: string
};

interface IProps {}