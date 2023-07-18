import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/actionsCreator/actionsForApp";
import {AppStateType} from "./redux/store/store";
import {Preloader} from "./common/Preloader";
import preloaderSvg from '../src/images/svg-loaders/preloader.svg';


class App extends React.Component<AppType, {}> {

   componentDidMount() {
      this.props.initializeApp();
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader preloader={preloaderSvg}/>
      }

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

                  <Route path={'/login'} element={<Login/>}/>
               </Routes>
            </div>

         </div>
      );
   }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      initialized: state.app.initialized
   }
}


export default connect(mapStateToProps, {initializeApp})(App);

type AppType =  MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
   initialized: boolean
}

type MapDispatchToPropsType = {
   initializeApp: () => void
}