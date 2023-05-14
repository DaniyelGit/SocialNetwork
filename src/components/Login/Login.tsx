import React from 'react';

type LoginPropsType = {}

export const Login = (props: LoginPropsType) => {
   return (
      <div>
         <h2>LOGIN</h2>
         <LoginForm/>
      </div>
   );
};

export const LoginForm: React.FC = (props) => {


   return (
      <form>
         <div>
            <input type="text" name='login' placeholder='Login'/>
         </div>
         <div>
            <input type="text" name='password' placeholder='Password'/>
         </div>
         <div>
            <input type="checkbox" name="remember"/> remember me
         </div>
         <div>
            <button>Log in</button>
         </div>
      </form>
   );
}