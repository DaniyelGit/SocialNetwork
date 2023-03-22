import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostContainer";


export const MyPosts = (props: MyPostsPropsType) => {

   const postsData = props.profileState.posts;
   const newPostText = props.profileState.newPostText;

   const mappedPosts = postsData.map(post => {
      return <Post key={post.id} message={post.message} likesCount={post.likeCount}/>
   })

   const addPostHandler = () => {
      props.addPost();
   }

   const updateTextPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateTextPost(e.currentTarget.value);
   }

   return (
      <div>
         My post
         <div>
            <textarea
               value={newPostText}
               onChange={updateTextPostHandler}
            />
            <button onClick={addPostHandler}>add post</button>
            <div>
               {mappedPosts}
            </div>
         </div>
      </div>
   );
};