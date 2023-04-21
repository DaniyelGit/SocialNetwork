import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPost, updatePostText} from "../../../redux/actionsCreator/actionsForProfile";
import {AppStateType} from "../../../redux/store/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {InitialStateProfileType} from "../../../redux/reducer/profile-reducer";

/*type MyPostContainerPropsType = {};

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
};*/ // самописный контейнер

type MapStateToPropsType = {
   profileState: InitialStateProfileType
}
type MapDispatchToPropsType = {
   addPost: () => void
   updateTextPost: (newPostText: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      profileState: state.profilePage,
   }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addPost: () => {
         dispatch(addPost());
      },
      updateTextPost: (newPostText: string) => {
         dispatch(updatePostText(newPostText));
      },
   }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);