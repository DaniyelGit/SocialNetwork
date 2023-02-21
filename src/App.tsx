import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {stateType} from "./redux/state/state";

import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";


type AppPropsType = {
   state: stateType
}

function App(props: AppPropsType) {
   return (

      <div className="app-wrapper">
         <Header/>
         <NavBar/>

         <div className={"app-wrapper-content"}>
            <Routes>
               <Route path={'/profile'} element={<Profile state={props.state.profilePage}/>}/>
               <Route path={'/dialogs'} element={<Dialogs state={props.state.messagePage}/>}/>
            </Routes>
         </div>

      </div>

   );
}

export default App;
