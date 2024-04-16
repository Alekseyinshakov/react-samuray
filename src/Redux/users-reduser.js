const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialState = {
    users: [

    ],
    totalUsers: 0,
    pageSize: 100,
    currentPage: 1
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

        default:
            return state
    }
}

export function followCA(userId) {
    return {
        type: FOLLOW,
        userId
    }
}

export function unfollowCA(userId) {
    return {
        type: UNFOLLOW,
        userId
    }
}

export function setUsersCA(users) {
    return {
        type: SET_USERS,
        users: users
    }
}

export function setCurrentPageCA(page) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}

export function setTotalUserCountCA(num) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: num
    }
}

export default usersReducer;