import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useRef} from "react";
import {AddMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messagePageReducer";


type UserPropsType = {
    id: number,
    userName: string,
}
type MessagePropsType = {
    id: number,
    message: string,
}

type DialogsPropsType = {
    dialogs: [],
    messages: []
    dispatch: any
    newMessageText:any

}


export function Dialogs(props: DialogsPropsType) {


    let dialogsElements = props.dialogs.map((el: UserPropsType) => <DialogItem key={el.id} name={el.userName}
                                                                               id={el.id}/>)
    let messagesElements = props.messages.map((mes: MessagePropsType) => <Message key={mes.id} message={mes.message}/>)

    const addMessage = () => {
        props.dispatch(AddMessageActionCreator());
    }

    let onPostChange = (e: any) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }
    return (


        <div className={classes.dialogs}>
            <div className={classes.gialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <>
                    <textarea onChange={onPostChange}  value={props.newMessageText}/>
                    <button onClick={addMessage}>Add new message</button>
                </>
            </div>
        </div>
    );
}


