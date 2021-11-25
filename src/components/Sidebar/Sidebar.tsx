import React from "react";
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.link_active} to={'/profile'}>
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.link_active} to={'/dialogs'}>
                        Messages
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.link_active} to={'/news'}>
                        News
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.link_active} to={'/audio'}>
                        Music
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.link_active} to={'/settings'}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}