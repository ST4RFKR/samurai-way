
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore'



let rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <App
            appState={state}
            dispatch={store.dispatch.bind(store)}
        />, document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);

})






