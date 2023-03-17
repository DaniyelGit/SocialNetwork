import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";


import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {StoreType} from "./redux/redux-store/redux-store";
import {ActionsType} from "./redux/actionsCreator/allActionsType";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
   store: StoreType
   dispatch: (action: ActionsType) => void
}

export const App = (props: AppPropsType) => {

   const profilePage = props.store.getState().profilePage;
   const messagePage = props.store.getState().dialogsPage;

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
               <Route path={'/dialogs'} element={<DialogsContainer
                  state={messagePage}
                  dispatch={props.dispatch}/>}
               />
            </Routes>
         </div>

      </div>

   );
}
