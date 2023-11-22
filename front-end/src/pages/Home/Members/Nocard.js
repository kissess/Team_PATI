import styles from "./mainpage.module.css";

function Nocard() {
    return (
        <div className={styles.nocard}>
            <div className={styles.center}>
                <div className={styles.title}>Members</div>
                <div className={styles.project}>프로젝트에 참여한 사람들</div>
            </div>
        </div>
    )
};

export default Nocard;