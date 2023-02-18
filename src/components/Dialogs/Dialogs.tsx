import React from 'react';
import s from './Dialogs.module.css';

type DialogsPropsType = {

};

export const Dialogs = (props: DialogsPropsType) => {
   return (
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
           <div className={`${s.dialog} ${s.active}`}>
               Даниель
           </div>
           <div className={s.dialog}>
              Виктория
           </div>
           <div className={s.dialog}>
              Евгений
           </div>
           <div className={s.dialog}>
              Артур
           </div>
           <div className={s.dialog}>
              Захар
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