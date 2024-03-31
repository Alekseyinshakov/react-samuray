import styles from "./Profile.module.scss"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export function Profile(props) {
    
    return (
        <div className={styles.content}>

            <div className={styles.content__img_container}>
                <img src="https://cdn.profile.ru/wp-content/uploads/2021/03/pejzazh-na-planete-Mars.jpg" alt=""/>
                </div>

            <ProfileInfo />
            <MyPostsContainer store = {props.store} />
        </div>
    )
}