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
    addPost(message) {
        this._state.profilePage.posts.push(
            {
                id: 4,
                message: message,
                likes: 0
            }
        )
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    changePostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    addMessage() {
        this._state.dialogPage.messagesData.push(
            {
                id: 10,
                message: this._state.dialogPage.newMessageText,
                my: true
            }
        );
        this._state.dialogPage.newMessageText = ""
        this._callSubscriber(this._state);
    },
    changeMessageText(text) {
        this._state.dialogPage.newMessageText = text;
        this._callSubscriber(this._state);
    }
}

