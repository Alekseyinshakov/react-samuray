import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import {thunk as thunkMiddleware} from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReduser,
    auth: authReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
