import styles from "./nav.module.css";
import LoginBtn from "./LoginBtn";
import Logo from "./LogoBtn";
import Li from "./Li";
import { Link } from "react-router-dom";


function NavBars() {
    return (
        <nav className = {styles.bar}>
            <Link to="1" spy={true} smooth={true}>
                <Logo text = {"PostureFlow"}/>
            </Link>
            <ul className={styles.menu}>
                <Link to="2" spy={true} smooth={true}>
                    <li><Li text = {"About Project"}/></li>
                </Link>
                <Link to="3" spy={true} smooth={true}>
                    <li><Li text = {"Members"}/></li>
                </Link>
            </ul>
                <LoginBtn text = {"로그인"} />
        </nav>
    )
}

export default NavBars;