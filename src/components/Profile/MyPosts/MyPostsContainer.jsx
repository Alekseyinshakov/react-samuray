import React from "react";
import {createActionAddPost, createActionOnPostChange} from "../../../Redux/profile-reduser";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(createActionAddPost(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)