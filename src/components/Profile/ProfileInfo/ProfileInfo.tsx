import React from 'react';
import classes from './ProfileInfo.module.css';

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={classes.img} src="https://t4.ftcdn.net/jpg/02/55/17/43/360_F_255174366_ojDuATz84e5h7lIlxh2moUJa9Kpd5wKk.jpg"
                     alt=""/>
            </div>
            <div>
                ava + descr
            </div>
        </div>
    );
}

