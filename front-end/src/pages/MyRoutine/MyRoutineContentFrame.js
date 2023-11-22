import Styles from "../../styles/ExerciseSelect.module.css";
import MyRoutineContentFrameBox from "./MyRoutineContentFrameBox.js"

function MyRoutineContentFrame() {
    return(
        <section>
            <div>
                <div className={Styles.MyRoutineContentFrame}>
                        <MyRoutineContentFrameBox Category={"카테고리"}  name={"운동1"}/>
                        <MyRoutineContentFrameBox Category={"카테고리"}  name={"운동2"}/>
                        <MyRoutineContentFrameBox Category={"카테고리"}  name={"운동3"}/>
                        <MyRoutineContentFrameBox Category={"카테고리"}  name={"운동4"}/>
                </div>
            </div>
        </section>
    )
}

export default MyRoutineContentFrame;