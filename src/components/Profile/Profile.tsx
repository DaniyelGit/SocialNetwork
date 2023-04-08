import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MapStateToPropsType} from "./ProfileContainer";


type ProfilePropsType = MapStateToPropsType;

export const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <ProfileInfo profileUser={props.profileUser}/>
         <MyPostsContainer/>
      </div>
   );
};