import React from "react";
import {createActionAddMessage} from "../../../Redux/dialogs-reduser";
import {NewMessage} from "./NewMessage";
import {connect} from "react-redux";
import {reset} from 'redux-form';



let mapStateToProps = (state) => {
    return {

    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(createActionAddMessage(text))
        },
        reset: () => {
            console.log('resetttt')
            dispatch(reset('newMessageForm'));
        }
    }

}


export const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)