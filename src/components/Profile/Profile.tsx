import React from 'react';
import {MyPostContainer} from "./MyPosts/MyPostContainer";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionsType} from "../../redux/actionsCreator/allActionsType";
import {ProfileStateType} from "../../redux/reducer/profile-reducer";


type ProfilePropsType = {
   state: ProfileStateType
   dispatch: (action: actionsType) => void
}

export const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <ProfileInfo/>
         <MyPostContainer dispatch={props.dispatch} state={props.state}/>
      </div>
   );
};