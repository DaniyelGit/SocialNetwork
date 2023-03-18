import React from 'react';
import {MyPostContainer} from "./MyPosts/MyPostContainer";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {}

export const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <ProfileInfo/>
         <MyPostContainer/>
      </div>
   );
};