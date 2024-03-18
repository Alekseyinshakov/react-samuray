import styles from "./Header.module.scss"

export function Header(){
    return (
        <header className={styles.header}>
            <img
                src="https://github.com/Alekseyinshakov/react-img/blob/main/kisspng-royalty-free-logo-sticker-ray-toro-5b3b7a5452c5c6.251697931530624596339.png?raw=true"
                alt="" className="logo"/>
            <div className={styles.kabzda}>React - кабзда как просто</div>
        </header>
    )
}