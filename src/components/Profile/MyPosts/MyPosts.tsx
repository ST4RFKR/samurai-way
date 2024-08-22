import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


export function MyPosts() {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>

            <div>
                post list
                <Post message={'Hi,how are you?'}/>
                <Post message={"It's my first post"}/>

            </div>
        </div>
    );
}


