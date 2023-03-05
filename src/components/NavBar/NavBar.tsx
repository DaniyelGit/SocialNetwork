import React from 'react';
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css';


export const NavBar = () => {


   return (
      <nav className={s.nav}>
         <a href="#" className={s.logo}>
            <img src="https://via.placeholder.com/150x50" alt="logo"/>
         </a>
         <div className={s.userInfo}>
            <div className={s.left}>
               <img src="https://via.placeholder.com/50x50" alt="avatar"/>
            </div>
            <div className={s.right}>
               <p>Daniyel Tkachuk</p>
               <a href="#">@danila</a>
            </div>
         </div>
         <div className={s.menu}>
            <h2 className={s.menuTitle}>Menu</h2>
            <ul className={s.menuList}>
               <li>
                  <NavLink to={'/profile'}>
                     <span>Profile</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/dialogs'}>
                     <span>Messages</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/news'}>
                     <span>News</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/music'}>
                     <span>Music</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/settings'}>
                     <span>Settings</span>
                  </NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
};