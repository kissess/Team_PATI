import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { authService, firebaseInstance, firebaseStorage } from 'firebase-config';

var auth = authService;
var user = auth.currentUser;
var provider = new firebaseInstance.auth.GoogleAuthProvider();
var db = firebaseStorage;

const webcamRef = useRef(null);  // 추가: Webcam 컴포넌트에 대한 ref
const [capturedVideo, setCapturedVideo] = useState(null);  // 추가: 캡처된 동영상을 저장할 상태

//파일 저장 버튼 리스너
document.getElementById("saveFile_btn").addEventListener("click", function () {
    auth.onAuthStateChanged(function (user) {
        if (user != null) {
            user.providerData.forEach(function (profile) {
                var result = confirm("파일을 저장하시겠습니까?");
                if (result) {
                    addFile(profile);
                }
                else {
                    //파일 저장을 취소하였을 때
                    console.log("파일 저장 취소");
                }
            });
        } else {
            var result = confirm("파일을 저장하려면 로그인이 필요합니다. 로그인 후 저장하시겠습니까?");

            if (result) {
                firebase.auth().signInWithPopup(provider);
                auth.onAuthStateChanged(function (user) {
                    if (user != null) {
                        console.log("파일저장 위해 로그인")
                    } else {
                        console.log("파일저장 위해 로그인 했지만 실패")
                    }
                });
            } else {
                console.log("파일저장을 위한 로그인 취소")
            }
        }
    })
})

function addFile(profile) {
    //업로드할 파일 선택
    if (capturedVideo) {
        const file = dataURLtoBlob(capturedVideo);

        try { var fileName = "captured_video.webm"; }  // 추가: 동영상 파일명 지정
        catch { alert("동영상을 먼저 선택해주세요."); }

        var storageRef = firebase.storage().ref(fileName);
        var uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {
            console.log("동영상 저장 실패");
        }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log("Storage에 동영상 업로드 성공");
                console.log(downloadURL);

                var now = firebase.firestore.Timestamp.fromDate(new Date());
                var File_id = fileName + " + " + now;
                db.collection("users").doc(profile.uid).collection("filelist").doc(File_id).set({
                    File_id: fileName + " + " + now,
                    Create_Date: now,
                    File_Title: fileName,
                    File_Url: downloadURL
                });

                alert("동영상을 성공적으로 저장하였습니다.");
            });
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

const captureButton = document.getElementById("capture_btn");

