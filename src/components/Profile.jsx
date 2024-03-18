import styles from "./Profile.module.scss"

export function Profile() {
    return (
        <div className={styles.content}>

            <div className={styles.content__img_container}>
                <img src="https://cdn.profile.ru/wp-content/uploads/2021/03/pejzazh-na-planete-Mars.jpg" alt=""/>
                </div>

            <div className={styles.about_me}>
                <div className={styles.avatar_container}>
                    <img
                        src="https://flomaster.top/uploads/posts/2021-02/1612385818_43-p-risunok-na-avatarku-dlya-muzhchin-49.jpg"
                        alt="" className="avatar"/>
                </div>

                <div className="about_me__info">
                    <div className="date-of-birth">
                        6 may 1992
                    </div>
                    <div className="city">
                        Saransk city
                    </div>
                    <div className="job">Front-end react developer</div>
                </div>
            </div>

            <div className={styles.wall}>
                <div className={styles.wall_title}>
                    My posts
                </div>
                <form className={styles.new_post}>
                    <textarea className={styles.new_post_input}></textarea>
                    <button className={styles.send_new_post}>Send</button>
                </form>
                <div className="posts">
                    <div className={styles.post}>Post1</div>
                    <div className={styles.post}>Post2</div>
                    <div className={styles.post}>Post3</div>
                </div>
            </div>


        </div>
    )
}