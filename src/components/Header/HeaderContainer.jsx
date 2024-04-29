import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuth, setAuthUserData} from "../../Redux/auth-reduser";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {setAuthUserData, getAuth})(HeaderContainer)