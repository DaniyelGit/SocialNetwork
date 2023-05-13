import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileUserType} from "../../redux/reducer/profile-reducer";
import {updateStatusProfile} from "../../redux/actionsCreator/actionsForProfile";



type ProfilePropsType = {
   profileUser: ProfileUserType | null
   profileStatus: string
   updateStatusProfile: (statusText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

   return (
      <div>
         <ProfileInfo profileUser={props.profileUser}
                      profileStatus={props.profileStatus} updateStatusProfile={props.updateStatusProfile}/>
         <MyPostsContainer/>
      </div>
   );
};