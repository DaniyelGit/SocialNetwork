import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import {connect} from "react-redux";
import {logIn} from "../../redux/actionsCreator/actionsForAuth";
import {AppStateType} from "../../redux/store/store";
import {Navigate} from "react-router-dom";
import s from '../../common/FormsControls/FormsControls.module.css';
import {ConfigProps} from "redux-form/lib/reduxForm";


const Login = (props: LoginPropsType) => {
   const onSubmit = (formData: FormDataType) => {
      props.logIn(formData);
   }

   if (props.isAuth) {
      return <Navigate to={'/profile'}/>
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
            <Field type='text' name='email' placeholder='Login' component={Input} validate={[requiredField]}/>
         </div>
         <div>
            <Field type='password' name='password' placeholder='Password' component={Input} validate={[requiredField]}/>
         </div>
         <div>
            <Field type='checkbox' name='rememberMe' component={Input}/>
         </div>
         {
            props.error &&
            <div className={s.formError}>{props.error}</div>
         }
         <div>
            <button>Log in</button>
         </div>
      </form>
   );
};

const mapStateToProps = (state: AppStateType) => {
   return {
      isAuth: state.auth.isAuth
   }
}

const LoginReduxForm = reduxForm<FormDataType, IProps>({form: 'login'})(LoginForm);

export default connect(mapStateToProps, {logIn})(Login);


// types

type LoginPropsType = MapStateToPropsType & {
   logIn: (formData: FormDataType) => void
}

interface IProps {

}

export type FormDataType = {
   email: string;
   password: string;
   rememberMe: boolean;
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;