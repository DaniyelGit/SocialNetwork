import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../redux/ProfileReducer/ProfileReducer";



type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    changeTextForInput: (newPostText: string) => void
    addPost: () => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const addPostHandler = () => {
        props.addPost();
    }

    const changeTextForPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newPostText = e.currentTarget.value;
        props.changeTextForInput(newPostText);
    }

    return (
        <div>
            My posts
            <div>
                <textarea
                    value={props.newPostText}
                    placeholder={'Enter text'}
                    onChange={changeTextForPostHandler}
                />
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            <div className={s.posts_wrapper}>
                {
                    props.postsData.map(p => {
                        return (
                            <Post id={p.id} message={p.text} likesCount={p.likesCount}/>
                        );
                    })
                }
            </div>
        </div>
    );
}