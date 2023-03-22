import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {}

export const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <ProfileInfo/>
         <MyPostsContainer/>
      </div>
   );
};