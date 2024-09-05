import React from 'react';

import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


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
        <MyPosts
            addPost={addPost}
            onPostChange={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    );
}
const mapStateProps = (state:any) =>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchProps = (dispatch:any) =>{
    return{
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
}
export const SuperMyPostsContainer = connect(mapStateProps,mapDispatchProps )(MyPosts);


