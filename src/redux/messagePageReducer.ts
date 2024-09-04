const ADD_MESSAGE: string = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT: string = 'UPDATE-NEW-MESSAGE-TEXT';

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

let initialState =  {
    dialogs: [
        {id: 1, userName: 'Dimych'},
        {id: 2, userName: 'Victor'},
        {id: 3, userName: 'Sveta'},
        {id: 4, userName: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'What?'}
    ],
    newMessageText: ''
}
const messagePageReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default: return state;

    }
}

export default messagePageReducer;
