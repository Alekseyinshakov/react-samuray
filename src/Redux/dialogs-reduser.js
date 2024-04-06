const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
                    message: state.newMessageText,
                    my: true
                }
                ],
                newMessageText: ""
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        default:
            return state
    }
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
export default dialogsReducer;