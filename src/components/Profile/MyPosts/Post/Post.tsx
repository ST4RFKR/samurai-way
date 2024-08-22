import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
    message: string
}

export function Post(props:PostPropsType) {
const {message} = props;
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuhXzhGVA2FwyYtVgIHKsHKER7F74IU2fXtjr12OelDfvhRk6v8PrhyX0d3bswXWrbVA&usqp=CAU"
                alt=""/>
            {message}
            <div>
                <span>like</span>
            </div>
        </div>

    );
}


