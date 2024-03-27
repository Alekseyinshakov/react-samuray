let rerenderEntireTree = function () {
    console.log('rrET')
}
export let state = {
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
};

export function addPost(message) {
    state.profilePage.posts.push(
        {
            id: 4,
            message: message,
            likes: 0
        }
    )
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export function changePostText(text) {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export function addMessage(message) {
    state.dialogPage.messagesData.push(
        {
            id: 10,
            message: state.dialogPage.newMessageText,
            my: true
        }
    );
    state.dialogPage.newMessageText = ""
    rerenderEntireTree(state);
}
export function changeMessageText(text) {
    state.dialogPage.newMessageText = text;
    rerenderEntireTree(state);

}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
