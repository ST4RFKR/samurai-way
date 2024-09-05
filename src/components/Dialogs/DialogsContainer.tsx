import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useRef} from "react";
import {AddMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messagePageReducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store : any
}



export function DialogsContainer(props: DialogsContainerPropsType) {

let state = props.store.getState();


    const addMessage = () => {
        props.store.dispatch(AddMessageActionCreator());
    }

    let onPostChange = (text: string) => {

        props.store.dispatch(updateNewMessageActionCreator(text));
    }
    return (


<Dialogs addMessage={addMessage}
         onPostChange={onPostChange}
         newMessageText={state.messagesPage.newMessageText}
         messages={state.messagesPage.messages}
         dialogs={state.messagesPage.dialogs}/>
    );
}


