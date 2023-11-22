import Styles from "../../styles/ExerciseSelect.module.css";

function ExerciseInfo({ExerciseCategory, ExerciseName}){
    return (
        <div className={Styles.ExerciseInfo}>
            <div className = {Styles.ExerciseCategory}>
                {ExerciseCategory}
            </div>
            <div className = {Styles.ExerciseName}>
                {ExerciseName}
            </div>
        </div>
    )
}

export default ExerciseInfo;