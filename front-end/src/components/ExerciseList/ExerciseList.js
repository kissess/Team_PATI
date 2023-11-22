import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToMyRoutine } from 'components/store/actions';
import Styles from "styles/ExerciseSelect.module.css";
import LogoButton from "../../components/LogoButton/LogoButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExerciseDetails from "pages/Des/ExerciseDetails";

import { ReactModal as Modal } from "react-modal";

import { Link } from "react-router-dom";

const ExerciseList = () => {
  const [showPopups, setShowPopups] = useState(Array(6).fill(false));

  const togglePopup = (index) => {
    setShowPopups(prevState => prevState.map((state, i) => (i === index ? !state : state)));
  };

  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);

  const handleAddToMyRoutine = (exercise) => {
    dispatch(addToMyRoutine(exercise));
  };

  return (
    <div className={Styles.Frame}>
      <LogoButton text="PostureFlow" />
      <Subtitle
        Subtitle="Make your own Routine"
        SubtitleDescription="자신만의 운동루틴을 만들어보세요."
      />
      <Link to="/MyRoutine" className={Styles.txtd}>
        <button className={Styles.GoToMyRoutineBtn}>{"내 루틴"}</button>
      </Link>

      <div className={Styles.SelectContentFrame}>
        <div className={Styles.SelectContentRowFrame}>
          {exercises.slice(0, 3).map((exercise, index) => (
            <div className={Styles.SelectContentBox}>
              <img className={Styles.SelectContentIMG} src={exercise.url} alt="" />
              <button onClick={() => togglePopup(index)}
                className={Styles.ExerciseSelectName}>
                {exercise.name}
              </button>
              {showPopups[index] ? (
                <div className={Styles.ExerciseDetails}>
                  <button onClick={togglePopup[index]}>
                  <img className={Styles.Back} src="https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2Ficons%2Farrow.png?alt=media&token=a56d1dd9-410c-41f5-af55-0f37932dfa12" alt="" />
                  </button>
                  
                  <img className={Styles.ExerciseDetailsGif} src={exercise.gif} alt="" />
                  <ExerciseDetails
                    Cat={exercise.cal}
                    Name={exercise.name}
                    Cal={exercise.cal}
                    Des={exercise.des}
                  />
                </div>
              ) : null}
              <button className={Styles.ExerciseSelectAdd}
                onClick={() => handleAddToMyRoutine(exercise)}>+ 담기</button>
            </div>
          ))}
        </div>
        <div className={Styles.SelectContentRowFrame}>
          {exercises.slice(3).map((exercise, index) => (
            <div className={Styles.SelectContentBox}>
              <img className={Styles.SelectContentIMG} src={exercise.url} alt="" />
              <button className={Styles.ExerciseSelectName}>
                {exercise.name}
              </button>
              <button className={Styles.ExerciseSelectAdd}
                onClick={() => handleAddToMyRoutine(exercise)}>+ 담기</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
