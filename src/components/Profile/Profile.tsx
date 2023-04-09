import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileUserType} from "../../redux/reducer/profile-reducer";



type ProfilePropsType = {
   profileUser: ProfileUserType | null
}

export const Profile = (props: ProfilePropsType) => {

   return (
      <div>
         <ProfileInfo profileUser={props.profileUser}/>
         <MyPostsContainer/>
      </div>
   );
};