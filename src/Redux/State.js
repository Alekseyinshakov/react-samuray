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
        ]
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
        ]
    },
    sideBar: {}
};
