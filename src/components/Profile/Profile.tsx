import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
   return (
      <div className={'content'}>
         <div>
            <img src="#" alt="bg-content"/>
         </div>
         <div>
            ava + description
         </div>
         <MyPosts/>
      </div>
   );
};