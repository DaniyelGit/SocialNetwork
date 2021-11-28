import React from "react";
import {
    ActionsTypesForProfile,
    addPostAC,
    changeTextForInputAC,
    ProfilePageType
} from "../../../redux/ProfileReducer/ProfileReducer";
import {MyPosts} from "./MyPosts";


type MyPostsPropsContainerType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypesForProfile) => void
}

export const MyPostsContainer = (props: MyPostsPropsContainerType) => {

    let postsData = props.profilePage.postsData;
    let newPostText = props.profilePage.newPostText;

    const addPost = () => {
        props.dispatch(addPostAC());
    }

    const changeTextForInput = (newPostText: string) => {
        props.dispatch(changeTextForInputAC(newPostText));
    }

    return (
        <MyPosts changeTextForInput={changeTextForInput}
                 addPost={addPost}
                 postsData={postsData}
                 newPostText={newPostText}
        />
    );
}