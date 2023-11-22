import Styles from "../../styles/ExerciseSelect.module.css";
import ExerciseDetails from "./ExerciseDetails";

function BurpeeDes() {
    return(
        <div className={Styles.ExerciseDetails}>
            <img className={Styles.Back} src="./images/icons/arrow.png" alt=""/>
            <img className={Styles.ExerciseDetailsGif} src="./images/ExerciseGif/bu.gif" alt=""/>
            <ExerciseDetails 
                Cat={"전신"}
                Name={"버피 테스트"}
                Cal={"4"}
                Des={"서 있는 상태에서 몸을 숙인 후 팔굽혀펴기를 한 후 다시 일어나는 동작을 반복한다.\n하체와 상체, 그리고 순간적인 코어 근육을 모두 사용한다.\n시간당 소모 칼로리는 플랭크보다는 낮으나 지속 가능한 시간이 길어 한 번에 많은 열량을 소모할 수 있다."}
            />
        </div>
    )
}

export default BurpeeDes;