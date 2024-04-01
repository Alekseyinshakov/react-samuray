
import React from "react";
import {createActionAddPost, createActionOnPostChange} from "../../../Redux/profile-reduser";
import {MyPosts} from "./MyPosts";



export function MyPostsContainer(props) {


    let state = props.store.getState().profilePage

    let addPost = () => {
        props.store.dispatch(createActionAddPost())
    }

    function updateNewPostText(text) {
        props.store.dispatch(createActionOnPostChange(text))
    }

    return (
        <MyPosts updateNewPostText = {updateNewPostText}
                 addPost = {addPost}
                 posts = {state.posts}
                 newPostText = {state.newPostText}/>
    )
}