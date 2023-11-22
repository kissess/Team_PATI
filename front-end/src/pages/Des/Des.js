import { UseSelector } from "react-redux/es/hooks/useSelector";
import React, { useState } from "react";
import Styles from "../../styles/ExerciseSelect.module.css";
import ExerciseDetails from "./ExerciseDetails";



import { ReactModal as Modal } from "react-modal";




const Des = (id) => {
    const exercises = useSelector((state) => state.exercises);
    const filterById = (data, targetId) => {
        return data.filter(item => item.id === targetId);
    };
    const filterdData = filterById(exercises, id);

    return (
        <div>
            {filterdData.map((filterdData) => (
                <div className={Styles.ExerciseDetails}>
                    <img className={Styles.Back} src="./images/icons/arrow.png" alt="" />
                    <img className={Styles.ExerciseDetailsGif} src="./images/ExerciseGif/cr.gif" alt="" />
                    <ExerciseDetails
                        Cat={filterdData.cal}
                        Name={filterdData.name}
                        Cal={filterdData.cal}
                        Des={filterdData.des}
                    />
                </div>
            ))}
        </div>
    )
}