
type PostType = {
    id: number;
    message: string;
    like: number;
};

type DialogType = {
    id: number;
    userName: string;
};

type MessageType = {
    id: number;
    message: string;
};

type ProfilePageType = {
    posts: PostType[];
    newPostText: string;
};

type MessagesPageType = {
    dialogs: DialogType[];
    messages: MessageType[];
    newMessageText: string;
};

type StateType = {
    profilePage: ProfilePageType;
    messagesPage: MessagesPageType;
};

type StoreType = {
    _state: StateType;
    _callSubscriber: (state: StateType) => void;
    getState: () => StateType;
    dispatch: any
    subscribe: (observer: (state: StateType) => void) => void;
};

let store: StoreType = {
    _callSubscriber() {
        console.log(1);
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', like: 20},
                {id: 2, message: 'It\'s my first post?', like: 11}
            ],
            newPostText: ''
        },
        messagesPage: {
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
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action:any){
        if (action.type === "ADD-POST") {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                like: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT"){

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },

};

export default store;
