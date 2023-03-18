import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, updatePostTextAC} from "../../../redux/actionsCreator/actionsForProfile";
import {StoreContext} from "../../../storeContext/StoreContext";
import {StoreType} from "../../../redux/redux-store/redux-store";

type MyPostContainerPropsType = {};

export const MyPostContainer = (props: MyPostContainerPropsType) => {

   return (
      <StoreContext.Consumer>
         {
            (store: StoreType) => {
               const addPost = () => {
                  store.dispatch(addPostAC());
               }

               const onChangeTextPost = (newPostText: string) => {
                  store.dispatch(updatePostTextAC(newPostText));
               }

               return <MyPosts
                  state={store.getState().profilePage}
                  addPost={addPost}
                  onChangeTextPost={onChangeTextPost}
               />
            }
         }
      </StoreContext.Consumer>
   );
};