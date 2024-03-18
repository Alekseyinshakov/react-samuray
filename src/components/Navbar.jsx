import styles from "./Navbar.module.scss"

export function Navbar() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li className={styles.active}><a href="">Home</a></li>
                <li><a href="">Messages</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </nav>
    )
}