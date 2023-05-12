import React from 'react';
import {ProfileUserType} from "../../../redux/reducer/profile-reducer";
import {Preloader} from "../../../common/Preloader";
import preloaderSvg from '../../../images/svg-loaders/preloader.svg';
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
   profileUser: ProfileUserType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

   if (!props.profileUser) {
      return <Preloader preloader={preloaderSvg}/>
   }

   const {photos} = props.profileUser;

   return (
      <div>
         <div>
            <img src={photos.large ? photos.large : 'https://via.placeholder.com/300x300'} alt="photos"/>
         </div>
         <ProfileStatus status={'Hello my friends'}/>
      </div>
   );
};