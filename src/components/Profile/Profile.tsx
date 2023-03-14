import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/store/store";
import {ActionsType} from "../../redux/store/store";


type ProfilePropsType = {
   state: profilePageType
   dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <ProfileInfo/>
         <MyPosts
            postsData={props.state.posts}
            newPostText={props.state.newPostText}
            dispatch={props.dispatch}
         />
      </div>
   );
};