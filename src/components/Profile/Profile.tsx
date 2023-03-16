import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/store/store";
import {ActionsType} from "../../redux/store/store";
import {MyPostContainer} from "./MyPosts/MyPostContainer";


type ProfilePropsType = {
   state: profilePageType
   dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <ProfileInfo/>
         <MyPostContainer dispatch={props.dispatch} state={props.state}/>
      </div>
   );
};