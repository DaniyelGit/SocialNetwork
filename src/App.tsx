import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Audio} from "./components/Audio/Audio";
import {Settings} from "./components/Settings/Settings";
import {rootReducerType} from "./redux/redux-store";
import {ActionsTypesForProfile} from "./redux/ProfileReducer/ProfileReducer";
import {ActionsTypesForDialogs} from "./redux/DialogsReducer/DialogsReducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: rootReducerType
    dispatch: (action: ActionsTypesForProfile | ActionsTypesForDialogs) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Sidebar/>
            <div className={'appWrapperContent'}>
                <Route path={'/profile'} render={() => <Profile
                    profilePage={props.store.profilePage}
                    dispatch={props.dispatch}
                />}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer
                    messagesPage={props.store.messagesPage}
                    dispatch={props.dispatch}
                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/audio'} render={() => <Audio/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
