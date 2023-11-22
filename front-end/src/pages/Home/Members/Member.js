import styles from "./mainpage.module.css";

/*name, major, part */

function Member({ path, name, major, part }) {
    return (
        <div className={styles.card}>
            <img className={styles.photo} src={path} alt="" />
            <div className={styles.members}>
                <div className={styles.name}>{name}</div>
                <div className={styles.line}></div>
                <div className={styles.major}>{major}</div>
                <div className={styles.part}>{part}</div>
            </div>

        </div>
    )
};

export default Member;