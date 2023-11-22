import styles from "./mainpage.module.css";
import Frame from "./Frame";

function Main() {
    return (
        <div className={styles.Screen}>
            <section>
                <div className={styles.main}>
                    <div className={styles.title}>About Project</div>
                    <div className={styles.project}>우리의 프로젝트에 대해서</div>
                    <div className={styles.parent}>
                        <Frame
                            text={"AI를 사용해서 실시간으로\n운동 점수를 확인해보세요."}
                            path={"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FAboutProject%2FAbout1.jpg?alt=media&token=13d59966-9c7f-4a3f-804a-c409a7f8b267"}
                        />
                        <Frame
                            text={"나만의 운동루틴을 만들어\n운동을 시작해보세요."}
                            path={"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FAboutProject%2FAbout2.jpg?alt=media&token=a0d16235-f4b1-4190-9fc1-d2708465184d"}
                        />
                        <Frame
                            text={"이전의 운동기록과 함께\n운동현황을 확인해보세요."}
                            path={"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FAboutProject%2FAbout3.jpg?alt=media&token=3e62535d-e675-4f74-b0f9-140627c71380"}
                            />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Main;
