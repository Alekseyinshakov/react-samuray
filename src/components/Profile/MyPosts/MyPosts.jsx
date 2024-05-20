import styles from "./MyPosts.module.scss";
import {Post} from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

function ProfilePostForm(props) {


    return (
        <form onSubmit={props.handleSubmit} className={styles.new_post}>
            <Field placeholder={"POST MESSAGE"} component={Textarea} name="newPostText"
                   validate={[required, maxLength10]}
            />
            <button className={styles.send_new_post}>Send</button>
        </form>
    )
}

ProfilePostForm = reduxForm({
    form: 'profilePostForm'
})(ProfilePostForm)


export const MyPosts = props => {

    let posts = props.posts.map(post => <Post text={post.message} key={post.id} likes={post.likes}/>)

    const submit = values => {
        props.reset()
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

};