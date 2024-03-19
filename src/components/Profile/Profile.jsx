import styles from "./Profile.module.scss"
import {MyPosts} from "./MyPosts/MyPosts";

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

            <MyPosts />


        </div>
    )
}