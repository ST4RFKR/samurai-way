import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
    dataPost: any
    dispatch: any
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} newPostText={props.dataPost.newPostText}

                     data={props.dataPost.posts}/>
        </div>
    );
}


