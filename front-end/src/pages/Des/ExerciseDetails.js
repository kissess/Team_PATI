import Styles from "../../styles/ExerciseSelect.module.css";

function ExerciseDetails({Cat, Name, Cal, Des}) {
    return(
            <div className={Styles.ExerciseDetailsContent}>
                <div className={Styles.ExerciseDetailsCat}>
                    {Cat}
                </div>
                <div className={Styles.ExerciseDetailsName}>{Name}</div>
                <div className={Styles.ExerciseDetailsGroup}>
                    <div className={Styles.ExerciseDetailsCal}>{Cal}</div>
                    <div className={Styles.ExerciseDetailsScale}>{"kcal / 1회"}</div>
                </div>
                <div className={Styles.ExerciseDetailsDes}>
                    {Des}
                </div>
                <button className={Styles.ExerciseDetailsAdd}>
                    <div>+</div>
                    {"담기"}
                </button>
            </div>
    )
}

export default ExerciseDetails;