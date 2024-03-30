const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const profileReduser = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            state.posts.push(
                {
                    id: 4,
                    message: state.newPostText,
                    likes: 0
                }
            )
            state.newPostText = "";
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state

        default:
            return state
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

export default profileReduser;