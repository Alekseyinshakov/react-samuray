const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReduser = (state, action) => {
    switch(action.type) {

        case ADD_MESSAGE:
            state.messagesData.push(
                {
                    id: 10,
                    message: state.newMessageText,
                    my: true
                }
            );
            state.newMessageText = ""
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state
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
export default dialogsReduser;