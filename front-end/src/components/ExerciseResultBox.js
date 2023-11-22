import Styles from "../styles/ExerciseSelect.module.css";

function ExerciseResultBox({Title, Num, Scale}){
    return (
        <div className={Styles.ResultBox}>
            <div className={Styles.ResultTitle}>{Title}</div>
            <div className={Styles.ResultGroup}>
                <div className={Styles.ResultNum}>{Num}</div>
                <div className={Styles.ResultScale}>{Scale}</div>
            </div>
        </div>
    )
}

export default ExerciseResultBox;