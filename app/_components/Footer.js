import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faDev, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


function Footer() {
    return (
        <footer className={style.ftr}>
            <p>Connect with me</p>
            <div className={style.socials}>
            <Link href="https://www.linkedin.com/in/frank-amissah-208b37267/" target="_blank" className={style.btn}><FontAwesomeIcon icon={faLinkedin} size="2x"/></Link>
            <Link href="https://twitter.com/amotabil8" target="_blank" className={style.btn}><FontAwesomeIcon size="2x" icon={faTwitter} /></Link>
            <Link href="https://github.com/amissah17" target="_blank" className={style.btn}><FontAwesomeIcon size="2x" icon={faGithub} /></Link>
                {/* <Link href="mailto:amissahfrank17@gmail.com" target="_blank" className={style.btn}><FontAwesomeIcon size="2x" icon={faHashnode} /></Link> */}
                <Link href="https://dev.to/amissah17" target="_blank" className={style.btn}><FontAwesomeIcon size="2x" icon={faDev} /></Link>
            </div>

            <p>&copy; 2023 Otabil. All right reserved.</p>
        </footer>);
}

export default Footer;