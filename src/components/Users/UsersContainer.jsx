import {connect} from "react-redux";
import {Users} from "./Users";
import {followCA, setUsersCA, unfollowCA} from "../../Redux/users-reduser";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)