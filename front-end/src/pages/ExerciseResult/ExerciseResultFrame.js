import Styles from "../../styles/ExerciseSelect.module.css";
import LogoButton from "../../components/LogoButton/LogoButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExerciseResultContentFrame from "./ExerciseResultContentFrame";
import GoToMainBtn from "../../components/GoToMainBtn/GoToMainBtn";
import { Link } from "react-router-dom";

function ExerciseResultFrame() {
    return(
        <div className={Styles.Frame}>
                <LogoButton text="PostureFlow"/>
                <section>
                    <Subtitle 
                        Subtitle="Exercise Result"
                        SubtitleDescription="운동 결과를 확인해보세요."
                    />
                    <ExerciseResultContentFrame />
                    <div className={Styles.GoToMainBtnBox}>
                        <Link to="/" className={Styles.txtd}>
                        <GoToMainBtn text="메인 페이지로 가기"/>
                        </Link>
                        
                    </div>
                    
                </section>
        </div>
    )
}

export default ExerciseResultFrame;