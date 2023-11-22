import styles from "./nav.module.css";
import { Link } from "react-router-dom";

function Logo({text}){
    return (
            <button className = {styles.logo}>{text}</button>
    )
}

export default Logo;