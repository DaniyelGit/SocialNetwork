import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {UserDataType} from "../../redux/reducer/authReducer";

type HeaderPropsType = {
   userData: UserDataType
   isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {
   return (
      <header className={s.header}>
         {
            props.isAuth
               ? props.userData.login
               : <div className={s.loginBlock}>
                  <NavLink to={'/login'}>Login</NavLink>
               </div>
         }
      </header>
   );
};