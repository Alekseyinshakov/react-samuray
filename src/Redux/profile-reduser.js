const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {
            id: 1,
            message: "29 уроков прошёл на изи, я красавчик, yo!",
            likes: 30
        },
        {
            id: 2,
            message: "Изучил пропсы, компоненты, импорты, экспорты",
            likes: 25
        },
        {
            id: 3,
            message: "Знаю функции, стрелочные, обычные, анонимные",
            likes: 45
        }
    ],
    newPostText: "React",
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{
                    id: 4,
                    message: state.newPostText,
                    likes: 0
                },
                ...state.posts],
                newPostText: ""
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export function createActionAddPost() {
    return {
        type: ADD_POST
    }
}

export function createActionOnPostChange(message) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: message}
}

export function setUserProfile(profile) {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export default profileReducer;