import styles from "./MyPosts.module.scss";
import {Post} from "./Post/Post";

export function MyPosts() {

    let postData = [
        {
            id: 1,
            message: "17 уроков прошёл на изи, я красавчик",
            likes: 15
        },
        {
            id: 2,
            message: "Изучил пропсы, компоненты, импорты, экспорты!",
            likes: 25
        },
        {
            id: 3,
            message: "Знаю функции, стрелочные, обычные, анонимные!!",
            likes: 35
        }
    ];

    let posts = postData.map(post => <Post text={post.message} likes={post.likes}/>)



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
                {posts}

            </div>
        </div>
    )
}