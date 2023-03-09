import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";

import {ActionsType, stateType, store} from "./redux/state/state";

import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";


type AppPropsType = {
   state: stateType
   dispatch: (action: ActionsType) => void
}

export const App = (props: AppPropsType) => {

   const profilePage = props.state.profilePage;
   const messagePage = props.state.messagePage;

   return (

      <div className="app-wrapper">
         {/*<Header/>*/}
         <NavBar/>

         <div className={"app-wrapper-content"}>
            <Routes>
               <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
               <Route path={'/profile'} element={<Profile
                  state={profilePage}
                  dispatch={props.dispatch}/>}
               />
               <Route path={'/dialogs'} element={<Dialogs state={messagePage}/>}/>
            </Routes>
         </div>

      </div>

   );
}
