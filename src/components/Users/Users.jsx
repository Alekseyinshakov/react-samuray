import styles from "./Users.module.scss";
import noAvatar from "./no-avatar.jpg";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = (props) => {
    // debugger;
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.pagination}>
                {pages.map(item => {
                    return <span onClick={(e) => {
                        props.onPageChanged(item)
                    }} className={item === props.currentPage && styles.currentPage}>{item}</span>
                })}

            </div>
            {props.isLoading ? <Preloader/> : null}

            <div className={styles.flex_wrap}>

                {props.users.map(user => {
                    return (
                        <div className={styles.user}>
                            <div className={styles.col1}>
                                <NavLink
                                    to={"/profile/" + user.id}>
                                    <div className={styles.avatar_wrap}>
                                        <img src={user.photos.small || noAvatar} alt=""/>
                                    </div>
                                </NavLink>


                                {user.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{withCredentials: true}).then(responce => {
                                            console.log(responce)
                                            if (responce.data.resultCode == 0) {
                                                props.unfollow(user.id)
                                            }
                                        })

                                    }} className={styles.followed}>unfollow</button>
                                    :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {withCredentials: true}).then(responce => {
                                            console.log(responce)
                                            if (responce.data.resultCode == 0) {
                                                props.follow(user.id)
                                            }
                                        })

                                    }} className={styles.unfollowed}>follow</button>
                                }
                            </div>
                            <div className={styles.col2}>
                                <NavLink
                                    to={"/profile/" + user.id}>
                                    <div className={styles.name}>{user.name}</div>
                                </NavLink>
                                <div className={styles.status}>{user.status}</div>
                            </div>
                            <div className={styles.col3}>
                                <div className="city">{user.city}</div>
                                <div className="country">{user.country}</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}