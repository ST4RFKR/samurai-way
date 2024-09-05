import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer, SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {

    store: any
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <SuperMyPostsContainer/>
        </div>
    );
}


