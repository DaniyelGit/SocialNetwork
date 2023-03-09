import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";
import {ActionsType, postsType} from "../../../redux/state/state";


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
      props.dispatch({type: 'ADD-POST'});
   }

   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch({
            type: 'UPDATE-POST-TEXT',
            payload: {
               newPostText: e.currentTarget.value
            }
         });
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