import React from 'react';

import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";
import {MyPosts} from "./MyPosts";


type myPostsPropsType = {
    store: any


}

export function MyPostsContainer(props: myPostsPropsType) {

    let state = props.store.getState();

    const addPost = () => {

        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text: string) => {

        props.store.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <MyPosts addPost={addPost} onPostChange={onPostChange} posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    );
}


