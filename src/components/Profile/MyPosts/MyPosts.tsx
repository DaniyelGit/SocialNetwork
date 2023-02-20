import React from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";

export type postDataType = {
   id: number,
   message: string,
   likeCount: number
}

export const MyPosts = () => {

   const postData: postDataType[] = [
      {id: 1, message: 'Hi! How are you ?', likeCount: 23},
      {id: 2, message: "It's my first post", likeCount: 3},
   ];

   const mappedPosts = postData.map(post => {
      return <Post key={post.id} message={post.message} likesCount={post.likeCount}/>
   })

   return (
      <div>
         My post
         <div>
            <textarea/>
            <button>add post</button>
            <div>
               {mappedPosts}
            </div>
         </div>
      </div>
   );
};