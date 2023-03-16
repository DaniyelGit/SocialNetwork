import React from 'react';
import {MyPosts} from "./MyPosts";
import {ActionsType, profilePageType} from "../../../redux/store/store";
import {addPostAC, updatePostTextAC} from "../../../redux/actionsCreator/actionsForProfile";

type MyPostContainerPropsType = {
   state: profilePageType
   dispatch: (action: ActionsType) => void
}

export const MyPostContainer = (props: MyPostContainerPropsType) => {


   const addPost = () => {
      props.dispatch(addPostAC());
   }

   const onChangeTextPost = (newPostText: string) => {
      props.dispatch(updatePostTextAC(newPostText));
   }


   return (
      <MyPosts
         postsData={props.state.posts}
         newPostText={props.state.newPostText}
         addPost={addPost}
         onChangeTextPost={onChangeTextPost}
      />
   );
};