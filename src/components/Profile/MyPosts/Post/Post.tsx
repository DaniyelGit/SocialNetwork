import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    id: string
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post_box}>
            <div className={s.post}>
                <img src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg" alt="avatar"/>
                <span>{props.message}</span>
            </div>
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}