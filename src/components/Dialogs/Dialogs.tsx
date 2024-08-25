import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
type DialogItemPropsType = {
    name: string,
    id:number
}
function DialogItem(props:DialogItemPropsType) {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
type MessagePropsType = {
    message: string
}
function Message (props:MessagePropsType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.gialogItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Victor'} id={2}/>
                <DialogItem name={'Sveta'} id={3}/>
                <DialogItem name={'Valera'} id={4}/>
            </div>
            <div className={classes.messages}>

            <Message message={'Hi'}></Message>
            <Message message={'Yo'}></Message>
            <Message message={'What?'}></Message>
            </div>
        </div>
    );
}


