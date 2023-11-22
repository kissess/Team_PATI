import styles from "./mainpage.module.css";

function MainLogo({text}){
    return <h1 className={styles.bigmain}>{text}</h1>
}

export default MainLogo;