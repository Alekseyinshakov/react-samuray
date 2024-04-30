import styles from './Dialogs.module.scss';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {NewMessageContainer} from "./NewMessage/NewMessageContainer";
import {Navigate} from "react-router-dom";

export function Dialogs(props) {

    if(!props.isAuth) {
        return <Navigate to="/login"/>;
    }

    let dialogs= props.dialogsData.map(item => <DialogItem id={item.id} key={item.id} name={item.name}/>)
    let messages = props.messagesData.map(message => <Message isMy={message.my} key={message.id} text = {message.message}/>)

    return (
        <div className={styles.main}>
            <div className={styles.dialog_items}>
                <ul>
                    {dialogs}
                </ul>
            </div>
            <div className={styles.messages}>
                <div className={styles.messagesWrap}>
                    {messages}
                </div>

                <NewMessageContainer store = {props.store} />
            </div>
        </div>
    )
}