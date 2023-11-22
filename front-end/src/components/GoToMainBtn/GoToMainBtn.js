import Styles from "../../styles/ExerciseSelect.module.css";

function GoToMainBtn({text}){
    return <button className={Styles.GoToMainBtn}>{text}</button>
}

export default GoToMainBtn;