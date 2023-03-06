import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state/state";


type ProfilePropsType = {
   state: profilePageType
   addPost: () => void
   updatePostText: (textValue: string) => void
}

export const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <ProfileInfo/>
         <MyPosts
            postsData={props.state.posts}
            newPostText={props.state.newPostText}
            addPost={props.addPost}
            updatePostText={props.updatePostText}
         />
      </div>
   );
};