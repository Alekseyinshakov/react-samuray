
import React from "react";
import {createActionAddPost, createActionOnPostChange} from "../../../Redux/profile-reduser";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";



// export function MyPostsContainer(props) {
//
//
//     let state = props.store.getState().profilePage
//
//     let addPost = () => {
//         props.store.dispatch(createActionAddPost())
//     }
//
//     function updateNewPostText(text) {
//         props.store.dispatch(createActionOnPostChange(text))
//     }
//
//     return (
//         <MyPosts updateNewPostText = {updateNewPostText}
//                  addPost = {addPost}
//                  posts = {state.posts}
//                  newPostText = {state.newPostText}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(createActionOnPostChange(text))
        },
        addPost: () => {
            dispatch(createActionAddPost())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)