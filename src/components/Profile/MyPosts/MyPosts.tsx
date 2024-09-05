import React, {useRef} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";



type PostType = {
    id: number;
    message: string;
    like: number;
}
type myPostsPropsType ={

    posts: PostType[]
    newPostText:string
    addPost:() => void
    onPostChange:(text:string) => void


}

export function MyPosts(props: myPostsPropsType) {
    let postElements = props.posts.map((p:PostType) => <Post key={p.id} message={p.message} like={p.like}/>)
    let newPostElement: any = useRef();
    const addPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text)
        // props.dispatch(updateNewPostActionCreator(text));
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


