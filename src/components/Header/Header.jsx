import styles from "./Header.module.scss"
import logoImg from './logo.png'

export function Header(){
    return (
        <header className={styles.header}>
            <img
                src={logoImg}
                alt="" className="logo"/>
            <div className={styles.kabzda}>React - кабзда как просто</div>
        </header>
    )
}