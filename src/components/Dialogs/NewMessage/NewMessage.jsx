import styles from "./NewMessage.module.scss";
import React from "react";

export function NewMessage(props) {

    let newMessageTextarea = React.createRef()
    function addMessage() {
        let text = newMessageTextarea.current.value;
        alert(text)
    }

    return (
        <div className={styles.container}>
            <textarea ref={newMessageTextarea} rows="3"></textarea>
            <button onClick={addMessage} >Send</button>
        </div>
    )
}