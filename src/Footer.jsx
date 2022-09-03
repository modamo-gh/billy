import styles from "./Footer.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Designed and engineered by Morgan Byrd</p>
            <div className={styles.socials}>
                <GitHubIcon htmlColor="#84AAB7" onClick={() => window.open("https://github.com/morganthemosaic/billy")} />
                <a href="https://github.com/morganthemosaic/billy" className={styles.link}>Github</a>
                <LinkedInIcon htmlColor="#84AAB7" onClick={() => window.open("https://www.linkedin.com/in/bmmay/")} />
                <a href="https://www.linkedin.com/in/bmmay/" className={styles.link}>LinkedIn</a>
            </div>
        </div>
    )
}

export default Footer;