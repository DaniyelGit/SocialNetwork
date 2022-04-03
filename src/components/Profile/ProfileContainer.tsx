import React from "react";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {ProfileUserType, setUserProfile} from "../../redux/ProfileReducer/ProfileReducer";
import {Profile} from "./Profile";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainerAPI extends React.Component<propsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <Profile profileUser={this.props.profileUser}/>
        );
    }
}

type pathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profileUser: ProfileUserType
}

type mapDispatchToPropsType = {
    setUserProfile: (user: ProfileUserType) => void
}

type ownPropsType = mapStateToPropsType & mapDispatchToPropsType;

type propsType = RouteComponentProps<pathParamsType> & ownPropsType

const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        profileUser: state.profilePage.profileUser
    }
}




const WithUrlDataContainerComponent = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(WithUrlDataContainerComponent);