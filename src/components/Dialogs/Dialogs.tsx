import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsPropsType = {

};

export const Dialogs = (props: DialogsPropsType) => {
   return (
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
           <div className={`${s.dialog} ${s.active}`}>
              <NavLink to={"/dialogs/1"}>Даниель</NavLink>
           </div>
           <div className={s.dialog}>
              <NavLink to={"/dialogs/2"}>Виктория</NavLink>
           </div>
           <div className={s.dialog}>
              <NavLink to={"/dialogs/3"}>Евгений</NavLink>
           </div>
           <div className={s.dialog}>
              <NavLink to={"/dialogs/4"}>Артур</NavLink>
           </div>
           <div className={s.dialog}>
              <NavLink to={"/dialogs/5"}>Захар</NavLink>
           </div>
        </div>

         <div className={s.messages}>
            <div className={s.message}>
               Hi
            </div>
            <div className={s.message}>
               How is your it-kamasutra
            </div>
            <div className={s.message}>
               Yo
            </div>
         </div>
      </div>
   );
};