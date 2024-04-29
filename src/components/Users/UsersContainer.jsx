import {connect} from "react-redux";
import {
    followSuccess,
    getUsers,
    toggleFollowingProgress,
    unfollowSuccess,
    follow,
    unfollow
} from "../../Redux/users-reduser";
import React from "react";
import {Users} from "./Users";

class UsersContainerAPI extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.pageSize, this.props.currentPage)

    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(this.props.pageSize, pageNumber)

        // this.props.togglePreloader(true);
        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(this.props.pageSize, pageNumber)
        // .then(data => {
        //     this.props.togglePreloader(false);
        //     this.props.setUsers(data.items)
        // })
    }

    render() {

        return (
            <Users totalUsers={this.props.totalUsers}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   isLoading={this.props.isLoading}
                   onPageChanged={this.onPageChanged}
                   followSuccess={this.props.followSuccess}
                   unfollowSuccess={this.props.unfollowSuccess}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,

        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps,
    {followSuccess, unfollowSuccess, toggleFollowingProgress, getUsers, follow, unfollow})(UsersContainerAPI)