import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, profilePageType} from "../../redux/state/state";


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