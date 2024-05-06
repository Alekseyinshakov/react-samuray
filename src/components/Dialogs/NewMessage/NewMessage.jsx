import styles from "./NewMessage.module.scss";
import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

let NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.container}>
            <Field component={Textarea} name="newMessageText" rows="3" validate={[required, maxLength10]} />
            <button>Send</button>
        </form>
    )
}

NewMessageForm = reduxForm({
    form: 'newMessageForm'
})(NewMessageForm)

let NewMessage = (props) => {

    const submit = values => {
        props.addMessage(values.newMessageText);
        props.reset()
    }

    return (
        <NewMessageForm onSubmit={submit} />
    )
}

export {NewMessage}