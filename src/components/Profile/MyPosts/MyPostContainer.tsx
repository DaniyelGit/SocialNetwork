import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, updatePostTextAC} from "../../../redux/actionsCreator/actionsForProfile";
import {ProfileStateType} from "../../../redux/reducer/profile-reducer";
import {ActionsType} from "../../../redux/actionsCreator/allActionsType";

type MyPostContainerPropsType = {
   state: ProfileStateType
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