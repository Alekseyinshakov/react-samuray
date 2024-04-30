import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let authRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)