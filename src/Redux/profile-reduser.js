const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch(action.type) {
        case ADD_POST:

            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(
                {
                    id: 4,
                    message: state.newPostText,
                    likes: 0
                }
            )
            stateCopy.newPostText = "";
            return stateCopy

        case UPDATE_NEW_POST_TEXT:

            stateCopy.newPostText = action.text;
            return stateCopy;

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

export default profileReducer;