import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    totalUsers: 0,
    pageSize: 100,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})

            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsers: action.totalUsersCount
            }

        case TOGGLE_PRELOADER:
            return {
                ...state,
                isLoading: action.isToggle
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isToggle
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }


        default:
            return state
    }
}

export function followSuccess(userId) {
    return {
        type: FOLLOW,
        userId
    }
}

export function unfollowSuccess(userId) {
    return {
        type: UNFOLLOW,
        userId
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        users: users
    }
}

export function setCurrentPage(page) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}

export function setTotalUsersCount(num) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: num
    }
}

export function togglePreloader(boolean) {
    return {
        type: TOGGLE_PRELOADER,
        isToggle: boolean
    }
}

export function toggleFollowingProgress(boolean, userId) {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isToggle: boolean,
        userId
    }
}

export const requestUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(togglePreloader(true));

    let data = await usersAPI.getUsers(pageSize, currentPage);

    dispatch(togglePreloader(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))
}

let followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);

    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {


    followUnfollowFlow(dispatch, userId, followAPI.follow.bind(usersAPI), followSuccess);

}


export const unfollow = (userId) => async (dispatch) => {



    followUnfollowFlow(dispatch, userId, followAPI.unfollow.bind(usersAPI), unfollowSuccess);

}


export default usersReducer;