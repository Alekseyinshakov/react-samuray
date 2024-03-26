import styles from "./NewMessage.module.scss";
import React from "react";

export function NewMessage(props) {

    let newMessageTextarea = React.createRef()
    function addMessage() {
        props.addMessage()
    }

    function onChangeMessage() {
        console.log(newMessageTextarea.current.value)
        props.changeMessageText(newMessageTextarea.current.value);
    }

    return (
        <div className={styles.container}>
            <textarea onChange={onChangeMessage} value={props.newMessageText} ref={newMessageTextarea} rows="3"></textarea>
            <button onClick={addMessage} >Send</button>
        </div>
    )
}