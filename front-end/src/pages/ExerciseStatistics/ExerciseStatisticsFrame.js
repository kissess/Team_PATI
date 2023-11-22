import Styles from "../../styles/ExerciseSelect.module.css";
import LogoButton from "../../components/LogoButton/LogoButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExerciseStatisticsContentFrame from "./ExerciseStatisticsContentFrame";
import GoToMainBtn from "../../components/GoToMainBtn/GoToMainBtn";

function ExerciseStatisticsFrame() {
    return(
        <div className={Styles.Frame}>
                <LogoButton text="PostureFlow"/>
                <section>
                    <Subtitle 
                        Subtitle="운동현황"
                        SubtitleDescription=" "
                    />
                    <div className={Styles.WeekMonthBtnBox}>
                        <button className={Styles.WeekBtn}>
                            {"주"}
                        </button>
                        <button className={Styles.MonthBtn}>
                            {"월"}
                        </button>
                    </div>
                    <ExerciseStatisticsContentFrame />
                    <div className={Styles.GoToMainBtnBox}>
                        <GoToMainBtn text="메인 페이지로 가기"/>
                    </div>
                    
                </section>
        </div>
    )
}

export default ExerciseStatisticsFrame;