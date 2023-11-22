import React, { useEffect, useState } from "react";
import firebaseInstance, { authService } from "firebase-config";

const login = () => {
  //useEffect를 통해 로그인 여부를 토글시킴
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  //소셜 로그인을 클릭했을 때에 signInWithPopup으로 로그인을 실행함
  const onSocialLogin = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "loginWithGoogle") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
  };
	
  
  useEffect(() => {
    //로그인 혹은 로그아웃 등으로 유저 정보가 바뀔 때 실행될 리스너
    authService.onAuthStateChanged((user) => {
      //user가 null이 아니면 로그인 된 것으로 판단, null이면 로그아웃 된 것으로 판단
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    });
  }, []);
  return (
    <div>
      {isLoggedIn ? (
       	//로그인 된 경우에는 로그아웃하기 버튼이 보이며, 클릭하면 auth.sighOut()메서드가 실행되어 로그아웃 됨
        <button onClick={() => authService.signOut()}>로그아웃 하기</button>
      ) : (
        <button onClick={onSocialLogin} name="loginWithGoogle">
          구글로 로그인 하기
        </button>
      )}
    </div>
  );
};

export default login;