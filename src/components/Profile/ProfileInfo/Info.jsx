import styles from "./ProfileInfo.module.scss";

export const Info = (props) => {
    return (
        <div className="about_me__info">
            <div className={styles.fullName}>
                {props.profile.fullName}
            </div>
            <div className={styles.aboutMe}>
                {props.profile.aboutMe}
            </div>
            <div className={styles.lookingForAJob}>Ищу
                работу: {props.profile.lookingForAJob ? "Да" : "Нет"}</div>
            <div className="lookingForAJobDescription">{props.profile.lookingForAJobDescription}</div>

            <div className={styles.social_networks}>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div><b>{key}:</b> <a href={props.profile.contacts[key]}>{props.profile.contacts[key]}</a>
                    </div>
                })}
            </div>
        </div>
    )
}