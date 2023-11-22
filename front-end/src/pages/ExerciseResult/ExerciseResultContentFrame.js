import Styles from "../../styles/ExerciseSelect.module.css";
import HorizonLine from "../ExerciseStatistics/HorizonLine";
import ExerciseResultBox from "../../components/ExerciseResultBox"
import ExerciseResultRoutine from "../../components/ExerciseResultRoutine";

import { useDispatch, useSelector } from 'react-redux';


function ExerciseResultContentFrame() {
    const myRoutine = useSelector((state) => state.myRoutine);

    return (
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
                        <div className={Styles.MyRoutineTitle}>{"My Routine"}</div>
                        <div className={Styles.ExerciseRoutineBoxFrame}>
                            {myRoutine.map((item) => (
                                <ExerciseResultRoutine
                                    Category={item.cat}
                                    Name={item.name}
                                    Cnt={item.quantity}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExerciseResultContentFrame;