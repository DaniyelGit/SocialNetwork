import React, {ComponentType, useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatusProfile, updateStatusProfile} from "../../redux/actionsCreator/actionsForProfile";
import {ProfileUserType} from "../../redux/reducer/profile-reducer";
import {AppStateType} from "../../redux/store/store";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
   const userId = params.userId || '22597';

   useEffect(() => {
      props.getProfile(userId);
      props.getStatusProfile(userId);
   }, []);

   return (
      <Profile profileUser={props.profileUser} profileStatus={props.profileStatus}
               updateStatusProfile={props.updateStatusProfile}/>
   );
}


type MapStateToPropsType = {
   profileUser: ProfileUserType | null,
   profileStatus: string,

}
type MapDispatchToPropsType = {
   getProfile: (userID: string) => void
   getStatusProfile: (userID: string) => void
   updateStatusProfile: (statusText: string) => void
};
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      profileUser: state.profilePage.profileUser,
      profileStatus: state.profilePage.status,
   }
}

export default compose<ComponentType>(
   withAuthRedirect,
   connect(mapStateToProps, {getProfile, getStatusProfile, updateStatusProfile}),
)(ProfileContainer);




// const WithRedirect = withAuthRedirect<ProfileContainerPropsType>(ProfileContainer)
/*export default connect(mapStateToProps, {
   setUserProfile, getProfile,
})(WithRedirect);*/

// сокращенная запись
/*export default withAuthRedirect<ProfileContainerPropsType>(connect(mapStateToProps, {
   setUserProfile, getProfile,
})(ProfileContainer))*/
