import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer, SuperDialogsContainer} from "./components/Dialogs/DialogsContainer";



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
                    <Route path={'/news'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>

            </div>
        </BrowserRouter>


    );
}

export default App;

