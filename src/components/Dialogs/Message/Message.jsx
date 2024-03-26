import styles from "./Message.module.scss"

export function Message(props) {
    return (

            <div className={props.isMy ? `${styles.message} ${styles.my_message}` : styles.message}>
                {props.text}

        </div>
    )
}