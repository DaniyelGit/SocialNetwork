import React from 'react';
import s from './Post.module.css';


export type PostPropsType = {
   message: string
   likesCount: number
};

export const Post = (props: PostPropsType) => {
   return (
      <div>
         <img src="" alt=""/>
         {props.message}
         <div>
            <span>likes {props.likesCount}</span>
         </div>
      </div>
   );
};