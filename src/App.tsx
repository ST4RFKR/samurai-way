import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import { SuperDialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";



function App(props: any) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper '}>

                <Header/>
                <Navigation/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() =>
                        <Profile store={props.store}/>}/>
                    <Route path={'/dialogs'} render={() =>
                        <SuperDialogsContainer
                            />}/>
                    <Route path={'/users'} render={() =>
                        <UsersContainer>USERS</UsersContainer>
                        }/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>

            </div>
        </BrowserRouter>


    );
}

export default App;

