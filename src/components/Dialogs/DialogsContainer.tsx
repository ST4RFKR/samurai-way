
import {AddMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messagePageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type DialogsContainerPropsType = {
    store: any
}


export function DialogsContainer(props: DialogsContainerPropsType) {

    let state = props.store.getState();


    const addMessage = () => {
        props.store.dispatch(AddMessageActionCreator());
    }

    let onPostChange = (text: string) => {

        props.store.dispatch(updateNewMessageActionCreator(text));
    }
    return (


        <Dialogs addMessage={addMessage}
                 onPostChange={onPostChange}
                 newMessageText={state.messagesPage.newMessageText}
                 messages={state.messagesPage.messages}
                 dialogs={state.messagesPage.dialogs}/>
    );
}

let mapStateToProps = (state: any) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(AddMessageActionCreator())
        } ,
        onPostChange: (text: string) => {
            dispatch(updateNewMessageActionCreator(text))
        }

    }
}
export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

