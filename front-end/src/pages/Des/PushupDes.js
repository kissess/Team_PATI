import Styles from "../../styles/ExerciseSelect.module.css";
import ExerciseDetails from "./ExerciseDetails";

function PushupDes() {
    return(
        <div className={Styles.ExerciseDetails}>
            <img className={Styles.Back} src="./images/icons/arrow.png" alt=""/>
            <img className={Styles.ExerciseDetailsGif} src="./images/ExerciseGif/pu.gif" alt=""/>
            <ExerciseDetails 
                Cat={"상체"}
                Name={"팔급혀펴기"}
                Cal={"0.4"}
                Des={"팔을 펴고 몸을 드는 동작으로 가슴, 어깨, 삼두근을 강화하는 운동이다. \n양손을 좁게 잡으면 가슴 근육, 넓게 잡으면 등 근육, 어깨너비와 비슷하게 잡으면 팔근육을 강화할 수 있다. \n팔꿈치가 몸쪽으로 가도록 수행해야 팔꿈치 부상을 예방할 수 있다."}
            />
        </div>
    )
}

export default PushupDes;