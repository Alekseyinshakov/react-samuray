import { Field, reduxForm } from 'redux-form'
import s from './Login.module.scss'
import React from "react";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/auth-reduser";
import {InputC} from '../common/FormsControls/FormsControls'
import {required} from "../../utils/validators/validators";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.login} name="login" component={InputC} placeholder="Login" validate={[required]} />
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
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)



let Login = (props) => {

    const submit = values => {
        // console.log(values)
        props.loginThunkCreator(values)
    }

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>LOGIN PAGE</h1>
            <LoginForm onSubmit={submit}/>
        </div>

    )
}

let mapStateToProps = () => {

}

Login = connect(mapStateToProps, {loginThunkCreator})(Login)

export {Login}
