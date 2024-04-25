import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    togglePreloader,
    unfollow
} from "../../Redux/users-reduser";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {usersAPI} from "../../api/api";

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.togglePreloader(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.togglePreloader(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(this.props.pageSize, pageNumber)
        .then(data => {
            this.props.togglePreloader(false);
            this.props.setUsers(data.items)
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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//
//             dispatch(followCA(userId))
//         },
//         unfollow: (userId) => {
//
//             dispatch(unfollowCA(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersCA(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageCA(pageNumber))
//         },
//         setTotalUsers: (totalUsersCount) => {
//             dispatch(setTotalUserCountCA(totalUsersCount))
//         },
//         togglePreloader: (boolean) => {
//             dispatch(togglePreloaderCA(boolean))
//         }
//
//     }
// }
export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, togglePreloader})(UsersContainerAPI)