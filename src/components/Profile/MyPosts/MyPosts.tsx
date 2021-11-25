import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {
    ActionsTypesForProfile,
    addPostAC,
    changeTextForInputAC,
    ProfilePageType
} from "../../../redux/ProfileReducer/ProfileReducer";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypesForProfile) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postText = props.profilePage.newPostText;
    let postsData = props.profilePage.postsData;

    const addPostHandler = () => {
        props.dispatch(addPostAC());
    }

    const changeTextForPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeTextForInputAC(e.currentTarget.value));
    }

    return (
        <div>
            My posts
            <div>
                <textarea
                    value={postText}
                    placeholder={'Enter text'}
                    onChange={changeTextForPostHandler}
                />
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            <div className={s.posts_wrapper}>
                {
                    postsData.map(p => {
                        return (
                            <Post id={p.id} message={p.text} likesCount={p.likesCount}/>
                        );
                    })
                }
            </div>
        </div>
    );
}