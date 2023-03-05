import React from 'react';
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css';

import {ReactComponent as SvgProfile} from './svg_icon/icon-profile.svg';
import {ReactComponent as SvgMessages} from './svg_icon/icon-messages.svg';
import {ReactComponent as SvgNews} from './svg_icon/icon-news.svg';
import {ReactComponent as SvgSettings} from './svg_icon/icon-settings.svg';
import {ReactComponent as SvgMusic} from './svg_icon/icon-music.svg';



export const NavBar = () => {

   const stylesForLink = ({isActive}: {isActive: boolean}) => isActive ? s.active : '';

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

                  <NavLink to={'/profile'} className={stylesForLink}>
                     <SvgProfile className={s.svgIcon}/>
                     <span>Profile</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/dialogs'} className={stylesForLink}>
                     <SvgMessages className={s.svgIcon}/>
                     <span>Messages</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/news'} className={stylesForLink}>
                     <SvgNews className={s.svgIcon}/>
                     <span>News</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/music'} className={stylesForLink}>
                     <SvgMusic className={s.svgIcon}/>
                     <span>Music</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/settings'} className={stylesForLink}>
                     <SvgSettings className={s.svgIcon}/>
                     <span>Settings</span>
                  </NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
};