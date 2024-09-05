const ADD_POST: string = 'ADD-POST';
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT'

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', like: 20},
        {id: 2, message: 'It\'s my first post?', like: 11}
    ],
    newPostText: ''
}

const profilePageReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                like: 0
            };
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost)
            copyState.newPostText = '';
            return copyState;
        }

        case UPDATE_NEW_POST_TEXT:{
            let copyState = { ...state}
            copyState.newPostText = action.newText;
            return copyState;
        }

        default:
            return state;
    }
}
export default profilePageReducer;
