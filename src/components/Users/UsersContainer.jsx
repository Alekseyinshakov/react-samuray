import {connect} from "react-redux";
import {
    followCA,
    setCurrentPageCA,
    setTotalUserCountCA,
    setUsersCA,
    togglePreloaderCA,
    unfollowCA
} from "../../Redux/users-reduser";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(responce => {
            this.props.togglePreloader(false);
            this.props.setUsers(responce.data.items);
            this.props.setTotalUsers(responce.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.togglePreloader(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(responce => {
            this.props.togglePreloader(false);
            this.props.setUsers(responce.data.items)
        })
    }

    render() {
        return (
            <Users totalUsers={this.props.totalUsers}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   isLoading={this.props.isLoading}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,

        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {

            dispatch(followCA(userId))
        },
        unfollow: (userId) => {

            dispatch(unfollowCA(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCA(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageCA(pageNumber))
        },
        setTotalUsers: (totalUsersCount) => {
            dispatch(setTotalUserCountCA(totalUsersCount))
        },
        togglePreloader: (boolean) => {
            dispatch(togglePreloaderCA(boolean))
        }

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)