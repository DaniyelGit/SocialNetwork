import React from "react";
import {
    addPostAC,
    changeTextForInputAC, InitialProfileType,
} from "../../../redux/ProfileReducer/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


export type MyPostsContainerPropsType = mapDispatchToPropsType & mapStateToPropsType;


type mapDispatchToPropsType = {
    addPost: () => void
    changeTextForInput: (newPostText: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeTextForInput: (newPostText: string) => {
            dispatch(changeTextForInputAC(newPostText))
        }
    }
}

type mapStateToPropsType = {
    profilePage: InitialProfileType
}
const mapStateToProps = (state: mapStateToPropsType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

export const MyPostsContainer = connect (mapStateToProps ,mapDispatchToProps) (MyPosts);