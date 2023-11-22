import styles from "./nav.module.css";

function Li({text}){
    return <button className = {styles.na_li_b}>{text}</button>
}


export default Li;