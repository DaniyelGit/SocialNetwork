import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <div className={s.content_images}>
                <img src="https://112slov.ru/wp-content/uploads/sites/6/2019/01/AdobeStock_178545270-1200x385.jpeg" alt="main-images"/>
            </div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    );
}