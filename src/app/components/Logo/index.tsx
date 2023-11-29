import styles from './index.module.css'

export default function Logo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>CYBERSERVICE</div>
            <div className={styles.description}>РЕМОНТ ГАДЖЕТОВ</div>
        </div>
    )
}
