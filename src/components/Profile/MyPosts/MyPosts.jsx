import styles from "./MyPosts.module.scss";
import {Post} from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";


let ProfilePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.new_post}>
            <Field component="textarea" name="newPostText" className={styles.new_post_input} />
            <button className={styles.send_new_post}>Send</button>
        </form>
    )
}

ProfilePostForm = reduxForm({
    form: 'profilePostForm'
})(ProfilePostForm)


export function MyPosts(props) {
    console.log(props)

    let posts = props.posts.map(post => <Post text={post.message} key={post.id} likes={post.likes}/>)

    const submit = values => {

        props.addPost(values.newPostText)
    }

    return (
        <div className={styles.wall}>
            <div className={styles.wall_title}>
                My posts
            </div>

            <ProfilePostForm onSubmit={submit}/>

            <div className="posts">
                {posts}
            </div>
        </div>
    )

}