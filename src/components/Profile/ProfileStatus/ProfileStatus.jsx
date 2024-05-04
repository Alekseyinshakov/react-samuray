import React from "react";
import styles from "./ProfileStatus.module.scss"

export class ProfileStatus extends React.Component {
    componentDidMount() {

    }



    state = {
        editeMode: false,

    }
    activateEditMode = () => {
        this.setState({status: this.props.status})
        this.setState({
            editeMode: true
        })
    }
    deactivateEditMode = () => {

        this.setState({
            editeMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }
    render() {
        return (
            <div className={styles.wrapper}>
                {!this.state.editeMode &&
                    <div onDoubleClick = {this.activateEditMode} className={styles.status}>
                        {this.props.status || "no status"}
                    </div>}
                {this.state.editeMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status} type="text"/>
                    </div>
                }
                {/*<button onClick={()=> {this.props.updateStatus("грызём реакт до полного трудоустройства")}}>get status test</button>*/}
            </div>
        )
    }
}

