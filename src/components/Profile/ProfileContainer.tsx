import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/actionsCreator/actionsForProfile";
import {ProfileUserType} from "../../redux/reducer/profile-reducer";
import {AppStateType} from "../../redux/redux-store/redux-store";


class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {
   componentDidMount() {
      axios('https://social-network.samuraijs.com/api/1.0/profile/2')
         .then(response => {
            this.props.setUserProfile(response.data);
         });
   }

   render() {
      return (
        <Profile profileUser={this.props.profileUser}/>
      );
   }
}


export type MapStateToPropsType = {
   profileUser: ProfileUserType

}
type MapDispatchToPropsType = {
   setUserProfile: (userProfile: ProfileUserType) => void
};
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

export const mapStateToProps = (state: AppStateType) => {
   return {
      profileUser: state.profilePage.profileUser
   }
}


export default connect(mapStateToProps, {
   setUserProfile,
})(ProfileContainer);


