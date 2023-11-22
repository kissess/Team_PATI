import Styles from "../../styles/ExerciseSelect.module.css";
import LogoButton from "../../components/LogoButton/LogoButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import MyRoutineBtn from "./MyRoutineBtn";
import MyRoutineContentFrame from "components/MyRoutine/MyRoutine";
import { Link, useNavigate } from "react-router-dom";

function MyRoutineFrame() {
    const navigate = useNavigate();
    const onClickBtn = () => {
        navigate(-1);//바로 이전 페이지 이동.
    }
    return(
        <div className={Styles.Frame}>
                <LogoButton text="PostureFlow"/>
                <section>
                    <Subtitle 
                        Subtitle="My Routine"
                        SubtitleDescription="내가 만든 루틴을 확인하세요."
                    />
                    <MyRoutineContentFrame />
                    <div className={Styles.MyRoutineBtnGroup}>

                            <button onClick={onClickBtn} className={Styles.MyRoutineBtn}>돌아가기</button>

                        <div className={Styles.MyRoutineBtnBox}>
                            <Link to="/Exercise" className={Styles.txtd}>
                            <MyRoutineBtn text="시작하기"/>
                            </Link>
                            
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default MyRoutineFrame;