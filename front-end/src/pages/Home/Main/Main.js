import styles from "./mainpage.module.css";
import MainLogo from "./MainLogo";
import MainSlogon from "./MainSlogon";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase-config";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Main() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });

        return () => unsubscribe();
    }, []);


    return (
        <div className={styles.header}>
            <MainLogo text={"PostureFlow"} />
            <MainSlogon text={"Go with the Flow"} />
            <Link to={isLoggedIn ? "/Exercise/Selection" : "/login"}>
                <button className={styles.startbtn}>지금 시작하기</button>
            </Link>
        </div>

    )
}

export default Main;