import React from "react";
import {createActionAddMessage, createActionOnChangeMessage} from "../../../Redux/dialogs-reduser";
import {NewMessage} from "./NewMessage";

export function NewMessageContainer(props) {
    let state = props.store.getState().dialogPage

    function addMessage() {
        props.store.dispatch(createActionAddMessage())
    }

    function updateNewMessageText(text) {
        props.store.dispatch(createActionOnChangeMessage(text))
    }

    return (
        <NewMessage updateNewMessageText={updateNewMessageText} addMessage={addMessage} newMessageText = {state.newMessageText}/>
    )
}