
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
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
    dialogs: [],
    messages:[]

}


export function Dialogs(props:DialogsPropsType) {


    let dialogsElements = props.dialogs.map((el: UserPropsType) =>  <DialogItem key={el.id} name={el.userName} id={el.id} />)
    let messagesElements = props.messages.map((mes: MessagePropsType) => <Message  key={mes.id} message={mes.message}/>)
    return (


        <div className={classes.dialogs}>
            <div className={classes.gialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}

            </div>
        </div>
    );
}


