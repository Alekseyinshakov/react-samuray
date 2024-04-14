import {connect} from "react-redux";
import {Users} from "./Users";
import {followCA, setCurrentPageCA, setTotalUserCountCA, setUsersCA, unfollowCA} from "../../Redux/users-reduser";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,

        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,

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
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)