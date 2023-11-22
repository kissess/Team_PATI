import styles from "./mainpage.module.css";

function MainSlogon({text}) {
    return  <p className={styles.main}>{text}</p>
}

export default MainSlogon;