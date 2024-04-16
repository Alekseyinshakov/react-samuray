const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';


let initialState = {
    users: [

    ],
    totalUsers: 0,
    pageSize: 100,
    currentPage: 1,
    isLoading: true
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
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
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        console.log('ye')
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

export default usersReducer;