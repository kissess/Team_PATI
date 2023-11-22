import Styles from "./../../styles/ExerciseSelect.module.css";
import { Link } from "react-router-dom";

function LogoButton({text}){
    return (
        <Link to="/">
            <button className = {Styles.Logo} onclick="location.href='/';">{text}</button>
        </Link>
        
    )
        
}

export default LogoButton;