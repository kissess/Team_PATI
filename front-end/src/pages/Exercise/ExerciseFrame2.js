import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import {
  ref,
  uploadString,
  getDownloadURL
} from 'firebase/storage';
import { firebaseInstance } from '../../firebase-config';
import Styles from './../../styles/ExerciseSelect.module.css';
import LogoButton from '../../components/LogoButton/LogoButton';
import Subtitle from '../../components/Subtitle/Subtitle';
import ExerciseInfo from '../../components/ExerciseInfo/ExerciseInfo.js';

function ExerciseFrame2() {
  const webcamRef = useRef(null);
  const [capturedVideo, setCapturedVideo] = useState(null);

  const auth = getAuth(firebaseInstance);
  const db = getFirestore(firebaseInstance);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const saveFileButton = document.getElementById("saveFile_btn");

    const handleSaveFile = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user != null) {
          user.providerData.forEach(async (profile) => {
            const result = window.confirm("파일을 저장하시겠습니까?");
            if (result) {
              await addFile(profile);
            } else {
              console.log("파일 저장 취소");
            }
          });
        } else {
          const result = window.confirm("파일을 저장하려면 로그인이 필요합니다. 로그인 후 저장하시겠습니까?");

          if (result) {
            firebaseInstance.auth().signInWithPopup(provider);
            auth.onAuthStateChanged(async (user) => {
              if (user != null) {
                console.log("파일저장 위해 로그인");
              } else {
                console.log("파일저장 위해 로그인 했지만 실패");
              }
            });
          } else {
            console.log("파일저장을 위한 로그인 취소");
          }
        }
      });
    };

    if (saveFileButton) {
      saveFileButton.addEventListener("click", handleSaveFile);
    }

    return () => {
      if (saveFileButton) {
        saveFileButton.removeEventListener("click", handleSaveFile);
      }
    };
  }, [auth]);

  async function addFile(profile) {
    if (capturedVideo) {
      const file = dataURLtoBlob(capturedVideo);
      const fileName = "captured_video.webm";

      const storageRef = ref(firebaseInstance.storage(), fileName);
      const uploadTask = uploadString(storageRef, capturedVideo, 'data_url');

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      }, (error) => {
        console.log("동영상 저장 실패", error);
      }, async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        console.log("Storage에 동영상 업로드 성공");
        console.log(downloadURL);

        const now = serverTimestamp();
        const File_id = fileName + " + " + now;

        db.collection("users").doc(profile.uid).collection("filelist").doc(File_id).set({
          File_id: fileName + " + " + now,
          Create_Date: now,
          File_Title: fileName,
          File_Url: downloadURL
        });

        alert("동영상을 성공적으로 저장하였습니다.");
      });
    } else {
      alert("먼저 동영상을 캡처하세요.");
    }
  }

  function dataURLtoBlob(dataURL) {
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const uInt8Array = new Uint8Array(raw.length);

    for (let i = 0; i < raw.length; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

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
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                  />
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
        <div className={Styles.ExerciseStartBtnBox}>
          <Link to="/Exercise/Result" className={Styles.txtd}>
            <button id="capture_btn" className={Styles.ExerciseStartBtn}>운동 시작</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ExerciseFrame2;
