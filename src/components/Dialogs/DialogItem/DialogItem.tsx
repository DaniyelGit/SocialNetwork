import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css';


type DialogItemPropsType = {
    name: string
    id: string
}
export const DialogItem = (props: DialogItemPropsType) => {

    const path = `/dialogs/${props.id}`;

    return (
        <div className={s.dialog}>
            <NavLink to={path} className={s.item} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}
