import styles from './Dialogs.module.scss';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {NewMessage} from "./NewMessage/NewMessage";

export function Dialogs(props) {

    let dialogs= props.data.dialogsData.map(item => <DialogItem id={item.id} name={item.name}/>)
    let messages = props.data.messagesData.map(message => <Message isMy={message.my} text = {message.message}/>)

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

                <NewMessage />
            </div>
        </div>
    )
}