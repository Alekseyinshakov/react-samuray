import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuth} from "./auth-reduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export function initializedSuccess() {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuth());

        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })

    }
}




export default appReducer;