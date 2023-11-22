import Styles from "./../../styles/ExerciseSelect.module.css";
import LogoButton from "../../components/LogoButton/LogoButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExerciseInfo from "../../components/ExerciseInfo/ExerciseInfo.js"

import { Link } from "react-router-dom";


import React, { useRef, useState } from 'react';
import Webcam from "react-webcam";

import { useDispatch, useSelector } from 'react-redux';


import axios from 'axios';


function ExerciseFrame() {
    const dispatch = useDispatch();
    const myRoutine = useSelector((state) => state.myRoutine);

    const webcamRef = useRef(null);
    const [capturing, setCapturing] = useState(false);

    const startCapture = () => {
        setCapturing(true);
        // 서버로 시작 신호를 보냄
        axios.get('http://localhost:5000/start_capture')
            .then(response => {
                console.log(response.data);
                // 주기적으로 이미지를 전송
                captureFrames();
            })
            .catch(error => {
                console.error('Error starting capture', error);
            });
    };

    const captureFrames = () => {
        // 일정한 간격으로 이미지를 서버로 전송
        const intervalId = setInterval(() => {
            const imageBlob = webcamRef.current.getScreenshot();
            const formData = new FormData();
            formData.append('image', imageBlob);

            // 서버로 이미지 데이터를 전송
            axios.post('http://localhost:5000/capture_frame', formData)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error capturing frame', error);
                });
        }, 1000); // 1초 간격으로 이미지 전송

        // 중지 버튼 클릭 시 clearInterval을 호출하여 전송 중지
        return () => clearInterval(intervalId);
    };

    const stopCapture = () => {
        setCapturing(false);
        // 서버로 중지 신호를 보냄
        axios.post('http://localhost:5000/stop_capture')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error stopping capture', error);
            });
    };

    return (
        <div className={Styles.Frame}>
            <LogoButton text="PostureFlow" />
            <section>
                <Subtitle
                    Subtitle="START!"
                    SubtitleDescription="운동을 시작하세요!"
                />
                <section>
                    <div>
                        <div className={Styles.ExerciseContentFrame}>
                            <div className={Styles.RealcamFrame}>
                                <div className={Styles.RealcamSpace}>
                                    {/* react-webcam 컴포넌트 */}
                                    {capturing && <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />}

                                </div>
                            </div>
                            <div className={Styles.ExerciseRoutineFrame}>
                                {myRoutine.map((item) => (

                                    <div className={Styles.ExerciseRoutine}>
                                        <ExerciseInfo
                                            ExerciseCategory={item.cat}
                                            ExerciseName={item.name}
                                        />
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <div className={Styles.ExerciseStartBtnBox}>
                    <button onClick={startCapture} disabled={capturing} className={Styles.ExerciseStartBtn}>운동 시작</button>
                    <button onClick={stopCapture} disabled={!capturing} className={Styles.ExerciseStartBtn}>운동 종료</button>
                    <Link to="/Exercise/Result" className={Styles.txtd}>
                        <button className={Styles.ExerciseStartBtn}>운동 결과</button>
                    </Link>

                </div>

            </section>
        </div>
    )
}

export default ExerciseFrame;