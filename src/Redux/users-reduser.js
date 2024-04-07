const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        // {
        //     id: 1,
        //     name: "Dima",
        //     status: "status text",
        //     avatar: "/img/1.jpd",
        //     country: "Belarus",
        //     city: "Minsk",
        //     followed: false
        // },
        // {
        //     id: 2,
        //     name: "Sasha",
        //     status: "status text",
        //     avatar: "/img/1.jpd",
        //     country: "Belarus",
        //     city: "Minsk",
        //     followed: false
        // },
        // {
        //     id: 3,
        //     name: "Kolya",
        //     status: "status text",
        //     avatar: "/img/1.jpd",
        //     country: "Belarus",
        //     city: "Minsk",
        //     followed: false
        // }
    ]
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
                users: [...state.users, ...action.users ]
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

export default usersReducer;