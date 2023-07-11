import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type LoginPropsType = {

}

interface IProps {

}

type FormDataType = {
   login: string;
   password: string;
   rememberMe: boolean;
}

export const Login = (props: LoginPropsType) => {
   const onSubmit = (formData: FormDataType) => {
      console.log(formData)
   }

   return (
      <div>
         <h2>LOGIN</h2>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   );
};



export const LoginForm: React.FC<InjectedFormProps<FormDataType, IProps>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field type='text' name='login' placeholder='Login' component='input'/>
         </div>
         <div>
            <Field type='text' name='password' placeholder='Password' component='input'/>
         </div>
         <div>
            <Field type='checkbox' name='rememberMe' component='input'/>
         </div>
         <div>
            <button>Log in</button>
         </div>
      </form>
   );
};

const LoginReduxForm = reduxForm<FormDataType, IProps>({
   form: 'login'
})(LoginForm);