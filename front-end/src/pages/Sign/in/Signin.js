import logins from "../logins.module.css";
import FormTitle from "../FormTitle.js";
import Logo from "../Logo.js";
import OrIN from "./OrIN";
import { Link, useNavigate } from "react-router-dom";


import { auth } from "firebase-config";

import {
    createUserWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup, signInWithEmailAndPassword
} from "firebase/auth";



import { useState } from "react";


function Signin() {



    const navigate = useNavigate();  // useNavigate 훅을 사용하여 페이지 이동을 처리

    const [newAccount, setNewAccount] = useState(true); // 계정 유무애 따라 계정을 생성하거나 로그인
    const [userData, setUserData] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(' ');



    const toggleAccount = () => setNewAccount((prev) => !prev);

    




    // input 핸들러
    const onChange = (e) => {
        const {
            target: { name, value },
        } = e;
        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }

    };


    const onGoogleClick = async (e) => {
        const { target: { name } } = e; // const name = e.target.name;
        let provider; // Creates the provider object.

        if (name === 'google') {
            provider = new GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');

        }
        const user = await signInWithPopup(auth, provider);
        setUserData(user);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data;
        try {
            if (newAccount) (
                data = await createUserWithEmailAndPassword(auth, email, password)
            );
            else (
                data = await signInWithEmailAndPassword(auth, email, password)
            );
            setUserData(data);
            navigate('/');


        } catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                case "auth/wrong-password":
                    setError("이메일 혹은 비밀번호가 일치하지 않습니다.");
                    break;
                case "auth/email-already-in-use":
                    setError("이미 사용 중인 이메일입니다.");
                    break;
                case "auth/weak-password":
                    setError("비밀번호는 6글자 이상이어야 합니다.");
                    break;
                case "auth/network-request-failed":
                    setError("네트워크 연결에 실패 하였습니다.");
                    break;
                case "auth/invalid-email":
                    setError("잘못된 이메일 형식입니다.");
                    break;
                case "auth/internal-error":
                    setError("잘못된 요청입니다.");
                    break;
                default:
                    setError("로그인에 실패 하였습니다.");
                    break;
            }
        }
        console.log('user', userData.uid);
    };




    return (

        <div className={logins.box}>
            <Link to="/" className={logins.logo}>
                <Logo text={"PostureFlow"} />
            </Link>

            <FormTitle text={newAccount ? "회원가입" : "로그인"} />
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text" placeholder=" E-mail 주소" className={logins.input} required
                    value={email}
                    onChange={onChange} />
                <input
                    name="password"
                    value={password}
                    type="password" placeholder=" 비밀번호" className={logins.input} required
                    onChange={onChange} />
                <input className={logins.btn} type="submit" value={newAccount ? "회원가입" : "로그인"} />

            </form>
            {error}
            <div className={logins.ForSignUpBox}>
                <span onClick={toggleAccount} className={logins.ForSignUpText}>{newAccount ? "이미 계정이 있으신가요?" : "아직 계정이 없으신가요?"}</span>
                <span onClick={toggleAccount} className={logins.ForSignUp}>{newAccount ? "로그인" : "회원가입"}</span>
            </div>
            <OrIN text={"혹은"} />
            <Link to="/" className={logins.txtd}>
                <button name="google" onClick={onGoogleClick} className={logins.googleIN}>구글 계정으로 로그인하기</button>
            </Link>


        </div>
    );
}

export default Signin;