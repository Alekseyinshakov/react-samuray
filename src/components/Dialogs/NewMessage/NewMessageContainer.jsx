import React from "react";
import {createActionAddMessage, createActionOnChangeMessage} from "../../../Redux/dialogs-reduser";
import {NewMessage} from "./NewMessage";
import {connect} from "react-redux";


// export function NewMessageContainer(props) {
//     let state = props.store.getState().dialogPage
//
//     function addMessage() {
//         props.store.dispatch(createActionAddMessage())
//     }
//
//     function updateNewMessageText(text) {
//         props.store.dispatch(createActionOnChangeMessage(text))
//     }
//
//     return (
//         <NewMessage updateNewMessageText={updateNewMessageText} addMessage={addMessage} newMessageText = {state.newMessageText}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogPage.newMessageText
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(createActionAddMessage())
        },
        updateNewMessageText: (text) => {
            dispatch(createActionOnChangeMessage(text))
        }
    }

}


export const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)