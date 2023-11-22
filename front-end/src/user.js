import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';

const loginFB = (id, pwd) => {
    const navigate = useNavigate;
    return function (dispatch, getState, { history }) {
  
      // 로그인 유지 (인증상태 지속성 수정)
      // 작업이 끝나고 나면 로그인을 할 것
      auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
      
        // 기존에 작성한 로그인 방법 삽입
        auth
          .signInWithEmailAndPassword(id, pwd)
          .then((user) => {
            console.log(user);
  
            dispatch(
              setUser({
                user_name: user.user.displayName,
                id: id,
                user_profile: "",
                uid : user.user.uid, // 고유값 추가 지정(signupFB에도 작업해주자)
              })
            );
            
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
  
            console.log(errorCode, errorMessage);
          });
      });
    };
  };