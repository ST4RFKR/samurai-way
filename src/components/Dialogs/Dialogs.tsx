import classes from './Dialogs.module.css'

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



type UserPropsType = {
    id: number,
    userName: string,
}
type MessagePropsType = {
    id: number,
    message: string,
}

type DialogsPropsType = {
    dialogs: Array<UserPropsType>,
    messages: Array<MessagePropsType>
    addMessage: () => void
    onPostChange: (text: string) => void
    newMessageText:string
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogs.map((el: UserPropsType) => <DialogItem key={el.id} name={el.userName}
                                                                               id={el.id}/>)
    let messagesElements = props.messages.map((mes: MessagePropsType) => <Message key={mes.id} message={mes.message}/>)

    const addMessage = () => {
        props.addMessage();
    }

    let onPostChange = (e: any) => {
        let text = e.target.value;
        props.onPostChange(text);
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


