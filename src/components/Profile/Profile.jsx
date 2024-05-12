import styles from "./Profile.module.scss"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

export function Profile(props) {


    return (
        <div className={styles.content}>

            <div className={styles.content__img_container}>
                <img src="https://cdn.profile.ru/wp-content/uploads/2021/03/pejzazh-na-planete-Mars.jpg" alt=""/>
                </div>
            <ProfileStatusWithHooks status={props.status} getStatus = {props.getStatus} updateStatus={props.updateStatus}/>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer store = {props.store} />
        </div>
    )
}