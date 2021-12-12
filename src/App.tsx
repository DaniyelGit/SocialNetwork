import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {News} from "./components/News/News";
import {Audio} from "./components/Audio/Audio";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Profile} from "./components/Profile/Profile";



const App = () => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Sidebar/>
            <div className={'appWrapperContent'}>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/audio'} render={() => <Audio/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
