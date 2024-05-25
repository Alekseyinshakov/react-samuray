import styles from "./ProfileInfo.module.scss";
import {Preloader} from "../../common/Preloader/Preloader";
import noAvatar from "../../Users/no-avatar.jpg";
import faceBook from "../../common/facebook.png"
import www from "../../common/www.png"
import vk from "../../common/vk.png"
import {useState} from "react";
import {Info} from "./Info";
import {InfoForm} from "./InfoForm";


export function ProfileInfo(props) {
    let [editMode, setEditMode] = useState(false)


    console.log(props.profile)
 if (!props.profile) {
     return Preloader
 }

 const onMainPhotoSelected = (e) => {
     if(e.target.files.length) {
         props.savePhoto(e.target.files[0])
     }
 }

 const toEditMode = () => {
     setEditMode(true)
 }
 const saveProfile = () => {
     setEditMode(false)
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


            <div>
                {props.isOwner && !editMode && <button onClick={toEditMode}>Edit</button>}
                {props.isOwner && editMode && <button onClick={saveProfile}>Save</button>}
            </div>

                {!editMode && <Info profile={props.profile} />}
                {editMode && <InfoForm profile={props.profile}/>}



            </div>
        </div>

    )
}