import Styles from "./../../styles/ExerciseSelect.module.css";

function ExerciseStartBtn({text}){
    return <button className={Styles.ExerciseStartBtn}>{text}</button>
}

export default ExerciseStartBtn;