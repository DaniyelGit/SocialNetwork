import React from "react";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {

}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <div className={s.content_images}>
                <img src="https://112slov.ru/wp-content/uploads/sites/6/2019/01/AdobeStock_178545270-1200x385.jpeg" alt="main-images"/>
            </div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}


