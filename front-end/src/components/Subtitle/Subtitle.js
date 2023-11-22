import Styles from "./../../styles/ExerciseSelect.module.css";

function Subtitle({Subtitle, SubtitleDescription}){
    return (
        <div>
            <div className = {Styles.Subtitle}>
                {Subtitle}
            </div>
            <div className = {Styles.SubtitleDescription}>
                {SubtitleDescription}
            </div>
        </div>
    )
}

export default Subtitle;