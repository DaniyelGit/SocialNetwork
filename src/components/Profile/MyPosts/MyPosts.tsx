import React from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";
import {postsType} from "../../../redux/state/state";


type MyPostsPropsType = {
   postsData: postsType[]
   addPost: (textPost: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

   const mappedPosts = props.postsData.map(post => {
      return <Post key={post.id} message={post.message} likesCount={post.likeCount}/>
   })

   let newPostElement = React.createRef<HTMLTextAreaElement>();

   const addPostHandler = () => {
      if (newPostElement.current) {
         props.addPost(newPostElement.current.value);
         newPostElement.current.value = '';
      }
   }

   return (
      <div>
         My post
         <div>
            <textarea ref={newPostElement}/>
            <button onClick={addPostHandler}>add post</button>
            <div>
               {mappedPosts}
            </div>
         </div>
      </div>
   );
};