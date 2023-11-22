import logins from "../logins.module.css";
import FormTitle from "../FormTitle.js";

import Logo from "../Logo.js";
import Or from "./Or.js";
import Google from "./Google.js";
import { Link } from "react-router-dom";

import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { authService } from "firebase-config.js";
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                registerEmail,
                registerPassword
            );
            toast.success("회원가입에 성공하였습니다.",
                {
                    position:"top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick : true,
                    pauseOnHover : true,
                    progress : undefined,
                    theme : "colored",
                });
        } catch (error) {
            toast.error(error?.code);
            console.log(error.message);
        }
    };



    // const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(errors);


    return (
        <div className={logins.box}>
            <Link to="/" className={logins.logo}>
                <Logo text={"PostureFlow"} />
            </Link>

            <FormTitle text={"회원가입"} />
            <form>
                {/* <input className={logins.input} // 이름
                    type="text" placeholder="이름"
                    // {...register("name", { required: true })} 
                    /> */}

                <input className={logins.input} // 이메일
                    type="email" placeholder="E-mail 주소"
                    onChange={(e) => {
                        setRegisterEmail(e.target.value);
                    }}
                    // {...register("Email", { required: true })} 
                    />

                <input className={logins.input} // 비밀번호
                    type="password" placeholder="비밀번호"
                    onChange={(e) => {
                        setRegisterPassword(e.target.value);
                    }}
                    // {...register("password", { required: true })} 
                    />

                <button onClick={register} className={logins.btn} type="submit">회원가입</button>

                {/* console.log(submit); */}
            </form>
            <Or text={"혹은"} />
            <Google text={"구글 계정으로 회원가입하기"} />
        </div>
    )
};




export default Signup;