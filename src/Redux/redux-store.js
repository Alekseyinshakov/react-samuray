import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
});

let store = createStore(reducers);

export default store;

// Второе,  когда из  store.js   копируете данные для initialState, то нужно скопировать без названия раздела.