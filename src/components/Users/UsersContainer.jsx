import {connect} from "react-redux";
import {
    follow,
    unfollow, setCurrentPage, requestUsers
} from "../../Redux/users-reduser";
import React from "react";
import {Users} from "./Users";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsers,
    getUsers
} from "../../Redux/users-selectors";

class UsersContainerAPI extends React.Component {

    componentDidMount() {

        this.props.requestUsers(this.props.pageSize, this.props.currentPage)

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(this.props.pageSize, pageNumber)
    }

    render() {

        return (
            <Users totalUsers={this.props.totalUsers}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   isLoading={this.props.isLoading}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsers: getTotalUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export const UsersContainer = connect(mapStateToProps,
    { setCurrentPage, requestUsers, follow, unfollow })(UsersContainerAPI)