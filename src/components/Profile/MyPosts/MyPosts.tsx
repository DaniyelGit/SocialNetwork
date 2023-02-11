import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
   return (
      <div>
         My post
         <div>
            <textarea/>
            <button>add post</button>
            <div>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
            </div>
         </div>
      </div>
   );
};