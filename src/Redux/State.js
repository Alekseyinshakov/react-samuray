const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


export let store = {
    _callSubscriber()  {
        console.log('rrET')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _state: {
        profilePage: {
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
            newPostText: "React"
        },
        dialogPage: {
            dialogsData: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Alex"},
                {id: 4, name: "Arnold"},
            ],
            messagesData: [
                {id: 1, message: "Моё сообщение ", my: true},
                {id: 2, message: "Сообщение собеседника"},
                {id: 3, message: "Моё сообщение ещё раз", my: true},
                {id: 2, message: "Опять не моё"},
                {id: 3, message: "Снова моё сообщение", my: true},
            ],
            newMessageText: "message1"
        },
        sideBar: {}
    },
    getState(){
        return this._state;
    },
    addPost() {

    },
    changePostText(text) {

    },
    addMessage() {

    },
    changeMessageText(text) {

    },
    dispatch(action){
        switch(action.type) {
            case 'ADD_POST':
                this._state.profilePage.posts.push(
                    {
                        id: 4,
                        message: this._state.profilePage.newPostText,
                        likes: 0
                    }
                )
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
                break;

            case 'UPDATE_NEW_POST_TEXT':
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
                break;

            case 'ADD_MESSAGE':
                this._state.dialogPage.messagesData.push(
                    {
                        id: 10,
                        message: this._state.dialogPage.newMessageText,
                        my: true
                    }
                );
                this._state.dialogPage.newMessageText = ""
                this._callSubscriber(this._state);
                break;

            case 'UPDATE_NEW_MESSAGE_TEXT':
                this._state.dialogPage.newMessageText = action.text;
                this._callSubscriber(this._state);
                break;
            default:
                console.log(1);
                break;
        }
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

export function createActionAddMessage() {
    return {
        type: ADD_MESSAGE
    }
}

export function createActionOnChangeMessage(message) {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: message
    }
}



window.store = store;
