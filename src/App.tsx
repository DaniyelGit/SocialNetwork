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
import {StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({store}) => {
    const state = store.getState();

    return (
        <div className={'appWrapper'}>
            <Header/>
            <Sidebar/>
            <div className={'appWrapperContent'}>
                <Route path={'/profile'} render={() => <Profile
                    profilePage={state.profilePage}
                    dispatch={store.dispatch.bind(store)}
                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs
                    messagesPage={state.messagesPage}
                    dispatch={store.dispatch.bind(store)}
                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/audio'} render={() => <Audio/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
