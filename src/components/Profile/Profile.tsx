import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";


export function Profile() {
    return (
        <div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/02/55/17/43/360_F_255174366_ojDuATz84e5h7lIlxh2moUJa9Kpd5wKk.jpg"
                     alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    );
}


