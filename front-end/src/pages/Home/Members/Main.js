import styles from "./mainpage.module.css";
import Member from "./Member";
import Nocard from "./Nocard";

function Main() {
    return(
            <div className={styles.back}>
                <div className={styles.frame}>
                    <div className={styles.Miniframe}>
                        <div className={styles.sl}>
                            <div className={styles.ssl1}>
                                <Nocard/>
                                <Member path= {"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FMembers%2F%E1%84%8B%E1%85%B5%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%86%E1%85%B5%E1%86%AB.png?alt=media&token=e9999433-ffb3-4494-a619-0d616381ce69"} name={"이창민"} major={"심리학과"} part={"Front-end"}/>
                                <Member path= {"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FMembers%2F%E1%84%87%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A9%E1%84%8B%E1%85%B3%E1%86%AB.png?alt=media&token=785e76fc-ea55-4522-a482-aa13dd7784a1"} name={"박고은"} major={"임상의학통계전공"} part={"Front-end"}/>
                            </div>   
                            <div className={styles.ssl2}>
                                <Member path= {"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FMembers%2F%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A1%E1%86%BC.png?alt=media&token=ddf388f7-a3a3-46b5-a16d-d9791f34b5f8"} name={"윤순상"} major={"빅데이터전공"} part={"Back-end"}/>
                                <Member path= {"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FMembers%2F%E1%84%80%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A9%E1%84%8B%E1%85%B3%E1%86%AB.png?alt=media&token=b53d278b-fcf2-461c-b6af-7952b169989b"} name={"김소은"} major={"빅데이터전공"} part={"AI"}/>
                                <Member path= {"https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2FMembers%2F%E1%84%92%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%AE.png?alt=media&token=7c3ba2e1-bb7a-439b-b304-751f53b118bd"} name={"홍진우"} major={"빅데이터전공"} part={"AI"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Main;
