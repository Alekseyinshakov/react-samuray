import styles from "./NewMessage.module.scss";
import React from "react";
import {Field, reduxForm} from "redux-form";

let NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.container}>
            <Field component="textarea" name="newMessageText" rows="3" />
            <button>Send</button>
        </form>
    )
}

NewMessageForm = reduxForm({
    form: 'newMessageForm'
})(NewMessageForm)

let NewMessage = (props) => {

    const submit = values => {
        // console.log(values)
        props.addMessage(values.newMessageText);
    }

    return (
        <NewMessageForm onSubmit={submit} />
    )
}

export {NewMessage}