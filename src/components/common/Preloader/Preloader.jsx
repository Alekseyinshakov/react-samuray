import styles from './Preloader.module.scss'
import preloaderImg from './gear.svg'

export const Preloader = (props) => {
    return (
        <div className={styles.wrap}>
            <span>
                <img src={preloaderImg} alt=""/>
            </span>
        </div>

    )
}