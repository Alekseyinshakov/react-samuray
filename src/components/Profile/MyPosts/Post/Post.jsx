import styles from "./Post.module.scss";

export function Post() {
    return (
        <div className={styles.post}>
            <div className={styles.text}>
                Post1
            </div>
            <div className={styles.likes}>
                <div className={styles.likes_num}>5</div>
                <div className={styles.heart}></div>
            </div>

        </div>
    )
}