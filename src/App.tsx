import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";



function App() {
   return (

         <div className="app-wrapper">
            <Header/>
            <NavBar/>

            <div className={"app-wrapper-content"}>
               <Routes>
                  <Route path={'/profile'} element={<Profile/>}/>
                  <Route path={'/dialogs'} element={<Dialogs/>}/>
               </Routes>
            </div>

         </div>

   );
}

export default App;
