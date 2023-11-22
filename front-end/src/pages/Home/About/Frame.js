import styles from "./mainpage.module.css";

function Frame({text, path}){
    return(
        <div className={styles.frames}>
            <div className={styles.circle}>
                <img className={styles.circleIMG} src={path} alt = ""/>
            </div>
            <div className={styles.textBox}>
                <div className={styles.texts}>{text}</div>
            </div>
        </div>
    );
}

export default Frame;