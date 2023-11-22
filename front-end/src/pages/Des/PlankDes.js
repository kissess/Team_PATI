import Styles from "../../styles/ExerciseSelect.module.css";
import ExerciseDetails from "./ExerciseDetails";

function PlankDes() {
    return(
        <div className={Styles.ExerciseDetails}>
            <img className={Styles.Back} src="./images/icons/arrow.png" alt=""/>
            <img className={Styles.ExerciseDetailsGif} src="./images/ExerciseGif/pl.gif" alt=""/>
            <ExerciseDetails 
                Cat={"코어"}
                Name={"플랭크"}
                Cal={"0.3"}
                Des={"팔꿈치와 발가락을 바닥에 대고 몸을 일직선으로 유지하는 운동이며, 허리와 관절, 힘줄, 인대를 사용하지 않고 근육만을 사용하는 운동이다. \n허리디스크 재활 운동에도 효과가 있으며, 단기간에 많은 열량을 소모할 수 있으나, 운동 강도가 매우 높다."}
            />
        </div>
    )
}

export default PlankDes;