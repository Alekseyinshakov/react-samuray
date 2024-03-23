import styles from "./Profile.module.scss"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {
    return (
        <div className={styles.content}>

            <div className={styles.content__img_container}>
                <img src="https://cdn.profile.ru/wp-content/uploads/2021/03/pejzazh-na-planete-Mars.jpg" alt=""/>
                </div>

            <ProfileInfo />

            <MyPosts />


        </div>
    )
}