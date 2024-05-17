import { Field, reduxForm } from 'redux-form'
import s from './Login.module.scss'
import React from "react";
import {connect} from "react-redux";
import {loginThunkCreator, logoutThunkCreator} from "../../Redux/auth-reduser";
import {InputC} from '../common/FormsControls/FormsControls'
import {required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";

let LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field className={s.login} name="email" component={InputC} placeholder="Email" validate={[required]} />
            </div>
            <div>
                <Field className={s.password} name="password" component={InputC} placeholder="Password" validate={[required]} />
            </div>
            <div>
                <Field className={s.rememberMe} name="rememberMe" component={"input"} type="checkbox" placeholder="rememberMe" />
                Remember me
            </div>
            <div>
                <button className={s.button}>Login</button>
            </div>
            { error && <div className={s.errorMessage}>{error}</div>}
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)



let Login = (props) => {

    const submit = values => {
        // console.log(values)
        props.loginThunkCreator(values.email, values.password, values.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>LOGIN PAGE</h1>
            <LoginForm onSubmit={submit}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

Login = connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator})(Login)

export {Login}
