import React from "react";
import styles from './Users.module.scss';
import axios from 'axios';
import noAvatar from './no-avatar.jpg'


export class Users extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setTotalUsers(responce.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={styles.wrap}>
                <div className={styles.pagination}>
                    {pages.map(item => {
                        return <span onClick={(e) => {this.onPageChanged(item)}} className={item === this.props.currentPage && styles.currentPage}>{item}</span>
                    })}

                </div>
                <div className={styles.flex_wrap}>

                    {this.props.users.map(user => {
                        return (
                            <div className={styles.user}>
                                <div className={styles.col1}>
                                    <div className={styles.avatar_wrap}>
                                        <img src={user.photos.small || noAvatar} alt=""/>
                                    </div>

                                    {user.followed ?
                                        <button onClick={() => {

                                            this.props.unfollow(user.id)
                                        }} className={styles.followed}>unfollow</button> :
                                        <button onClick={() => {

                                            this.props.follow(user.id)
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
}
