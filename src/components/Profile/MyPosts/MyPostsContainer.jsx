import React from "react";
import {createActionAddPost, createActionOnPostChange} from "../../../Redux/profile-reduser";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {reset} from "redux-form";


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
        },
        reset: () => {
            console.log('resetttt 2')
            dispatch(reset('profilePostForm'));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)