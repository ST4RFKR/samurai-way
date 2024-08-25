import React from 'react';
import classes from './Navigation.module.css';

export function Navigation() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><a href="/profile">Profile</a></li>
                <li  className={classes.item}><a href="/dialogs">Messages</a></li>
                <li  className={classes.item}><a href="/news">News</a></li>
                <li  className={classes.item}><a href="/music">Music</a></li>
                <li  className={classes.item}><a href="/settings">Setiings</a></li>
            </ul>
        </nav>
    );
}


