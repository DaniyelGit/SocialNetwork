import React from 'react';
import s from './NavBar.module.css';


export const NavBar = () => {
   return (
      <nav className={s.nav}>
         <ul>
            <li>
               <a href={'#'}>Profile</a>
            </li>
            <li>
               <a href={'#'}>Messages</a>
            </li>
            <li>
               <a href={'#'}>News</a>
            </li>
            <li>
               <a href={'#'}>Music</a>
            </li>
            <li>
               <a href={'#'}>Settings</a>
            </li>
         </ul>
      </nav>
   );
};