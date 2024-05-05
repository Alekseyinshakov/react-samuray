const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
        {id: 4, message: "Опять не моё"},
        {id: 5, message: "Снова моё сообщение", my: true},
    ],
    newMessageText: "message1"
}
const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData,  {
                    id: 10,
                    message: action.text,
                    my: true
                }
                ],

            }

        default:
            return state
    }
}

export function createActionAddMessage(text) {
    return {
        type: ADD_MESSAGE,
        text
    }
}


export default dialogsReducer;