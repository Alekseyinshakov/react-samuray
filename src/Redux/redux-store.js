import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import usersReduser from "./users-reduser";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReduser,
});

let store = createStore(reducers);

export default store;

// Второе,  когда из  store.js   копируете данные для initialState, то нужно скопировать без названия раздела.