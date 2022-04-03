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
        <div className={s.profileInfo}>
            <div className={s.profileInfo__avatar}>
                <img src={props.profileUser.photos?.large} alt="photoUser"/>
            </div>
            <div className={s.profileInfo__content}>
                <div className={s.profileInfo__mainInfo}>
                    <h1 className={s.profileInfo__fullName}>{props.profileUser.fullName}</h1>
                    <span className={s.profileInfo__status}>{props.profileUser.aboutMe}</span>
                </div>
                <div className={s.profileInfo__shortInfo}>
                    <div className={s.profileInfo__shortInfo_work}>
                        <label>Работа:</label>
                        <span>{props.profileUser.lookingForAJob ? 'Есть' : 'Нету'}</span>
                    </div>
                    <div className={s.profileInfo__shortInfo_work}>
                        <label>Описание:</label>
                        <span>{props.profileUser.lookingForAJobDescription}</span>
                    </div>

                    <ul className={s.profileInfo__socialNetworks}>
                        <li>
                            <span>facebook:</span>
                            <a href="#">{props.profileUser.contacts?.facebook}</a>
                        </li>
                        <li>
                            <span>website:</span>
                            <a href="#">{props.profileUser.contacts?.website}</a>
                        </li>
                        <li>
                            <span>vk:</span>
                            <a href="#">{props.profileUser.contacts?.vk}</a>
                        </li>
                        <li>
                            <span>twitter:</span>
                            <a href="#">{props.profileUser.contacts?.twitter}</a>
                        </li>
                        <li>
                            <span>instagram:</span>
                            <a href="#">{props.profileUser.contacts?.instagram}</a>
                        </li>
                        <li>
                            <span>youtube:</span>
                            <a href="#">{props.profileUser.contacts?.youtube}</a>
                        </li>
                        <li>
                            <span>github:</span>
                            <a href="#">{props.profileUser.contacts?.github}</a>
                        </li>
                        <li>
                            <span>mainLink:</span>
                            <a href="#">{props.profileUser.contacts?.mainLink}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}