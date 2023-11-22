import Styles from "../../styles/ExerciseSelect.module.css";
import HorizonLine from "./HorizonLine";
import ExerciseResultBox from "../../components/ExerciseResultBox"
import ExerciseResultRoutine from "../../components/ExerciseResultRoutine";

function ExerciseStatisticsContentFrame() {
    return(
        <section>
            <div>
                <div className={Styles.ExerciseContentFrame}>
                    <div className={Styles.ResultFrameL}>
                        <div className={Styles.ResultHalfFrame}>
                            <ExerciseResultBox 
                                Title="Average Score"
                                Num="100"
                                Scale="점"
                            />
                        </div>
                        <HorizonLine />
                        <div className={Styles.ResultHalfFrame}>
                            <ExerciseResultBox 
                                Title="Carlorie"
                                Num="1000"
                                Scale="kcal"
                            />
                        </div>
                    </div>
                    <div className={Styles.ResultFrameM}>
                    <div className={Styles.ResultHalfFrame}>
                            <ExerciseResultBox 
                                Title="Time"
                                Num="100"
                                Scale="분"
                            />
                        </div>
                        <HorizonLine />
                        <div className={Styles.ResultHalfFrame}>
                            <ExerciseResultBox 
                                Title="향상도"
                                Num="00"
                                Scale="%"
                            />
                        </div>
                    </div>
                    <div className={Styles.ResultFrameR}>
                        <div className={Styles.MyRoutineTitle}>{"자주 한 운동"}</div>
                        <div className={Styles.ExerciseRoutineBoxFrame}>
                            <ExerciseResultRoutine
                                Category="카테고리"
                                Name="운동명"
                                Cnt="00"
                            />
                            <ExerciseResultRoutine
                                Category="카테고리"
                                Name="운동명"
                                Cnt="00"
                            />
                            <ExerciseResultRoutine
                                Category="카테고리"
                                Name="운동명"
                                Cnt="00"
                            />
                            <ExerciseResultRoutine
                                Category="카테고리"
                                Name="운동명"
                                Cnt="00"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExerciseStatisticsContentFrame;