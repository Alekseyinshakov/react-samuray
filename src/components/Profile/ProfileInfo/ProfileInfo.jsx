import styles from "./ProfileInfo.module.scss";

export function ProfileInfo() {
    return (
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
    )
}