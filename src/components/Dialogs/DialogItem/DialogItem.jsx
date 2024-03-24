import {NavLink} from "react-router-dom";
import styles from "./DialogItem.module.scss"

export function DialogItem(props) {
    return (
        <div className={styles.container}>
            <div className={styles.ava}></div>
            <li>
                <NavLink to={"/dialogs/" + props.id} className="dialog_item">{props.name}</NavLink>
            </li>
        </div>

    )
}