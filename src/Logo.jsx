import billyLogo from "./assets/billy.svg";
import styles from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logoImage} src={billyLogo} />
            <h1 className={styles.logoText}>billy</h1>
        </div>
    )
}

export default Logo;