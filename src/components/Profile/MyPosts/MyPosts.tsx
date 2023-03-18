import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";
import {ProfileStateType} from "../../../redux/reducer/profile-reducer";


type MyPostsPropsType = {
   state: ProfileStateType
   addPost: () => void
   onChangeTextPost: (newTextPost: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

   const postsData = props.state.posts;
   const newPostText = props.state.newPostText;

   const mappedPosts = postsData.map(post => {
      return <Post key={post.id} message={post.message} likesCount={post.likeCount}/>
   })

   const addPostHandler = () => {
      props.addPost();
   }

   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.onChangeTextPost(e.currentTarget.value);
   }

   return (
      <div>
         My post
         <div>
            <textarea
               value={newPostText}
               onChange={onChangeHandler}
            />
            <button onClick={addPostHandler}>add post</button>
            <div>
               {mappedPosts}
            </div>
         </div>
      </div>
   );
};