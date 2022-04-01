import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/ProfileReducer/ProfileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";

type ProfileInfoProps = {
    profileUser: ProfileUserType
}

export const ProfileInfo = (props: ProfileInfoProps) => {

    if (!props.profileUser) {
        return <Preloader/>
    }

    return (
        <div>
            <img src={props.profileUser.photos.large} alt="photoUser"/>
            ava + descr
        </div>
    );
}