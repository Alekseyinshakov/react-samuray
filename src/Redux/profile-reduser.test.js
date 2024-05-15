import profileReducer, {createActionAddPost, deletePost} from "./profile-reduser";

let state = {
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
}
test('length of posts should be incremented', () => {
    let action = createActionAddPost("test message");

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
});

test('post should be delete', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
});



