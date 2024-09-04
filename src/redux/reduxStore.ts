import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";

let reducers = combineReducers({
        profilePage: profilePageReducer,
        messagesPage: messagePageReducer,
})

let store = createStore(reducers);

export default store;
