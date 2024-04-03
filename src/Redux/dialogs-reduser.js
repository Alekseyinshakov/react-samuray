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
        {id: 2, message: "Опять не моё"},
        {id: 3, message: "Снова моё сообщение", my: true},
    ],
    newMessageText: "message1"
}
const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch(action.type) {

        case ADD_MESSAGE:
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(
                {
                    id: 10,
                    message: state.newMessageText,
                    my: true
                }
            );
            stateCopy.newMessageText = "";
            return stateCopy;

        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.text;
            return stateCopy
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