import styles from "./Message.module.scss"

export function Message(props) {
    console.log(props.isMy)
    return (

            <div className={props.isMy ? `${styles.message} ${styles.my_message}` : styles.message}>
                {props.text}

        </div>
    )
}