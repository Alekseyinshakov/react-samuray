import styles from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <li>
            <NavLink to={"/dialogs/" + props.id} className="dialog_item">{props.name}</NavLink>
        </li>
    )
}

function Message(props) {
    return (
        <div className="message">
            {props.text}
        </div>
    )
}

export function Dialogs() {

    let dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Arnold"},
    ]

    let messagesData = [
        {id: 1, message: "Привет. Первое15555 сообщение"},
        {id: 2, message: "Привет. Второе2555 сообщение"},
        {id: 3, message: "Привет. Третье3555 сообщение"},
    ]

    let dialogs= dialogsData.map(item => <DialogItem id={item.id} name={item.name}/>)
    let messages = messagesData.map(message => <Message text = {message.message}/>)

    return (
        <div className={styles.main}>
            <div className={styles.dialog_items}>
                <ul>
                    {dialogs}
                </ul>
            </div>
            <div className="messages">

                {messages}

            </div>

        </div>
    )
}