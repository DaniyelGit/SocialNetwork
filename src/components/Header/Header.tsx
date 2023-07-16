import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {UserDataType} from "../../redux/reducer/authReducer";

type HeaderPropsType = {
   userData: UserDataType
   isAuth: boolean
   logOut: () => void
}

export const Header = (props: HeaderPropsType) => {

   const logOutHandler = () => {
      props.logOut();
   }

   return (
      <header className={s.header}>
         {
            props.isAuth
               ? <div>{props.userData.login} <button onClick={logOutHandler}>LogOut</button></div>
               : <div className={s.loginBlock}>
                  <NavLink to={'/login'}>Login</NavLink>
               </div>
         }
      </header>
   );
};