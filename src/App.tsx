import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";



function App(props: any) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper '}>

                <Header/>
                <Navigation/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() =>
                        <Profile


                            dispatch={props.dispatch}
                            dataPost={props.appState.profilePage}

                        />}/>
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs
                            newMessageText={props.appState.messagesPage.newMessageText}
                            dispatch={props.dispatch}
                            dialogs={props.appState.messagesPage.dialogs}
                            messages={props.appState.messagesPage.messages}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>

            </div>
        </BrowserRouter>


    );
}

export default App;

