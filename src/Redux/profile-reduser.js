import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
    profile: null,
    status: "inition status from BLL"
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status
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

const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const setProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileData(userId || 31064).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId) => {
    return(dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status) => {
    return(dispatch) => {
        profileAPI.updateStatus(status).then(responce => {
            if (responce.resultCode == 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;