import React from 'react';
import {Route} from "react-router-dom";
import './App.css';

import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {News} from "./components/News/News";
import {Audio} from "./components/Audio/Audio";
import {Settings} from "./components/Settings/Settings";

import {UsersContainer} from "./components/Users/UsersContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Sidebar/>
            <div className={'appWrapperContent'}>
                <Route path={'/profile/:userId?'}  render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/audio'} render={() => <Audio/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
