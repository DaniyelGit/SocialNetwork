import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";


import {NavBar} from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";





export const App = () => {

   return (

      <div className="app-wrapper">
         <HeaderContainer/>
         <NavBar/>

         <div className={"app-wrapper-content"}>
            <Routes>
               <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
               <Route path={'/profile/:userId?'} element={<ProfileContainer/>}/>
               <Route path={'/dialogs'} element={<DialogsContainer/>}/>
               <Route path={'/users'} element={<UsersContainer/>}/>

               <Route path={'/login'} element={<Login/>}/>
            </Routes>
         </div>

      </div>
   );
}
