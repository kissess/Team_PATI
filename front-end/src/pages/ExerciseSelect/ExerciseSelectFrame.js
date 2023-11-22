import Styles from "../../styles/ExerciseSelect.module.css";
import LogoButton from "../../components/LogoButton/LogoButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExerciseSelectType from "./ExerciseSelectType";
import { Link } from "react-router-dom";

import BurpeeDes from "../Des/BurpeeDes";
import CrunchDes from "../Des/CrunchDes";
import LegriseDes from "../Des/LegriseDes";
import PlankDes from "../Des/PlankDes";
import PushupDes from "../Des/PushupDes";
import SquatDes from "../Des/SquatDes";


function ExerciseSelectFrame() {
    return(
        <div className={Styles.Frame}>
            <LogoButton text="PostureFlow"/>
            <Subtitle 
                Subtitle="Make your own Routine"
                SubtitleDescription="자신만의 운동루틴을 만들어보세요."
            />
            <Link to="/MyRoutine" className={Styles.txtd}>
            <button className={Styles.GoToMyRoutineBtn}>{"내 루틴"}</button>
            </Link>
            
            <div className={Styles.SelectContentFrame}>
                <div className={Styles.SelectContentRowFrame}>
                    <ExerciseSelectType IMGpath={"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FExercise%2FBURPEE.png?alt=media&token=93b4246f-edd6-490f-a93c-697a7f74b808"}
                                        Name={"버피 테스트"}/>
                    <ExerciseSelectType IMGpath={"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FExercise%2FCRUNCH.png?alt=media&token=fbf19d53-a18a-42e8-be30-e73a1460fca2"}
                                        Name={"크런치"} />
                    <ExerciseSelectType IMGpath={"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FExercise%2FLEGRISE.png?alt=media&token=bb3c555e-6c7b-4426-8265-7186017ae41f"}
                                        Name={"라잉 레그 라이즈"}/>
                </div>
                <div className={Styles.SelectContentRowFrame}>
                    <ExerciseSelectType IMGpath={"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FExercise%2FPLANK.png?alt=media&token=f33c225b-6eec-448b-850f-8cc39b70ddb3"}
                                        Name={"플랭크"}/>
                    <ExerciseSelectType IMGpath={"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FExercise%2FPUSHUP.png?alt=media&token=0971acc6-62d0-457f-b125-debc6c84e5ed"}
                                        Name={"팔굽혀펴기"}/>
                    <ExerciseSelectType IMGpath={"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FExercise%2FSQUAT.png?alt=media&token=adcc57eb-905d-4310-9519-91d6cfad7c6c"}
                                        Name={"스쿼트"} />
                </div>
            </div>  
        </div>
    )
}

export default ExerciseSelectFrame;