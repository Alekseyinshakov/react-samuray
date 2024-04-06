import styles from "./MyPosts.module.scss";
import {Post} from "./Post/Post";
import React from "react";




export function MyPosts(props) {


    let posts = props.posts.map(post => <Post text={post.message} key={post.id} likes={post.likes}/>)

    let newPostTextarea = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    function onPostChange() {
        props.updateNewPostText(newPostTextarea.current.value)
    }

    return (
        <div className={styles.wall}>
            <div className={styles.wall_title}>
                My posts
            </div>
            <div className={styles.new_post}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostTextarea} className={styles.new_post_input}></textarea>
                <button onClick={onAddPost} className={styles.send_new_post}>Send</button>
            </div>
            <div className="posts">
                {posts}
            </div>
        </div>
    )

}