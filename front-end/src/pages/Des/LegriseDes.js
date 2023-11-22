import Styles from "../../styles/ExerciseSelect.module.css";
import ExerciseDetails from "./ExerciseDetails";

function LegriseDes() {
    return(
        <div className={Styles.ExerciseDetails}>
            <img className={Styles.Back} src="./images/icons/arrow.png" alt=""/>
            <img className={Styles.ExerciseDetailsGif} src="./images/ExerciseGif/ly.gif" alt=""/>
            <ExerciseDetails 
                Cat={"하복부"}
                Name={"라잉 레그라이즈"}
                Cal={"0.3"}
                Des={"누워 다리를 들어 올려 하복부 근육을 강화하는 운동이다. \n수행 시, 허리가 지지대 역할을 하므로 허리가 땅에 닿지 않도록 주의해야 한다."}
            />
        </div>
    )
}

export default LegriseDes;