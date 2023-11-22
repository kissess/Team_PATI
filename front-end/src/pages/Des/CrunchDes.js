import Styles from "../../styles/ExerciseSelect.module.css";
import ExerciseDetails from "./ExerciseDetails";

function CrunchDes() {
    return(
        <div className={Styles.ExerciseDetails}>
            <img className={Styles.Back} src="./images/icons/arrow.png" alt=""/>
            <img className={Styles.ExerciseDetailsGif} src="./images/ExerciseGif/cr.gif" alt=""/>
            <ExerciseDetails 
                Cat={"상복부"}
                Name={"크런치"}
                Cal={"0.2"}
                Des={"누워 상체를 들어 올리고 복부 근육을 수축시키는 운동이다. \n윗몸일으키기에 비해 왕복 거리는 짧으나, 복근에 가해지는 자극은 비슷하다."}
            />
        </div>
    )
}

export default CrunchDes;