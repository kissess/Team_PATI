import Styles from "../../styles/ExerciseSelect.module.css";

function MyRoutineInfo({ExerciseCategory, ExerciseName}){
    return (
        <div className={Styles.MyRoutineInfo}>
            <div className = {Styles.ExerciseCategory}>
                {ExerciseCategory}
            </div>
            <div className = {Styles.ExerciseName}>
                {ExerciseName}
            </div>
        </div>
    )
}

export default MyRoutineInfo;
