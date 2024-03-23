import styles from "./Navbar.module.scss"
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <NavLink
                        className={navData => navData.isActive ? styles.active : styles.item}
                        to="/profile">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={navData => navData.isActive ? styles.active : styles.item}
                        to="/dialogs">
                        Messages
                    </NavLink>
                </li>
                <li><a href="">News</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </nav>
    )
}