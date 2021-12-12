import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsContainerPropsType} from "./MyPostsContainer";


export const MyPosts = (props: MyPostsContainerPropsType) => {

    const addPostHandler = () => {
       props.addPost()
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
                    value={props.profilePage.newPostText}
                    placeholder={'Enter text'}
                    onChange={changeTextForPostHandler}
                />
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            <div className={s.posts_wrapper}>
                {
                    props.profilePage.postsData.map(p => {
                        return (
                            <Post id={p.id} message={p.text} likesCount={p.likesCount}/>
                        );
                    })
                }
            </div>
        </div>
    );
}