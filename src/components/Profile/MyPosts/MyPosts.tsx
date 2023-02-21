import React from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";
import {postsType} from "../../../redux/state/state";


type MyPostsPropsType = {
   postsData: postsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {

   const mappedPosts = props.postsData.map(post => {
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