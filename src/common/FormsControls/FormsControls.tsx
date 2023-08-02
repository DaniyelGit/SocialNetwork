import React, {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import s from './FormsControls.module.css';
import {WrappedFieldMetaProps} from "redux-form/lib/Field";


export const FormControl = ({input, meta, FormType, ...restProps}: FormControlType) => {
   const hasError = meta.touched && meta.error;
   const finalInputClass = `${s.formControl} ${hasError ? s.error : ''}`;

   return (
      <div className={finalInputClass}>
         <FormType {...input} {...restProps}/>
         {hasError && <span>{meta.error}</span>}
      </div>
   );
};

export const Textarea = ({...props}: FormControlType) => {
   return (
     <FormControl {...props} FormType='textarea'/>
   );
};

export const Input = ({...props}: FormControlType) => {
   return (
      <FormControl {...props} FormType='input'/>
   );
};


type DefaultInputPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;


type FormControlType = {
   input: DefaultInputPropsType
   meta: WrappedFieldMetaProps
   FormType: string
};

