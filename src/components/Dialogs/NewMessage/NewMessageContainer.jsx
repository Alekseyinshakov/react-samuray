import React from "react";
import {createActionAddMessage} from "../../../Redux/dialogs-reduser";
import {NewMessage} from "./NewMessage";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {

    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(createActionAddMessage(text))
        }
    }

}


export const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)