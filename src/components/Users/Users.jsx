import styles from './Users.module.scss';
import axios from 'axios';
import noAvatar from './no-avatar.jpg'

export let Users = (props) => {

    // let users = [
    //     {
    //         id: 1,
    //         name: "Dima",
    //         status: "status text dffkfdv idfufd sadfdr",
    //         avatar: "/img/1.jpd",
    //         country: "Belarus",
    //         city: "Minsk",
    //         followed: true
    //     },
    //     {
    //         id: 2,
    //         name: "Sasha",
    //         status: "status text",
    //         avatar: "/img/1.jpd",
    //         country: "Belarus",
    //         city: "Minsk",
    //         followed: true
    //     },
    //     {
    //         id: 3,
    //         name: "Kolya",
    //         status: "status text",
    //         avatar: "/img/1.jpd",
    //         country: "Belarus",
    //         city: "Minsk",
    //         followed: false
    //     }
    // ];

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=100&page=5').then(responce => {
            props.setUsers(responce.data.items)
        })
    }


    return (
        <div className={styles.wrap}>
            <div className={styles.flex_wrap}>

                {props.users.map(user => {
                    return (
                        <div className={styles.user}>
                            <div className={styles.col1}>
                                <div className={styles.avatar_wrap}>
                                    <img src={user.photos.small || noAvatar} alt=""/>
                                </div>

                                {user.followed ?
                                    <button onClick={() => {

                                        props.unfollow(user.id)
                                    }} className={styles.followed}>unfollow</button> :
                                    <button onClick={() => {

                                        props.follow(user.id)
                                    }} className={styles.unfollowed}>follow</button>
                                }
                            </div>
                            <div className={styles.col2}>
                                <div className={styles.name}>{user.name}</div>
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