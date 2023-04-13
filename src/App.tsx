import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";


import {NavBar} from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


type AppPropsType = {};

export const App = (props: AppPropsType) => {

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
            </Routes>
         </div>

      </div>
   );
}
