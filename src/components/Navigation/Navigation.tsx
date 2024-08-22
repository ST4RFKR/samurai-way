import React from 'react';
import classes from './Navigation.module.css';

export function Navigation() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><a href="#">Profile</a></li>
                <li  className={classes.item}><a href="#">Messages</a></li>
                <li  className={classes.item}><a href="#">News</a></li>
                <li  className={classes.item}><a href="#">Music</a></li>
                <li  className={classes.item}><a href="#">Setiings</a></li>
            </ul>
        </nav>
    );
}


