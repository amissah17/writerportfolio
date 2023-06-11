import Link from "next/link";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Nav() {
    return ( 
        <header className={style.navwrapper}>
        <nav className={style.navbar}>
            <h1 className={style.logo}><Link href="#">Otabil</Link></h1>
            <div className={style.navItems}>
                <Link href="mailto:amissahfrank17@gmail.com" target="_blank" className={style.btn}><FontAwesomeIcon icon={faEnvelope} /><span>Send a mail</span></Link>
                <Link href="https://www.linkedin.com/in/frank-amissah-208b37267/" target="_blank" className={style.btn}><FontAwesomeIcon icon={faLinkedin} /><span>Connect</span></Link>
            </div>
        </nav>
    </header>
     );
}

export default Nav;