import styles from "./MyPosts.module.scss";
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={styles.wall}>
            <div className={styles.wall_title}>
                My posts
            </div>
            <form className={styles.new_post}>
                <textarea className={styles.new_post_input}></textarea>
                <button className={styles.send_new_post}>Send</button>
            </form>
            <div className="posts">
                <Post />
                <Post />
                <Post />
                <Post />

            </div>
        </div>
    )
}