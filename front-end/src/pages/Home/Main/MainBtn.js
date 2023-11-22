import styles from "./mainpage.module.css";

function MainBtn({text}){
    return <button className={styles.startbtn}>{text}</button>
}

export default MainBtn;