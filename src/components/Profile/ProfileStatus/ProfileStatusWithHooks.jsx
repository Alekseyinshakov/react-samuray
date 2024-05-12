import React, {useState} from "react";
import styles from "./ProfileStatus.module.scss"

export const ProfileStatusWithHooks = (props) => {

    let [editeMode, setEditeMode] = useState(false)

    let [status, setStatus] = useState(props.status)
    let activateEditeMode = () => {
        setEditeMode(true)
    }

    let deactivateEditeMode = () => {
        setEditeMode(false);
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div className={styles.wrapper}>
                { !editeMode &&
                    <div className={styles.status} onDoubleClick={activateEditeMode}>
                        {props.status || "no status"}
                    </div>
                }

                { editeMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditeMode} type="text" value={status}/>
                    </div>
                }
            </div>
        )
    
}

