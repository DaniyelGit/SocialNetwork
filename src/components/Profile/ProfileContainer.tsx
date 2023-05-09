import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/actionsCreator/actionsForProfile";
import {ProfileUserType} from "../../redux/reducer/profile-reducer";
import {AppStateType} from "../../redux/store/store";
import {useParams, Navigate} from "react-router-dom";


// old code class component "ProfileContainer"
/*class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {
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
}*/

const ProfileContainer = (props: ProfileContainerPropsType) => {
   const params = useParams<'userId'>();
   const userId = params.userId || '2';

   useEffect(() => {
      props.getProfile(userId)
   }, []);

   return (
      <Profile profileUser={props.profileUser}/>
   );
}


type MapStateToPropsType = {
   profileUser: ProfileUserType | null,
   isAuth: boolean
}
type MapDispatchToPropsType = {
   setUserProfile: (userProfile: ProfileUserType) => void
   getProfile: (userID: string) => void
};
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      profileUser: state.profilePage.profileUser,
      isAuth: state.auth.isAuth,
   }
}


export default connect(mapStateToProps, {
   setUserProfile, getProfile,
})(ProfileContainer);


