import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import {thunk as thunkMiddleware} from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reduser";


let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
