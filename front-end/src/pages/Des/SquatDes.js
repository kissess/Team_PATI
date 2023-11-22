import Styles from "../../styles/ExerciseSelect.module.css";
import ExerciseDetails from "./ExerciseDetails";

function SquatDes() {
    return(
        <div className={Styles.ExerciseDetails}>
            <img className={Styles.Back} src="./images/icons/arrow.png" alt=""/>
            <img className={Styles.ExerciseDetailsGif} src="./images/ExerciseGif/sq.gif" alt=""/>
            <ExerciseDetails 
                Cat={"하체"}
                Name={"스쿼트"}
                Cal={"0.4"}
                Des={"발을 어깨너비로 벌리고 손을 앞으로 뻗어서 상체를 일직선으로 유지하며 무릎을 굽힌 후, 엉덩이를 뒤로 내밀어 천천히 내려가다가 다시 일어나는 동작을 반복한다. \n이때, 상체를 앞으로 굽히지 않도록 주의해야 한다."}
            />
        </div>
    )
}

export default SquatDes;