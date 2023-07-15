import React, {DetailedHTMLProps, InputHTMLAttributes, ReactElement, ReactNode, TextareaHTMLAttributes} from "react";
import s from './FormsControls.module.css';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";


export const FormControl = ({meta, children, ...restProps}: FormControlType) => {
   const hasError = meta.touched && meta.error;

   return (
      <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
         <div>
            {children}
         </div>
         {hasError && <span>{meta.error}</span>}
      </div>
   );
};

export const Textarea = (props: FormElementType<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => {
   const {input, meta, ...restProps} = props;

   return (
     <FormControl meta={meta}>
        <textarea {...input} {...restProps}/>
     </FormControl>
   );
};

export const Input = (props: FormElementType<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
   const {input, meta, ...restProps} = props;

   return (
      <FormControl meta={meta}>
         <input {...input} {...restProps}/>
      </FormControl>
   );
};


type FormControlType = {
   meta: WrappedFieldMetaProps
   children: React.ReactNode
};

type FormElementType<A,E> = DetailedHTMLProps<A, E> & {
   input: WrappedFieldInputProps
   meta: WrappedFieldMetaProps
};