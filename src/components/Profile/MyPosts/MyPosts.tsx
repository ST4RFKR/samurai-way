import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


export function MyPosts() {
    return (
        <div>
             <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>

            <div>
                post list
                <Post message={'Hi,how are you?'}/>
                <Post like={20} message={"It's my first post"}/>
            </div>
        </div>
    );
}


