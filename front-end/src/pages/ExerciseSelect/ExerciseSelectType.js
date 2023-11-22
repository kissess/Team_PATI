import Styles from "../../styles/ExerciseSelect.module.css";

function ExerciseSelectType({IMGpath, Name}) {


    return(
        <div className={Styles.SelectContentBox}>
            <img className={Styles.SelectContentIMG} src={IMGpath} alt=""/>
            <button className={Styles.ExerciseSelectName}>
                {Name}
            </button>
            <button className={Styles.ExerciseSelectAdd}>
                {"+ 담기"}
            </button>
            
        </div>
    )
}

export default ExerciseSelectType;