import React from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";

export const MyPosts = () => {
   return (
      <div>
         My post
         <div>
            <textarea/>
            <button>add post</button>
            <div>
              <Post message={'Hi! How are you ?'} likesCount={23}/>
              <Post message={"It's my first post"} likesCount={3}/>
            </div>
         </div>
      </div>
   );
};