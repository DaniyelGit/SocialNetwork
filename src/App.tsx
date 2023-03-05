import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";

import {stateType} from "./redux/state/state";

import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";


type AppPropsType = {
   state: stateType
   addPost: (textPost: string) => void
}

function App(props: AppPropsType) {

   const profilePage = props.state.profilePage;
   const messagePage = props.state.messagePage;

   return (

      <div className="app-wrapper">
         {/*<Header/>*/}
         <NavBar/>

         <div className={"app-wrapper-content"}>
            <Routes>
               <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
               <Route path={'/profile'} element={<Profile state={profilePage} addPost={props.addPost}/>}/>
               <Route path={'/dialogs'} element={<Dialogs state={messagePage}/>}/>
            </Routes>
         </div>

      </div>

   );
}

export default App;
