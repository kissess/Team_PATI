import logins from "../logins.module.css";

function Google({text}){
    return(
        <button className={logins.google}>{text}</button>
    )
};

export default Google;