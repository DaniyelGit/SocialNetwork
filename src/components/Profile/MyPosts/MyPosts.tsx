import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";
import {ActionsType, postsType} from "../../../redux/state/store";
import {addPostAC, updatePostTextAC} from "../../../redux/actionsCreator/actionsForProfile";



type MyPostsPropsType = {
   postsData: postsType[]
   newPostText: string
   dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

   const mappedPosts = props.postsData.map(post => {
      return <Post key={post.id} message={post.message} likesCount={post.likeCount}/>
   })

   const addPostHandler = () => {
      props.dispatch(addPostAC());
   }

   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(updatePostTextAC(e.currentTarget.value));
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