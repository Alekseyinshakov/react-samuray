import styles from "./ProfileInfo.module.scss";
import {Preloader} from "../../common/Preloader/Preloader";
import noAvatar from "../../Users/no-avatar.jpg";
import faceBook from "../../common/facebook.png"
import www from "../../common/www.png"
import vk from "../../common/vk.png"


export function ProfileInfo(props) {
 if (!props.profile) {
     return Preloader
 }

 const onMainPhotoSelected = (e) => {
     if(e.target.files.length) {
         props.savePhoto(e.target.files[0])
     }
 }

    return (
        <div className={styles.main_container}>
            <div>
                {props.isOwner && <input onChange={onMainPhotoSelected} type="file"/>}
            </div>
            <div className={styles.about_me}>
                <div className={styles.avatar_container}>

                    <img
                        src={props.profile.photos.large || noAvatar}
                        alt="" className="avatar"/>

                </div>


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
                        {props.profile.contacts.facebook ?
                            <div className="fb">
                                <a href={`https://${props.profile.contacts.facebook}`}><img src={faceBook}
                                                                                            alt=""/>{props.profile.contacts.facebook}
                                </a>
                            </div> : null}

                        {
                            props.profile.contacts.website ?
                                <div className="www">
                                    <a href={`https://${props.profile.contacts.website}`}><img src={www}
                                                                                               alt=""/>{props.profile.contacts.website}
                                    </a>
                                </div> : null
                        }
                        {
                            props.profile.contacts.vk ?
                                <div className="www">
                                    <a href={`https://${props.profile.contacts.vk}`}><img src={vk}
                                                                                          alt=""/>{props.profile.contacts.vk}
                                    </a>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}