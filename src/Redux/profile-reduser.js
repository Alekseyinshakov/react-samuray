import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DEL_POST = 'DEL_POST';

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
    profile: null,
    status: "inition status from BLL"
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{
                    id: 4,
                    message: action.text,
                    likes: 0
                },
                    ...state.posts],
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
        case DEL_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => {
                    return p.id !== action.postId;
                })
            }
        default:
            return state
    }
}

export function createActionAddPost(text) {
    return {
        type: ADD_POST,
        text
    }
}

export function deletePost(id) {
    return {
        type: DEL_POST,
        postId: id
    }
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

export const setProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileData(userId || 31064);

    dispatch(setUserProfile(data))

}


export const getStatus = (userId) => async (dispatch) => {
        let data = await profileAPI.getStatus(userId);
            dispatch(setStatus(data))
    }


export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(responce => {
            if (responce.resultCode == 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;