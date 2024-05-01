import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
    }
}



// let authRedirectComponent = withAuthRedirect(Dialogs);
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Dialogs)