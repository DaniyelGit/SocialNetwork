import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/actionsCreator/actionsForProfile";
import {ProfileUserType} from "../../redux/reducer/profile-reducer";
import {AppStateType} from "../../redux/redux-store/redux-store";
import {useNavigate, useParams} from "react-router-dom";

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
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         .then(response => {
            props.setUserProfile(response.data);
         });
   }, [])

   return (
      <Profile profileUser={props.profileUser}/>
   );
}


type MapStateToPropsType = {
   profileUser: ProfileUserType | null
}
type MapDispatchToPropsType = {
   setUserProfile: (userProfile: ProfileUserType) => void
};
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      profileUser: state.profilePage.profileUser
   }
}


export default connect(mapStateToProps, {
   setUserProfile,
})(ProfileContainer);


