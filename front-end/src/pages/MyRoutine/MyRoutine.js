import back from "../../styles/background.module.css";
import MyRoutineFrame from "./MyRoutineFrame";


function MyRoutine() {
    return(
        <div className = {back.body}>
            <MyRoutineFrame />

        </div>
    
    );
}
  
export default MyRoutine;