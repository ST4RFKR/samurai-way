import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string,
    id: number
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export function Dialogs() {
    let dataUser = [
        {id: 1, userName: 'Dimych',},
        {id: 2, userName: 'Victor',},
        {id: 3, userName: 'Sveta',},
        {id: 4, userName: 'Valera',}
    ]
    let dataMessage = [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'Yo',},
        {id: 3, message: 'What?',},

    ]
    let dialogsElements = dataUser.map(el =>  <DialogItem name={el.userName} id={el.id}/>)
    let messagesElements = dataMessage.map(mes => <Message message={mes.message}/>)
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


