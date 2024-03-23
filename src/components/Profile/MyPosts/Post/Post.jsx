import styles from "./Post.module.scss";

export function Post(props) {

    return (
        <div className={styles.post}>
            <div className={styles.text}>
                {props.text}
            </div>
            <div className={styles.likes}>
                <div className={styles.likes_num}>{props.likes}</div>
                <div className={styles.heart}></div>
            </div>

        </div>
    )
}