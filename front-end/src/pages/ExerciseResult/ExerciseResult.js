import back from "../../styles/background.module.css";
import ExerciseResultFrame from "./ExerciseResultFrame";

function ExerciseResult() {
    return(
        <div className = {back.body}>
            <ExerciseResultFrame />

        </div>
    
    );
}
  
export default ExerciseResult;