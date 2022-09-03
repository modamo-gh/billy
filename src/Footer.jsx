import styles from "./Footer.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Designed and engineered by Morgan Byrd</p>
            <div className={styles.socials}>
                <GitHubIcon />
                <p>Github</p>
                <LinkedInIcon />
                <p>LinkedIn</p>
            </div>
        </div>
    )
}

export default Footer;