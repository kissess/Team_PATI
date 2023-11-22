import Styles from "./../../styles/ExerciseSelect.module.css";
import ExerciseInfo from "../../components/ExerciseInfo/ExerciseInfo.js"

import Webcam from "react-webcam";
import React, { useRef } from 'react';
import axios from 'axios';


function ExerciseContentFrame() {
    // 웹캠을 위한
    const webcamRef = useRef(null);
    const capture = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        try {
            // Flask 서버로 이미지 전송
            await axios.post('<https://postureflow-hallym.web.app/upload>', { image: imageSrc });
            console.log('Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image', error);
        }
    };

    return(
        <section>
            <div>
                <div className={Styles.ExerciseContentFrame}>
                    <div className={Styles.RealcamFrame}>
                        <div className={Styles.RealcamSpace}>
                            <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"/>
                        </div>
                    </div>
                    <div className={Styles.ExerciseRoutineFrame}>
                        <div className={Styles.ExerciseRoutine}>
                            <ExerciseInfo 
                                ExerciseCategory="카테고리"
                                ExerciseName="운동명"
                            />
                        </div>
                        <div className={Styles.ExerciseRoutine}>
                            <ExerciseInfo 
                                ExerciseCategory="카테고리"
                                ExerciseName="운동명"
                            />
                        </div>
                        <div className={Styles.ExerciseRoutine}>
                            <ExerciseInfo 
                                ExerciseCategory="카테고리"
                                ExerciseName="운동명"
                            />
                        </div>
                        <div className={Styles.ExerciseRoutine}>
                            <ExerciseInfo 
                                ExerciseCategory="카테고리"
                                ExerciseName="운동명"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExerciseContentFrame;