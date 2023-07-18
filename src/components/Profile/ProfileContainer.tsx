import React, {ComponentType, useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatusProfile, updateStatusProfile} from "../../redux/actionsCreator/actionsForProfile";
import {ProfileUserType} from "../../redux/reducer/profile-reducer";
import {AppStateType} from "../../redux/store/store";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props: ProfileContainerPropsType) => {
   const params = useParams<'userId'>();
   const userId = params.userId || String(props.userId);

   useEffect(() => {
      props.getProfile(userId);
      props.getStatusProfile(userId);
   }, []);

   return (
      <Profile profileUser={props.profileUser} profileStatus={props.profileStatus}
               updateStatusProfile={props.updateStatusProfile}/>
   );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      profileUser: state.profilePage.profileUser,
      profileStatus: state.profilePage.status,
      userId: state.auth.userData.id,
      isAuth: state.auth.isAuth
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {getProfile, getStatusProfile, updateStatusProfile}),
   withAuthRedirect
)(ProfileContainer);


// types
type MapStateToPropsType = {
   profileUser: ProfileUserType | null,
   profileStatus: string
   userId: number | null
   isAuth: boolean
}

type MapDispatchToPropsType = {
   getProfile: (userID: string) => void
   getStatusProfile: (userID: string) => void
   updateStatusProfile: (statusText: string) => void
};
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;


// const WithRedirect = withAuthRedirect<ProfileContainerPropsType>(ProfileContainer)
/*export default connect(mapStateToProps, {
   setUserProfile, getProfile,
})(WithRedirect);*/

// сокращенная запись
/*export default withAuthRedirect<ProfileContainerPropsType>(connect(mapStateToProps, {
   setUserProfile, getProfile,
})(ProfileContainer))*/
