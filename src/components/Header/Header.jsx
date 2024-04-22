import styles from "./Header.module.scss"
import logoImg from './logo.png'
import {NavLink} from "react-router-dom";

export function Header(props){
    return (
        <header className={styles.header}>
            <img
                src={logoImg}
                alt="" className="logo"/>
            <div className={styles.kabzda}>React - кабзда как просто</div>
            <div>
                {props.isAuth ? props.login : <NavLink to="/login">Sign in</NavLink>}

            </div>
        </header>
    )
}