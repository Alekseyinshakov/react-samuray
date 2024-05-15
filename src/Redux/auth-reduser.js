import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export function setAuthUserData(userId, email, login, isAuth) {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
}

export const getAuth = () => async (dispatch) => {
    let data = await authAPI.getAuthUserData();

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let responce = await authAPI.login(email, password, rememberMe);

    if (responce.resultCode === 0) {
        dispatch(getAuth())
    } else {
        let message = responce.messages.length > 0 ? responce.messages[0] : "some errorR"
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logoutThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let responce = await authAPI.logout();

    if (responce.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }


}


export default authReducer;