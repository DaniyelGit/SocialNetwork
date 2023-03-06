import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";
import {postsType} from "../../../redux/state/state";


type MyPostsPropsType = {
   postsData: postsType[]
   newPostText: string
   addPost: () => void
   updatePostText: (textValue: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

   const mappedPosts = props.postsData.map(post => {
      return <Post key={post.id} message={post.message} likesCount={post.likeCount}/>
   })

   const addPostHandler = () => {
      props.addPost()
   }

   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
     props.updatePostText(e.currentTarget.value);
   }

   return (
      <div>
         My post
         <div>
            <textarea
               value={props.newPostText}
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