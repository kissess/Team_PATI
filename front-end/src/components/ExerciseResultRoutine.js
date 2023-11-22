import Styles from "../styles/ExerciseSelect.module.css";

function ExerciseResultRoutine({Category, Name, Cnt}){
    return (
        <div className={Styles.ExerciseRoutineBoxP}>
            <div className={Styles.ExerciseRoutineCategory}>
                {Category}
            </div>
            <div className={Styles.ExerciseRoutineName}>
                {Name}
            </div>
            <div className={Styles.ExerciseRoutineProperty}>
                <div className={Styles.ExerciseRoutineCnt}>
                    {Cnt}
                </div>
                <div className={Styles.ExerciseRoutineScale}>
                    {"회"}
                </div>
            </div>
            
        </div>
    )
}

export default ExerciseResultRoutine;