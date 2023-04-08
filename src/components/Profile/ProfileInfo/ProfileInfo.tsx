import React from 'react';
import {ProfileUserType} from "../../../redux/reducer/profile-reducer";

type ProfileInfoPropsType = {
   profileUser: ProfileUserType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

   const {photos} = props.profileUser;

   return (
      <div>
         <div>
            <img src={photos.large ? photos.large : 'https://via.placeholder.com/200x200'} alt="photos"/>
         </div>
         ava + description
      </div>
   );
};