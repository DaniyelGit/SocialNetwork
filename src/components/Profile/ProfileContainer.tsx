import React from "react";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {ProfileUserType, setUserProfile} from "../../redux/ProfileReducer/ProfileReducer";
import {Profile} from "./Profile";
import axios from "axios";


class ProfileContainerAPI extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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



type mapStateToPropsType = {
    profileUser: ProfileUserType
}
const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        profileUser: state.profilePage.profileUser
    }
}

type mapDispatchToPropsType = {
    setUserProfile: (user: ProfileUserType) => void
}


export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainerAPI);