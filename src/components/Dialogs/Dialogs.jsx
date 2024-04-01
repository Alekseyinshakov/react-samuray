import styles from './Dialogs.module.scss';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {NewMessageContainer} from "./NewMessage/NewMessageContainer";

export function Dialogs(props) {



    let dialogs= props.store.getState().dialogPage.dialogsData.map(item => <DialogItem id={item.id} name={item.name}/>)
    let messages = props.store.getState().dialogPage.messagesData.map(message => <Message isMy={message.my} text = {message.message}/>)

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