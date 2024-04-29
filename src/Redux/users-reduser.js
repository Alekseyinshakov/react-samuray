import {usersAPI} from "../api/api";

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
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
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

export function follow(userId) {
    return {
        type: FOLLOW,
        userId
    }
}
export function unfollow(userId) {
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

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(togglePreloader(true));
        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(togglePreloader(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}


export default usersReducer;