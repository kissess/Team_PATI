import Styles from "../../styles/ExerciseSelect.module.css";
import MyRoutineInfo from "./MyRoutineInfo.js"
import CntBox from "./CntBox.js";
import CorrectBtn from "./CorrectBtn.js";
import { useCartDispatch } from "contexts/cart_context";
import Exercise from "components/Exercise/Exercise";
import { useProductDispatch, useProductState } from "contexts/products_context";

import React, { useState, useRef, useCallback } from "react";


function MyRoutineContentFrameBox({  Category, name}) {
    
    return (
       

        <div className={Styles.MyRoutineContentBox} draggable="true">
            <MyRoutineInfo
                ExerciseCategory={Category}
                ExerciseName={name}
            />
            <CntBox 
            />

            <div>
                <img className={Styles.DeleteIcon} src="https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2Ficons%2FDeleteIcon.png?alt=media&token=a1480d4a-f9e1-4afe-bdde-d86a68aab523" alt="" />
            </div>
            <div>
                <img className={Styles.MoveIcon} src="https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2Ficons%2FMoveIcon.png?alt=media&token=c051e700-9df4-4b0a-97a3-c9a94f5cee7e" alt="" />
            </div>
        </div>
    )
}

export default MyRoutineContentFrameBox;