import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


export function MyPosts() {
    let dataPost = [{
        id: 1,
        message: 'Hi,how are you?',
        like: 20
    }, {
        id: 2,
        message: 'It\'s my first post?',
        like: 11
    }]
    let postElements = dataPost.map(p => <Post message={p.message} like={p.like}/>)
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
                {postElements}
            </div>
        </div>
    );
}


