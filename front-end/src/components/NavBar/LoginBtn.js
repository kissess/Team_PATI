import { Link } from "react-router-dom";
import styles from "./nav.module.css";

function LoginBtn({ text }) {
    return (
        <Link to="login">
            <button className={styles.login}>{text}</button>
        </Link>
    );
}

export default LoginBtn; 