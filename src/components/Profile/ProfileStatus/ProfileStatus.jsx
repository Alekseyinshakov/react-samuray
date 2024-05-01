import React from "react";
import styles from "./ProfileStatus.module.scss"

export class ProfileStatus extends React.Component {
    state = {
        editeMode: false,
        status: "hello guys"
    }
    activateEditMode = () => {
        console.log(this)
        this.setState({
            editeMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editeMode: false
        })
    }
    render() {
        return (
            <div className={styles.wrapper}>
                {!this.state.editeMode &&
                    <div onDoubleClick = {this.activateEditMode} className={styles.status}>
                        {this.state.status}
                    </div>}
                {this.state.editeMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status} type="text"/>
                    </div>
                }
            </div>
        )
    }
}

