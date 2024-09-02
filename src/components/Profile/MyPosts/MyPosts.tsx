import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


type PostType = {
    id: number;
    message: string;
    like: number;
}
type myPostsPropsType ={
    data: PostType[]
    dispatch: any
    newPostText:any


}

export function MyPosts(props: myPostsPropsType) {
    let postElements = props.data.map((p:PostType) => <Post key={p.id} message={p.message} like={p.like}/>)
    let newPostElement: any = React.createRef();
    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div>
             <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>

            <div>
                post list
                {postElements}
            </div>
        </div>
    );
}


