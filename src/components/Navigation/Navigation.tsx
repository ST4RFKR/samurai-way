import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";


export function Navigation() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
                <li  className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></li>
                <li  className={classes.item}><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
                <li  className={classes.item}><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></li>
                <li  className={classes.item}><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}


